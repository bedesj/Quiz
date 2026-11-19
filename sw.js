// 포켓몬 퀴즈 대모험 — 오프라인 지원 PWA Service Worker (PWABuilder & Android WebAPK 규격 호환)
const SHELL_CACHE = "poke-quiz-shell-v3";
const RUNTIME_CACHE = "poke-quiz-runtime-v3";
const MAX_RUNTIME_ITEMS = 350;

const APP_SHELL_FILES = [
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./data/theme_assets.js",
  "./data/pokemon.js",
  "./data/evolutions.js",
  "./data/questions.js",
  "./data/visual_templates.js",
  "./data/hanja_strokes.js",
  "./js/audio.js",
  "./js/game.js",
  "./icons/favicon-32.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];

async function precacheShellFiles() {
  const cache = await caches.open(SHELL_CACHE);
  const batchSize = 4;
  for (let i = 0; i < APP_SHELL_FILES.length; i += batchSize) {
    const chunk = APP_SHELL_FILES.slice(i, i + batchSize);
    await Promise.all(
      chunk.map(async function (urlStr) {
        const res = await fetch(urlStr, { cache: "no-cache" });
        if (res && res.ok) {
          await cache.put(urlStr, res);
        }
      })
    );
  }
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    precacheShellFiles().then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== SHELL_CACHE && key !== RUNTIME_CACHE) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function trimCache(cacheName, maxItems) {
  caches.open(cacheName).then(function (cache) {
    cache.keys().then(function (keys) {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(function () {
          trimCache(cacheName, maxItems);
        });
      }
    });
  });
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // 1) 페이지 탐색(Navigation) 요청(단축 아이콘 ?action=... 포함): 네트워크 우선 시도 후 오프라인이면 캐시된 index.html 반환
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (networkRes) {
        if (networkRes && networkRes.status === 200) {
          var copy = networkRes.clone();
          caches.open(SHELL_CACHE).then(function (cache) { cache.put("./index.html", copy); });
        }
        return networkRes;
      }).catch(function () {
        return caches.match("./index.html", { ignoreSearch: true });
      })
    );
    return;
  }

  // 2) 동일 출처(앱 셸 CSS/JS/아이콘): 캐시 우선 + 백그라운드 최신화(Stale-While-Revalidate)
  if (url.origin === self.location.origin) {
    var lookupTarget = url.pathname.endsWith("/") ? "./index.html" : req;
    event.respondWith(
      caches.match(lookupTarget, { ignoreSearch: true }).then(function (cached) {
        var netFetch = fetch(req).then(function (netRes) {
          if (netRes && netRes.status === 200) {
            var clone = netRes.clone();
            caches.open(SHELL_CACHE).then(function (cache) { cache.put(lookupTarget, clone); });
          }
          return netRes;
        }).catch(function () {
          return cached || new Response("", { status: 504, statusText: "Offline" });
        });
        return cached || netFetch;
      })
    );
    return;
  }

  // 3) 외부 CDN 에셋(포켓몬 HOME 3D PNG, 3D .glb 모델, 한글 웹폰트): 한 번 불러오면 런타임 캐시에 보관해 오프라인에서도 재사용!
  var isCdnAsset = (
    url.hostname.indexOf("jsdelivr.net") !== -1 ||
    url.hostname.indexOf("githubusercontent.com") !== -1 ||
    url.hostname.indexOf("unpkg.com") !== -1 ||
    url.hostname.indexOf("googleapis.com") !== -1 ||
    url.hostname.indexOf("gstatic.com") !== -1
  );
  if (isCdnAsset) {
    event.respondWith(
      caches.match(req).then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (netRes) {
          if (netRes && (netRes.status === 200 || netRes.type === "opaque")) {
            var copy = netRes.clone();
            caches.open(RUNTIME_CACHE).then(function (cache) {
              cache.put(req, copy);
              trimCache(RUNTIME_CACHE, MAX_RUNTIME_ITEMS);
            });
          }
          return netRes;
        }).catch(function () {
          return new Response("", { status: 504, statusText: "Offline" });
        });
      })
    );
  }
});
