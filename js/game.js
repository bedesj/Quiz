// 포켓몬 퀴즈 대모험 - 메인 게임 엔진
// (포켓몬 애니메이션 오픈형 시작 화면 · 원형 출석 도장 모달 · 과목별 단원 학습 수준 화면 · 4열 성취도 대시보드 · HOME 3D & 3D 뷰어 · 동적 SVG 교구)
(function () {
  var LEGACY_STORAGE_KEY = "poke_quiz_save_v1";
  var STORAGE_KEY = "poke_quiz_save_v2";
  var DEX_PAGE_CHUNK = 120;
  var REVIEW_INTERVAL_DAYS = [1, 3, 7, 14];

  var DEFAULT_UNIT_INDEX = {
    korean: 0,  // 한글 놀이 (k0)
    math: 0,    // 1. 9까지의 수 (m1)
    english: 0, // 1. 알파벳 Aa~Dd (e1)
    hanja: 0    // 1. 수 (h1)
  };

  var STAGE_PRESET_DEFS = {
    starter: {
      id: "starter",
      title: "처음부터",
      desc: "한글과 수를 처음 배워요",
      unitIdx: { korean: 0, math: 0, english: 0, hanja: 0 },
      creativeDiff: "easy"
    },
    basic: {
      id: "basic",
      title: "기초를 아는 수준",
      desc: "받침 없는 글자와 9까지의 수를 알아요",
      unitIdx: { korean: 2, math: 2, english: 2, hanja: 1 },
      creativeDiff: "normal"
    },
    advanced: {
      id: "advanced",
      title: "앞서 있는 수준",
      desc: "낱말을 읽고 9까지 더하고 뺄 수 있어요",
      unitIdx: { korean: 5, math: 4, english: 6, hanja: 4 },
      creativeDiff: "hard"
    }
  };

  var CREATIVE_DIFF_TIERS = {
    easy: 2,
    normal: 5,
    hard: 9
  };

  var state = {
    version: 2,
    screen: "title", // 'title' | 'level' | 'progress' | 'region' | 'field' | 'battle' | 'pokedex'
    previousScreen: "title",
    regionId: "forest",
    caught: {},
    stamps: [],
    justStampedToday: false,
    soundOn: true,
    voiceMode: "parent", // 'parent' | 'touch' | 'auto'
    shinyMode: "kid",
    presetId: "starter", // 'starter' | 'basic' | 'advanced' | 'custom'
    subjectUnitIdx: {
      korean: 0,
      math: 0,
      english: 0,
      hanja: 0
    },
    creativeDiff: "easy", // 'easy' | 'normal' | 'hard'
    subjectTiers: {
      korean: 2,
      math: 2,
      english: 2,
      creative: 2,
      hanja: 2
    },
    unitStatus: {}, // { "k0": "completed" | "checked" | "parent_passed" }
    knownHanja: [], // ["一", "二", ...]
    hanjaEnabled: true,
    creativeEnabled: true,
    fleePenaltyOn: false,
    attempts: [],
    reviewQueue: {},
    typeMastery: {},
    shinyBoostBattles: 0,
    pokedexFilter: "all",
    pokedexGen: 0,
    normalBattlesSinceGold: 0,
    recentQuestionIds: [],
    evoCandy: 6,
    evoStones: 1,
    interactiveInputsOn: true,
    routineActive: false,
    dailyRoutine: {
      date: "",
      altSubject: "english",
      solved: { korean: 0, math: 0, english: 0, hanja: 0, creative: 0 },
      rewarded: false
    },
    lastBattleCandyGain: 0,
    lastBattleStoneGain: 0,
    forceShinyNext: false,
    forceVisualSubj: "",
    forceInputTypeNext: "", // 'numpad' | 'hangul_assemble' | 'hanja_trace'
    forcedBattleUnit: null // { subject, unitId }
  };

  var interactiveState = {
    numpadValue: "",
    assembledIndices: [],
    traceStrokeIdx: 0,
    traceDrawing: false,
    traceCurrentPts: [],
    traceTapStartOk: false,
    traceCompleted: false
  };

  var dexRenderState = {
    filteredList: [],
    renderedCount: 0
  };

  var modalState = {
    pokemon: null,
    showingShiny: false,
    showing3d: false,
    viewerLoadState: "idle",
    svgPreviewIdx: -1,
    actionSubject: "",
    actionUnitIdx: 0
  };

  var checkQuizState = {
    active: false,
    subject: "korean",
    items: [],
    index: 0,
    passedUnits: []
  };

  var netState = {
    rawGitHub: "unknown",
    jsdelivr: "unknown",
    pokeApi: "unknown",
    slugsLoaded: false,
    consecutiveTotalFailures: 0
  };

  var POKESPRITE_SLUGS = {};
  var POKEAPI_SPRITE_CACHE = {};
  var DATA_URI_CACHE = {};
  var fetchBridgeFailures = 0;
  var imageReqSeq = 0;
  var modelViewerCallbacks = [];
  var deferredInstallPrompt = null;
  var swRegistrationState = "idle";

  var field = {
    canvas: null,
    ctx: null,
    width: 800,
    height: 500,
    dpr: 1,
    rafId: null,
    timerId: null,
    lastTs: 0,
    player: {
      x: 400,
      y: 260,
      r: 22,
      speed: 240,
      targetX: null,
      targetY: null,
      targetBall: null,
      facing: 1,
      walkPhase: 0,
      moving: false
    },
    pointerDown: false,
    keys: {},
    balls: [],
    scenery: []
  };

  var battle = {
    active: false,
    isGold: false,
    isReview: false,
    isShiny: false,
    pokemon: null,
    hearts: 3,
    stage: "silhouette",
    currentChoiceList: [],
    currentAnswer: "",
    disabledIndices: [],
    quizzes: [],
    quizIndex: 0,
    hadWrongOnCurrentQuiz: false,
    locked: false,
    timers: []
  };

  var POKEMON_BY_ID = {};
  for (var idx = 0; idx < window.POKEMON_DATA.length; idx++) {
    var pItem = window.POKEMON_DATA[idx];
    POKEMON_BY_ID[pItem.id] = pItem;
  }

  var QUESTION_BY_ID = {};
  var ALL_STATIC_QUESTIONS = [];
  (function indexQuestions() {
    var cats = Object.keys(window.QUIZ_BANK || {});
    for (var c = 0; c < cats.length; c++) {
      var list = window.QUIZ_BANK[cats[c]] || [];
      for (var i = 0; i < list.length; i++) {
        var q = list[i];
        if (q && q.id && !QUESTION_BY_ID[q.id]) {
          QUESTION_BY_ID[q.id] = q;
          ALL_STATIC_QUESTIONS.push(q);
        }
      }
    }
  })();

  // ---------------- 단원 ↔ 티어 동기화 헬퍼 ----------------
  function syncTiersFromUnits() {
    var unitsMap = window.SUBJECT_UNITS || {};
    var subjs = ["korean", "math", "english", "hanja"];
    for (var i = 0; i < subjs.length; i++) {
      var sk = subjs[i];
      var uList = unitsMap[sk] || [];
      var uIdx = Math.max(0, Math.min(uList.length - 1, Number(state.subjectUnitIdx[sk]) || 0));
      state.subjectUnitIdx[sk] = uIdx;
      if (uList[uIdx]) {
        // 첫 단원(k0, m1, e1, h1)일 때도 입문 Tier 1~2가 골고루 나오도록 최소 2 보장(50 초과 연산은 Tier 9~10이므로 안전)
        state.subjectTiers[sk] = Math.max(2, uList[uIdx].tier || 2);
      }
    }
    state.subjectTiers.creative = CREATIVE_DIFF_TIERS[state.creativeDiff] || 5;
  }

  function findUnitIdxForTier(subj, tierVal) {
    var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[subj]) || [];
    var best = 0;
    for (var i = 0; i < uList.length; i++) {
      if ((uList[i].tier || 1) <= tierVal) {
        best = i;
      }
    }
    return best;
  }

  function applyAnimeThemeBackgrounds() {
    if (!window.THEME_ASSETS) return;
    var titleScreen = document.getElementById("screen-title");
    if (titleScreen && window.THEME_ASSETS.titleBg) {
      titleScreen.style.backgroundImage = 'url("' + window.THEME_ASSETS.titleBg + '")';
    }
    var battleScreen = document.getElementById("screen-battle");
    if (battleScreen && window.THEME_ASSETS.battleBg) {
      battleScreen.style.backgroundImage = 'url("' + window.THEME_ASSETS.battleBg + '")';
    }
  }

  // ---------------- 유틸리티 & 저장소 ----------------
  function getTodayLocalStr() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function addDaysLocalStr(baseIso, days) {
    var parts = String(baseIso || getTodayLocalStr()).split("-");
    var d = parts.length === 3
      ? new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
      : new Date();
    d.setDate(d.getDate() + Number(days || 0));
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function formatShortDate(iso) {
    var parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    return Number(parts[1]) + "/" + Number(parts[2]);
  }

  function generateUuid() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return window.crypto.randomUUID();
    }
    return "att_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
  }

  function padDexNum(id) {
    return "#" + String(id).padStart(4, "0");
  }

  function shuffle(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i];
      copy[i] = copy[j];
      copy[j] = t;
    }
    return copy;
  }

  function pushUnique(list, url) {
    if (url && typeof url === "string" && list.indexOf(url) === -1) {
      list.push(url);
    }
  }

  function applySavedPayload(parsed) {
    if (!parsed || typeof parsed !== "object") return;
    if (parsed.caught && typeof parsed.caught === "object") state.caught = parsed.caught;
    if (Array.isArray(parsed.stamps)) state.stamps = parsed.stamps;
    if (typeof parsed.soundOn === "boolean") state.soundOn = parsed.soundOn;
    if (parsed.voiceMode && (parsed.voiceMode === "parent" || parsed.voiceMode === "touch" || parsed.voiceMode === "auto")) {
      state.voiceMode = parsed.voiceMode;
    }
    if (parsed.shinyMode && window.SHINY_MODES && window.SHINY_MODES[parsed.shinyMode]) {
      state.shinyMode = parsed.shinyMode;
    }
    if (parsed.presetId && typeof parsed.presetId === "string") {
      state.presetId = parsed.presetId;
    }
    if (parsed.subjectTiers && typeof parsed.subjectTiers === "object") {
      var subjs = ["korean", "math", "english", "creative", "hanja"];
      for (var i = 0; i < subjs.length; i++) {
        var sk = subjs[i];
        var tv = Number(parsed.subjectTiers[sk]);
        if (tv >= 1 && tv <= 10) state.subjectTiers[sk] = Math.round(tv);
      }
    }
    if (parsed.subjectUnitIdx && typeof parsed.subjectUnitIdx === "object") {
      var uSubjs = ["korean", "math", "english", "hanja"];
      for (var u = 0; u < uSubjs.length; u++) {
        var uk = uSubjs[u];
        if (typeof parsed.subjectUnitIdx[uk] === "number") {
          state.subjectUnitIdx[uk] = Math.max(0, Math.floor(parsed.subjectUnitIdx[uk]));
        }
      }
    } else if (parsed.subjectTiers) {
      state.subjectUnitIdx.korean = findUnitIdxForTier("korean", state.subjectTiers.korean);
      state.subjectUnitIdx.math = findUnitIdxForTier("math", state.subjectTiers.math);
      state.subjectUnitIdx.english = findUnitIdxForTier("english", state.subjectTiers.english);
      state.subjectUnitIdx.hanja = findUnitIdxForTier("hanja", state.subjectTiers.hanja);
    }
    if (parsed.creativeDiff && CREATIVE_DIFF_TIERS[parsed.creativeDiff]) {
      state.creativeDiff = parsed.creativeDiff;
    }
    if (parsed.unitStatus && typeof parsed.unitStatus === "object") {
      state.unitStatus = parsed.unitStatus;
    }
    if (Array.isArray(parsed.knownHanja)) {
      state.knownHanja = parsed.knownHanja;
    }
    if (typeof parsed.hanjaEnabled === "boolean") state.hanjaEnabled = parsed.hanjaEnabled;
    if (typeof parsed.creativeEnabled === "boolean") state.creativeEnabled = parsed.creativeEnabled;
    if (typeof parsed.fleePenaltyOn === "boolean") state.fleePenaltyOn = parsed.fleePenaltyOn;
    if (Array.isArray(parsed.attempts)) state.attempts = parsed.attempts;
    if (parsed.reviewQueue && typeof parsed.reviewQueue === "object") state.reviewQueue = parsed.reviewQueue;
    if (parsed.typeMastery && typeof parsed.typeMastery === "object") state.typeMastery = parsed.typeMastery;
    if (typeof parsed.shinyBoostBattles === "number" && parsed.shinyBoostBattles >= 0) {
      state.shinyBoostBattles = Math.floor(parsed.shinyBoostBattles);
    }
    if (typeof parsed.evoCandy === "number" && parsed.evoCandy >= 0) {
      state.evoCandy = Math.floor(parsed.evoCandy);
    }
    if (typeof parsed.evoStones === "number" && parsed.evoStones >= 0) {
      state.evoStones = Math.floor(parsed.evoStones);
    }
    if (typeof parsed.interactiveInputsOn === "boolean") {
      state.interactiveInputsOn = parsed.interactiveInputsOn;
    }
    if (typeof parsed.routineActive === "boolean") {
      state.routineActive = parsed.routineActive;
    }
    if (parsed.dailyRoutine && typeof parsed.dailyRoutine === "object") {
      state.dailyRoutine = parsed.dailyRoutine;
    }
    syncTiersFromUnits();
  }

  function loadState() {
    var loadedV2 = false;
    try {
      var rawV2 = window.localStorage.getItem(STORAGE_KEY);
      if (rawV2) {
        applySavedPayload(JSON.parse(rawV2));
        loadedV2 = true;
      }
    } catch (e) {}

    if (!loadedV2) {
      try {
        var rawV1 = window.localStorage.getItem(LEGACY_STORAGE_KEY);
        if (rawV1) {
          applySavedPayload(JSON.parse(rawV1));
          loadedV2 = true;
          saveState();
        }
      } catch (e1) {}
    }

    if (!loadedV2) {
      try {
        if (window.name && window.name.indexOf(STORAGE_KEY + ":") === 0) {
          applySavedPayload(JSON.parse(window.name.slice((STORAGE_KEY + ":").length)));
        } else if (window.name && window.name.indexOf(LEGACY_STORAGE_KEY + ":") === 0) {
          applySavedPayload(JSON.parse(window.name.slice((LEGACY_STORAGE_KEY + ":").length)));
          saveState();
        }
      } catch (e2) {}
    }
  }

  function buildSerializableState() {
    return {
      version: 2,
      caught: state.caught,
      stamps: state.stamps,
      soundOn: state.soundOn,
      voiceMode: state.voiceMode,
      shinyMode: state.shinyMode,
      presetId: state.presetId,
      subjectUnitIdx: state.subjectUnitIdx,
      creativeDiff: state.creativeDiff,
      subjectTiers: state.subjectTiers,
      unitStatus: state.unitStatus,
      knownHanja: state.knownHanja,
      hanjaEnabled: state.hanjaEnabled,
      creativeEnabled: state.creativeEnabled,
      fleePenaltyOn: state.fleePenaltyOn,
      attempts: state.attempts.slice(-1500),
      reviewQueue: state.reviewQueue,
      typeMastery: state.typeMastery,
      shinyBoostBattles: state.shinyBoostBattles,
      evoCandy: state.evoCandy,
      evoStones: state.evoStones,
      interactiveInputsOn: state.interactiveInputsOn,
      routineActive: state.routineActive,
      dailyRoutine: state.dailyRoutine
    };
  }

  function saveState() {
    var serialized = JSON.stringify(buildSerializableState());
    try { window.localStorage.setItem(STORAGE_KEY, serialized); } catch (e) {}
    try { window.name = STORAGE_KEY + ":" + serialized; } catch (e2) {}
  }

  function resetSaveData() {
    state.caught = {};
    state.stamps = [];
    state.soundOn = true;
    state.voiceMode = "parent";
    state.shinyMode = "kid";
    state.presetId = "starter";
    state.subjectUnitIdx = { korean: 0, math: 0, english: 0, hanja: 0 };
    state.creativeDiff = "easy";
    state.subjectTiers = { korean: 2, math: 2, english: 2, creative: 2, hanja: 2 };
    state.unitStatus = {};
    state.knownHanja = [];
    state.hanjaEnabled = true;
    state.creativeEnabled = true;
    state.fleePenaltyOn = false;
    state.attempts = [];
    state.reviewQueue = {};
    state.typeMastery = {};
    state.shinyBoostBattles = 0;
    state.evoCandy = 6;
    state.evoStones = 1;
    state.interactiveInputsOn = true;
    state.routineActive = false;
    state.dailyRoutine = {
      date: "",
      altSubject: "english",
      solved: { korean: 0, math: 0, english: 0, hanja: 0, creative: 0 },
      rewarded: false
    };
    ensureTodayRoutine();
    window.SoundFX.setVoiceMode("parent");
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    try { window.localStorage.removeItem(LEGACY_STORAGE_KEY); } catch (e1) {}
    try { window.name = ""; } catch (e2) {}
  }

  // ---------------- 학습 시도 기록 & 단원 완료 · 간격 복습 ----------------
  function countUnitCorrect(subj, unitId) {
    var seen = {};
    for (var i = 0; i < state.attempts.length; i++) {
      var a = state.attempts[i];
      if (a.correct && a.subject === subj && a.unit === unitId) {
        seen[a.qid] = true;
      }
    }
    return Object.keys(seen).length;
  }

  function getUnitTargetCount(subj, unitId) {
    var cnt = ALL_STATIC_QUESTIONS.filter(function (q) {
      return (q.subject || q.category) === subj && q.unit === unitId;
    }).length;
    return Math.max(12, cnt);
  }

  function recordQuizAttempt(q, isCorrect, isReviewAttempt) {
    if (!q) return;
    var today = getTodayLocalStr();
    var entry = {
      uuid: generateUuid(),
      ts: Date.now(),
      date: today,
      qid: q.id,
      seed: q.seed || null,
      templateId: q.templateId || null,
      subject: q.subject || q.category || "korean",
      unit: q.unit || "",
      tier: q.tier || 2,
      domain: q.domain || "",
      pokeType: q.pokeType || "",
      correct: !!isCorrect,
      review: !!isReviewAttempt
    };
    state.attempts.push(entry);
    if (state.attempts.length > 1500) {
      state.attempts = state.attempts.slice(-1500);
    }

    // 단원 내 문제를 충분히 맞히면 자동으로 '✅ 풀어서 마침' 기록 & 다음 단원 전진!
    if (isCorrect && q.unit && window.SUBJECT_UNITS && window.SUBJECT_UNITS[entry.subject]) {
      var solvedCnt = countUnitCorrect(entry.subject, q.unit);
      if (solvedCnt >= 10 && !state.unitStatus[q.unit]) {
        state.unitStatus[q.unit] = "completed";
        state.evoStones += 1;
        state.evoCandy += 3;
        state.lastBattleStoneGain += 1;
        var uList = window.SUBJECT_UNITS[entry.subject];
        var curIdx = state.subjectUnitIdx[entry.subject] || 0;
        if (uList[curIdx] && uList[curIdx].id === q.unit && curIdx + 1 < uList.length) {
          state.subjectUnitIdx[entry.subject] = curIdx + 1;
          syncTiersFromUnits();
        }
      }
    }

    var qKey = q.seed ? ("dyn_" + (q.templateId || "eq") + "_" + q.tier + "_" + q.seed) : String(q.id);
    var existing = state.reviewQueue[qKey];

    if (!isCorrect) {
      state.reviewQueue[qKey] = {
        key: qKey,
        qid: q.id,
        seed: q.seed || null,
        templateId: q.templateId || null,
        tier: q.tier || 2,
        subject: q.subject || q.category || "math",
        stage: 1,
        dueDate: addDaysLocalStr(today, REVIEW_INTERVAL_DAYS[0]),
        lastWrongDate: today,
        wrongCount: existing ? (existing.wrongCount || 0) + 1 : 1,
        graduated: false,
        snapshot: q.seed ? null : {
          id: q.id,
          subject: q.subject,
          category: q.category,
          unit: q.unit,
          tier: q.tier,
          domain: q.domain,
          pokeType: q.pokeType,
          format: q.format || "choice",
          question: q.question,
          choices: q.choices ? q.choices.slice() : [],
          answer: q.answer,
          hint: q.hint || "",
          ttsKo: q.ttsKo || "",
          ttsEn: q.ttsEn || ""
        }
      };
    } else if (isReviewAttempt && existing && !existing.graduated) {
      var nextStage = (existing.stage || 1) + 1;
      if (nextStage > REVIEW_INTERVAL_DAYS.length) {
        existing.graduated = true;
        existing.stage = REVIEW_INTERVAL_DAYS.length;
        existing.dueDate = "";
      } else {
        existing.stage = nextStage;
        existing.dueDate = addDaysLocalStr(today, REVIEW_INTERVAL_DAYS[nextStage - 1]);
      }
    }

    if (isCorrect && q.pokeType) {
      var gain = q.isSynergy ? 1.5 : 1;
      state.typeMastery[q.pokeType] = Number(((state.typeMastery[q.pokeType] || 0) + gain).toFixed(1));
    }

    if (isCorrect) {
      var candyAdd = q.isSynergy ? 2 : 1;
      state.evoCandy += candyAdd;
      state.lastBattleCandyGain += candyAdd;
      recordRoutineSubjectSolved(entry.subject);
    }

    saveState();
  }

  // ---------------- 일일 25~30분 학습 루틴 관리 ----------------
  var ROUTINE_TARGETS = { korean: 5, math: 5, alt: 4 };

  function ensureTodayRoutine() {
    var today = getTodayLocalStr();
    if (!state.dailyRoutine || state.dailyRoutine.date !== today) {
      var defaultAlt = (state.hanjaEnabled && state.stamps.length % 2 === 0) ? "hanja" : "english";
      state.dailyRoutine = {
        date: today,
        altSubject: defaultAlt,
        solved: { korean: 0, math: 0, english: 0, hanja: 0, creative: 0 },
        rewarded: false
      };
    }
    if (!state.hanjaEnabled && state.dailyRoutine.altSubject === "hanja") {
      state.dailyRoutine.altSubject = "english";
    }
    if (!state.dailyRoutine.solved) {
      state.dailyRoutine.solved = { korean: 0, math: 0, english: 0, hanja: 0, creative: 0 };
    }
    return state.dailyRoutine;
  }

  function getRoutineSummary() {
    var r = ensureTodayRoutine();
    var altKey = r.altSubject || "english";
    var kDone = Math.min(ROUTINE_TARGETS.korean, r.solved.korean || 0);
    var mDone = Math.min(ROUTINE_TARGETS.math, r.solved.math || 0);
    var aDone = Math.min(ROUTINE_TARGETS.alt, r.solved[altKey] || 0);
    var totalDone = kDone + mDone + aDone;
    var totalTarget = ROUTINE_TARGETS.korean + ROUTINE_TARGETS.math + ROUTINE_TARGETS.alt;
    return {
      altSubject: altKey,
      kDone: kDone,
      mDone: mDone,
      aDone: aDone,
      totalDone: totalDone,
      totalTarget: totalTarget,
      completed: totalDone >= totalTarget,
      rewarded: !!r.rewarded
    };
  }

  function recordRoutineSubjectSolved(subj) {
    var r = ensureTodayRoutine();
    if (r.solved[subj] === undefined) r.solved[subj] = 0;
    r.solved[subj] += 1;
    var sum = getRoutineSummary();
    if (sum.completed && !r.rewarded) {
      r.rewarded = true;
      state.evoStones += 1;
      state.evoCandy += 5;
      state.lastBattleStoneGain += 1;
      state.lastBattleCandyGain += 5;
      state.shinyBoostBattles = Math.max(state.shinyBoostBattles, 3);
    }
  }

  function pickNextRoutineSubject() {
    var r = ensureTodayRoutine();
    var altKey = r.altSubject || "english";
    var needs = [];
    if ((r.solved.korean || 0) < ROUTINE_TARGETS.korean) needs.push("korean");
    if ((r.solved.math || 0) < ROUTINE_TARGETS.math) needs.push("math");
    if ((r.solved[altKey] || 0) < ROUTINE_TARGETS.alt) needs.push(altKey);
    if (needs.length === 0) return null;
    return needs[Math.floor(Math.random() * needs.length)];
  }

  function openRoutineModal() {
    window.SoundFX.click();
    renderRoutineModal();
    document.getElementById("routine-modal").classList.remove("hidden");
  }

  function closeRoutineModal() {
    document.getElementById("routine-modal").classList.add("hidden");
  }

  function renderRoutineModal() {
    var sum = getRoutineSummary();
    document.getElementById("routine-complete-banner").classList.toggle("hidden", !sum.completed);
    var altMeta = sum.altSubject === "hanja"
      ? { key: "hanja", title: "漢 한자 (오늘의 격일 과목)", desc: "8급 한자 뜻·음 및 화선지 획순 따라쓰기" }
      : { key: "english", title: "🔤 영어 (오늘의 격일 과목)", desc: "알파벳·파닉스 원어 발음 및 기초 표현" };

    var rows = [
      { key: "korean", title: "📝 국어 (매일 주력)", desc: "자모·받침 3조각 한글 조합 및 낱말·문장", done: sum.kDone, target: ROUTINE_TARGETS.korean },
      { key: "math", title: "🔢 수학 (매일 주력)", desc: "동적 시각 교구 및 화면 숫자 패드 연산", done: sum.mDone, target: ROUTINE_TARGETS.math },
      { key: altMeta.key, title: altMeta.title, desc: altMeta.desc, done: sum.aDone, target: ROUTINE_TARGETS.alt }
    ];

    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var it = rows[i];
      var isDone = it.done >= it.target;
      html +=
        '<div class="routine-subj-row' + (isDone ? " done" : "") + '">' +
        '<div class="routine-subj-left">' +
        '<div class="routine-subj-title">' + (isDone ? "✅ " : "▶ ") + it.title + "</div>" +
        '<div class="routine-subj-desc">' + it.desc + "</div>" +
        "</div>" +
        '<div class="routine-subj-prog">' + it.done + " / " + it.target + "문항</div>" +
        "</div>";
    }
    var dueRev = getActiveReviewEntries(true).length;
    html +=
      '<div class="routine-subj-row' + (dueRev === 0 ? " done" : "") + '">' +
      '<div class="routine-subj-left">' +
      '<div class="routine-subj-title">🌈 간격 복습 & 💡 창의력 보너스</div>' +
      '<div class="routine-subj-desc">오늘 도래한 복습 문제 ' + dueRev + '개 · 보유 보상 🍬' + state.evoCandy + ' · 💎' + state.evoStones + "</div>" +
      "</div>" +
      '<div class="routine-subj-prog">' + (dueRev > 0 ? ("복습 " + dueRev + "개") : "완료!") + "</div>" +
      "</div>";

    document.getElementById("routine-subject-cards").innerHTML = html;
    document.getElementById("btn-routine-toggle-mode").textContent =
      state.routineActive ? "🎯 루틴 집중 출제: 켜짐" : "🎯 루틴 집중 출제: 꺼짐";
  }

  // ---------------- 포켓몬 진화 계통 헬퍼 ----------------
  function getNextEvolutions(pokeId) {
    var map = window.POKEMON_EVOLUTIONS || {};
    return map[String(pokeId)] || [];
  }

  function canPokemonEvolveNow(pokeId) {
    if (!isCaught(pokeId)) return false;
    var nextList = getNextEvolutions(pokeId);
    if (nextList.length === 0) return false;
    for (var i = 0; i < nextList.length; i++) {
      var ev = nextList[i];
      var canAfford = ev.stone > 0
        ? (state.evoStones >= ev.stone || state.evoCandy >= ev.candy + 1)
        : (state.evoCandy >= ev.candy);
      if (canAfford && !isCaught(ev.to)) return true;
    }
    for (var j = 0; j < nextList.length; j++) {
      var ev2 = nextList[j];
      var ok2 = ev2.stone > 0
        ? (state.evoStones >= ev2.stone || state.evoCandy >= ev2.candy + 1)
        : (state.evoCandy >= ev2.candy);
      if (ok2) return true;
    }
    return false;
  }

  function getEvolvableCaughtCount() {
    var keys = Object.keys(state.caught);
    var cnt = 0;
    for (var i = 0; i < keys.length; i++) {
      if (canPokemonEvolveNow(Number(keys[i]))) cnt += 1;
    }
    return cnt;
  }

  function collectEvolutionFamilyIds(pokeId) {
    var rootId = (typeof window.getEvolutionRootId === "function") ? window.getEvolutionRootId(pokeId) : Number(pokeId);
    var visited = [];
    function dfs(curr) {
      if (visited.indexOf(curr) !== -1) return;
      visited.push(curr);
      var nexts = getNextEvolutions(curr);
      for (var i = 0; i < nexts.length; i++) dfs(nexts[i].to);
    }
    dfs(rootId);
    return visited;
  }

  function getActiveReviewEntries(onlyDueToday) {
    var today = getTodayLocalStr();
    var keys = Object.keys(state.reviewQueue || {});
    var out = [];
    for (var i = 0; i < keys.length; i++) {
      var item = state.reviewQueue[keys[i]];
      if (!item || item.graduated) continue;
      if (onlyDueToday) {
        if (item.dueDate && item.dueDate <= today) out.push(item);
      } else {
        out.push(item);
      }
    }
    out.sort(function (a, b) {
      return String(a.dueDate || "").localeCompare(String(b.dueDate || ""));
    });
    return out;
  }

  function getGraduatedReviewCount() {
    var keys = Object.keys(state.reviewQueue || {});
    var cnt = 0;
    for (var i = 0; i < keys.length; i++) {
      if (state.reviewQueue[keys[i]] && state.reviewQueue[keys[i]].graduated) cnt += 1;
    }
    return cnt;
  }

  function reconstructReviewQuestion(entry) {
    if (!entry) return null;
    if (entry.seed) {
      var dynQ = null;
      if (entry.templateId && entry.subject === "creative" && typeof window.generateDynamicVisualCreative === "function") {
        dynQ = window.generateDynamicVisualCreative(entry.tier || 4, entry.seed, entry.templateId);
      } else if (entry.templateId && typeof window.generateDynamicVisualMath === "function") {
        dynQ = window.generateDynamicVisualMath(entry.tier || 4, entry.seed, entry.templateId);
      } else if (typeof window.generateDynamicMathQuestion === "function") {
        dynQ = window.generateDynamicMathQuestion(entry.tier || 4, entry.seed);
      }
      if (dynQ) {
        dynQ.reviewKey = entry.key;
        dynQ.reviewStage = entry.stage || 1;
        return dynQ;
      }
    }
    var base = QUESTION_BY_ID[entry.qid] || entry.snapshot;
    if (!base) return null;
    return {
      id: base.id,
      reviewKey: entry.key,
      reviewStage: entry.stage || 1,
      seed: null,
      subject: base.subject || base.category,
      category: base.category || base.subject,
      unit: base.unit || "",
      tier: base.tier || 2,
      domain: base.domain || "",
      pokeType: base.pokeType || "",
      format: base.format || "choice",
      question: base.question,
      choices: shuffle(base.choices),
      answer: base.answer,
      hint: base.hint || "",
      ttsKo: base.ttsKo || base.question,
      ttsEn: base.ttsEn || ""
    };
  }

  function checkAttendanceToday() {
    var today = getTodayLocalStr();
    if (state.stamps.indexOf(today) === -1) {
      state.stamps.push(today);
      state.justStampedToday = true;
      saveState();
    }
  }

  function getCaughtCount() {
    return Object.keys(state.caught).length;
  }

  function getShinyCaughtCount() {
    var keys = Object.keys(state.caught);
    var cnt = 0;
    for (var i = 0; i < keys.length; i++) {
      if (state.caught[keys[i]] && state.caught[keys[i]].shiny) cnt += 1;
    }
    return cnt;
  }

  function isCaught(id) {
    return !!state.caught[String(id)];
  }

  function isShinyCaught(id) {
    var rec = state.caught[String(id)];
    return !!(rec && rec.shiny);
  }

  function rollIsShiny(isGold, isReview) {
    if (state.forceShinyNext) {
      state.forceShinyNext = false;
      return true;
    }
    var mode = (window.SHINY_MODES && window.SHINY_MODES[state.shinyMode]) || window.SHINY_MODES.kid;
    var rate = isGold ? mode.goldRate : mode.normalRate;
    if (isReview) rate = Math.max(rate * 2, 0.12);
    if (state.shinyBoostBattles > 0) {
      state.shinyBoostBattles -= 1;
      rate = Math.min(0.65, Math.max(rate * 3, 0.25));
      saveState();
    }
    return Math.random() < rate;
  }

  // ---------------- HOME 3D 1순위 이미지 엔진 & 3D 뷰어 ----------------
  function initImageProviders() {
    loadPokeSpriteSlugMap(
      "https://cdn.jsdelivr.net/npm/pokesprite-images@2.7.0/data/pokemon.json",
      "https://unpkg.com/pokesprite-images@2.7.0/data/pokemon.json"
    );
    probeImageHost(
      "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/home/25.png",
      2000,
      function (ok) {
        netState.jsdelivr = ok ? "ok" : "blocked";
        if (ok) {
          netState.consecutiveTotalFailures = 0;
          upgradeFallbackImagesInDom();
        }
      }
    );
    probeImageHost(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
      2000,
      function (ok) {
        netState.rawGitHub = ok ? "ok" : "blocked";
        if (ok) {
          netState.consecutiveTotalFailures = 0;
          upgradeFallbackImagesInDom();
        }
      }
    );
  }

  function probeImageHost(testUrl, timeoutMs, cb) {
    var done = false;
    var probe = new Image();
    probe.referrerPolicy = "no-referrer";
    var timer = setTimeout(function () {
      if (done) return;
      done = true;
      probe.onload = null;
      probe.onerror = null;
      cb(false);
    }, timeoutMs);
    probe.onload = function () {
      if (done) return;
      done = true;
      clearTimeout(timer);
      cb(probe.naturalWidth > 0);
    };
    probe.onerror = function () {
      if (done) return;
      done = true;
      clearTimeout(timer);
      cb(false);
    };
    probe.src = testUrl;
  }

  function ingestPokeSpriteJson(jsonObj) {
    if (!jsonObj || typeof jsonObj !== "object") return false;
    var keys = Object.keys(jsonObj);
    var count = 0;
    for (var i = 0; i < keys.length; i++) {
      var entry = jsonObj[keys[i]];
      var numId = parseInt((entry && entry.idx) ? entry.idx : keys[i], 10);
      if (numId > 0 && entry && entry.slug && entry.slug.eng) {
        POKESPRITE_SLUGS[numId] = entry.slug.eng;
        count += 1;
      }
    }
    if (count > 0) {
      netState.slugsLoaded = true;
      netState.jsdelivr = "ok";
      netState.consecutiveTotalFailures = 0;
      upgradeFallbackImagesInDom();
      return true;
    }
    return false;
  }

  function loadPokeSpriteSlugMap(primaryUrl, backupUrl) {
    if (typeof window.fetch !== "function") return;
    try {
      window.fetch(primaryUrl)
        .then(function (res) {
          if (!res.ok) throw new Error("status " + res.status);
          return res.json();
        })
        .then(function (data) { ingestPokeSpriteJson(data); })
        .catch(function () {
          try {
            window.fetch(backupUrl)
              .then(function (res2) {
                if (!res2.ok) throw new Error("status " + res2.status);
                return res2.json();
              })
              .then(function (data2) { ingestPokeSpriteJson(data2); })
              .catch(function () {});
          } catch (e2) {}
        });
    } catch (e) {}
  }

  function fetchPokeApiSpriteUrls(pokeId, callback) {
    if (POKEAPI_SPRITE_CACHE[pokeId]) {
      callback(POKEAPI_SPRITE_CACHE[pokeId]);
      return;
    }
    if (netState.pokeApi === "blocked" || typeof window.fetch !== "function") {
      callback(null);
      return;
    }
    var finished = false;
    var controller = typeof window.AbortController === "function" ? new window.AbortController() : null;
    var timer = setTimeout(function () {
      if (finished) return;
      finished = true;
      if (controller) { try { controller.abort(); } catch (e) {} }
      callback(null);
    }, 2000);

    try {
      var opts = controller ? { signal: controller.signal } : {};
      window.fetch("https://pokeapi.co/api/v2/pokemon/" + pokeId, opts)
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          return res.json();
        })
        .then(function (data) {
          if (finished) return;
          finished = true;
          clearTimeout(timer);
          netState.pokeApi = "ok";
          var sp = (data && data.sprites) || {};
          var other = sp.other || {};
          var art = other["official-artwork"] || {};
          var home = other.home || {};
          var showdown = other.showdown || {};
          var normalList = [];
          var shinyList = [];
          pushUnique(normalList, home.front_default);
          pushUnique(normalList, art.front_default);
          pushUnique(normalList, showdown.front_default);
          pushUnique(normalList, sp.front_default);
          pushUnique(shinyList, home.front_shiny);
          pushUnique(shinyList, art.front_shiny);
          pushUnique(shinyList, showdown.front_shiny);
          pushUnique(shinyList, sp.front_shiny);
          var entry = { normal: normalList, shiny: shinyList };
          POKEAPI_SPRITE_CACHE[pokeId] = entry;
          callback(entry);
        })
        .catch(function () {
          if (finished) return;
          finished = true;
          clearTimeout(timer);
          netState.pokeApi = "blocked";
          callback(null);
        });
    } catch (e) {
      if (!finished) {
        finished = true;
        clearTimeout(timer);
        netState.pokeApi = "blocked";
        callback(null);
      }
    }
  }

  function buildPokemonImageCandidates(pokemon, useShiny) {
    var id = pokemon.id;
    var slug = POKESPRITE_SLUGS[id] || "";
    var urls = [];
    var cdnHome = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/home/" + (useShiny ? "shiny/" : "") + id + ".png";
    var cdnArt = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/official-artwork/" + (useShiny ? "shiny/" : "") + id + ".png";
    var rawHome = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + (useShiny ? "shiny/" : "") + id + ".png";
    var rawArt = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (useShiny ? "shiny/" : "") + id + ".png";

    if (netState.jsdelivr !== "blocked") {
      pushUnique(urls, cdnHome);
      pushUnique(urls, cdnArt);
    }
    if (netState.rawGitHub === "ok") {
      pushUnique(urls, rawHome);
      pushUnique(urls, rawArt);
    }
    if (!useShiny && id <= 649) {
      pushUnique(urls, "https://cdn.jsdelivr.net/npm/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/" + id + ".svg");
    }
    if (useShiny && id <= 649) {
      pushUnique(urls, "https://cdn.jsdelivr.net/npm/pokeapi-sprites@2.0.4/sprites/pokemon/versions/generation-v/black-white/animated/shiny/" + id + ".gif");
    }
    if (slug) {
      var variantFolder = useShiny ? "shiny" : "regular";
      pushUnique(urls, "https://cdn.jsdelivr.net/npm/pokesprite-images@2.7.0/pokemon-gen8/" + variantFolder + "/" + slug + ".png");
    }
    if (netState.rawGitHub !== "blocked") {
      pushUnique(urls, rawHome);
      pushUnique(urls, rawArt);
    }
    if (POKEAPI_SPRITE_CACHE[id]) {
      var apiList = useShiny ? POKEAPI_SPRITE_CACHE[id].shiny : POKEAPI_SPRITE_CACHE[id].normal;
      for (var k = 0; k < apiList.length; k++) pushUnique(urls, apiList[k]);
    }
    return urls;
  }

  function getPokemonFallbackSvg(pokemon, useShiny) {
    var mainType = (pokemon.types && pokemon.types[0]) || "노말";
    var subType = (pokemon.types && pokemon.types[1]) || mainType;
    var baseColor = (window.TYPE_COLORS && window.TYPE_COLORS[mainType]) || "#4FC3F7";
    var accentColor = (window.TYPE_COLORS && window.TYPE_COLORS[subType]) || "#FFD54F";
    var color = useShiny ? "#FFD54F" : baseColor;
    var subCol = useShiny ? "#F48FB1" : accentColor;
    var belly = useShiny ? "#FFF9C4" : "#FFFDF7";
    var seed = pokemon.id;
    var arch = seed % 8;
    if (mainType === "비행") arch = 1;
    else if (mainType === "물" || mainType === "얼음") arch = (seed % 2 === 0) ? 2 : 5;
    else if (mainType === "전기") arch = 3;
    else if (mainType === "바위" || mainType === "강철" || mainType === "땅") arch = 4;
    else if (mainType === "고스트" || mainType === "에스퍼") arch = 6;
    else if (mainType === "드래곤" || mainType === "불꽃") arch = (seed % 2 === 0) ? 7 : 1;
    else if (mainType === "풀" || mainType === "벌레") arch = 0;

    var bodyParts = "";
    if (arch === 0) {
      bodyParts =
        '<path d="M120,24 C95,18 82,42 108,58 C92,38 148,38 132,58 C158,42 145,18 120,24 Z" fill="#66BB6A" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="70" rx="34" ry="20" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="78" cy="186" rx="20" ry="15" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="162" cy="186" rx="20" ry="15" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="134" rx="66" ry="54" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="120" cy="148" rx="40" ry="30" fill="' + belly + '" opacity="0.88"/>';
    } else if (arch === 1) {
      bodyParts =
        '<path d="M58,118 L14,76 L34,132 L18,148 L66,146 Z" fill="' + subCol + '" stroke="#22313f" stroke-width="5" stroke-linejoin="round"/>' +
        '<path d="M182,118 L226,76 L206,132 L222,148 L174,146 Z" fill="' + subCol + '" stroke="#22313f" stroke-width="5" stroke-linejoin="round"/>' +
        '<polygon points="104,52 120,20 136,52" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="96" cy="192" rx="14" ry="12" fill="#FFB300" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="144" cy="192" rx="14" ry="12" fill="#FFB300" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="128" rx="52" ry="60" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="120" cy="144" rx="33" ry="36" fill="' + belly + '" opacity="0.9"/>';
    } else if (arch === 2) {
      bodyParts =
        '<path d="M170,142 Q224,112 216,156 Q226,184 174,166 Z" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<polygon points="120,30 98,68 142,68" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="52" cy="134" rx="22" ry="12" transform="rotate(-24 52 134)" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="130" rx="60" ry="56" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="116" cy="146" rx="38" ry="30" fill="' + belly + '" opacity="0.88"/>';
    } else if (arch === 3) {
      bodyParts =
        '<polygon points="172,148 214,116 196,104 224,74 182,98 196,112 162,134" fill="#FFD54F" stroke="#22313f" stroke-width="5" stroke-linejoin="round"/>' +
        '<polygon points="78,74 50,18 102,58" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<polygon points="162,74 190,18 138,58" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="88" cy="188" rx="18" ry="12" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="152" cy="188" rx="18" ry="12" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="130" rx="56" ry="56" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="120" cy="148" rx="34" ry="28" fill="' + belly + '" opacity="0.86"/>';
    } else if (arch === 4) {
      bodyParts =
        '<polygon points="72,68 54,32 94,54" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<polygon points="168,68 186,32 146,54" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<rect x="34" y="108" width="28" height="48" rx="12" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<rect x="178" y="108" width="28" height="48" rx="12" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<polygon points="68,62 172,62 192,132 166,192 74,192 48,132" fill="' + color + '" stroke="#22313f" stroke-width="6" stroke-linejoin="round"/>' +
        '<polygon points="88,132 152,132 144,178 96,178" fill="' + belly + '" opacity="0.8"/>';
    } else if (arch === 5) {
      bodyParts =
        '<circle cx="68" cy="64" r="22" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<circle cx="172" cy="64" r="22" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="86" cy="188" rx="20" ry="12" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="154" cy="188" rx="20" ry="12" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<circle cx="120" cy="128" r="60" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="120" cy="144" rx="38" ry="32" fill="' + belly + '" opacity="0.9"/>';
    } else if (arch === 6) {
      bodyParts =
        '<circle cx="52" cy="96" r="14" fill="' + subCol + '" stroke="#22313f" stroke-width="4"/>' +
        '<circle cx="188" cy="96" r="14" fill="' + subCol + '" stroke="#22313f" stroke-width="4"/>' +
        '<path d="M62,118 C62,64 178,64 178,118 C178,154 192,184 166,192 C150,174 136,196 120,188 C104,196 90,174 74,192 C48,184 62,154 62,118 Z" fill="' + color + '" stroke="#22313f" stroke-width="6" stroke-linejoin="round"/>' +
        '<circle cx="120" cy="50" r="14" fill="#FFF176" stroke="#22313f" stroke-width="4"/>';
    } else {
      bodyParts =
        '<path d="M168,154 Q216,142 206,98 Q228,112 218,78 Q186,88 192,118 Q174,132 158,140 Z" fill="#FF7043" stroke="#22313f" stroke-width="5" stroke-linejoin="round"/>' +
        '<polygon points="90,60 72,22 110,50" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<polygon points="150,60 168,22 130,50" fill="' + subCol + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="90" cy="190" rx="18" ry="13" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="150" cy="190" rx="18" ry="13" fill="' + color + '" stroke="#22313f" stroke-width="5"/>' +
        '<ellipse cx="120" cy="128" rx="54" ry="60" fill="' + color + '" stroke="#22313f" stroke-width="6"/>' +
        '<ellipse cx="120" cy="144" rx="34" ry="34" fill="' + belly + '" opacity="0.88"/>';
    }

    var sparkles = useShiny
      ? '<polygon points="34,38 39,50 51,55 39,60 34,72 29,60 17,55 29,50" fill="#FFF176" stroke="#D97706" stroke-width="2.5"/>' +
        '<polygon points="204,34 208,44 218,48 208,52 204,62 200,52 190,48 200,44" fill="#FFF176" stroke="#D97706" stroke-width="2.5"/>'
      : "";

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">' +
      bodyParts +
      '<circle cx="96" cy="114" r="9.5" fill="#22313f"/>' +
      '<circle cx="144" cy="114" r="9.5" fill="#22313f"/>' +
      '<circle cx="93" cy="110" r="3.5" fill="#ffffff"/>' +
      '<circle cx="141" cy="110" r="3.5" fill="#ffffff"/>' +
      '<ellipse cx="78" cy="128" rx="9" ry="5.5" fill="#ff8a80" opacity="0.78"/>' +
      '<ellipse cx="162" cy="128" rx="9" ry="5.5" fill="#ff8a80" opacity="0.78"/>' +
      '<path d="M106,130 Q120,143 134,130" fill="none" stroke="#22313f" stroke-width="5" stroke-linecap="round"/>' +
      sparkles +
      "</svg>";
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function setBattleSpinnerVisible(visible) {
    var sp = document.getElementById("battle-img-spinner");
    if (sp) sp.classList.toggle("hidden", !visible);
  }

  function applyPokemonImage(imgEl, pokemon, useShiny) {
    if (!imgEl || !pokemon) return;
    var reqId = String(++imageReqSeq);
    var isBattleImg = imgEl.id === "battle-pokemon-img";
    var cacheKey = pokemon.id + (useShiny ? "_s" : "_n");
    imgEl.referrerPolicy = "no-referrer";
    imgEl.dataset.reqId = reqId;
    imgEl.dataset.pokeId = String(pokemon.id);
    imgEl.dataset.pokeShiny = useShiny ? "1" : "0";
    imgEl.dataset.usingFallback = "0";
    imgEl.classList.remove("is-pixel-sprite");

    if (DATA_URI_CACHE[cacheKey]) {
      imgEl.onload = function () {
        if (imgEl.dataset.reqId !== reqId) return;
        if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
        if (isBattleImg) setBattleSpinnerVisible(false);
        var nw = imgEl.naturalWidth || 0;
        var isSvgData = DATA_URI_CACHE[cacheKey].indexOf("data:image/svg+xml") === 0;
        imgEl.classList.toggle("is-pixel-sprite", !isSvgData && nw > 0 && nw <= 136);
      };
      imgEl.onerror = null;
      imgEl.src = DATA_URI_CACHE[cacheKey];
      if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
      if (isBattleImg) setBattleSpinnerVisible(false);
      return;
    }

    if (
      (netState.consecutiveTotalFailures >= 4 || (netState.jsdelivr === "blocked" && netState.rawGitHub === "blocked" && fetchBridgeFailures >= 2)) &&
      netState.rawGitHub !== "ok" &&
      netState.jsdelivr !== "ok" &&
      netState.pokeApi !== "ok"
    ) {
      finishWithFallbackSvg(imgEl, pokemon, useShiny, reqId, isBattleImg);
      return;
    }

    var candidates = buildPokemonImageCandidates(pokemon, !!useShiny);
    var idx = (netState.jsdelivr === "blocked" && netState.rawGitHub === "blocked") ? candidates.length : 0;
    var apiTried = false;
    var watchdogId = null;

    if (isBattleImg) setBattleSpinnerVisible(true);
    if (!imgEl.dataset.savedAlt) imgEl.dataset.savedAlt = imgEl.alt || "";
    imgEl.alt = "";

    function clearWatchdog() {
      if (watchdogId !== null) {
        clearTimeout(watchdogId);
        watchdogId = null;
      }
    }

    function tryNext() {
      if (imgEl.dataset.reqId !== reqId) {
        clearWatchdog();
        return;
      }
      clearWatchdog();

      if (idx < candidates.length) {
        var nextUrl = candidates[idx++];
        watchdogId = setTimeout(function () {
          if (imgEl.dataset.reqId !== reqId) return;
          tryNext();
        }, 2200);
        imgEl.src = nextUrl;
        return;
      }

      if (!apiTried && netState.pokeApi !== "blocked") {
        apiTried = true;
        fetchPokeApiSpriteUrls(pokemon.id, function (apiEntry) {
          if (imgEl.dataset.reqId !== reqId) return;
          if (apiEntry) {
            var extra = useShiny ? apiEntry.shiny : apiEntry.normal;
            for (var j = 0; j < extra.length; j++) pushUnique(candidates, extra[j]);
            if (idx < candidates.length) {
              tryNext();
              return;
            }
          }
          netState.consecutiveTotalFailures += 1;
          finishWithFallbackSvg(imgEl, pokemon, useShiny, reqId, isBattleImg);
        });
        return;
      }

      if (fetchBridgeFailures < 3 && typeof window.fetch === "function" && candidates.length > 0) {
        var bridgeUrl = candidates[0];
        for (var cIdx = 0; cIdx < candidates.length; cIdx++) {
          if (candidates[cIdx].indexOf("cdn.jsdelivr.net") !== -1 || candidates[cIdx].indexOf("unpkg.com") !== -1) {
            bridgeUrl = candidates[cIdx];
            break;
          }
        }
        fetchUrlAsDataUri(bridgeUrl, function (dataUri) {
          if (imgEl.dataset.reqId !== reqId) return;
          if (dataUri) {
            DATA_URI_CACHE[cacheKey] = dataUri;
            fetchBridgeFailures = 0;
            netState.consecutiveTotalFailures = 0;
            imgEl.dataset.usingFallback = "0";
            imgEl.src = dataUri;
            if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
            if (isBattleImg) setBattleSpinnerVisible(false);
            return;
          }
          fetchBridgeFailures += 1;
          netState.consecutiveTotalFailures += 1;
          finishWithFallbackSvg(imgEl, pokemon, useShiny, reqId, isBattleImg);
        });
        return;
      }

      netState.consecutiveTotalFailures += 1;
      finishWithFallbackSvg(imgEl, pokemon, useShiny, reqId, isBattleImg);
    }

    imgEl.onload = function () {
      if (imgEl.dataset.reqId !== reqId) return;
      clearWatchdog();
      if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
      if (isBattleImg) setBattleSpinnerVisible(false);
      if (imgEl.src.indexOf("data:image/svg+xml") !== 0) {
        netState.consecutiveTotalFailures = 0;
        if (imgEl.src.indexOf("jsdelivr.net") !== -1 || imgEl.src.indexOf("unpkg.com") !== -1) {
          netState.jsdelivr = "ok";
        } else if (imgEl.src.indexOf("raw.githubusercontent.com") !== -1) {
          netState.rawGitHub = "ok";
        }
        var nw = imgEl.naturalWidth || 0;
        var isSvg = imgEl.src.indexOf(".svg") !== -1;
        imgEl.classList.toggle("is-pixel-sprite", !isSvg && nw > 0 && nw <= 136);
      }
    };

    imgEl.onerror = function () {
      if (imgEl.dataset.reqId !== reqId) return;
      tryNext();
    };

    tryNext();
  }

  function fetchUrlAsDataUri(targetUrl, cb) {
    var done = false;
    var ctrl = typeof window.AbortController === "function" ? new window.AbortController() : null;
    var tId = setTimeout(function () {
      if (done) return;
      done = true;
      if (ctrl) { try { ctrl.abort(); } catch (e) {} }
      cb(null);
    }, 2000);
    try {
      var opts = ctrl ? { signal: ctrl.signal } : {};
      window.fetch(targetUrl, opts)
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          if (targetUrl.indexOf(".svg") !== -1) {
            return res.text().then(function (svgTxt) {
              if (svgTxt.indexOf("<svg") === -1) throw new Error("Not SVG");
              if (svgTxt.indexOf("width=") === -1) svgTxt = svgTxt.replace("<svg", '<svg width="240" height="240"');
              return "data:image/svg+xml;utf8," + encodeURIComponent(svgTxt);
            });
          }
          return res.blob().then(function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onloadend = function () { resolve(reader.result); };
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          });
        })
        .then(function (uri) {
          if (done) return;
          done = true;
          clearTimeout(tId);
          cb(typeof uri === "string" && uri.indexOf("data:") === 0 ? uri : null);
        })
        .catch(function () {
          if (done) return;
          done = true;
          clearTimeout(tId);
          cb(null);
        });
    } catch (e) {
      if (!done) {
        done = true;
        clearTimeout(tId);
        cb(null);
      }
    }
  }

  function finishWithFallbackSvg(imgEl, pokemon, useShiny, reqId, isBattleImg) {
    if (imgEl.dataset.reqId !== reqId) return;
    imgEl.dataset.usingFallback = "1";
    imgEl.classList.remove("is-pixel-sprite");
    imgEl.onload = function () {
      if (imgEl.dataset.reqId !== reqId) return;
      if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
      if (isBattleImg) setBattleSpinnerVisible(false);
    };
    imgEl.onerror = null;
    imgEl.src = getPokemonFallbackSvg(pokemon, !!useShiny);
    if (imgEl.dataset.savedAlt !== undefined) imgEl.alt = imgEl.dataset.savedAlt;
    if (isBattleImg) setBattleSpinnerVisible(false);
  }

  function upgradeFallbackImagesInDom() {
    var imgs = document.querySelectorAll('img[data-using-fallback="1"]');
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      var pid = Number(el.dataset.pokeId);
      var shiny = el.dataset.pokeShiny === "1";
      var pObj = POKEMON_BY_ID[pid];
      if (pObj) applyPokemonImage(el, pObj, shiny);
    }
  }

  // ---------------- 도감 상세 3D 뷰어 ----------------
  function hasWebGlSupport() {
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
    } catch (e) {
      return false;
    }
  }

  function ensureModelViewerLoaded(cb) {
    if (window.customElements && window.customElements.get("model-viewer")) {
      modalState.viewerLoadState = "ready";
      cb(true);
      return;
    }
    if (!hasWebGlSupport() || (typeof navigator !== "undefined" && navigator.onLine === false)) {
      modalState.viewerLoadState = "failed";
      cb(false);
      return;
    }
    modelViewerCallbacks.push(cb);
    if (modalState.viewerLoadState === "loading") return;
    modalState.viewerLoadState = "loading";

    var settled = false;
    function finish(ok) {
      if (settled) return;
      settled = true;
      modalState.viewerLoadState = ok ? "ready" : "failed";
      var list = modelViewerCallbacks.slice();
      modelViewerCallbacks = [];
      for (var i = 0; i < list.length; i++) list[i](ok);
    }

    var guardTimer = setTimeout(function () {
      finish(!!(window.customElements && window.customElements.get("model-viewer")));
    }, 3200);

    var s = document.createElement("script");
    s.type = "module";
    s.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
    s.onload = function () {
      var pollCount = 0;
      var poll = setInterval(function () {
        pollCount += 1;
        if (window.customElements && window.customElements.get("model-viewer")) {
          clearInterval(poll);
          clearTimeout(guardTimer);
          finish(true);
        } else if (pollCount > 20) {
          clearInterval(poll);
          clearTimeout(guardTimer);
          finish(false);
        }
      }, 80);
    };
    s.onerror = function () {
      var s2 = document.createElement("script");
      s2.type = "module";
      s2.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js";
      s2.onload = s.onload;
      s2.onerror = function () {
        clearTimeout(guardTimer);
        finish(false);
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s);
  }

  function renderInteractiveHoloCard(hostEl, statusEl, poke, showShiny, noteText) {
    hostEl.innerHTML = "";
    var card = document.createElement("div");
    card.className = "holo-3d-card";
    var img = document.createElement("img");
    img.referrerPolicy = "no-referrer";
    img.alt = poke.name + " 3D 입체 카드";
    applyPokemonImage(img, poke, showShiny);
    card.appendChild(img);
    hostEl.appendChild(card);

    function handleMove(clientX, clientY) {
      var rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var nx = ((clientX - rect.left) / rect.width - 0.5) * 2;
      var ny = ((clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.animation = "none";
      card.style.transform = "rotateY(" + (nx * 28).toFixed(1) + "deg) rotateX(" + (-ny * 24).toFixed(1) + "deg)";
    }

    card.addEventListener("pointermove", function (e) { handleMove(e.clientX, e.clientY); });
    card.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    card.addEventListener("pointerleave", function () {
      card.style.animation = "";
      card.style.transform = "";
    });
    statusEl.textContent = noteText || "👆 손가락·마우스로 움직여 HOME 입체 카드를 돌려 보세요!";
  }

  function mount3dPokemonViewer(poke, showShiny) {
    var hostEl = document.getElementById("modal-3d-host");
    var statusEl = document.getElementById("modal-3d-status");
    if (!hostEl || !statusEl || !poke) return;
    hostEl.innerHTML = "";
    statusEl.textContent = "🧊 3D 모델을 불러오고 있어요...";

    ensureModelViewerLoaded(function (ready) {
      if (!modalState.showing3d || !modalState.pokemon || modalState.pokemon.id !== poke.id) return;
      if (!ready) {
        renderInteractiveHoloCard(hostEl, statusEl, poke, showShiny, "👆 현재 환경에서는 HOME 3D 입체 홀로그램 카드로 돌려 볼 수 있어요!");
        return;
      }

      var candidates = [];
      if (showShiny) {
        pushUnique(candidates, poke.shinyModel3d);
        pushUnique(candidates, poke.rawShinyModel3d);
      }
      pushUnique(candidates, poke.model3d);
      pushUnique(candidates, poke.rawModel3d);

      var cIdx = 0;
      var mv = document.createElement("model-viewer");
      mv.setAttribute("camera-controls", "");
      mv.setAttribute("auto-rotate", "");
      mv.setAttribute("shadow-intensity", "1");
      mv.setAttribute("interaction-prompt", "none");
      mv.setAttribute("alt", poke.name + " 3D 모델");

      var loadWatchdog = null;
      function clearMvWatchdog() {
        if (loadWatchdog !== null) {
          clearTimeout(loadWatchdog);
          loadWatchdog = null;
        }
      }

      function tryNextGlb() {
        clearMvWatchdog();
        if (!modalState.showing3d || !modalState.pokemon || modalState.pokemon.id !== poke.id) return;
        if (cIdx >= candidates.length) {
          renderInteractiveHoloCard(hostEl, statusEl, poke, showShiny, "👆 이 포켓몬은 HOME 3D 입체 홀로그램 카드로 360도 감상할 수 있어요!");
          return;
        }
        var url = candidates[cIdx++];
        loadWatchdog = setTimeout(tryNextGlb, 3500);
        mv.setAttribute("src", url);
      }

      mv.addEventListener("load", function () {
        clearMvWatchdog();
        statusEl.textContent = "🧊 360도 실시간 3D 모델! 손가락·마우스로 돌려 보세요!";
      });
      mv.addEventListener("error", tryNextGlb);

      hostEl.innerHTML = "";
      hostEl.appendChild(mv);
      tryNextGlb();
    });
  }

  function unmount3dViewer() {
    var hostEl = document.getElementById("modal-3d-host");
    if (hostEl) hostEl.innerHTML = "";
  }

  function renderTypeBadgesHtml(types) {
    return types
      .map(function (t) {
        var bg = (window.TYPE_COLORS && window.TYPE_COLORS[t]) || "#78909c";
        return '<span class="type-pill" style="background:' + bg + '">' + t + "</span>";
      })
      .join("");
  }

  // ---------------- 화면 전환 & 상단 바 ----------------
  function clearBattleTimers() {
    while (battle.timers.length > 0) clearTimeout(battle.timers.pop());
  }

  function scheduleBattleTimer(fn, ms) {
    var id = setTimeout(fn, ms);
    battle.timers.push(id);
    return id;
  }

  function showScreen(screenName) {
    if (state.screen !== screenName && state.screen !== "pokedex" && state.screen !== "level" && state.screen !== "progress") {
      state.previousScreen = state.screen;
    }
    if (screenName !== "field") stopFieldLoop();
    if (screenName !== "battle") {
      battle.active = false;
      clearBattleTimers();
      window.SoundFX.stopSpeech();
    }

    state.screen = screenName;
    var screens = document.querySelectorAll(".screen");
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.remove("active");
    }
    var target = document.getElementById("screen-" + screenName);
    if (target) target.classList.add("active");

    updateTopBar();

    if (screenName === "title") {
      renderTitleScreen();
    } else if (screenName === "level") {
      renderLevelScreen();
    } else if (screenName === "progress") {
      renderProgressScreen();
    } else if (screenName === "region") {
      renderRegionScreen();
    } else if (screenName === "field") {
      startFieldScreen();
    } else if (screenName === "pokedex") {
      renderPokedexScreen();
    }
  }

  function getVoiceModeButtonLabel() {
    if (state.voiceMode === "touch") return "👆 터치음성";
    if (state.voiceMode === "auto") return "🔊 자동음성";
    return "👨‍👩‍👧 부모동반";
  }

  function cycleVoiceMode() {
    var order = ["parent", "touch", "auto"];
    var next = order[(order.indexOf(state.voiceMode) + 1) % order.length];
    state.voiceMode = next;
    window.SoundFX.setVoiceMode(next);
    window.SoundFX.click();
    saveState();
    updateTopBar();
    if (state.screen === "title") renderTitleScreen();
    if (state.screen === "battle" && battle.stage === "quiz") {
      var curQ = battle.quizzes[battle.quizIndex];
      renderQuestionAndChoices(
        window.QUIZ_CATEGORIES[curQ.subject || curQ.category] || { name: "퀴즈", emoji: "⭐", color: "#42a5f5" },
        curQ.question,
        battle.currentChoiceList,
        battle.disabledIndices,
        document.getElementById("battle-feedback").textContent,
        curQ
      );
      if (next === "auto") window.SoundFX.speakQuestion(curQ, false);
    }
  }

  function toggleSoundMute() {
    state.soundOn = !state.soundOn;
    window.SoundFX.setEnabled(state.soundOn);
    if (state.soundOn) window.SoundFX.click();
    saveState();
    updateTopBar();
    if (state.screen === "title") renderTitleScreen();
  }

  function updateTopBar() {
    var topBar = document.getElementById("main-top-bar");
    var isHanjaTraceNow = (
      state.screen === "battle" &&
      battle.active &&
      battle.stage === "quiz" &&
      battle.quizzes[battle.quizIndex] &&
      battle.quizzes[battle.quizIndex].inputType === "hanja_trace"
    );
    // 시작/학습수준/성취도 화면 및 한자 전체화면 따라쓰기 도장에서는 상단 바 자동 숨김!
    if (state.screen === "title" || state.screen === "level" || state.screen === "progress" || isHanjaTraceNow) {
      topBar.classList.add("hidden");
      return;
    }
    topBar.classList.remove("hidden");

    var btnHome = document.getElementById("btn-top-home");
    var btnRegion = document.getElementById("btn-top-region");
    var btnPokedex = document.getElementById("btn-top-pokedex");
    var btnShinyRate = document.getElementById("btn-shiny-settings");
    var btnLevel = document.getElementById("btn-level-settings");
    var btnVoice = document.getElementById("btn-voice-mode");
    var centerLabel = document.getElementById("top-center-label");
    var soundBtn = document.getElementById("btn-sound-toggle");

    var caughtCnt = getCaughtCount();
    var shinyCnt = getShinyCaughtCount();
    var totalCnt = window.POKEMON_DATA.length;
    var dueCnt = getActiveReviewEntries(true).length;

    var rSum = getRoutineSummary();
    var btnTopRoutine = document.getElementById("btn-top-routine");
    if (btnTopRoutine) {
      btnTopRoutine.textContent = rSum.completed
        ? "📅 루틴 완료!"
        : ("📅 루틴 " + rSum.totalDone + "/" + rSum.totalTarget);
      btnTopRoutine.classList.toggle("hidden", state.screen === "battle");
    }

    soundBtn.textContent = state.soundOn ? "🔊 소리 켜짐" : "🔇 소리 꺼짐";
    soundBtn.classList.toggle("muted", !state.soundOn);
    btnVoice.textContent = getVoiceModeButtonLabel();
    btnLevel.textContent = dueCnt > 0 ? ("🌈 복습(" + dueCnt + ")") : "⚙️ 학습 수준";

    if (state.screen === "battle") {
      btnHome.classList.add("hidden");
      btnRegion.classList.remove("hidden");
      btnRegion.textContent = "🏃 도망가기";
      btnPokedex.classList.add("hidden");
      btnShinyRate.classList.add("hidden");
      btnLevel.classList.add("hidden");
      centerLabel.textContent = battle.isReview
        ? "🌈 오답 복습 몬스터볼!"
        : (battle.isGold ? "✨ 황금 몬스터볼 배틀!" : "⚔️ 야생 포켓몬 배틀!");
      return;
    }

    btnHome.classList.remove("hidden");
    btnShinyRate.classList.remove("hidden");
    btnLevel.classList.remove("hidden");

    if (state.screen === "pokedex") {
      btnRegion.classList.remove("hidden");
      btnRegion.textContent = "↩ 돌아가기";
      btnPokedex.classList.add("hidden");
      centerLabel.textContent =
        "📖 전국도감 (" + caughtCnt + " / " + totalCnt + (shinyCnt > 0 ? " · ✨" + shinyCnt : "") + ")";
      return;
    }

    btnPokedex.classList.remove("hidden");
    btnPokedex.textContent = "📖 도감 (" + caughtCnt + ")";

    if (state.screen === "region") {
      btnRegion.classList.add("hidden");
      centerLabel.textContent = "🗺️ 어디로 모험을 떠날까요?";
    } else if (state.screen === "field") {
      var r = window.POKEMON_REGIONS[state.regionId];
      btnRegion.classList.remove("hidden");
      btnRegion.textContent = "🗺️ 지역 바꾸기";
      centerLabel.textContent =
        r.emoji + " " + r.name + " · 도감 " + caughtCnt + "/" + totalCnt +
        (state.shinyBoostBattles > 0 ? " · 🍀부스트" + state.shinyBoostBattles : "");
    }
  }

  // ---------------- 1. 시작 화면 (참조 4030.png) & 출석 도장 모달 (참조 4031.png) ----------------
  function renderTitleFloatingMons() {
    var caughtIds = Object.keys(state.caught).map(Number).filter(Boolean);
    // 기본 6개 슬롯: 좌측 2개는 항상 반갑게 맞이하는 컬러 마스코트(잡은 포켓몬이 있으면 내가 잡은 포켓몬 우선!), 나머지 4개는 잡았으면 컬러·못 잡았으면 신비로운 실루엣!
    var defaultIds = [25, 7, 1, 4, 133, 39];
    var elIds = [
      "title-mascot-25",
      "title-mascot-7",
      "title-mascot-1",
      "title-mascot-4",
      "title-mascot-133",
      "title-mascot-39"
    ];

    for (var i = 0; i < elIds.length; i++) {
      var el = document.getElementById(elIds[i]);
      if (!el) continue;
      var pid = (i < caughtIds.length) ? caughtIds[caughtIds.length - 1 - i] : defaultIds[i];
      var poke = POKEMON_BY_ID[pid] || POKEMON_BY_ID[defaultIds[i]];
      if (!poke) continue;
      var showInColor = (i < 2) || isCaught(poke.id);
      el.classList.toggle("is-wild-silhouette", !showInColor);
      applyPokemonImage(el, poke, showInColor && isShinyCaught(poke.id));
    }
  }

  function renderTitleScreen() {
    renderTitleFloatingMons();

    var totalCaught = getCaughtCount();
    var totalDex = window.POKEMON_DATA.length;
    document.getElementById("title-dex-count").textContent = totalCaught + "/" + totalDex;
    document.getElementById("stamp-total-count").textContent = state.stamps.length + "개";

    var levelLabel = "정하기";
    if (STAGE_PRESET_DEFS[state.presetId]) {
      levelLabel = STAGE_PRESET_DEFS[state.presetId].title;
    } else {
      levelLabel = "맞춤 설정";
    }
    document.getElementById("title-level-status").textContent = levelLabel;

    var dueCnt = getActiveReviewEntries(true).length;
    var tagline = document.getElementById("title-tagline-pill");
    if (dueCnt > 0) {
      tagline.textContent = "🌈 오늘 복습 문제 " + dueCnt + "개가 기다려요! 모험을 시작해 볼까요?";
    } else if (state.shinyBoostBattles > 0) {
      tagline.textContent = "🍀 복습 완료 보너스! 다음 " + state.shinyBoostBattles + "번 색이 다른 포켓몬 확률 대폭 상승!";
    } else {
      tagline.textContent = "문제를 풀고 포켓몬 친구를 모으자!";
    }

    var soundCorner = document.getElementById("btn-title-sound");
    soundCorner.textContent = state.soundOn ? "🔊" : "🔇";
    soundCorner.classList.toggle("muted", !state.soundOn);

    var voiceCorner = document.getElementById("btn-title-voice");
    voiceCorner.textContent = getVoiceModeButtonLabel();

    var routineCorner = document.getElementById("btn-open-routine-title");
    if (routineCorner) {
      var rSum = getRoutineSummary();
      routineCorner.textContent = rSum.completed
        ? "📅 오늘의 루틴 완료! 🎉"
        : ("📅 오늘의 루틴 " + rSum.totalDone + "/" + rSum.totalTarget);
    }
  }

  function openStampModal() {
    window.SoundFX.click();
    document.getElementById("stamp-modal-count").textContent = state.stamps.length + "개";
    var todayBadge = document.getElementById("stamp-today-badge");
    todayBadge.classList.toggle("hidden", !state.justStampedToday);

    var grid = document.getElementById("stamp-grid");
    var recent = state.stamps.slice(-10);
    var html = "";
    for (var i = 0; i < 10; i++) {
      if (i < recent.length) {
        html +=
          '<div class="stamp-circle stamped" data-date="' + recent[i] + '">' +
          '<span class="star">★</span>' +
          '<span class="dt">' + formatShortDate(recent[i]) + "</span>" +
          "</div>";
      } else {
        html += '<div class="stamp-circle empty"></div>';
      }
    }
    grid.innerHTML = html;
    document.getElementById("stamp-modal").classList.remove("hidden");
  }

  function closeStampModal() {
    document.getElementById("stamp-modal").classList.add("hidden");
  }

  // ---------------- 2. 학습 수준 정하기 전용 화면 (참조 4032.png) ----------------
  function computeTwoWeekAutoAdvice() {
    var subjLabels = { korean: "국어", math: "수학", english: "영어", creative: "창의력", hanja: "한자" };
    var keys = ["korean", "math", "english", "hanja"];
    for (var i = 0; i < keys.length; i++) {
      var sk = keys[i];
      if (sk === "hanja" && !state.hanjaEnabled) continue;
      var logs = state.attempts.filter(function (a) { return a.subject === sk; }).slice(-20);
      if (logs.length >= 8) {
        var right = logs.filter(function (a) { return a.correct; }).length;
        var ratio = right / logs.length;
        var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
        var curIdx = state.subjectUnitIdx[sk] || 0;
        if (ratio < 0.6 && curIdx > 0) {
          return {
            subject: sk,
            nextIdx: curIdx - 1,
            msg: "📊 최근 " + subjLabels[sk] + " 정답률이 " + Math.round(ratio * 100) + "%예요. 이전 단원으로 한 걸음 낮춰 복습할까요?"
          };
        }
        if (ratio >= 0.95 && curIdx + 1 < uList.length) {
          return {
            subject: sk,
            nextIdx: curIdx + 1,
            msg: "🌟 최근 " + subjLabels[sk] + " 정답률이 " + Math.round(ratio * 100) + "%예요! 다음 단원으로 올라갈까요?"
          };
        }
      }
    }
    return null;
  }

  function renderLevelScreen() {
    syncTiersFromUnits();

    // 2주 정답률 자동 보정 배너
    var adviceEl = document.getElementById("level-auto-advice");
    var advice = computeTwoWeekAutoAdvice();
    if (advice) {
      adviceEl.classList.remove("hidden");
      adviceEl.innerHTML =
        "<span>" + advice.msg + "</span>" +
        '<button type="button" id="btn-apply-advice" class="mini-tool-btn">바로 반영</button>';
      document.getElementById("btn-apply-advice").addEventListener("click", function () {
        state.subjectUnitIdx[advice.subject] = advice.nextIdx;
        state.presetId = "custom";
        syncTiersFromUnits();
        saveState();
        window.SoundFX.correct();
        renderLevelScreen();
      });
    } else {
      adviceEl.classList.add("hidden");
    }

    // 1) 상단 3단계 일괄 선택 카드 (처음부터 / 기초를 아는 수준 / 앞서 있는 수준)
    var presetRow = document.getElementById("preset-cards-row");
    var pKeys = ["starter", "basic", "advanced"];
    var pHtml = "";
    for (var i = 0; i < pKeys.length; i++) {
      var pk = pKeys[i];
      var def = STAGE_PRESET_DEFS[pk];
      var isSel = state.presetId === pk;
      pHtml +=
        '<button type="button" class="preset-stage-card' + (isSel ? " selected" : "") + '" data-preset="' + pk + '">' +
        '<div class="preset-stage-title">' + def.title + "</div>" +
        '<div class="preset-stage-desc">' + def.desc + "</div>" +
        "</button>";
    }
    presetRow.innerHTML = pHtml;
    var pCards = presetRow.querySelectorAll(".preset-stage-card");
    for (var pc = 0; pc < pCards.length; pc++) {
      pCards[pc].addEventListener("click", function () {
        var chosen = this.getAttribute("data-preset");
        var d = STAGE_PRESET_DEFS[chosen];
        if (d) {
          state.presetId = chosen;
          state.subjectUnitIdx.korean = d.unitIdx.korean;
          state.subjectUnitIdx.math = d.unitIdx.math;
          state.subjectUnitIdx.english = d.unitIdx.english;
          state.subjectUnitIdx.hanja = d.unitIdx.hanja;
          state.creativeDiff = d.creativeDiff;
          syncTiersFromUnits();
          saveState();
          window.SoundFX.click();
          renderLevelScreen();
        }
      });
    }

    // 2) 과목별로 정하기 5행 (국어·수학·영어·한자 + 창의력 쉬움/보통/어려움)
    var rowsWrap = document.getElementById("subject-unit-rows");
    var subjConfigs = [
      { key: "korean", badge: "📝 국어" },
      { key: "math", badge: "🔢 수학" },
      { key: "english", badge: "🔤 영어" },
      { key: "hanja", badge: "漢 한자" }
    ];

    var rHtml = "";
    for (var s = 0; s < subjConfigs.length; s++) {
      var sc = subjConfigs[s];
      var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sc.key]) || [];
      var curIdx = Math.max(0, Math.min(uList.length - 1, state.subjectUnitIdx[sc.key] || 0));
      var uObj = uList[curIdx] || { id: "", title: "-", desc: "" };
      var solved = countUnitCorrect(sc.key, uObj.id);
      var targetCnt = getUnitTargetCount(sc.key, uObj.id);
      var isDisabledHanja = sc.key === "hanja" && !state.hanjaEnabled;

      rHtml +=
        '<div class="subj-unit-row" style="' + (isDisabledHanja ? "opacity:0.5" : "") + '">' +
        '<div class="subj-badge-pill ' + sc.key + '">' + sc.badge + "</div>" +
        '<button type="button" class="unit-arrow-btn" data-subj="' + sc.key + '" data-dir="-1"' + (curIdx <= 0 || isDisabledHanja ? " disabled" : "") + ">◀</button>" +
        '<div class="unit-info-box">' +
        '<div class="unit-info-title">' + (isDisabledHanja ? "한자 학습 제외됨 (아래 버튼으로 켤 수 있어요)" : uObj.title) + "</div>" +
        '<div class="unit-info-desc">' + uObj.desc + " · 맞힌 문제 " + solved + "/" + targetCnt + "</div>" +
        "</div>" +
        '<button type="button" class="unit-arrow-btn" data-subj="' + sc.key + '" data-dir="1"' + (curIdx >= uList.length - 1 || isDisabledHanja ? " disabled" : "") + ">▶</button>" +
        (sc.key === "hanja"
          ? ('<button type="button" id="btn-open-known-hanja" class="unit-action-btn">아는 글자 <span class="coral-highlight">' + state.knownHanja.length + '자</span></button>')
          : "") +
        '<button type="button" class="unit-action-btn btn-subj-check" data-subj="' + sc.key + '"' + (isDisabledHanja ? " disabled" : "") + ">🔍 확인 문제</button>" +
        "</div>";
    }

    // 창의력 행 (4032.png 최하단 행)
    var cDiffs = [
      { id: "easy", label: "쉬움" },
      { id: "normal", label: "보통" },
      { id: "hard", label: "어려움" }
    ];
    var cBtnsHtml = "";
    for (var cd = 0; cd < cDiffs.length; cd++) {
      var dItem = cDiffs[cd];
      cBtnsHtml +=
        '<button type="button" class="creative-level-btn' + (state.creativeDiff === dItem.id ? " active" : "") + '" data-cdiff="' + dItem.id + '">' +
        dItem.label +
        "</button>";
    }

    rHtml +=
      '<div class="subj-unit-row">' +
      '<div class="subj-badge-pill creative">💡 창의력</div>' +
      '<div class="unit-info-box">' +
      '<div class="unit-info-title">수수께끼·규칙 찾기</div>' +
      '<div class="unit-info-desc">단원이 없어서 수준만 골라요 · 동적 시각 퍼즐 포함</div>' +
      "</div>" +
      cBtnsHtml +
      "</div>";

    rowsWrap.innerHTML = rHtml;

    // 바인딩: ◀ ▶ 단원 이동
    var arrowBtns = rowsWrap.querySelectorAll(".unit-arrow-btn");
    for (var ab = 0; ab < arrowBtns.length; ab++) {
      arrowBtns[ab].addEventListener("click", function () {
        var sk = this.getAttribute("data-subj");
        var dir = Number(this.getAttribute("data-dir"));
        var uList2 = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
        var nextIdx = Math.max(0, Math.min(uList2.length - 1, (state.subjectUnitIdx[sk] || 0) + dir));
        state.subjectUnitIdx[sk] = nextIdx;
        state.presetId = "custom";
        syncTiersFromUnits();
        saveState();
        window.SoundFX.click();
        renderLevelScreen();
      });
    }

    // 바인딩: 아는 글자 모달 오픈
    var knownHanjaBtn = document.getElementById("btn-open-known-hanja");
    if (knownHanjaBtn) {
      knownHanjaBtn.addEventListener("click", openKnownHanjaModal);
    }

    // 바인딩: 과목별 🔍 확인 문제
    var checkBtns = rowsWrap.querySelectorAll(".btn-subj-check");
    for (var cb = 0; cb < checkBtns.length; cb++) {
      checkBtns[cb].addEventListener("click", function () {
        var sk = this.getAttribute("data-subj");
        openSubjectCheckModal(sk);
      });
    }

    // 바인딩: 창의력 쉬움/보통/어려움
    var creBtns = rowsWrap.querySelectorAll(".creative-level-btn");
    for (var cr = 0; cr < creBtns.length; cr++) {
      creBtns[cr].addEventListener("click", function () {
        var chosenDiff = this.getAttribute("data-cdiff");
        if (CREATIVE_DIFF_TIERS[chosenDiff]) {
          state.creativeDiff = chosenDiff;
          state.presetId = "custom";
          syncTiersFromUnits();
          saveState();
          window.SoundFX.click();
          renderLevelScreen();
        }
      });
    }

    // 3) 보조 보호자 바 상태 갱신
    var dueCnt = getActiveReviewEntries(true).length;
    var totalPending = getActiveReviewEntries(false).length;
    var gradCnt = getGraduatedReviewCount();
    document.getElementById("review-status-summary").textContent =
      "📚 복습 대기 " + totalPending + "문항 (오늘 도래 " + dueCnt + " · 졸업 " + gradCnt + " · 총 기록 " + state.attempts.length + "회)";

    var btnSpawnRev = document.getElementById("btn-spawn-review-now");
    btnSpawnRev.textContent = totalPending > 0 ? ("🌈 지금 복습 볼 열기 (" + totalPending + ")") : "🌈 복습할 오답 없음";
    btnSpawnRev.disabled = totalPending === 0;

    var hanjaBtn = document.getElementById("btn-toggle-hanja");
    hanjaBtn.textContent = state.hanjaEnabled ? "🖌️ 한자 켜짐" : "🖌️ 한자 꺼짐";
    hanjaBtn.classList.toggle("muted", !state.hanjaEnabled);

    var interBtn = document.getElementById("btn-toggle-interactive");
    if (interBtn) {
      interBtn.textContent = state.interactiveInputsOn ? "🧩 조작 입력기 켜짐" : "🧩 4지선다만 사용";
      interBtn.classList.toggle("muted", !state.interactiveInputsOn);
    }

    var fleeBtn = document.getElementById("btn-toggle-flee");
    fleeBtn.textContent = state.fleePenaltyOn ? "💨 3실패 도망 켜짐" : "🛡️ 무벌칙 해설 모드";
  }

  // 과목별 🔍 확인 문제 모달
  function openSubjectCheckModal(subj) {
    var subjTitles = { korean: "국어", math: "수학", english: "영어", hanja: "한자" };
    var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[subj]) || [];
    var pickedItems = [];

    for (var i = 0; i < uList.length && pickedItems.length < 4; i++) {
      var u = uList[i];
      var match = ALL_STATIC_QUESTIONS.filter(function (q) {
        return (q.subject || q.category) === subj && q.unit === u.id;
      });
      if (match.length > 0) {
        var sample = match[Math.floor(Math.random() * match.length)];
        pickedItems.push({ unitId: u.id, unitIdx: i, q: sample });
      }
    }

    if (pickedItems.length === 0) return;
    checkQuizState.active = true;
    checkQuizState.subject = subj;
    checkQuizState.items = pickedItems;
    checkQuizState.index = 0;
    checkQuizState.passedUnits = [];

    window.SoundFX.click();
    document.getElementById("check-modal-title").textContent = "🔍 " + (subjTitles[subj] || "") + " 출발 단원 확인";
    renderSubjectCheckStep();
    document.getElementById("unit-check-modal").classList.remove("hidden");
  }

  function renderSubjectCheckStep() {
    var step = checkQuizState.items[checkQuizState.index];
    if (!step) return;
    var q = step.q;
    document.getElementById("check-modal-progress").textContent =
      "🔍 수준 확인 문제 (" + (checkQuizState.index + 1) + " / " + checkQuizState.items.length + ")";
    document.getElementById("check-modal-question").textContent = q.question;

    var svgBox = document.getElementById("check-modal-svg");
    if (q.svg) {
      svgBox.innerHTML = q.svg;
      svgBox.classList.remove("hidden");
    } else {
      svgBox.innerHTML = "";
      svgBox.classList.add("hidden");
    }

    var wrap = document.getElementById("check-modal-choices");
    var shuffled = shuffle(q.choices);
    var html = "";
    for (var i = 0; i < shuffled.length; i++) {
      html += '<button type="button" class="choice-btn diag-choice-btn"><span class="choice-label"></span></button>';
    }
    wrap.innerHTML = html;
    var btns = wrap.querySelectorAll(".diag-choice-btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].querySelector(".choice-label").textContent = shuffled[b];
      (function (chosenVal) {
        btns[b].addEventListener("click", function () {
          var ok = String(chosenVal) === String(q.answer);
          if (ok) {
            window.SoundFX.correct();
            checkQuizState.passedUnits.push(step);
            checkQuizState.index += 1;
            if (checkQuizState.index >= checkQuizState.items.length) {
              finishSubjectCheck();
            } else {
              renderSubjectCheckStep();
            }
          } else {
            // 틀린 첫 단원을 바로 출발 단원으로 지정!
            window.SoundFX.wrong();
            finishSubjectCheck(step.unitIdx);
          }
        });
      })(shuffled[b]);
    }
  }

  function finishSubjectCheck(stoppedAtUnitIdx) {
    var sk = checkQuizState.subject;
    var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
    for (var i = 0; i < checkQuizState.passedUnits.length; i++) {
      var pu = checkQuizState.passedUnits[i];
      state.unitStatus[pu.unitId] = "checked";
    }
    var targetIdx = (typeof stoppedAtUnitIdx === "number")
      ? stoppedAtUnitIdx
      : Math.min(uList.length - 1, checkQuizState.passedUnits.length);
    state.subjectUnitIdx[sk] = targetIdx;
    state.presetId = "custom";
    syncTiersFromUnits();
    saveState();
    checkQuizState.active = false;
    document.getElementById("unit-check-modal").classList.add("hidden");
    if (state.screen === "level") renderLevelScreen();
  }

  // 한자 아는 글자 50자 모달
  function openKnownHanjaModal() {
    window.SoundFX.click();
    renderKnownHanjaGrid();
    document.getElementById("hanja-known-modal").classList.remove("hidden");
  }

  function renderKnownHanjaGrid() {
    var list = window.HANJA_50_LIST || [];
    var grid = document.getElementById("hanja-known-grid");
    var html = "";
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var isKnown = state.knownHanja.indexOf(item.ch) !== -1;
      html +=
        '<button type="button" class="hanja-chip-btn' + (isKnown ? " known" : "") + '" data-ch="' + item.ch + '">' +
        '<span class="hanja-chip-big">' + item.ch + "</span>" +
        '<span class="hanja-chip-hun">' + item.hun + "</span>" +
        "</button>";
    }
    grid.innerHTML = html;
    var btns = grid.querySelectorAll(".hanja-chip-btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener("click", function () {
        var ch = this.getAttribute("data-ch");
        var pos = state.knownHanja.indexOf(ch);
        if (pos === -1) state.knownHanja.push(ch);
        else state.knownHanja.splice(pos, 1);
        saveState();
        window.SoundFX.click();
        renderKnownHanjaGrid();
        if (state.screen === "level") renderLevelScreen();
      });
    }
  }

  // ---------------- 3. 성취도 전용 화면 (참조 4033.png 4열 대시보드) ----------------
  function renderProgressScreen() {
    syncTiersFromUnits();

    // 상단 창의력 요약 배지
    var creLogs = state.attempts.filter(function (a) { return a.subject === "creative"; });
    var creDiffLabel = state.creativeDiff === "hard" ? "어려움" : (state.creativeDiff === "normal" ? "보통" : "쉬움");
    var creAccText = creLogs.length > 0
      ? ("정답률 " + Math.round((creLogs.filter(function (a) { return a.correct; }).length / creLogs.length) * 100) + "%")
      : "기록 없음";
    document.getElementById("progress-creative-summary").textContent =
      "💡 창의력(" + creDiffLabel + "): " + creAccText;

    var grid = document.getElementById("progress-columns-grid");
    var cols = [
      { key: "korean", title: "📝 국어" },
      { key: "math", title: "🔢 수학" },
      { key: "english", title: "🔤 영어" },
      { key: "hanja", title: "漢 한자" }
    ];

    var todayIso = getTodayLocalStr();
    var twoWeeksAgoIso = addDaysLocalStr(todayIso, -14);
    var html = "";

    for (var c = 0; c < cols.length; c++) {
      var col = cols[c];
      var sk = col.key;
      var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
      var activeIdx = state.subjectUnitIdx[sk] || 0;

      // 최근 2주 기록 계산
      var recentLogs = state.attempts.filter(function (a) {
        return a.subject === sk && (!a.date || a.date >= twoWeeksAgoIso);
      });
      var recentLabel = recentLogs.length > 0
        ? ("최근 2주 정답률 " + Math.round((recentLogs.filter(function (a) { return a.correct; }).length / recentLogs.length) * 100) + "% (" + recentLogs.length + "문항)")
        : "최근 2주 기록 없음";

      var unitsHtml = "";
      for (var u = 0; u < uList.length; u++) {
        var unit = uList[u];
        var st = state.unitStatus[unit.id] || "";
        var solved = countUnitCorrect(sk, unit.id);
        var targetCnt = getUnitTargetCount(sk, unit.id);
        var pct = Math.min(100, Math.round((solved / targetCnt) * 100));

        var icon = "○";
        var statusTxt = "앞으로 배울 단원";
        var cardCls = "prog-unit-card";

        if (u === activeIdx) {
          icon = "▶";
          statusTxt = "배우는 중" + (solved > 0 ? (" (" + solved + "/" + targetCnt + ")") : "");
          cardCls += " active-learning";
        } else if (st === "completed") {
          icon = "✅";
          statusTxt = "풀어서 마침";
          cardCls += " completed-unit";
        } else if (st === "checked") {
          icon = "🔍";
          statusTxt = "확인 문제로 통과";
          cardCls += " completed-unit";
        } else if (st === "parent_passed") {
          icon = "👤";
          statusTxt = "보호자가 통과 처리";
          cardCls += " completed-unit";
        } else if (u < activeIdx) {
          icon = "🔍";
          statusTxt = "이전 단계 통과";
          cardCls += " completed-unit";
        }

        unitsHtml +=
          '<button type="button" class="' + cardCls + '" data-subj="' + sk + '" data-uidx="' + u + '">' +
          '<div class="prog-unit-top"><span>' + icon + "</span><span>" + unit.title + "</span></div>" +
          '<div class="prog-unit-status">' + statusTxt + "</div>" +
          (u === activeIdx
            ? ('<div class="prog-bar-track"><div class="prog-bar-fill" style="width:' + Math.max(8, pct) + '%"></div></div>')
            : "") +
          "</button>";
      }

      // 하단 영역별 정답률 (4033.png 하단 구조)
      var domList = (window.SUBJECT_DOMAINS_LIST && window.SUBJECT_DOMAINS_LIST[sk]) || [];
      var domHtml = '<div class="prog-domain-footer"><div class="prog-domain-heading">영역별 정답률</div>';
      for (var d = 0; d < domList.length; d++) {
        var domName = domList[d];
        var dLogs = state.attempts.filter(function (a) { return a.subject === sk && a.domain === domName; });
        var dVal = dLogs.length > 0
          ? (Math.round((dLogs.filter(function (a) { return a.correct; }).length / dLogs.length) * 100) + "%")
          : "아직 없음";
        domHtml += '<div class="prog-domain-row"><span>' + domName + "</span><span>" + dVal + "</span></div>";
      }
      domHtml += "</div>";

      html +=
        '<div class="prog-col">' +
        '<div class="prog-col-header ' + sk + '">' +
        '<div class="prog-col-title">' + col.title + "</div>" +
        '<div class="prog-col-recent">' + recentLabel + "</div>" +
        "</div>" +
        '<div class="prog-unit-list">' + unitsHtml + "</div>" +
        domHtml +
        "</div>";
    }

    grid.innerHTML = html;

    var uCards = grid.querySelectorAll(".prog-unit-card");
    for (var k = 0; k < uCards.length; k++) {
      uCards[k].addEventListener("click", function () {
        var sk = this.getAttribute("data-subj");
        var uIdx = Number(this.getAttribute("data-uidx"));
        openUnitActionModal(sk, uIdx);
      });
    }
  }

  function openUnitActionModal(subj, uIdx) {
    var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[subj]) || [];
    var uObj = uList[uIdx];
    if (!uObj) return;
    modalState.actionSubject = subj;
    modalState.actionUnitIdx = uIdx;
    window.SoundFX.click();
    document.getElementById("unit-action-title").textContent = uObj.title;
    document.getElementById("unit-action-desc").textContent = uObj.desc;
    document.getElementById("unit-action-modal").classList.remove("hidden");
  }

  function closeUnitActionModal() {
    document.getElementById("unit-action-modal").classList.add("hidden");
  }

  // ---------------- 4. 지역 선택 & 5. 필드 화면 ----------------
  function renderRegionScreen() {
    var container = document.getElementById("region-grid");
    var keys = ["forest", "city", "desert", "sea"];
    var html = "";
    for (var i = 0; i < keys.length; i++) {
      var rk = keys[i];
      var reg = window.POKEMON_REGIONS[rk];
      var list = window.POKEMON_DATA.filter(function (p) { return p.region === rk; });
      var caughtInRegion = list.filter(function (p) { return isCaught(p.id); }).length;

      html +=
        '<button type="button" class="region-card" data-region="' + rk + '" style="background:' + reg.bgGradient + '">' +
        '<div class="region-card-top">' +
        '<span class="region-emoji">' + reg.emoji + "</span>" +
        '<span class="region-count-pill">잡은 수 ' + caughtInRegion + " / " + list.length + "</span>" +
        "</div>" +
        "<div>" +
        '<div class="region-name">' + reg.name + "</div>" +
        '<div class="region-desc">' + reg.subtitle + "</div>" +
        '<div class="region-type-row">' + renderTypeBadgesHtml(reg.badgeTypes) + "</div>" +
        "</div>" +
        "</button>";
    }
    container.innerHTML = html;

    var cards = container.querySelectorAll(".region-card");
    for (var c = 0; c < cards.length; c++) {
      cards[c].addEventListener("click", function () {
        var chosen = this.getAttribute("data-region");
        window.SoundFX.click();
        state.regionId = chosen;
        showScreen("field");
      });
    }
  }

  function resizeFieldCanvas() {
    if (!field.canvas) return;
    var rect = field.canvas.parentElement.getBoundingClientRect();
    var w = Math.max(320, Math.floor(rect.width));
    var h = Math.max(220, Math.floor(rect.height));
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    field.width = w;
    field.height = h;
    field.dpr = dpr;
    field.canvas.width = w * dpr;
    field.canvas.height = h * dpr;
    field.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    field.player.x = Math.max(40, Math.min(w - 40, field.player.x));
    field.player.y = Math.max(54, Math.min(h - 36, field.player.y));
    buildRegionScenery();
  }

  function buildRegionScenery() {
    var w = field.width;
    var h = field.height;
    var spots = [
      [0.12, 0.22], [0.86, 0.2], [0.18, 0.78], [0.84, 0.76],
      [0.48, 0.18], [0.32, 0.62], [0.68, 0.58], [0.1, 0.5], [0.91, 0.48]
    ];
    var items = [];
    for (var i = 0; i < spots.length; i++) {
      items.push({ x: spots[i][0] * w, y: spots[i][1] * h, variant: i % 3 });
    }
    field.scenery = items;
  }

  function spawnBall(forceGold, forceReview) {
    var w = field.width;
    var h = field.height;
    var margin = 48;
    var bx = margin + Math.random() * Math.max(80, w - margin * 2);
    var by = margin + 20 + Math.random() * Math.max(80, h - margin * 2 - 20);
    for (var tries = 0; tries < 12; tries++) {
      if (Math.hypot(bx - field.player.x, by - field.player.y) >= 145) break;
      bx = margin + Math.random() * Math.max(80, w - margin * 2);
      by = margin + 20 + Math.random() * Math.max(80, h - margin * 2 - 20);
    }

    var isReview = !!forceReview;
    var hasGoldAlready = field.balls.some(function (b) { return b.isGold; });
    var isGold = false;
    if (!isReview) {
      if (typeof forceGold === "boolean") isGold = forceGold;
      else if (!hasGoldAlready) isGold = Math.random() < (state.normalBattlesSinceGold >= 3 ? 0.65 : 0.24);
    }

    var angle = Math.random() * Math.PI * 2;
    var speed = isReview ? 52 : (isGold ? 62 : (42 + Math.random() * 20));
    return {
      id: "ball_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
      x: bx,
      y: by,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: (isGold || isReview) ? 22 : 19,
      rot: Math.random() * Math.PI * 2,
      isGold: isGold,
      isReview: isReview,
      sparklePhase: Math.random() * 6.28
    };
  }

  function updateFieldHintBar() {
    var hintEl = document.getElementById("field-hint-bar");
    if (!hintEl) return;
    var hasReview = field.balls.some(function (b) { return b.isReview; });
    if (hasReview) {
      hintEl.textContent = "🌈 무지개 복습 볼 등장! 문제를 완주하면 다음 3번 이로치 확률이 쑥 올라가요!";
    } else if (state.shinyBoostBattles > 0) {
      hintEl.textContent = "🍀 복습 부적 발동 중! 남은 " + state.shinyBoostBattles + "번 배틀에서 색이 다른 포켓몬 확률 대폭 상승!";
    } else {
      hintEl.textContent = "👆 가고 싶은 곳이나 몬스터볼을 터치·클릭해 걸어가 보세요!";
    }
  }

  function startFieldScreen() {
    stopFieldLoop();
    resizeFieldCanvas();
    field.player.x = field.width * 0.5;
    field.player.y = field.height * 0.55;
    field.player.targetX = null;
    field.player.targetY = null;
    field.player.targetBall = null;
    field.player.moving = false;

    field.balls = [];
    if (getActiveReviewEntries(true).length > 0) {
      field.balls.push(spawnBall(false, true));
    }
    while (field.balls.length < 5) {
      field.balls.push(spawnBall());
    }
    updateFieldHintBar();

    field.lastTs = performance.now();
    drawField();
    field.rafId = requestAnimationFrame(fieldLoop);
    field.timerId = setInterval(function () {
      if (state.screen !== "field") return;
      var now = performance.now();
      if (now - field.lastTs >= 40) stepFieldFrame(now);
    }, 33);
  }

  function stopFieldLoop() {
    if (field.rafId) {
      cancelAnimationFrame(field.rafId);
      field.rafId = null;
    }
    if (field.timerId) {
      clearInterval(field.timerId);
      field.timerId = null;
    }
    field.pointerDown = false;
    field.keys = {};
  }

  function setPlayerPointerTarget(clientX, clientY) {
    if (!field.canvas || state.screen !== "field") return;
    var rect = field.canvas.getBoundingClientRect();
    var x = Math.max(28, Math.min(field.width - 28, clientX - rect.left));
    var y = Math.max(40, Math.min(field.height - 28, clientY - rect.top));

    var clickedBall = null;
    var bestDist = 66;
    for (var i = 0; i < field.balls.length; i++) {
      var b = field.balls[i];
      var d = Math.hypot(b.x - x, b.y - y);
      if (d < bestDist) {
        bestDist = d;
        clickedBall = b;
      }
    }
    field.player.targetBall = clickedBall;
    field.player.targetX = x;
    field.player.targetY = y;
  }

  function updateField(dt) {
    var p = field.player;
    var w = field.width;
    var h = field.height;
    var margin = 28;

    var kx = 0;
    var ky = 0;
    if (field.keys["ArrowLeft"] || field.keys["KeyA"]) kx -= 1;
    if (field.keys["ArrowRight"] || field.keys["KeyD"]) kx += 1;
    if (field.keys["ArrowUp"] || field.keys["KeyW"]) ky -= 1;
    if (field.keys["ArrowDown"] || field.keys["KeyS"]) ky += 1;

    if (kx !== 0 || ky !== 0) {
      p.targetX = null;
      p.targetY = null;
      p.targetBall = null;
      var len = Math.hypot(kx, ky);
      p.x += (kx / len) * p.speed * dt;
      p.y += (ky / len) * p.speed * dt;
      if (Math.abs(kx) > 0.05) p.facing = kx > 0 ? 1 : -1;
      p.moving = true;
    } else {
      if (p.targetBall && field.balls.indexOf(p.targetBall) !== -1) {
        p.targetX = p.targetBall.x;
        p.targetY = p.targetBall.y;
      }
      if (p.targetX !== null && p.targetY !== null) {
        var dx = p.targetX - p.x;
        var dy = p.targetY - p.y;
        var dist = Math.hypot(dx, dy);
        if (dist <= 5) {
          p.x = p.targetX;
          p.y = p.targetY;
          p.targetX = null;
          p.targetY = null;
          p.targetBall = null;
          p.moving = false;
        } else {
          var step = Math.min(dist, p.speed * dt);
          p.x += (dx / dist) * step;
          p.y += (dy / dist) * step;
          if (Math.abs(dx) > 1) p.facing = dx > 0 ? 1 : -1;
          p.moving = true;
        }
      } else {
        p.moving = false;
      }
    }

    p.x = Math.max(margin, Math.min(w - margin, p.x));
    p.y = Math.max(margin + 12, Math.min(h - margin, p.y));
    p.walkPhase = p.moving ? p.walkPhase + dt * 12 : 0;

    for (var i = 0; i < field.balls.length; i++) {
      var b = field.balls[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.rot += (b.vx * dt) / b.r;
      b.sparklePhase += dt * 5;

      var bMargin = 34;
      if (b.x < bMargin) { b.x = bMargin; b.vx = Math.abs(b.vx); }
      else if (b.x > w - bMargin) { b.x = w - bMargin; b.vx = -Math.abs(b.vx); }
      if (b.y < bMargin + 16) { b.y = bMargin + 16; b.vy = Math.abs(b.vy); }
      else if (b.y > h - bMargin) { b.y = h - bMargin; b.vy = -Math.abs(b.vy); }

      var cDist = Math.hypot(p.x - b.x, p.y - b.y);
      var chasingSpecial = p.targetBall && field.balls.indexOf(p.targetBall) !== -1 && (p.targetBall.isGold || p.targetBall.isReview);
      if (cDist <= p.r + b.r + 8 && (!chasingSpecial || b === p.targetBall)) {
        var hitGold = b.isGold;
        var hitReview = b.isReview;
        field.balls.splice(i, 1);
        enterBattle(hitGold, hitReview);
        return;
      }
    }
  }

  function drawField() {
    var ctx = field.ctx;
    var w = field.width;
    var h = field.height;
    var reg = state.regionId;
    ctx.clearRect(0, 0, w, h);

    if (reg === "forest") {
      var g1 = ctx.createLinearGradient(0, 0, 0, h);
      g1.addColorStop(0, "#9be89f");
      g1.addColorStop(1, "#51cf66");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "#e9fac8";
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 54;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(w * 0.12, h * 0.55);
      ctx.quadraticCurveTo(w * 0.5, h * 0.35, w * 0.88, h * 0.62);
      ctx.stroke();
      ctx.globalAlpha = 1;

      for (var i = 0; i < field.scenery.length; i++) {
        var s = field.scenery[i];
        if (s.variant === 0) {
          ctx.fillStyle = "#6d4c41";
          ctx.fillRect(s.x - 6, s.y + 4, 12, 16);
          ctx.fillStyle = "#2b8a3e";
          ctx.beginPath();
          ctx.arc(s.x, s.y - 4, 22, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#1b2546";
          ctx.lineWidth = 2.8;
          ctx.stroke();
        } else {
          ctx.fillStyle = s.variant === 1 ? "#ffe066" : "#ff8787";
          ctx.beginPath();
          ctx.arc(s.x, s.y, 7, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(s.x, s.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else if (reg === "city") {
      ctx.fillStyle = "#dee2e6";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(255,255,255,0.65)";
      ctx.lineWidth = 2;
      for (var gx = 0; gx < w; gx += 64) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
      }
      for (var gy = 0; gy < h; gy += 64) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
      }
      var bColors = ["#74c0fc", "#ffd43b", "#da77f2", "#63e6be", "#ffa8a8"];
      for (var bi = 0; bi < 7; bi++) {
        var bw = w / 7;
        ctx.fillStyle = bColors[bi % bColors.length];
        ctx.fillRect(bi * bw + 6, 0, bw - 12, 34);
        ctx.strokeStyle = "#232538";
        ctx.lineWidth = 2.5;
        ctx.strokeRect(bi * bw + 6, 0, bw - 12, 34);
      }
    } else if (reg === "desert") {
      var gd = ctx.createLinearGradient(0, 0, 0, h);
      gd.addColorStop(0, "#ffe066");
      gd.addColorStop(1, "#fcc419");
      ctx.fillStyle = gd;
      ctx.fillRect(0, 0, w, h);
      for (var si = 0; si < field.scenery.length; si++) {
        var ds = field.scenery[si];
        if (ds.variant === 0) {
          ctx.fillStyle = "#40c057";
          ctx.strokeStyle = "#232538";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.roundRect(ds.x - 6, ds.y - 20, 12, 34, 6);
          ctx.fill();
          ctx.stroke();
        }
      }
    } else {
      var gs = ctx.createLinearGradient(0, 0, 0, h);
      gs.addColorStop(0, "#4dabf7");
      gs.addColorStop(0.72, "#74c0fc");
      gs.addColorStop(1, "#fff3bf");
      ctx.fillStyle = gs;
      ctx.fillRect(0, 0, w, h);
    }

    var p = field.player;
    if (p.targetX !== null && p.targetY !== null) {
      var pulse = 12 + Math.sin(performance.now() / 130) * 4;
      ctx.save();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(p.targetX, p.targetY, pulse, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    for (var bIdx = 0; bIdx < field.balls.length; bIdx++) {
      drawRollingBall(ctx, field.balls[bIdx]);
    }
    drawTrainer(ctx, p);
  }

  function drawRollingBall(ctx, b) {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
    ctx.beginPath();
    ctx.ellipse(b.x, b.y + b.r - 1, b.r * 0.9, b.r * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();

    if (b.isReview || b.isGold) {
      ctx.fillStyle = b.isReview ? "rgba(38, 198, 218, 0.38)" : "rgba(255, 212, 59, 0.38)";
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r + 9 + Math.sin(b.sparklePhase) * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.translate(b.x, b.y);
    ctx.rotate(b.rot);

    ctx.beginPath();
    ctx.arc(0, 0, b.r, Math.PI, 0);
    if (b.isReview) {
      var rg = ctx.createLinearGradient(-b.r, 0, b.r, 0);
      rg.addColorStop(0, "#26c6da");
      rg.addColorStop(0.5, "#ab47bc");
      rg.addColorStop(1, "#ffd43b");
      ctx.fillStyle = rg;
    } else {
      ctx.fillStyle = b.isGold ? "#ffd43b" : "#ff5252";
    }
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, b.r, 0, Math.PI);
    ctx.fillStyle = b.isGold ? "#fff9db" : "#ffffff";
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "#232538";
    ctx.beginPath();
    ctx.arc(0, 0, b.r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-b.r, 0);
    ctx.lineTo(b.r, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, b.r * 0.32, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    if (b.isReview || b.isGold) {
      ctx.save();
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff9db";
      ctx.strokeStyle = "#232538";
      ctx.lineWidth = 3.2;
      var labelY = b.y - b.r - 8;
      var tagTxt = b.isReview ? "🌈복습볼" : "✨황금볼";
      ctx.strokeText(tagTxt, b.x, labelY);
      ctx.fillText(tagTxt, b.x, labelY);
      ctx.restore();
    }
  }

  function drawTrainer(ctx, p) {
    var bob = p.moving ? Math.abs(Math.sin(p.walkPhase)) * 4 : 0;
    ctx.save();
    ctx.translate(p.x, p.y - bob);

    ctx.fillStyle = "rgba(0,0,0,0.24)";
    ctx.beginPath();
    ctx.ellipse(0, 22 + bob, 18, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#3b82f6";
    ctx.strokeStyle = "#232538";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(-13, 0, 26, 18, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffe0b2";
    ctx.beginPath();
    ctx.arc(0, -10, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ff5252";
    ctx.beginPath();
    ctx.arc(0, -13, 15.5, Math.PI, 0);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(p.facing * 7, -13, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#232538";
    ctx.beginPath();
    ctx.arc(p.facing * 2 - 4, -8, 2.4, 0, Math.PI * 2);
    ctx.arc(p.facing * 2 + 5, -8, 2.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function stepFieldFrame(ts) {
    if (state.screen !== "field") return;
    var dt = Math.min(0.05, Math.max(0.001, (ts - field.lastTs) / 1000));
    field.lastTs = ts;
    updateField(dt);
    if (state.screen === "field") drawField();
  }

  function fieldLoop(ts) {
    if (state.screen !== "field") return;
    stepFieldFrame(ts);
    if (state.screen === "field") field.rafId = requestAnimationFrame(fieldLoop);
  }

  // ---------------- 6. 배틀 시스템 ----------------
  function pickPokemonForBattle(regionId, isGold) {
    var pool = window.POKEMON_DATA.filter(function (p) {
      return p.region === regionId && !!p.rare === !!isGold;
    });
    if (pool.length === 0) {
      pool = window.POKEMON_DATA.filter(function (p) { return !!p.rare === !!isGold; });
    }
    var uncaught = pool.filter(function (p) { return !isCaught(p.id); });
    var source = (uncaught.length > 0 && Math.random() < 0.78) ? uncaught : pool;
    return source[Math.floor(Math.random() * source.length)];
  }

  function pickDistractorNames(poke) {
    var sameRegion = window.POKEMON_DATA.filter(function (p) {
      return p.region === poke.region && p.id !== poke.id;
    });
    var pool = sameRegion.length >= 10 ? sameRegion : window.POKEMON_DATA.filter(function (p) {
      return p.id !== poke.id;
    });
    var picked = [];
    var used = {};
    used[poke.name] = true;
    while (picked.length < 3) {
      var cand = pool[Math.floor(Math.random() * pool.length)];
      if (!used[cand.name]) {
        used[cand.name] = true;
        picked.push(cand.name);
      }
    }
    return picked;
  }

  function getActiveSubjects() {
    var list = ["korean", "math", "english"];
    if (state.creativeEnabled !== false) list.push("creative");
    if (state.hanjaEnabled) list.push("hanja");
    return list;
  }

  function getSynergyTypesForPokemon(poke) {
    var out = [];
    if (!poke || !Array.isArray(poke.types)) return out;
    var wMap = window.TYPE_WEAKNESS_MAP || {};
    for (var i = 0; i < poke.types.length; i++) {
      var t = poke.types[i];
      var weakList = wMap[t] || [];
      for (var j = 0; j < weakList.length; j++) pushUnique(out, weakList[j]);
      pushUnique(out, t);
    }
    return out;
  }

  function annotateSynergy(q, poke) {
    var synTypes = getSynergyTypesForPokemon(poke);
    var map = window.SUBJECT_DOMAIN_TYPE_MAP || {};
    var pType = q.pokeType || "";
    var isSyn = pType && synTypes.indexOf(pType) !== -1;
    var meta = map[pType] || null;
    q.isSynergy = !!isSyn;
    q.synergyMove = (isSyn && meta) ? meta.move : "";
    return q;
  }

  function cloneQuestionForBattle(picked, poke) {
    var cloned = {
      id: picked.id,
      seed: picked.seed || null,
      templateId: picked.templateId || null,
      svg: picked.svg || "",
      subject: picked.subject || picked.category,
      category: picked.subject || picked.category,
      unit: picked.unit || "",
      tier: picked.tier || 2,
      domain: picked.domain || "",
      pokeType: picked.pokeType || "",
      format: picked.format || "choice",
      inputType: picked.inputType || "choice",
      assembleMode: picked.assembleMode || "",
      parts: picked.parts ? picked.parts.slice() : null,
      tiles: picked.tiles ? shuffle(picked.tiles) : null,
      hanjaChar: picked.hanjaChar || "",
      hanjaHun: picked.hanjaHun || "",
      strokes: picked.strokes || null,
      question: picked.question,
      choices: shuffle(picked.choices || [picked.answer, "1", "2", "3"]),
      answer: picked.answer,
      hint: picked.hint || "",
      ttsKo: picked.ttsKo || picked.question,
      ttsEn: picked.ttsEn || ""
    };
    // 수학 문항 중 정답이 0~99 자연수이고 조작 입력기가 켜져 있으면 화면 내 숫자 패드(numpad)로 전환!
    if (
      state.interactiveInputsOn &&
      cloned.inputType === "choice" &&
      cloned.subject === "math" &&
      /^(?:0|[1-9]\d?)$/.test(String(cloned.answer).trim()) &&
      (state.forceInputTypeNext === "numpad" || Math.random() < 0.55)
    ) {
      cloned.inputType = "numpad";
      if (state.forceInputTypeNext === "numpad") state.forceInputTypeNext = "";
    }
    return annotateSynergy(cloned, poke);
  }

  function pickSubjectQuestionWithinTier(subj, maxTier, alreadySelected, preferTypes, specificUnitId) {
    var cappedTier = Math.max(1, Math.min(10, Number(maxTier) || 2));

    // 강제 조작 입력기 테스트/미리보기 요청 처리
    if (state.forceInputTypeNext === "hangul_assemble" && subj === "korean" && typeof window.generateHangulBuildQuestion === "function") {
      state.forceInputTypeNext = "";
      return window.generateHangulBuildQuestion(cappedTier, specificUnitId);
    }
    if (state.forceInputTypeNext === "hanja_trace" && subj === "hanja" && typeof window.generateHanjaTraceQuestion === "function") {
      state.forceInputTypeNext = "";
      return window.generateHanjaTraceQuestion(cappedTier, state.knownHanja);
    }

    // 일반 플레이 중 조작형 교구(3조각 한글 조합기 & 한자 획순 따라쓰기) 자연 출제!
    if (state.interactiveInputsOn) {
      if (subj === "korean" && Math.random() < 0.45 && typeof window.generateHangulBuildQuestion === "function") {
        return window.generateHangulBuildQuestion(cappedTier, specificUnitId);
      }
      if (subj === "hanja" && Math.random() < 0.45 && typeof window.generateHanjaTraceQuestion === "function") {
        var alreadyHasTrace = alreadySelected && alreadySelected.some(function (s) { return s.inputType === "hanja_trace"; });
        if (!alreadyHasTrace) {
          return window.generateHanjaTraceQuestion(cappedTier, state.knownHanja);
        }
      }
    }

    if (state.forceVisualSubj === subj) {
      state.forceVisualSubj = "";
      if (subj === "creative" && typeof window.generateDynamicVisualCreative === "function") {
        return window.generateDynamicVisualCreative(cappedTier);
      }
      if (subj === "math" && typeof window.generateDynamicVisualMath === "function") {
        return window.generateDynamicVisualMath(cappedTier);
      }
    }

    if (!specificUnitId && subj === "math") {
      var rMath = Math.random();
      if (rMath < 0.55 && typeof window.generateDynamicVisualMath === "function") {
        return window.generateDynamicVisualMath(cappedTier);
      }
      if (rMath < 0.75 && typeof window.generateDynamicMathQuestion === "function") {
        return window.generateDynamicMathQuestion(cappedTier);
      }
    }
    if (!specificUnitId && subj === "creative" && Math.random() < 0.50 && typeof window.generateDynamicVisualCreative === "function") {
      return window.generateDynamicVisualCreative(cappedTier);
    }

    var candidates = ALL_STATIC_QUESTIONS.filter(function (q) {
      var qSubj = q.subject || q.category;
      if (qSubj !== subj) return false;
      if (specificUnitId) return q.unit === specificUnitId;
      return (q.tier || 1) <= cappedTier;
    });

    // 한자에서 '아는 글자'로 등록된 글자만 포함된 문항은 새 출제 우선순위에서 뒤로 미룸
    if (subj === "hanja" && state.knownHanja.length > 0) {
      var unmastered = candidates.filter(function (q) {
        if (!q.hanjaChars || q.hanjaChars.length === 0) return true;
        return q.hanjaChars.some(function (ch) { return state.knownHanja.indexOf(ch) === -1; });
      });
      if (unmastered.length > 0) candidates = unmastered;
    }

    if (candidates.length === 0) {
      candidates = ALL_STATIC_QUESTIONS.filter(function (q) {
        return (q.subject || q.category) === subj && (q.tier || 1) <= Math.max(cappedTier, 3);
      });
    }

    var fresh = candidates.filter(function (q) {
      return state.recentQuestionIds.indexOf(q.id) === -1 &&
             alreadySelected.every(function (s) { return s.id !== q.id; });
    });
    var pool = fresh.length > 0 ? fresh : candidates;

    if (preferTypes && preferTypes.length > 0) {
      var synPool = pool.filter(function (q) {
        return q.pokeType && preferTypes.indexOf(q.pokeType) !== -1;
      });
      if (synPool.length > 0) pool = synPool;
    }

    var chosen = pool[Math.floor(Math.random() * pool.length)];
    if (chosen) {
      state.recentQuestionIds.push(chosen.id);
      if (state.recentQuestionIds.length > 70) state.recentQuestionIds.shift();
    }
    return chosen;
  }

  function pickLearningQuizzes(count, poke, isReviewBattle) {
    var selected = [];
    if (isReviewBattle) {
      var dueList = getActiveReviewEntries(true);
      if (dueList.length === 0) dueList = getActiveReviewEntries(false);
      for (var r = 0; r < dueList.length && selected.length < count; r++) {
        var rq = reconstructReviewQuestion(dueList[r]);
        if (rq) {
          rq.isReviewItem = true;
          selected.push(annotateSynergy(rq, poke));
        }
      }
    }

    // 성취도 화면에서 특정 단원을 눌러 바로 배틀에 진입한 경우!
    var forcedUnit = state.forcedBattleUnit;
    state.forcedBattleUnit = null;
    if (forcedUnit && forcedUnit.subject) {
      while (selected.length < count) {
        var fq = pickSubjectQuestionWithinTier(forcedUnit.subject, 10, selected, null, forcedUnit.unitId);
        if (!fq) break;
        selected.push(cloneQuestionForBattle(fq, poke));
      }
      if (selected.length >= count) return selected;
    }

    // 강제 입력기 지정 시 해당 과목을 최우선 배정!
    if (state.forceInputTypeNext === "hangul_assemble" && typeof window.generateHangulBuildQuestion === "function") {
      state.forceInputTypeNext = "";
      selected.push(cloneQuestionForBattle(window.generateHangulBuildQuestion(state.subjectTiers.korean || 3), poke));
    } else if (state.forceInputTypeNext === "hanja_trace" && typeof window.generateHanjaTraceQuestion === "function") {
      state.forceInputTypeNext = "";
      selected.push(cloneQuestionForBattle(window.generateHanjaTraceQuestion(state.subjectTiers.hanja || 3, state.knownHanja), poke));
    } else if (state.forceInputTypeNext === "numpad" && typeof window.generateDynamicMathQuestion === "function") {
      var nq = window.generateDynamicMathQuestion(state.subjectTiers.math || 3);
      nq.inputType = "numpad";
      state.forceInputTypeNext = "";
      selected.push(cloneQuestionForBattle(nq, poke));
    }

    // 오늘의 루틴 집중 모드가 켜져 있으면 미달성 루틴 과목을 우선 배정!
    if (state.routineActive) {
      var rGuard = 0;
      while (selected.length < count && rGuard < 10) {
        rGuard += 1;
        var nextSubj = pickNextRoutineSubject();
        if (!nextSubj) break;
        var rPicked = pickSubjectQuestionWithinTier(nextSubj, state.subjectTiers[nextSubj] || 2, selected, null);
        if (rPicked) selected.push(cloneQuestionForBattle(rPicked, poke));
      }
      if (selected.length >= count) return selected;
    }

    var activeSubjects = getActiveSubjects();
    var synTypes = getSynergyTypesForPokemon(poke);
    var dMap = window.SUBJECT_DOMAIN_TYPE_MAP || {};
    var orderedSubjects = shuffle(activeSubjects);
    for (var st = 0; st < synTypes.length; st++) {
      var tInfo = dMap[synTypes[st]];
      if (tInfo && activeSubjects.indexOf(tInfo.subject) !== -1) {
        orderedSubjects = [tInfo.subject].concat(orderedSubjects.filter(function (s) { return s !== tInfo.subject; }));
        break;
      }
    }

    var idx = 0;
    while (selected.length < count && idx < 20) {
      var subj = orderedSubjects[idx % orderedSubjects.length];
      var subjTier = state.subjectTiers[subj] || 2;
      var rawPicked = pickSubjectQuestionWithinTier(subj, subjTier, selected, idx === 0 ? synTypes : null);
      if (rawPicked) selected.push(cloneQuestionForBattle(rawPicked, poke));
      idx += 1;
    }
    return selected;
  }

  function enterBattle(isGold, isReview) {
    stopFieldLoop();
    clearBattleTimers();

    if (isGold) state.normalBattlesSinceGold = 0;
    else if (!isReview) state.normalBattlesSinceGold += 1;

    var poke = pickPokemonForBattle(state.regionId, !!isGold);
    var isShiny = rollIsShiny(!!isGold, !!isReview);
    var distractors = pickDistractorNames(poke);
    var nameChoices = shuffle([poke.name, distractors[0], distractors[1], distractors[2]]);

    var qCount = isGold ? 4 : 2;
    if (isReview) {
      var availRev = getActiveReviewEntries(true).length || getActiveReviewEntries(false).length;
      qCount = Math.max(2, Math.min(3, availRev));
    }

    battle.active = true;
    battle.isGold = !!isGold;
    battle.isReview = !!isReview;
    battle.isShiny = !!isShiny;
    battle.pokemon = poke;
    battle.hearts = 3;
    battle.stage = "silhouette";
    battle.currentChoiceList = nameChoices;
    battle.currentAnswer = poke.name;
    battle.disabledIndices = [];
    battle.quizzes = pickLearningQuizzes(qCount, poke, !!isReview);
    battle.quizIndex = 0;
    battle.hadWrongOnCurrentQuiz = false;
    battle.locked = false;
    state.lastBattleCandyGain = 0;
    state.lastBattleStoneGain = 0;

    window.SoundFX.battleStart(!!isGold, isShiny, !!isReview);
    showScreen("battle");
    renderBattleView();
  }

  function renderHearts() {
    var html = "";
    for (var i = 0; i < 3; i++) {
      html += '<span class="heart-icon">' + (i < battle.hearts ? "❤️" : "🤍") + "</span>";
    }
    document.getElementById("battle-hearts").innerHTML = html;
  }

  function formatBattlePokemonDisplayName() {
    return (battle.isShiny ? "✨ 색이 다른 " : "") + padDexNum(battle.pokemon.id) + " " + battle.pokemon.name;
  }

  function renderBattleView() {
    renderHearts();
    var stageCard = document.getElementById("pokemon-stage-card");
    stageCard.classList.toggle("gold-stage", battle.isGold && !battle.isShiny && !battle.isReview);
    stageCard.classList.toggle("review-stage", battle.isReview && !battle.isShiny);
    stageCard.classList.toggle("shiny-stage", battle.isShiny);

    var rPill = document.getElementById("battle-routine-pill");
    if (rPill) {
      var rSum = getRoutineSummary();
      rPill.classList.toggle("hidden", !state.routineActive);
      rPill.textContent = rSum.completed ? "📅 루틴 달성! 🎉" : ("📅 루틴 " + rSum.totalDone + "/" + rSum.totalTarget);
    }

    var boostPill = document.getElementById("battle-boost-pill");
    boostPill.classList.toggle("hidden", state.shinyBoostBattles <= 0 && !battle.isReview);
    boostPill.textContent = battle.isReview ? "🌈 오답 복습 배틀!" : ("🍀 이로치 부스트 (" + state.shinyBoostBattles + ")");

    document.getElementById("battle-shiny-pill").classList.toggle("hidden", !battle.isShiny);
    document.getElementById("shiny-alert-banner").classList.toggle("hidden", !battle.isShiny);

    var stagePill = document.getElementById("battle-stage-pill");
    var imgEl = document.getElementById("battle-pokemon-img");
    imgEl.className = battle.stage === "silhouette" ? "is-silhouette" : "";
    applyPokemonImage(imgEl, battle.pokemon, battle.isShiny);

    document.getElementById("throw-ball").className =
      "throw-ball" + (battle.isReview ? " review-ball" : (battle.isGold ? " gold-ball" : ""));

    document.getElementById("battle-quiz-panel").classList.remove("hidden");
    document.getElementById("battle-result-box").classList.add("hidden");

    if (battle.stage === "silhouette") {
      stagePill.textContent = battle.isReview
        ? "🌈 복습 볼 · 누구일까?"
        : (battle.isGold ? "✨ 전설·희귀 · 누구일까?" : "❓ 실루엣 퀴즈");
      document.getElementById("battle-pokemon-name").textContent = battle.isShiny ? "✨ ???" : "???";
      document.getElementById("battle-pokemon-types").innerHTML = "";
      renderQuestionAndChoices(
        { name: "포켓몬 이름 맞히기", emoji: "🔍", color: "#5c6bc0" },
        battle.isShiny ? "반짝반짝! 색이 다른 그림자의 포켓몬은 누구일까?" : "검은 그림자의 포켓몬은 누구일까?",
        battle.currentChoiceList,
        battle.disabledIndices,
        "",
        null
      );
    } else if (battle.stage === "quiz") {
      var q = battle.quizzes[battle.quizIndex];
      var catKey = q.subject || q.category;
      var catMeta = window.QUIZ_CATEGORIES[catKey] || { name: "퀴즈", emoji: "⭐", color: "#42a5f5" };
      stagePill.textContent =
        (battle.isReview ? "🌈 복습 " : (battle.isGold ? "✨ 황금볼 " : "")) +
        "문제 " + (battle.quizIndex + 1) + " / " + battle.quizzes.length;
      document.getElementById("battle-pokemon-name").textContent = formatBattlePokemonDisplayName();
      document.getElementById("battle-pokemon-types").innerHTML = renderTypeBadgesHtml(battle.pokemon.types);
      renderQuestionAndChoices(catMeta, q.question, battle.currentChoiceList, battle.disabledIndices, "", q);
    }
  }

  function renderQuestionAndChoices(catMeta, questionText, choices, disabledIndices, feedbackMsg, quizObj) {
    var catTag = document.getElementById("question-category-tag");
    var tierSuffix = (quizObj && quizObj.tier) ? (" · T" + quizObj.tier) : "";
    catTag.textContent = catMeta.emoji + " " + catMeta.name + tierSuffix;
    catTag.style.background = catMeta.color;

    var synTag = document.getElementById("question-synergy-tag");
    if (quizObj && quizObj.isSynergy && quizObj.pokeType) {
      synTag.classList.remove("hidden");
      synTag.textContent = "⚡ " + quizObj.pokeType + " 상성 1.5배 · " + (quizObj.synergyMove || "효과 발군!");
    } else if (quizObj && quizObj.isReviewItem) {
      synTag.classList.remove("hidden");
      synTag.textContent = "🌈 " + (quizObj.reviewStage || 1) + "단계 복습";
    } else {
      synTag.classList.add("hidden");
    }

    var speakBtn = document.getElementById("btn-speak-question");
    var showSpeak = false;
    if (quizObj) {
      if (state.voiceMode === "touch" || state.voiceMode === "auto") {
        showSpeak = true;
        speakBtn.textContent = quizObj.ttsEn ? "🔊 발음·문제 듣기" : "🔊 문제 읽어 주기";
      } else if (quizObj.ttsEn) {
        showSpeak = true;
        speakBtn.textContent = "🔊 영어 발음 듣기";
      }
    }
    speakBtn.classList.toggle("hidden", !showSpeak);

    var svgStage = document.getElementById("question-svg-stage");
    var qBoxEl = document.querySelector("#battle-quiz-panel .question-box");
    if (quizObj && quizObj.svg) {
      svgStage.innerHTML = quizObj.svg;
      svgStage.classList.remove("hidden");
      if (qBoxEl) qBoxEl.classList.add("has-svg");
    } else {
      svgStage.innerHTML = "";
      svgStage.classList.add("hidden");
      if (qBoxEl) qBoxEl.classList.remove("has-svg");
    }

    document.getElementById("question-text").textContent = questionText;
    document.getElementById("battle-feedback").textContent = feedbackMsg || "";

    var battleScreenEl = document.getElementById("screen-battle");
    var escapeTraceBtn = document.getElementById("btn-trace-exit-battle");
    var grid = document.getElementById("choices-grid");
    var interZone = document.getElementById("interactive-input-zone");
    var mode = (quizObj && quizObj.inputType) ? quizObj.inputType : "choice";

    var isTrace = mode === "hanja_trace";
    if (battleScreenEl) battleScreenEl.classList.toggle("hanja-trace-mode", isTrace);
    if (escapeTraceBtn) escapeTraceBtn.classList.toggle("hidden", !isTrace);
    updateTopBar();

    if (mode === "numpad") {
      grid.classList.add("hidden");
      interZone.classList.remove("hidden");
      renderNumpadInput(quizObj);
      return;
    }
    if (mode === "hangul_assemble") {
      grid.classList.add("hidden");
      interZone.classList.remove("hidden");
      renderHangulAssembleInput(quizObj);
      return;
    }
    if (mode === "hanja_trace") {
      grid.classList.add("hidden");
      interZone.classList.remove("hidden");
      renderHanjaTraceDojo(quizObj);
      return;
    }

    interZone.classList.add("hidden");
    interZone.innerHTML = "";
    grid.classList.remove("hidden");

    var html = "";
    for (var i = 0; i < choices.length; i++) {
      var isDis = disabledIndices.indexOf(i) !== -1;
      html +=
        '<button type="button" class="choice-btn' + (isDis ? " choice-wrong-disabled" : "") + '" ' +
        'data-idx="' + i + '"' + (isDis ? " disabled" : "") + ">" +
        '<span class="choice-num">' + (i + 1) + "</span>" +
        '<span class="choice-label"></span>' +
        "</button>";
    }
    grid.innerHTML = html;

    var btns = grid.querySelectorAll(".choice-btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].querySelector(".choice-label").textContent = choices[b];
      btns[b].addEventListener("click", function () {
        handleChoiceSelect(Number(this.getAttribute("data-idx")));
      });
    }
  }

  // ---------------- 3단계 핵심 조작 입력기 3종 렌더러 & 판정 ----------------
  function handleInteractiveQuizOutcome(isRight, customHint) {
    if (!battle.active || battle.locked || battle.stage !== "quiz") return;
    var curQ = battle.quizzes[battle.quizIndex];
    if (isRight) {
      battle.locked = true;
      window.SoundFX.stopSpeech();
      if (!battle.hadWrongOnCurrentQuiz) {
        recordQuizAttempt(curQ, true, !!curQ.isReviewItem);
      } else {
        // 재시도 후 맞힌 경우에도 사탕 1개와 루틴 진도는 인정!
        state.evoCandy += 1;
        state.lastBattleCandyGain += 1;
        recordRoutineSubjectSolved(curQ.subject || curQ.category || "korean");
        saveState();
      }
      if (curQ && curQ.isSynergy) window.SoundFX.synergyHit();
      else window.SoundFX.correct();

      var rPill = document.getElementById("battle-routine-pill");
      if (rPill && state.routineActive) {
        var rSum = getRoutineSummary();
        rPill.textContent = rSum.completed ? "📅 루틴 달성! 🎉" : ("📅 루틴 " + rSum.totalDone + "/" + rSum.totalTarget);
      }

      document.getElementById("battle-feedback").style.color = "#2e7d32";
      document.getElementById("battle-feedback").textContent = (curQ && curQ.isSynergy)
        ? ("⚡ 상성 효과 굉장함! [" + (curQ.synergyMove || "보너스") + "] 사탕 +2개!")
        : "딩동댕! 직접 완성해서 맞혔어요!";

      scheduleBattleTimer(function () {
        document.getElementById("battle-feedback").style.color = "#d84315";
        var nextIdx = battle.quizIndex + 1;
        if (nextIdx < battle.quizzes.length) startQuizQuestion(nextIdx);
        else runCatchSequence();
      }, 650);
    } else {
      window.SoundFX.wrong();
      battle.hearts = Math.max(0, battle.hearts - 1);
      renderHearts();
      if (!battle.hadWrongOnCurrentQuiz) {
        battle.hadWrongOnCurrentQuiz = true;
        recordQuizAttempt(curQ, false, !!curQ.isReviewItem);
      }
      var container = document.querySelector(".battle-container");
      container.classList.remove("shake");
      void container.offsetWidth;
      container.classList.add("shake");

      if (state.fleePenaltyOn && battle.hearts <= 0) {
        battle.locked = true;
        document.getElementById("screen-battle").classList.remove("hanja-trace-mode");
        runFleeSequence();
        return;
      }
      document.getElementById("battle-feedback").style.color = "#d84315";
      document.getElementById("battle-feedback").textContent =
        customHint || ((curQ && curQ.hint) ? ("💡 힌트: " + curQ.hint) : "괜찮아요! 천천히 다시 눌러 볼까요?");
    }
  }

  // 1) 화면 내 커스텀 숫자 패드
  function renderNumpadInput(quizObj) {
    interactiveState.numpadValue = "";
    var zone = document.getElementById("interactive-input-zone");
    zone.innerHTML =
      '<div class="numpad-wrap">' +
      '<div class="numpad-top-bar">' +
      '<span class="numpad-prompt-label">🔢 숫자 패드 답:</span>' +
      '<div id="numpad-value-box" class="numpad-value-box is-empty">?</div>' +
      "</div>" +
      '<div class="numpad-keys-grid">' +
      '<button type="button" class="numpad-key-btn" data-digit="1">1</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="2">2</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="3">3</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="4">4</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="5">5</button>' +
      '<button type="button" id="btn-numpad-back" class="numpad-key-btn key-back">⌫ 지움</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="6">6</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="7">7</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="8">8</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="9">9</button>' +
      '<button type="button" class="numpad-key-btn" data-digit="0">0</button>' +
      '<button type="button" id="btn-numpad-submit" class="numpad-key-btn key-submit">확인 ✓</button>' +
      "</div>" +
      "</div>";

    function syncDisplay() {
      var box = document.getElementById("numpad-value-box");
      if (!box) return;
      if (!interactiveState.numpadValue) {
        box.textContent = "?";
        box.classList.add("is-empty");
      } else {
        box.textContent = interactiveState.numpadValue;
        box.classList.remove("is-empty");
      }
    }

    var dBtns = zone.querySelectorAll(".numpad-key-btn[data-digit]");
    for (var i = 0; i < dBtns.length; i++) {
      dBtns[i].addEventListener("click", function () {
        if (battle.locked) return;
        var d = this.getAttribute("data-digit");
        if (interactiveState.numpadValue.length >= 3) return;
        if (interactiveState.numpadValue === "0") interactiveState.numpadValue = d;
        else interactiveState.numpadValue += d;
        window.SoundFX.tileTap(interactiveState.numpadValue.length);
        syncDisplay();
      });
    }

    document.getElementById("btn-numpad-back").addEventListener("click", function () {
      if (battle.locked) return;
      interactiveState.numpadValue = interactiveState.numpadValue.slice(0, -1);
      window.SoundFX.click();
      syncDisplay();
    });

    document.getElementById("btn-numpad-submit").addEventListener("click", function () {
      if (battle.locked) return;
      if (!interactiveState.numpadValue) {
        document.getElementById("battle-feedback").textContent = "먼저 숫자 버튼을 눌러 답을 적어 보세요!";
        return;
      }
      var typed = String(Number(interactiveState.numpadValue));
      var target = String(quizObj.answer).trim();
      if (typed === target) {
        var box = document.getElementById("numpad-value-box");
        if (box) box.classList.add("is-correct");
        handleInteractiveQuizOutcome(true);
      } else {
        var diffHint = Number(typed) < Number(target)
          ? ("💡 힌트: " + typed + "보다 더 큰 수예요! " + (quizObj.hint || ""))
          : ("💡 힌트: " + typed + "보다 더 작은 수예요! " + (quizObj.hint || ""));
        interactiveState.numpadValue = "";
        syncDisplay();
        handleInteractiveQuizOutcome(false, diffHint);
      }
    });
  }

  // 2) 무드래그 단일 탭 3조각 한글 조합기 & 어순 탭 배열
  function renderHangulAssembleInput(quizObj) {
    interactiveState.assembledIndices = [];
    var partsNeeded = (quizObj.parts && quizObj.parts.length) || 2;
    var tiles = quizObj.tiles || quizObj.parts || [];
    var isWordOrder = quizObj.assembleMode === "word_order";
    var zone = document.getElementById("interactive-input-zone");

    function getSelectedStrings() {
      return interactiveState.assembledIndices.map(function (tIdx) { return tiles[tIdx]; });
    }

    function getComposedText() {
      var picked = getSelectedStrings();
      if (picked.length === 0) return "?";
      if (isWordOrder) return picked.join(" ");
      return typeof window.composeHangulParts === "function"
        ? window.composeHangulParts(picked)
        : picked.join("");
    }

    function drawBuilder() {
      var picked = getSelectedStrings();
      var slotsHtml = "";
      var roleLabels = isWordOrder ? ["첫째", "둘째", "셋째"] : ["초성", "중성", "받침"];
      for (var s = 0; s < partsNeeded; s++) {
        var val = picked[s] || roleLabels[s] || "?";
        var filled = s < picked.length;
        if (s > 0) slotsHtml += '<span class="hangul-plus-sign">+</span>';
        slotsHtml +=
          '<button type="button" class="hangul-part-slot' + (filled ? " filled" : "") + '" data-slot="' + s + '">' +
          val +
          "</button>";
      }

      var tilesHtml = "";
      for (var t = 0; t < tiles.length; t++) {
        var isUsed = interactiveState.assembledIndices.indexOf(t) !== -1;
        tilesHtml +=
          '<button type="button" class="hangul-tile-btn' + (isUsed ? " used-tile" : "") + '" data-tidx="' + t + '"' +
          (isUsed ? " disabled" : "") + ">" + tiles[t] + "</button>";
      }

      zone.innerHTML =
        '<div class="hangul-builder-wrap">' +
        '<div class="hangul-slots-bar">' +
        slotsHtml +
        '<span class="hangul-plus-sign">➡</span>' +
        '<div id="hangul-composed-preview" class="hangul-composed-preview">' + getComposedText() + "</div>" +
        '<button type="button" id="btn-hangul-reset" class="hangul-reset-btn">↩ 다시</button>' +
        "</div>" +
        '<div class="hangul-tiles-row">' + tilesHtml + "</div>" +
        "</div>";

      var slotBtns = zone.querySelectorAll(".hangul-part-slot");
      for (var sb = 0; sb < slotBtns.length; sb++) {
        slotBtns[sb].addEventListener("click", function () {
          if (battle.locked) return;
          var sIdx = Number(this.getAttribute("data-slot"));
          if (sIdx < interactiveState.assembledIndices.length) {
            interactiveState.assembledIndices.splice(sIdx, 1);
            window.SoundFX.click();
            drawBuilder();
          }
        });
      }

      document.getElementById("btn-hangul-reset").addEventListener("click", function () {
        if (battle.locked) return;
        interactiveState.assembledIndices = [];
        window.SoundFX.click();
        drawBuilder();
      });

      var tileBtns = zone.querySelectorAll(".hangul-tile-btn");
      for (var tb = 0; tb < tileBtns.length; tb++) {
        tileBtns[tb].addEventListener("click", function () {
          if (battle.locked) return;
          if (interactiveState.assembledIndices.length >= partsNeeded) return;
          var tIdx = Number(this.getAttribute("data-tidx"));
          if (interactiveState.assembledIndices.indexOf(tIdx) !== -1) return;
          interactiveState.assembledIndices.push(tIdx);
          window.SoundFX.tileTap(interactiveState.assembledIndices.length);
          drawBuilder();

          if (interactiveState.assembledIndices.length === partsNeeded) {
            var composedNow = getComposedText();
            if (composedNow === String(quizObj.answer)) {
              var prevEl = document.getElementById("hangul-composed-preview");
              if (prevEl) prevEl.classList.add("is-correct");
              handleInteractiveQuizOutcome(true);
            } else {
              handleInteractiveQuizOutcome(false);
              scheduleBattleTimer(function () {
                if (!battle.active || battle.stage !== "quiz") return;
                interactiveState.assembledIndices = [];
                drawBuilder();
              }, 480);
            }
          }
        });
      }
    }

    drawBuilder();
  }

  // 3) 전체 화면 한자 획순 따라쓰기 화선지 도장 (>=280x280px, 드래그 + 2탭 보조 하이브리드 판정)
  function renderHanjaTraceDojo(quizObj) {
    var strokes = quizObj.strokes || [[[15, 50], [85, 50]]];
    interactiveState.traceStrokeIdx = 0;
    interactiveState.traceDrawing = false;
    interactiveState.traceCurrentPts = [];
    interactiveState.traceTapStartOk = false;
    interactiveState.traceCompleted = false;

    // 좌측 질문 상자 하단에 획순 진행 배지와 [다시 쓰기] · [한 획 시범] 보조 도구를 깔끔하게 배치
    var qBox = document.querySelector("#battle-quiz-panel .question-box");
    var oldTools = document.getElementById("trace-left-tools");
    if (oldTools && oldTools.parentNode) oldTools.parentNode.removeChild(oldTools);

    var toolsDiv = document.createElement("div");
    toolsDiv.id = "trace-left-tools";
    toolsDiv.className = "trace-left-tools";
    toolsDiv.innerHTML =
      '<span id="trace-stroke-badge" class="trace-stroke-badge">🖌️ 1 / ' + strokes.length + "획 차례</span>" +
      '<button type="button" id="btn-trace-clear" class="trace-tool-btn">🧹 다시 쓰기</button>' +
      '<button type="button" id="btn-trace-demo-stroke" class="trace-tool-btn guide">💡 한 획 시범</button>';
    if (qBox) qBox.appendChild(toolsDiv);

    var zone = document.getElementById("interactive-input-zone");
    zone.innerHTML =
      '<div class="hanja-canvas-frame">' +
      '<canvas id="hanja-trace-canvas" width="280" height="280"></canvas>' +
      "</div>";

    var canvas = document.getElementById("hanja-trace-canvas");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var size = 280;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    function toPx(pt) {
      return [pt[0] * 2.8, pt[1] * 2.8];
    }

    function updateBadge() {
      var bEl = document.getElementById("trace-stroke-badge");
      if (!bEl) return;
      if (interactiveState.traceCompleted) {
        bEl.textContent = "💮 " + strokes.length + "획 완성!";
      } else {
        bEl.textContent = "🖌️ " + (interactiveState.traceStrokeIdx + 1) + " / " + strokes.length + "획 차례";
      }
    }

    function drawPolyline(pts, strokeStyle, lineWidth, dashed) {
      if (!pts || pts.length < 2) return;
      ctx.save();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (dashed) ctx.setLineDash([8, 6]);
      ctx.beginPath();
      var p0 = toPx(pts[0]);
      ctx.moveTo(p0[0], p0[1]);
      for (var i = 1; i < pts.length; i++) {
        var pi = toPx(pts[i]);
        ctx.lineTo(pi[0], pi[1]);
      }
      ctx.stroke();
      ctx.restore();
    }

    function redrawDojo() {
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "#fdf8ec";
      ctx.fillRect(0, 0, size, size);

      // 전통 화선지 십자 보조선
      ctx.save();
      ctx.strokeStyle = "#e9d8b8";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 5]);
      ctx.beginPath();
      ctx.moveTo(size / 2, 10); ctx.lineTo(size / 2, size - 10);
      ctx.moveTo(10, size / 2); ctx.lineTo(size - 10, size / 2);
      ctx.stroke();
      ctx.restore();

      // 전체 획 연한 밑그림
      for (var i = 0; i < strokes.length; i++) {
        drawPolyline(strokes[i], "#e2dcd0", 18, false);
      }

      // 이미 완성한 먹물 획
      for (var d = 0; d < interactiveState.traceStrokeIdx; d++) {
        drawPolyline(strokes[d], "#1e293b", 16, false);
      }

      // 현재 그어야 할 획 안내 (초록 출발점 ● -> 파란 점선 -> 노란 별 ★)
      if (!interactiveState.traceCompleted && interactiveState.traceStrokeIdx < strokes.length) {
        var activeSt = strokes[interactiveState.traceStrokeIdx];
        drawPolyline(activeSt, "#3b82f6", 5, true);
        var stPx = toPx(activeSt[0]);
        var endPx = toPx(activeSt[activeSt.length - 1]);

        // 출발점 초록 원 + 획 번호
        ctx.save();
        ctx.fillStyle = interactiveState.traceTapStartOk ? "#16a34a" : "#22c55e";
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(stPx[0], stPx[1], interactiveState.traceTapStartOk ? 15 : 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 13px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(interactiveState.traceStrokeIdx + 1), stPx[0], stPx[1]);

        // 끝점 노란 원 ★
        ctx.fillStyle = "#ffd43b";
        ctx.beginPath();
        ctx.arc(endPx[0], endPx[1], 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#1e293b";
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("★", endPx[0], endPx[1]);
        ctx.restore();
      }

      // 현재 손가락으로 긋고 있는 궤적
      if (interactiveState.traceCurrentPts.length >= 2) {
        ctx.save();
        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(interactiveState.traceCurrentPts[0][0], interactiveState.traceCurrentPts[0][1]);
        for (var pIdx = 1; pIdx < interactiveState.traceCurrentPts.length; pIdx++) {
          ctx.lineTo(interactiveState.traceCurrentPts[pIdx][0], interactiveState.traceCurrentPts[pIdx][1]);
        }
        ctx.stroke();
        ctx.restore();
      }

      // 완성 시 붉은 참잘했어요 낙관 도장!
      if (interactiveState.traceCompleted) {
        ctx.save();
        ctx.translate(size - 48, size - 48);
        ctx.rotate(-0.12);
        ctx.fillStyle = "rgba(224, 49, 49, 0.9)";
        ctx.strokeStyle = "#c92a2a";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(-30, -30, 60, 60, 10);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("참잘함", 0, -4);
        ctx.fillText("印", 0, 16);
        ctx.restore();
      }
      updateBadge();
    }

    function advanceOneStroke() {
      if (interactiveState.traceCompleted || battle.locked) return;
      interactiveState.traceStrokeIdx += 1;
      interactiveState.traceCurrentPts = [];
      interactiveState.traceTapStartOk = false;
      window.SoundFX.brushStroke();

      if (interactiveState.traceStrokeIdx >= strokes.length) {
        interactiveState.traceCompleted = true;
        redrawDojo();
        var toolsNode = document.getElementById("trace-left-tools");
        if (toolsNode && toolsNode.parentNode) {
          scheduleBattleTimer(function () {
            if (toolsNode.parentNode) toolsNode.parentNode.removeChild(toolsNode);
          }, 620);
        }
        handleInteractiveQuizOutcome(true);
      } else {
        document.getElementById("battle-feedback").style.color = "#1971c2";
        document.getElementById("battle-feedback").textContent =
          "좋아요! 이제 " + (interactiveState.traceStrokeIdx + 1) + "번째 획(●→★)을 그어 보세요!";
        redrawDojo();
      }
    }

    function localCoords(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      var sx = size / Math.max(1, rect.width);
      var sy = size / Math.max(1, rect.height);
      return [(clientX - rect.left) * sx, (clientY - rect.top) * sy];
    }

    // 다획 한자(8획 이상: 韓·國·靑·金·門)는 너그러운 허용 반경 자동 확대!
    var baseTol = strokes.length >= 8 ? 58 : 48;

    function onStart(clientX, clientY) {
      if (battle.locked || interactiveState.traceCompleted) return;
      var pt = localCoords(clientX, clientY);
      interactiveState.traceDrawing = true;
      interactiveState.traceCurrentPts = [pt];

      var activeSt = strokes[interactiveState.traceStrokeIdx];
      var stPx = toPx(activeSt[0]);
      var endPx = toPx(activeSt[activeSt.length - 1]);
      var dStart = Math.hypot(pt[0] - stPx[0], pt[1] - stPx[1]);
      var dEnd = Math.hypot(pt[0] - endPx[0], pt[1] - endPx[1]);

      // 2탭 보조: 이전에 시작점을 톡 눌렀고 이번에 끝점 별(★) 근처를 누르면 즉시 획 완성!
      if (interactiveState.traceTapStartOk && dEnd <= baseTol) {
        interactiveState.traceDrawing = false;
        advanceOneStroke();
        return;
      }
      if (dStart <= baseTol) {
        interactiveState.traceTapStartOk = true;
      }
      redrawDojo();
    }

    function onMove(clientX, clientY) {
      if (!interactiveState.traceDrawing || battle.locked || interactiveState.traceCompleted) return;
      var pt = localCoords(clientX, clientY);
      interactiveState.traceCurrentPts.push(pt);
      redrawDojo();
    }

    function onEnd() {
      if (!interactiveState.traceDrawing || battle.locked || interactiveState.traceCompleted) return;
      interactiveState.traceDrawing = false;
      var pts = interactiveState.traceCurrentPts;
      if (pts.length < 2) {
        interactiveState.traceCurrentPts = [];
        redrawDojo();
        return;
      }
      var activeSt = strokes[interactiveState.traceStrokeIdx];
      var stPx = toPx(activeSt[0]);
      var endPx = toPx(activeSt[activeSt.length - 1]);
      var firstPt = pts[0];
      var lastPt = pts[pts.length - 1];

      var dStart = Math.hypot(firstPt[0] - stPx[0], firstPt[1] - stPx[1]);
      var dEnd = Math.hypot(lastPt[0] - endPx[0], lastPt[1] - endPx[1]);

      // 방향 벡터 내적 검증 (거꾸로 긋기 방지하되 손가락 곡선은 너그럽게 통과)
      var expDx = endPx[0] - stPx[0];
      var expDy = endPx[1] - stPx[1];
      var usrDx = lastPt[0] - firstPt[0];
      var usrDy = lastPt[1] - firstPt[1];
      var dot = expDx * usrDx + expDy * usrDy;

      if (dStart <= baseTol && dEnd <= baseTol && dot >= -150) {
        advanceOneStroke();
      } else {
        interactiveState.traceCurrentPts = [];
        document.getElementById("battle-feedback").style.color = "#d84315";
        document.getElementById("battle-feedback").textContent =
          "💡 초록색 번호(" + (interactiveState.traceStrokeIdx + 1) + ")에서 출발해 노란 별(★)까지 그어 보세요!";
        window.SoundFX.click();
        redrawDojo();
      }
    }

    canvas.addEventListener("pointerdown", function (e) { onStart(e.clientX, e.clientY); });
    canvas.addEventListener("pointermove", function (e) { onMove(e.clientX, e.clientY); });
    canvas.addEventListener("pointerup", onEnd);
    canvas.addEventListener("mousedown", function (e) { onStart(e.clientX, e.clientY); });
    canvas.addEventListener("mousemove", function (e) { onMove(e.clientX, e.clientY); });
    canvas.addEventListener("mouseup", onEnd);
    canvas.addEventListener("touchstart", function (e) {
      if (e.touches && e.touches[0]) onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    canvas.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    canvas.addEventListener("touchend", onEnd);

    document.getElementById("btn-trace-clear").addEventListener("click", function () {
      if (battle.locked || interactiveState.traceCompleted) return;
      interactiveState.traceStrokeIdx = 0;
      interactiveState.traceCurrentPts = [];
      interactiveState.traceTapStartOk = false;
      window.SoundFX.click();
      redrawDojo();
    });

    document.getElementById("btn-trace-demo-stroke").addEventListener("click", function () {
      if (battle.locked || interactiveState.traceCompleted) return;
      advanceOneStroke();
    });

    redrawDojo();
  }

  function handleChoiceSelect(idx) {
    if (!battle.active || battle.locked) return;
    if (battle.stage !== "silhouette" && battle.stage !== "quiz") return;
    if (idx < 0 || idx >= battle.currentChoiceList.length) return;
    if (battle.disabledIndices.indexOf(idx) !== -1) return;

    var chosen = String(battle.currentChoiceList[idx]);
    var isRight = chosen === String(battle.currentAnswer);
    var btns = document.querySelectorAll("#choices-grid .choice-btn");
    var clickedBtn = btns[idx];

    if (isRight) {
      battle.locked = true;
      window.SoundFX.stopSpeech();
      if (clickedBtn) clickedBtn.classList.add("choice-correct");

      if (battle.stage === "silhouette") {
        window.SoundFX.reveal(battle.isShiny);
        document.getElementById("battle-pokemon-img").classList.remove("is-silhouette");
        document.getElementById("battle-pokemon-name").textContent = formatBattlePokemonDisplayName();
        document.getElementById("battle-pokemon-types").innerHTML = renderTypeBadgesHtml(battle.pokemon.types);
        document.getElementById("battle-feedback").style.color = "#2e7d32";
        document.getElementById("battle-feedback").textContent =
          (battle.isShiny ? "우와! 색이 다른 " : "정답! ") + battle.pokemon.name + " 등장! 이제 문제를 풀어 볼까요?";

        scheduleBattleTimer(function () {
          document.getElementById("battle-feedback").style.color = "#d84315";
          startQuizQuestion(0);
        }, 900);
      } else {
        var curQ = battle.quizzes[battle.quizIndex];
        if (!battle.hadWrongOnCurrentQuiz) {
          recordQuizAttempt(curQ, true, !!curQ.isReviewItem);
        }
        if (curQ && curQ.isSynergy) window.SoundFX.synergyHit();
        else window.SoundFX.correct();

        document.getElementById("battle-feedback").style.color = "#2e7d32";
        document.getElementById("battle-feedback").textContent = (curQ && curQ.isSynergy)
          ? ("⚡ 상성 효과 굉장함! [" + (curQ.synergyMove || "보너스") + "] 1.5배 성장!")
          : "딩동댕! 정답이에요!";

        scheduleBattleTimer(function () {
          document.getElementById("battle-feedback").style.color = "#d84315";
          var nextIdx = battle.quizIndex + 1;
          if (nextIdx < battle.quizzes.length) startQuizQuestion(nextIdx);
          else runCatchSequence();
        }, 620);
      }
    } else {
      window.SoundFX.wrong();
      battle.hearts = Math.max(0, battle.hearts - 1);
      battle.disabledIndices.push(idx);
      renderHearts();

      if (clickedBtn) {
        clickedBtn.disabled = true;
        clickedBtn.classList.add("choice-wrong-disabled");
      }

      if (battle.stage === "quiz" && !battle.hadWrongOnCurrentQuiz) {
        battle.hadWrongOnCurrentQuiz = true;
        recordQuizAttempt(battle.quizzes[battle.quizIndex], false, !!battle.quizzes[battle.quizIndex].isReviewItem);
      }

      var container = document.querySelector(".battle-container");
      container.classList.remove("shake");
      void container.offsetWidth;
      container.classList.add("shake");

      if (state.fleePenaltyOn && battle.hearts <= 0) {
        battle.locked = true;
        runFleeSequence();
        return;
      }

      document.getElementById("battle-feedback").style.color = "#d84315";
      if (battle.stage === "quiz") {
        var wq = battle.quizzes[battle.quizIndex];
        document.getElementById("battle-feedback").textContent =
          (wq && wq.hint) ? ("💡 힌트: " + wq.hint) : "괜찮아요! 남은 보기 중에서 천천히 다시 골라 볼까요?";
      } else {
        document.getElementById("battle-feedback").textContent =
          "괜찮아요! 그림자의 귀나 꼬리 모양을 보고 남은 이름을 골라 볼까요?";
      }
    }
  }

  function startQuizQuestion(qIdx) {
    battle.stage = "quiz";
    battle.quizIndex = qIdx;
    battle.hadWrongOnCurrentQuiz = false;
    var q = battle.quizzes[qIdx];
    battle.currentChoiceList = q.choices.slice();
    battle.currentAnswer = q.answer;
    battle.disabledIndices = [];
    battle.locked = false;

    var catKey = q.subject || q.category;
    var catMeta = window.QUIZ_CATEGORIES[catKey] || { name: "퀴즈", emoji: "⭐", color: "#42a5f5" };
    document.getElementById("battle-stage-pill").textContent =
      (battle.isReview ? "🌈 복습 " : (battle.isGold ? "✨ 황금볼 " : "")) +
      "문제 " + (qIdx + 1) + " / " + battle.quizzes.length;

    renderQuestionAndChoices(catMeta, q.question, battle.currentChoiceList, [], "", q);
    window.SoundFX.speakQuestion(q, false);
  }

  function runCatchSequence() {
    battle.stage = "catching";
    battle.locked = true;
    window.SoundFX.stopSpeech();
    document.getElementById("screen-battle").classList.remove("hanja-trace-mode");
    var leftTools = document.getElementById("trace-left-tools");
    if (leftTools && leftTools.parentNode) leftTools.parentNode.removeChild(leftTools);
    updateTopBar();

    document.getElementById("battle-stage-pill").textContent = "🔴 몬스터볼 던지기!";
    document.getElementById("battle-quiz-panel").classList.add("hidden");

    var resultBox = document.getElementById("battle-result-box");
    resultBox.classList.remove("hidden");
    document.getElementById("result-headline").textContent = "몬스터볼을 던졌어요! 얍!";
    document.getElementById("result-subtext").textContent = "조금만 기다려 보세요...";
    document.getElementById("btn-battle-finish").classList.add("hidden");
    document.getElementById("btn-result-open-3d").classList.add("hidden");

    var throwBallEl = document.getElementById("throw-ball");
    var imgEl = document.getElementById("battle-pokemon-img");
    var ballVariant = battle.isReview ? " review-ball" : (battle.isGold ? " gold-ball" : "");
    throwBallEl.className = "throw-ball" + ballVariant + " anim-throw";
    window.SoundFX.throwBall();

    scheduleBattleTimer(function () {
      imgEl.classList.add("captured-shrink");
      throwBallEl.className = "throw-ball" + ballVariant + " anim-wiggle";
      window.SoundFX.wiggle();
    }, 520);

    scheduleBattleTimer(function () { window.SoundFX.wiggle(); }, 880);

    scheduleBattleTimer(function () {
      battle.stage = "result";
      var pid = String(battle.pokemon.id);
      var prev = state.caught[pid];
      var isFirstTime = !prev;
      var isFirstShiny = battle.isShiny && !(prev && prev.shiny);
      var isPerfect = battle.hearts === 3;

      if (!prev) {
        state.caught[pid] = {
          count: 1,
          shiny: !!battle.isShiny,
          shinyCount: battle.isShiny ? 1 : 0,
          perfectCount: isPerfect ? 1 : 0,
          firstDate: getTodayLocalStr()
        };
      } else {
        prev.count = (prev.count || 1) + 1;
        if (isPerfect) prev.perfectCount = (prev.perfectCount || 0) + 1;
        if (battle.isShiny) {
          prev.shiny = true;
          prev.shinyCount = (prev.shinyCount || 0) + 1;
        }
      }

      var catchBonusCandy = isPerfect ? 2 : 1;
      state.evoCandy += catchBonusCandy;
      state.lastBattleCandyGain += catchBonusCandy;
      if (battle.isReview) {
        state.shinyBoostBattles = Math.max(state.shinyBoostBattles, 3);
      }
      saveState();

      window.SoundFX.catchSuccess(battle.isGold || battle.isReview, battle.isShiny);
      imgEl.classList.remove("captured-shrink");
      throwBallEl.className = "throw-ball" + ballVariant;

      document.getElementById("battle-stage-pill").textContent =
        battle.isShiny ? "🌟 이로치 포획 성공!" : (isPerfect ? "🌟 원샷 퍼펙트 포획!" : "🎉 잡기 성공!");
      document.getElementById("result-headline").textContent =
        battle.isShiny
          ? "🌟 우와! 색이 다른 " + battle.pokemon.name + " 잡았다!"
          : "신난다! " + battle.pokemon.name + " 잡았다!";

      var subMsg = isFirstShiny
        ? "✨ 반짝이는 색이 다른 모습이 도감에 특별 등록되었어요!"
        : (isFirstTime ? "✨ 새로운 포켓몬이 전국도감에 등록되었어요!" : "😊 도감에 이미 등록된 반가운 친구예요!");
      if (battle.isReview) subMsg += " 🌈 복습 완주 보상으로 다음 3번 배틀 이로치 확률 부스트!";
      document.getElementById("result-subtext").textContent = subMsg;
      var rewardBox = document.getElementById("result-reward-pills");
      if (rewardBox) {
        var rChips = '<span class="reward-chip">🍬 진화 사탕 +' + state.lastBattleCandyGain + " (보유 " + state.evoCandy + ")</span>";
        if (state.lastBattleStoneGain > 0) {
          rChips += '<span class="reward-chip">💎 진화의 돌 +' + state.lastBattleStoneGain + "!</span>";
        }
        if (canPokemonEvolveNow(battle.pokemon.id)) {
          rChips += '<span class="reward-chip">🧬 지금 도감에서 진화 가능!</span>';
        }
        rewardBox.innerHTML = rChips;
      }
      document.getElementById("btn-result-open-3d").classList.remove("hidden");
      document.getElementById("btn-battle-finish").classList.remove("hidden");
      updateTopBar();
    }, 1250);
  }

  function runFleeSequence() {
    battle.stage = "result";
    window.SoundFX.stopSpeech();
    window.SoundFX.flee();
    document.getElementById("battle-pokemon-img").classList.add("flee-anim");

    scheduleBattleTimer(function () {
      document.getElementById("battle-stage-pill").textContent = "💨 도망갔어요";
      document.getElementById("battle-quiz-panel").classList.add("hidden");
      document.getElementById("battle-result-box").classList.remove("hidden");
      document.getElementById("result-headline").textContent = "앗! 3번 틀려서 포켓몬이 도망갔어요!";
      document.getElementById("result-subtext").textContent = "틀린 문제는 복습 노트에 담아 두었어요! 다시 만나 보자!";
      document.getElementById("btn-result-open-3d").classList.add("hidden");
      document.getElementById("btn-battle-finish").classList.remove("hidden");
    }, 450);
  }

  // ---------------- 7. 전국도감 & 모달 ----------------
  function populateGenerationSelect() {
    var sel = document.getElementById("pokedex-gen-select");
    if (!sel || !window.GENERATION_RANGES) return;
    var html = "";
    for (var i = 0; i < window.GENERATION_RANGES.length; i++) {
      var g = window.GENERATION_RANGES[i];
      html += '<option value="' + g.gen + '">' + g.label + "</option>";
    }
    sel.innerHTML = html;
    sel.value = String(state.pokedexGen);
  }

  function renderPokedexScreen() {
    var allCnt = window.POKEMON_DATA.length;
    var caughtCnt = getCaughtCount();
    var shinyCnt = getShinyCaughtCount();
    var evoCnt = getEvolvableCaughtCount();

    var btnAll = document.getElementById("filter-btn-all");
    var btnCaught = document.getElementById("filter-btn-caught");
    var btnEvo = document.getElementById("filter-btn-evolvable");
    var btnShiny = document.getElementById("filter-btn-shiny");
    btnAll.textContent = "전체 (" + allCnt + ")";
    btnCaught.textContent = "잡은 포켓몬 (" + caughtCnt + ")";
    if (btnEvo) btnEvo.textContent = "🧬 진화 가능 (" + evoCnt + ")";
    btnShiny.textContent = "✨ 색이 다른 (" + shinyCnt + ")";

    btnAll.classList.toggle("active", state.pokedexFilter === "all");
    btnCaught.classList.toggle("active", state.pokedexFilter === "caught");
    if (btnEvo) btnEvo.classList.toggle("active", state.pokedexFilter === "evolvable");
    btnShiny.classList.toggle("active", state.pokedexFilter === "shiny");

    var itemsPill = document.getElementById("pokedex-items-pill");
    if (itemsPill) {
      itemsPill.textContent = "🍬 사탕 " + state.evoCandy + " · 💎 진화의돌 " + state.evoStones;
    }

    document.getElementById("pokedex-progress-text").textContent =
      "수집률: " + caughtCnt + " / " + allCnt + "마리" + (shinyCnt > 0 ? (" (✨이로치 " + shinyCnt + ")") : "");

    var list = window.POKEMON_DATA.filter(function (p) {
      if (state.pokedexGen > 0 && p.gen !== state.pokedexGen) return false;
      if (state.pokedexFilter === "caught") return isCaught(p.id);
      if (state.pokedexFilter === "evolvable") return canPokemonEvolveNow(p.id);
      if (state.pokedexFilter === "shiny") return isShinyCaught(p.id);
      return true;
    });

    var grid = document.getElementById("pokedex-grid");
    var emptyEl = document.getElementById("pokedex-empty");
    document.getElementById("pokedex-scroll").scrollTop = 0;

    dexRenderState.filteredList = list;
    dexRenderState.renderedCount = 0;
    grid.innerHTML = "";

    if (list.length === 0) {
      emptyEl.classList.remove("hidden");
      return;
    }
    emptyEl.classList.add("hidden");
    appendNextPokedexChunk();
  }

  function appendNextPokedexChunk() {
    var list = dexRenderState.filteredList;
    if (dexRenderState.renderedCount >= list.length) return;
    var start = dexRenderState.renderedCount;
    var end = Math.min(list.length, start + DEX_PAGE_CHUNK);
    var grid = document.getElementById("pokedex-grid");
    var frag = document.createDocumentFragment();

    for (var i = start; i < end; i++) {
      var p = list[i];
      var caught = isCaught(p.id);
      var shiny = isShinyCaught(p.id);
      var card = document.createElement("div");
      card.className = "dex-card " + (caught ? "caught" : "uncaught") + (shiny ? " shiny-caught" : "");
      card.setAttribute("data-pid", String(p.id));

      var inner = "";
      if (caught && canPokemonEvolveNow(p.id)) inner += '<span class="dex-evo-mark" title="진화 가능!">🧬</span>';
      if (p.rare && caught) inner += '<span class="dex-rare-star">👑</span>';
      inner += '<span class="dex-num">' + padDexNum(p.id) + "</span>";
      if (shiny) inner += '<span class="dex-shiny-tag">✨ 색이 다른</span>';
      inner += '<img class="dex-img" loading="lazy" decoding="async" referrerpolicy="no-referrer" alt="' + (caught ? p.name : "미발견") + '"/>';
      inner += '<span class="dex-name">' + (caught ? p.name : "???") + "</span>";
      if (caught) inner += '<div class="region-type-row">' + renderTypeBadgesHtml(p.types) + "</div>";
      card.innerHTML = inner;

      applyPokemonImage(card.querySelector("img"), p, shiny);
      if (caught) {
        (function (pokeObj) {
          card.addEventListener("click", function () { openDexModal(pokeObj, false); });
        })(p);
      }
      frag.appendChild(card);
    }
    grid.appendChild(frag);
    dexRenderState.renderedCount = end;
  }

  function openDexModal(poke, startIn3d) {
    if (!poke) return;
    window.SoundFX.click();
    var hasShiny = isShinyCaught(poke.id);
    modalState.pokemon = poke;
    modalState.showingShiny = hasShiny;
    modalState.showing3d = !!startIn3d;
    updateDexModalContent();
    document.getElementById("dex-modal").classList.remove("hidden");
  }

  function updateDexModalContent() {
    var poke = modalState.pokemon;
    if (!poke) return;
    var hasShiny = isShinyCaught(poke.id);
    var showShiny = hasShiny && modalState.showingShiny;

    var img = document.getElementById("modal-poke-img");
    var wrap3d = document.getElementById("modal-3d-wrap");
    var btn3d = document.getElementById("btn-modal-toggle-3d");

    if (modalState.showing3d) {
      img.classList.add("hidden");
      wrap3d.classList.remove("hidden");
      btn3d.textContent = "🖼️ 기본 그림 보기";
      mount3dPokemonViewer(poke, showShiny);
    } else {
      unmount3dViewer();
      wrap3d.classList.add("hidden");
      img.classList.remove("hidden");
      btn3d.textContent = "🧊 3D로 돌려보기";
      applyPokemonImage(img, poke, showShiny);
    }

    document.getElementById("modal-poke-title").textContent =
      (showShiny ? "✨ " : "") + padDexNum(poke.id) + " " + poke.name + (poke.rare ? " 👑" : "");
    document.getElementById("modal-poke-types").innerHTML = renderTypeBadgesHtml(poke.types);

    var reg = window.POKEMON_REGIONS[poke.region];
    var dMap = window.SUBJECT_DOMAIN_TYPE_MAP || {};
    var tInfo = dMap[poke.types[0]];
    document.getElementById("modal-poke-region").textContent =
      poke.gen + "세대 · 서식지: " + (reg ? reg.emoji + " " + reg.name : poke.region) +
      (tInfo ? (" · 짝꿍 영역: " + tInfo.emoji + tInfo.domain) : "");

    // 한글 도감 설명 렌더링
    var flavorEl = document.getElementById("modal-poke-flavor");
    if (flavorEl && typeof window.getPokemonKoreanFlavor === "function") {
      flavorEl.textContent = window.getPokemonKoreanFlavor(poke);
    }

    // 진화 계통 트리 & 진화시키기 버튼 렌더링
    var evoBagEl = document.getElementById("modal-evo-bag");
    if (evoBagEl) {
      evoBagEl.textContent = "보유: 🍬사탕 " + state.evoCandy + "개 · 💎진화의돌 " + state.evoStones + "개";
    }
    var chainWrap = document.getElementById("modal-evo-chain");
    var actionsWrap = document.getElementById("modal-evo-actions");
    var feedbackWrap = document.getElementById("modal-evo-feedback");
    if (feedbackWrap && !modalState.justEvolvedMsg) feedbackWrap.textContent = "";
    if (modalState.justEvolvedMsg && feedbackWrap) {
      feedbackWrap.textContent = modalState.justEvolvedMsg;
      modalState.justEvolvedMsg = "";
    }

    if (chainWrap && actionsWrap) {
      var famIds = collectEvolutionFamilyIds(poke.id);
      if (famIds.length <= 1) {
        chainWrap.innerHTML = '<span class="game-subtitle">진화하지 않는 단일 포켓몬이에요</span>';
        actionsWrap.innerHTML = "";
      } else {
        var cHtml = "";
        for (var fi = 0; fi < famIds.length; fi++) {
          var fPoke = POKEMON_BY_ID[famIds[fi]];
          if (!fPoke) continue;
          var fCaught = isCaught(fPoke.id);
          var isCur = fPoke.id === poke.id;
          if (fi > 0) cHtml += '<span class="evo-chain-arrow">▶</span>';
          cHtml +=
            '<button type="button" class="evo-chain-node' +
            (isCur ? " current" : "") +
            (!fCaught ? " uncaught" : "") +
            '" data-fid="' + fPoke.id + '"' +
            (!fCaught ? " disabled" : "") + ">" +
            (fCaught ? fPoke.name : "???") +
            "</button>";
        }
        chainWrap.innerHTML = cHtml;

        var cNodes = chainWrap.querySelectorAll(".evo-chain-node");
        for (var cn = 0; cn < cNodes.length; cn++) {
          cNodes[cn].addEventListener("click", function () {
            var targetId = Number(this.getAttribute("data-fid"));
            var targetPoke = POKEMON_BY_ID[targetId];
            if (targetPoke && isCaught(targetId)) {
              window.SoundFX.click();
              modalState.pokemon = targetPoke;
              modalState.showingShiny = isShinyCaught(targetId);
              updateDexModalContent();
            }
          });
        }

        var nextEvos = getNextEvolutions(poke.id);
        var aHtml = "";
        for (var ei = 0; ei < nextEvos.length; ei++) {
          var ev = nextEvos[ei];
          var toPoke = POKEMON_BY_ID[ev.to];
          if (!toPoke) continue;
          var already = isCaught(toPoke.id);
          var useStone = ev.stone > 0 && state.evoStones >= ev.stone;
          var altCandy = ev.candy + (ev.stone > 0 ? 1 : 0);
          var canDo = useStone || state.evoCandy >= altCandy;
          var cleanNote = String(ev.label || "").replace(/^사탕\s*\d+개\s*/, "").replace(/^\(|\)$/g, "");
          var costTxt = ev.stone > 0
            ? (state.evoStones >= ev.stone ? ("💎진화의돌 1개 · " + ev.label) : ("🍬사탕 " + altCandy + "개 또는 💎1개"))
            : ("🍬사탕 " + ev.candy + "개" + (cleanNote ? (" · " + cleanNote) : ""));
          aHtml +=
            '<button type="button" class="evo-trigger-btn" data-eidx="' + ei + '"' + (!canDo ? " disabled" : "") + ">" +
            "✨ " + toPoke.name + "(으)로 진화시키기! · " + costTxt + (already ? " (보유)" : " (미등록!)") +
            "</button>";
        }
        actionsWrap.innerHTML = aHtml;

        var eBtns = actionsWrap.querySelectorAll(".evo-trigger-btn");
        for (var eb = 0; eb < eBtns.length; eb++) {
          eBtns[eb].addEventListener("click", function () {
            var idx = Number(this.getAttribute("data-eidx"));
            var chosenEvo = nextEvos[idx];
            if (chosenEvo) triggerPokemonEvolution(poke, chosenEvo);
          });
        }
      }
    }

    var toggleBtn = document.getElementById("btn-modal-toggle-shiny");
    if (hasShiny) {
      toggleBtn.classList.remove("hidden");
      toggleBtn.textContent = showShiny ? "🎨 기본 색 모습 보기" : "✨ 색이 다른 모습 보기";
    } else {
      toggleBtn.classList.add("hidden");
    }
  }

  function triggerPokemonEvolution(fromPoke, evoSpec) {
    var toPoke = POKEMON_BY_ID[evoSpec.to];
    if (!fromPoke || !toPoke) return;

    if (evoSpec.stone > 0 && state.evoStones >= evoSpec.stone) {
      state.evoStones -= evoSpec.stone;
    } else {
      var needCandy = evoSpec.candy + (evoSpec.stone > 0 ? 1 : 0);
      if (state.evoCandy < needCandy) return;
      state.evoCandy -= needCandy;
    }

    var inheritShiny = isShinyCaught(fromPoke.id);
    var pid = String(toPoke.id);
    var prev = state.caught[pid];
    if (!prev) {
      state.caught[pid] = {
        count: 1,
        shiny: inheritShiny,
        shinyCount: inheritShiny ? 1 : 0,
        perfectCount: 1,
        evolvedFrom: fromPoke.id,
        firstDate: getTodayLocalStr()
      };
    } else {
      prev.count = (prev.count || 1) + 1;
      if (inheritShiny) {
        prev.shiny = true;
        prev.shinyCount = (prev.shinyCount || 0) + 1;
      }
    }
    saveState();

    window.SoundFX.evolveFanfare();
    var stageEl = document.getElementById("modal-visual-stage");
    if (stageEl) {
      stageEl.classList.remove("evolving-flash");
      void stageEl.offsetWidth;
      stageEl.classList.add("evolving-flash");
    }

    modalState.pokemon = toPoke;
    modalState.showingShiny = isShinyCaught(toPoke.id);
    modalState.justEvolvedMsg = "🎉 오오! " + fromPoke.name + "이(가) " + toPoke.name + "(으)로 멋지게 진화했어요!";
    updateDexModalContent();
    updateTopBar();
    if (state.screen === "pokedex") renderPokedexScreen();
    if (state.screen === "title") renderTitleScreen();
  }

  function closeDexModal() {
    modalState.showing3d = false;
    unmount3dViewer();
    document.getElementById("dex-modal").classList.add("hidden");
  }

  function openShinySettingsModal() {
    window.SoundFX.click();
    var boostBox = document.getElementById("shiny-boost-banner");
    boostBox.classList.remove("hidden");
    boostBox.textContent = state.shinyBoostBattles > 0
      ? ("🍀 복습 완주 보너스 발동 중! 남은 " + state.shinyBoostBattles + "번 배틀 이로치 확률 3배!")
      : "💡 팁: 필드에서 🌈무지개 복습 볼을 클리어하면 다음 3번 배틀 이로치 확률이 3배로 올라가요!";

    var wrap = document.getElementById("shiny-rate-options");
    var keys = ["kid", "go", "classic"];
    var html = "";
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var m = window.SHINY_MODES[k];
      var sel = state.shinyMode === k;
      html +=
        '<button type="button" class="rate-option-btn' + (sel ? " selected" : "") + '" data-mode="' + k + '">' +
        (sel ? "✅ " : "⚪ ") + m.label + "</button>";
    }
    wrap.innerHTML = html;
    var btns = wrap.querySelectorAll(".rate-option-btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener("click", function () {
        var chosen = this.getAttribute("data-mode");
        if (window.SHINY_MODES[chosen]) {
          state.shinyMode = chosen;
          saveState();
          window.SoundFX.shinySparkle();
          openShinySettingsModal();
        }
      });
    }
    document.getElementById("shiny-modal").classList.remove("hidden");
  }

  function closeShinySettingsModal() {
    document.getElementById("shiny-modal").classList.add("hidden");
  }

  function exportSaveDataAsJson() {
    try {
      var dataStr = JSON.stringify(buildSerializableState(), null, 2);
      var blob = new Blob([dataStr], { type: "application/json;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "pokemon_quiz_learning_backup_" + getTodayLocalStr() + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    } catch (e) {}
  }

  function promotePendingReviewsToTodayAndOpenField() {
    var today = getTodayLocalStr();
    var keys = Object.keys(state.reviewQueue || {});
    var promoted = 0;
    for (var i = 0; i < keys.length; i++) {
      var entry = state.reviewQueue[keys[i]];
      if (entry && !entry.graduated) {
        entry.dueDate = today;
        promoted += 1;
      }
    }
    if (promoted > 0) {
      saveState();
      showScreen("field");
    }
  }

  // ---------------- 이벤트 바인딩 ----------------
  function bindEvents() {
    var unlockOnce = function () { window.SoundFX.unlock(); };
    window.addEventListener("pointerdown", unlockOnce, { passive: true });
    window.addEventListener("keydown", unlockOnce);

    // 시작 화면 플로팅 & 중앙 메뉴 + 오늘의 루틴 모달 바인딩
    document.getElementById("btn-open-routine-title").addEventListener("click", openRoutineModal);
    document.getElementById("btn-top-routine").addEventListener("click", openRoutineModal);
    document.getElementById("btn-close-routine-modal").addEventListener("click", function () {
      window.SoundFX.click();
      closeRoutineModal();
    });
    document.getElementById("routine-modal").addEventListener("click", function (e) {
      if (e.target.id === "routine-modal") closeRoutineModal();
    });
    document.getElementById("btn-routine-swap-alt").addEventListener("click", function () {
      var r = ensureTodayRoutine();
      r.altSubject = r.altSubject === "hanja" ? "english" : (state.hanjaEnabled ? "hanja" : "english");
      saveState();
      window.SoundFX.click();
      renderRoutineModal();
    });
    document.getElementById("btn-routine-toggle-mode").addEventListener("click", function () {
      state.routineActive = !state.routineActive;
      saveState();
      window.SoundFX.click();
      renderRoutineModal();
    });
    document.getElementById("btn-start-routine-run").addEventListener("click", function () {
      state.routineActive = true;
      saveState();
      window.SoundFX.click();
      closeRoutineModal();
      showScreen("field");
    });

    var btnInstallPwa = document.getElementById("btn-install-pwa");
    if (btnInstallPwa) {
      btnInstallPwa.addEventListener("click", function () {
        window.SoundFX.click();
        if (deferredInstallPrompt) {
          triggerNativePwaInstall();
        } else {
          openPwaInstallModal();
        }
      });
    }
    var btnNativeInstall = document.getElementById("btn-trigger-native-install");
    if (btnNativeInstall) {
      btnNativeInstall.addEventListener("click", function () {
        window.SoundFX.click();
        triggerNativePwaInstall();
      });
    }
    var btnClosePwaModal = document.getElementById("btn-close-pwa-modal");
    if (btnClosePwaModal) {
      btnClosePwaModal.addEventListener("click", function () {
        window.SoundFX.click();
        closePwaInstallModal();
      });
    }
    var pwaModalBackdrop = document.getElementById("pwa-install-modal");
    if (pwaModalBackdrop) {
      pwaModalBackdrop.addEventListener("click", function (e) {
        if (e.target.id === "pwa-install-modal") closePwaInstallModal();
      });
    }

    document.getElementById("btn-title-sound").addEventListener("click", toggleSoundMute);
    document.getElementById("btn-title-voice").addEventListener("click", cycleVoiceMode);
    document.getElementById("btn-title-shiny").addEventListener("click", openShinySettingsModal);

    document.getElementById("btn-start-adventure").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("region");
    });
    document.getElementById("btn-open-pokedex-title").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("pokedex");
    });
    document.getElementById("btn-open-stamp-modal").addEventListener("click", openStampModal);
    document.getElementById("btn-close-stamp-modal").addEventListener("click", function () {
      window.SoundFX.click();
      closeStampModal();
    });
    document.getElementById("stamp-modal").addEventListener("click", function (e) {
      if (e.target.id === "stamp-modal") closeStampModal();
    });

    document.getElementById("btn-open-level-title").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("level");
    });
    document.getElementById("btn-open-progress-title").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("progress");
    });

    // 서브페이지(학습 수준 정하기 & 성취도) 헤더 이동
    document.getElementById("btn-level-home").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("title");
    });
    document.getElementById("btn-level-to-progress").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("progress");
    });
    document.getElementById("btn-progress-home").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("title");
    });
    document.getElementById("btn-progress-to-level").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("level");
    });

    // 학습 수준 화면 하단 유틸리티 버튼들
    document.getElementById("btn-spawn-review-now").addEventListener("click", function () {
      window.SoundFX.shinySparkle();
      promotePendingReviewsToTodayAndOpenField();
    });
    document.getElementById("btn-preview-svg-tool").addEventListener("click", function () {
      window.SoundFX.click();
      var box = document.getElementById("svg-preview-box");
      if (!box || !window.VISUAL_TEMPLATE_IDS) return;
      var allTpls = [];
      var mIds = window.VISUAL_TEMPLATE_IDS.math || [];
      var cIds = window.VISUAL_TEMPLATE_IDS.creative || [];
      for (var mi = 0; mi < mIds.length; mi++) allTpls.push({ subj: "math", id: mIds[mi] });
      for (var ci = 0; ci < cIds.length; ci++) allTpls.push({ subj: "creative", id: cIds[ci] });
      if (allTpls.length === 0) return;

      modalState.svgPreviewIdx = (modalState.svgPreviewIdx + 1) % allTpls.length;
      var target = allTpls[modalState.svgPreviewIdx];
      var sample = target.subj === "math"
        ? window.generateDynamicVisualMath(state.subjectTiers.math || 6, 202700 + modalState.svgPreviewIdx * 17, target.id)
        : window.generateDynamicVisualCreative(state.subjectTiers.creative || 6, 302700 + modalState.svgPreviewIdx * 19, target.id);

      box.classList.remove("hidden");
      box.innerHTML =
        '<div class="svg-preview-caption">🎨 교구 미리보기 (' + (modalState.svgPreviewIdx + 1) + "/" + allTpls.length + ") · " +
        (target.subj === "math" ? "🔢 수학" : "💡 창의력") + " — 정답: " + sample.answer + "</div>" +
        sample.svg +
        '<div class="svg-preview-caption">' + sample.question + "</div>";
    });
    document.getElementById("btn-toggle-interactive").addEventListener("click", function () {
      state.interactiveInputsOn = !state.interactiveInputsOn;
      saveState();
      window.SoundFX.click();
      renderLevelScreen();
    });
    document.getElementById("btn-toggle-hanja").addEventListener("click", function () {
      state.hanjaEnabled = !state.hanjaEnabled;
      saveState();
      window.SoundFX.click();
      renderLevelScreen();
    });
    document.getElementById("btn-toggle-flee").addEventListener("click", function () {
      state.fleePenaltyOn = !state.fleePenaltyOn;
      saveState();
      window.SoundFX.click();
      renderLevelScreen();
    });
    document.getElementById("btn-export-json").addEventListener("click", function () {
      window.SoundFX.click();
      exportSaveDataAsJson();
    });

    // 과목별 확인 문제 모달 & 아는 한자 모달 & 성취도 단원 클릭 모달
    document.getElementById("btn-close-check-modal").addEventListener("click", function () {
      window.SoundFX.click();
      checkQuizState.active = false;
      document.getElementById("unit-check-modal").classList.add("hidden");
    });
    document.getElementById("unit-check-modal").addEventListener("click", function (e) {
      if (e.target.id === "unit-check-modal") {
        checkQuizState.active = false;
        document.getElementById("unit-check-modal").classList.add("hidden");
      }
    });

    document.getElementById("btn-close-hanja-modal").addEventListener("click", function () {
      window.SoundFX.click();
      document.getElementById("hanja-known-modal").classList.add("hidden");
    });
    document.getElementById("hanja-known-modal").addEventListener("click", function (e) {
      if (e.target.id === "hanja-known-modal") {
        document.getElementById("hanja-known-modal").classList.add("hidden");
      }
    });

    document.getElementById("btn-unit-set-active").addEventListener("click", function () {
      if (modalState.actionSubject) {
        state.subjectUnitIdx[modalState.actionSubject] = modalState.actionUnitIdx;
        state.presetId = "custom";
        syncTiersFromUnits();
        saveState();
        window.SoundFX.correct();
        closeUnitActionModal();
        renderProgressScreen();
      }
    });
    document.getElementById("btn-unit-play-now").addEventListener("click", function () {
      var sk = modalState.actionSubject;
      var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
      var uObj = uList[modalState.actionUnitIdx];
      if (sk && uObj) {
        state.forcedBattleUnit = { subject: sk, unitId: uObj.id };
        closeUnitActionModal();
        enterBattle(false, false);
      }
    });
    document.getElementById("btn-unit-mark-passed").addEventListener("click", function () {
      var sk = modalState.actionSubject;
      var uList = (window.SUBJECT_UNITS && window.SUBJECT_UNITS[sk]) || [];
      var uObj = uList[modalState.actionUnitIdx];
      if (sk && uObj) {
        state.unitStatus[uObj.id] = "parent_passed";
        if (state.subjectUnitIdx[sk] === modalState.actionUnitIdx && modalState.actionUnitIdx + 1 < uList.length) {
          state.subjectUnitIdx[sk] = modalState.actionUnitIdx + 1;
          syncTiersFromUnits();
        }
        saveState();
        window.SoundFX.correct();
        closeUnitActionModal();
        renderProgressScreen();
      }
    });
    document.getElementById("btn-close-unit-action").addEventListener("click", function () {
      window.SoundFX.click();
      closeUnitActionModal();
    });
    document.getElementById("unit-action-modal").addEventListener("click", function (e) {
      if (e.target.id === "unit-action-modal") closeUnitActionModal();
    });

    // 공통 상단 바 버튼들
    document.getElementById("btn-top-home").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("title");
    });
    document.getElementById("btn-top-region").addEventListener("click", function () {
      window.SoundFX.click();
      if (state.screen === "battle") {
        showScreen("field");
      } else if (state.screen === "pokedex") {
        var back = (state.previousScreen && state.previousScreen !== "pokedex" && state.previousScreen !== "battle")
          ? state.previousScreen
          : "title";
        showScreen(back);
      } else {
        showScreen("region");
      }
    });
    document.getElementById("btn-top-pokedex").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("pokedex");
    });
    document.getElementById("btn-level-settings").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("level");
    });
    document.getElementById("btn-voice-mode").addEventListener("click", cycleVoiceMode);
    document.getElementById("btn-speak-question").addEventListener("click", function () {
      if (battle.active && battle.stage === "quiz") {
        window.SoundFX.speakQuestion(battle.quizzes[battle.quizIndex], true);
      }
    });
    document.getElementById("btn-trace-exit-battle").addEventListener("click", function () {
      window.SoundFX.click();
      document.getElementById("screen-battle").classList.remove("hanja-trace-mode");
      showScreen("field");
    });
    document.getElementById("btn-modal-speak-flavor").addEventListener("click", function () {
      if (modalState.pokemon && typeof window.getPokemonKoreanFlavor === "function") {
        window.SoundFX.speakKoreanText(modalState.pokemon.name + ". " + window.getPokemonKoreanFlavor(modalState.pokemon));
      }
    });
    document.getElementById("btn-shiny-settings").addEventListener("click", openShinySettingsModal);
    document.getElementById("btn-close-shiny-modal").addEventListener("click", function () {
      window.SoundFX.click();
      closeShinySettingsModal();
    });
    document.getElementById("shiny-modal").addEventListener("click", function (e) {
      if (e.target.id === "shiny-modal") closeShinySettingsModal();
    });
    document.getElementById("btn-sound-toggle").addEventListener("click", toggleSoundMute);

    document.getElementById("btn-result-open-3d").addEventListener("click", function () {
      if (battle.pokemon) openDexModal(battle.pokemon, true);
    });
    document.getElementById("btn-battle-finish").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("field");
    });

    document.getElementById("filter-btn-all").addEventListener("click", function () {
      window.SoundFX.click();
      state.pokedexFilter = "all";
      renderPokedexScreen();
    });
    document.getElementById("filter-btn-caught").addEventListener("click", function () {
      window.SoundFX.click();
      state.pokedexFilter = "caught";
      renderPokedexScreen();
    });
    document.getElementById("filter-btn-evolvable").addEventListener("click", function () {
      window.SoundFX.click();
      state.pokedexFilter = "evolvable";
      renderPokedexScreen();
    });
    document.getElementById("filter-btn-shiny").addEventListener("click", function () {
      window.SoundFX.click();
      state.pokedexFilter = "shiny";
      renderPokedexScreen();
    });
    document.getElementById("pokedex-gen-select").addEventListener("change", function () {
      window.SoundFX.click();
      state.pokedexGen = Number(this.value) || 0;
      renderPokedexScreen();
    });
    document.getElementById("pokedex-scroll").addEventListener("scroll", function () {
      if (this.scrollTop + this.clientHeight >= this.scrollHeight - 260) appendNextPokedexChunk();
    });
    document.getElementById("btn-empty-go-region").addEventListener("click", function () {
      window.SoundFX.click();
      showScreen("region");
    });

    document.getElementById("btn-modal-toggle-3d").addEventListener("click", function () {
      window.SoundFX.click();
      modalState.showing3d = !modalState.showing3d;
      updateDexModalContent();
    });
    document.getElementById("btn-modal-toggle-shiny").addEventListener("click", function () {
      window.SoundFX.click();
      modalState.showingShiny = !modalState.showingShiny;
      updateDexModalContent();
    });
    document.getElementById("btn-close-modal").addEventListener("click", function () {
      window.SoundFX.click();
      closeDexModal();
    });
    document.getElementById("dex-modal").addEventListener("click", function (e) {
      if (e.target.id === "dex-modal") closeDexModal();
    });

    var canvas = document.getElementById("field-canvas");
    field.canvas = canvas;
    field.ctx = canvas.getContext("2d");

    canvas.addEventListener("pointerdown", function (e) {
      field.pointerDown = true;
      setPlayerPointerTarget(e.clientX, e.clientY);
    });
    canvas.addEventListener("pointermove", function (e) {
      if (field.pointerDown) setPlayerPointerTarget(e.clientX, e.clientY);
    });
    canvas.addEventListener("mousedown", function (e) {
      field.pointerDown = true;
      setPlayerPointerTarget(e.clientX, e.clientY);
    });
    canvas.addEventListener("click", function (e) {
      setPlayerPointerTarget(e.clientX, e.clientY);
    });
    canvas.addEventListener("touchstart", function (e) {
      if (e.touches && e.touches[0]) setPlayerPointerTarget(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    canvas.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches[0]) setPlayerPointerTarget(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("pointerup", function () { field.pointerDown = false; });
    window.addEventListener("mouseup", function () { field.pointerDown = false; });

    window.addEventListener("resize", function () {
      if (state.screen === "field") {
        resizeFieldCanvas();
        drawField();
      }
    });

    window.addEventListener("keydown", function (e) {
      if (state.screen === "field") {
        if (
          e.code === "ArrowUp" || e.code === "ArrowDown" ||
          e.code === "ArrowLeft" || e.code === "ArrowRight" ||
          e.code === "KeyW" || e.code === "KeyA" || e.code === "KeyS" || e.code === "KeyD"
        ) {
          e.preventDefault();
          field.keys[e.code] = true;
        }
      } else if (state.screen === "battle") {
        var activeQuiz = (battle.stage === "quiz" && battle.quizzes[battle.quizIndex]) ? battle.quizzes[battle.quizIndex] : null;
        if (activeQuiz && activeQuiz.inputType === "numpad") {
          var mDigit = e.code.match(/^(?:Digit|Numpad)(\d)$/);
          if (mDigit) {
            e.preventDefault();
            var kBtn = document.querySelector('.numpad-key-btn[data-digit="' + mDigit[1] + '"]');
            if (kBtn) kBtn.click();
            return;
          }
          if (e.code === "Backspace") {
            e.preventDefault();
            var backBtn = document.getElementById("btn-numpad-back");
            if (backBtn) backBtn.click();
            return;
          }
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
            var subBtn = document.getElementById("btn-numpad-submit");
            if (subBtn) subBtn.click();
            return;
          }
        }
        var digitMap = {
          Digit1: 0, Numpad1: 0,
          Digit2: 1, Numpad2: 1,
          Digit3: 2, Numpad3: 2,
          Digit4: 3, Numpad4: 3
        };
        if ((!activeQuiz || !activeQuiz.inputType || activeQuiz.inputType === "choice") && digitMap.hasOwnProperty(e.code)) {
          e.preventDefault();
          handleChoiceSelect(digitMap[e.code]);
        } else if ((e.code === "Enter" || e.code === "Space") && battle.stage === "result") {
          var finishBtn = document.getElementById("btn-battle-finish");
          if (finishBtn && !finishBtn.classList.contains("hidden")) {
            e.preventDefault();
            finishBtn.click();
          }
        }
      } else if (e.code === "Escape") {
        closeStampModal();
        closeDexModal();
        closeShinySettingsModal();
        closeUnitActionModal();
        closeRoutineModal();
        closePwaInstallModal();
        document.getElementById("unit-check-modal").classList.add("hidden");
        document.getElementById("hanja-known-modal").classList.add("hidden");
      }
    });

    window.addEventListener("keyup", function (e) {
      if (field.keys[e.code]) delete field.keys[e.code];
    });
  }

  function isRunningStandalonePwa() {
    try {
      return !!(
        (window.matchMedia && (window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches)) ||
        window.navigator.standalone === true
      );
    } catch (e) {
      return false;
    }
  }

  function syncPwaInstallButtonUI() {
    var btn = document.getElementById("btn-install-pwa");
    var nativeBtn = document.getElementById("btn-trigger-native-install");
    if (btn) {
      if (isRunningStandalonePwa()) {
        btn.classList.add("hidden");
      } else {
        btn.classList.remove("hidden");
        btn.textContent = deferredInstallPrompt ? "📲 앱 바로 설치" : "📲 앱 설치";
      }
    }
    if (nativeBtn) {
      nativeBtn.classList.toggle("hidden", !deferredInstallPrompt);
    }
  }

  function openPwaInstallModal() {
    syncPwaInstallButtonUI();
    var m = document.getElementById("pwa-install-modal");
    if (m) m.classList.remove("hidden");
  }

  function closePwaInstallModal() {
    var m = document.getElementById("pwa-install-modal");
    if (m) m.classList.add("hidden");
  }

  function triggerNativePwaInstall() {
    if (!deferredInstallPrompt) {
      openPwaInstallModal();
      return;
    }
    var promptEvent = deferredInstallPrompt;
    deferredInstallPrompt = null;
    try {
      promptEvent.prompt();
      if (promptEvent.userChoice && typeof promptEvent.userChoice.then === "function") {
        promptEvent.userChoice.then(function () {
          syncPwaInstallButtonUI();
          closePwaInstallModal();
        });
      }
    } catch (e) {
      syncPwaInstallButtonUI();
    }
  }

  function initPwaSupport() {
    syncPwaInstallButtonUI();

    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferredInstallPrompt = e;
      syncPwaInstallButtonUI();
    });

    window.addEventListener("appinstalled", function () {
      deferredInstallPrompt = null;
      syncPwaInstallButtonUI();
      closePwaInstallModal();
    });

    // HTTPS 또는 localhost(127.0.0.1)에서 열렸을 때만 sw.js 오프라인 서비스 워커 자동 등록
    // (로컬 더블클릭 file:// 이나 Canvas srcdoc/blob 미리보기에서는 에러 없이 안전 우회)
    try {
      var proto = window.location.protocol;
      var host = window.location.hostname;
      var hasManifestLink = !!document.querySelector('link[rel="manifest"]');
      var canRegisterSw = (
        "serviceWorker" in navigator &&
        hasManifestLink &&
        (proto === "https:" || host === "localhost" || /^127(?:\.\d+){3}$/.test(host))
      );
      if (canRegisterSw) {
        swRegistrationState = "registering";
        navigator.serviceWorker.register("./sw.js").then(function () {
          swRegistrationState = "registered";
        }).catch(function () {
          swRegistrationState = "skipped";
        });
      } else {
        swRegistrationState = "skipped";
      }
    } catch (e) {
      swRegistrationState = "skipped";
    }
  }

  function handleLaunchShortcutAction() {
    try {
      var params = new window.URLSearchParams(window.location.search || "");
      var act = params.get("action");
      if (act === "start") {
        showScreen("region");
        return true;
      }
      if (act === "routine") {
        showScreen("title");
        openRoutineModal();
        return true;
      }
      if (act === "pokedex") {
        showScreen("pokedex");
        return true;
      }
    } catch (e) {}
    return false;
  }

  function init() {
    applyAnimeThemeBackgrounds();
    loadState();
    ensureTodayRoutine();
    window.SoundFX.setEnabled(state.soundOn);
    window.SoundFX.setVoiceMode(state.voiceMode);
    checkAttendanceToday();
    populateGenerationSelect();
    initImageProviders();
    bindEvents();
    initPwaSupport();
    if (!handleLaunchShortcutAction()) {
      showScreen("title");
    }
  }

  window.PokeQuizGame = {
    resetSaveData: resetSaveData,
    getState: function () { return state; },
    getField: function () { return field; },
    getBattle: function () { return battle; },
    setFleePenaltyOn: function (flag) {
      state.fleePenaltyOn = !!flag;
      saveState();
    },
    setSubjectTier: function (subj, tier) {
      if (state.subjectTiers.hasOwnProperty(subj)) {
        state.subjectTiers[subj] = Math.max(1, Math.min(10, Number(tier) || 4));
        if (window.SUBJECT_UNITS && window.SUBJECT_UNITS[subj]) {
          state.subjectUnitIdx[subj] = findUnitIdxForTier(subj, state.subjectTiers[subj]);
        }
        state.presetId = "custom";
        saveState();
      }
    },
    promoteAllReviewsToToday: function () {
      var today = getTodayLocalStr();
      var keys = Object.keys(state.reviewQueue || {});
      for (var i = 0; i < keys.length; i++) {
        if (state.reviewQueue[keys[i]] && !state.reviewQueue[keys[i]].graduated) {
          state.reviewQueue[keys[i]].dueDate = today;
        }
      }
      saveState();
    },
    forceShinyOnNextBattle: function () { state.forceShinyNext = true; },
    forceVisualSubjectNext: function (subj) { state.forceVisualSubj = subj || "math"; },
    forceInputTypeNext: function (inputType) { state.forceInputTypeNext = inputType || ""; },
    grantEvoItems: function (candy, stones) {
      state.evoCandy += Number(candy || 0);
      state.evoStones += Number(stones || 0);
      saveState();
    },
    openDexForPokemon: function (pokeId) {
      var pObj = POKEMON_BY_ID[Number(pokeId)];
      if (pObj) openDexModal(pObj, false);
    },
    openRoutineModal: openRoutineModal,
    getPwaState: function () {
      return {
        swRegistrationState: swRegistrationState,
        hasDeferredPrompt: !!deferredInstallPrompt,
        isStandalone: isRunningStandalonePwa()
      };
    },
    spawnGoldenBallOnField: function () {
      if (state.screen !== "field") return null;
      var existing = field.balls.find(function (b) { return b.isGold; });
      if (existing) return existing;
      var gb = spawnBall(true, false);
      field.balls.push(gb);
      return gb;
    },
    spawnReviewBallOnField: function () {
      if (state.screen !== "field") return null;
      var existing = field.balls.find(function (b) { return b.isReview; });
      if (existing) return existing;
      var rb = spawnBall(false, true);
      field.balls.push(rb);
      updateFieldHintBar();
      return rb;
    }
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
