// 포켓몬 퀴즈 대모험 — 완전 오프라인 구동 대응 PWA Service Worker v6
// 3) 앱 파일(index.html·js·css·data)은 인터넷이 되면 항상 새 파일을 먼저 받고, 안 될 때만 저장해 둔 파일을 쓴다
// 1) 로컬 ./sprites/ 폴더에 사전 다운로드된 1,025마리 도감 이미지 최우선 캐시·서빙
// 2) POKE_SPRITE_CACHE ('poke-sprites-v1') 영구 보관함 보존
const SHELL_CACHE = "poke-quiz-shell-v6";
const POKE_SPRITE_CACHE = "poke-sprites-v1";
const RUNTIME_CACHE = "poke-quiz-runtime-v6";
const MAX_RUNTIME_ITEMS = 400;
const NETWORK_WAIT_MS = 6000;   // 이 시간 안에 새 파일이 안 오면 저장해 둔 파일로 먼저 연다

const APP_SHELL_FILES = [
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./data/theme_assets.js",
  "./data/offline_sprites_bundle.js",
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
        try {
          const res = await fetch(urlStr, { cache: "no-cache" });
          if (res && res.ok) {
            await cache.put(urlStr, res);
          }
        } catch (e) {}
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
          if (key !== SHELL_CACHE && key !== POKE_SPRITE_CACHE && key !== RUNTIME_CACHE) {
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

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// 앱 파일: 새 파일 먼저(network-first). 오프라인이거나 너무 느리면 저장해 둔 파일로 대신한다.
// 예전에는 저장해 둔 파일을 먼저 써서, 업데이트 직후 새 index.html 과 예전 game.js 가 섞여 화면이 깨졌다.
function networkFirstShell(req, lookupTarget) {
  return new Promise(function (resolve) {
    var settled = false;
    function fromCache() { return caches.match(lookupTarget, { ignoreSearch: true }); }
    var timer = setTimeout(function () {
      fromCache().then(function (cached) {
        if (cached && !settled) { settled = true; resolve(cached); }
      });
    }, NETWORK_WAIT_MS);
    fetch(req.url, { cache: "no-cache" }).then(function (netRes) {
      if (netRes && netRes.status === 200) {
        var clone = netRes.clone();
        caches.open(SHELL_CACHE).then(function (cache) { cache.put(lookupTarget, clone); });
      }
      if (!settled) { settled = true; clearTimeout(timer); resolve(netRes); }
    }).catch(function () {
      clearTimeout(timer);
      if (settled) return;
      fromCache().then(function (cached) {
        settled = true;
        resolve(cached || new Response("", { status: 504, statusText: "Offline" }));
      });
    });
  });
}

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

function isPokemonSpriteUrl(url) {
  var p = url.pathname || "";
  return (
    p.indexOf("/sprites/") !== -1 ||
    p.indexOf("/PokeAPI/sprites") !== -1 ||
    p.indexOf("/pokesprite-images") !== -1 ||
    p.indexOf("/pokeapi-sprites") !== -1 ||
    p.indexOf("/mock-sprites/") !== -1
  );
}

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req.url, { cache: "no-cache" }).then(function (networkRes) {
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

  // 로컬 ./sprites/ 및 외부 포켓몬 도감 이미지: 영구 보관함(POKE_SPRITE_CACHE) 우선 조회
  if (isPokemonSpriteUrl(url)) {
    event.respondWith(
      caches.open(POKE_SPRITE_CACHE).then(function (spriteCache) {
        return spriteCache.match(req.url, { ignoreSearch: true }).then(function (cached) {
          if (cached) return cached;
          var fetchReq = url.origin === self.location.origin
            ? req
            : new Request(req.url, { mode: "cors", credentials: "omit" });
          return fetch(fetchReq).then(function (netRes) {
            if (netRes && netRes.status === 200) {
              spriteCache.put(req.url, netRes.clone());
            }
            return netRes;
          }).catch(function () {
            return new Response("", { status: 504, statusText: "Offline" });
          });
        });
      })
    );
    return;
  }

  if (url.origin === self.location.origin) {
    var lookupTarget = url.pathname.endsWith("/") ? "./index.html" : req;
    event.respondWith(networkFirstShell(req, lookupTarget));
    return;
  }

  var isCdnAsset = (
    url.hostname.indexOf("jsdelivr.net") !== -1 ||
    url.hostname.indexOf("githubusercontent.com") !== -1 ||
    url.hostname.indexOf("unpkg.com") !== -1 ||
    url.hostname.indexOf("googleapis.com") !== -1 ||
    url.hostname.indexOf("gstatic.com") !== -1
  );
  if (isCdnAsset) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then(function (rtCache) {
        return rtCache.match(req, { ignoreSearch: true }).then(function (cached) {
          if (cached) return cached;
          return fetch(req).then(function (netRes) {
            if (netRes && (netRes.status === 200 || netRes.type === "opaque")) {
              rtCache.put(req, netRes.clone());
              trimCache(RUNTIME_CACHE, MAX_RUNTIME_ITEMS);
            }
            return netRes;
          }).catch(function () {
            return new Response("", { status: 504, statusText: "Offline" });
          });
        });
      })
    );
  }
});
