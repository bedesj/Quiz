// Web Audio API 기반 효과음 합성기 + 3단 음성 모드(부모 동반 / 눌러서 읽기 / 자동 읽기 · ko-KR/en-US 분리)
(function () {
  var ctx = null;
  var enabled = true;
  var voiceMode = "parent"; // 'parent' (기본: 효과음만 + 영어 듣기 버튼만) | 'touch' (눌러서 읽기) | 'auto' (자동 읽기)
  var ttsWarmedUp = false;

  function ensureContext() {
    if (!enabled) return null;
    try {
      if (!ctx) {
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) ctx = new AudioCtx();
      }
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
    } catch (e) {
      return null;
    }
    return ctx;
  }

  function warmUpSpeech() {
    if (ttsWarmedUp) return;
    ttsWarmedUp = true;
    try {
      if (window.speechSynthesis && typeof window.SpeechSynthesisUtterance === "function") {
        window.speechSynthesis.getVoices();
      }
    } catch (e) {}
  }

  function stopSpeech() {
    try {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
  }

  function pickBestVoice(langPrefix) {
    try {
      if (!window.speechSynthesis) return null;
      var voices = window.speechSynthesis.getVoices() || [];
      var lower = langPrefix.toLowerCase();
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang && voices[i].lang.toLowerCase().indexOf(lower) === 0 && voices[i].localService) {
          return voices[i];
        }
      }
      for (var j = 0; j < voices.length; j++) {
        if (voices[j].lang && voices[j].lang.toLowerCase().indexOf(lower) === 0) {
          return voices[j];
        }
      }
    } catch (e) {}
    return null;
  }

  function speakDual(koText, enText) {
    if (!enabled) return false;
    try {
      if (!window.speechSynthesis || typeof window.SpeechSynthesisUtterance !== "function") {
        return false;
      }
      stopSpeech();
      var queued = false;
      if (koText && String(koText).trim()) {
        var uKo = new window.SpeechSynthesisUtterance(String(koText).trim());
        uKo.lang = "ko-KR";
        uKo.rate = 0.94;
        uKo.pitch = 1.05;
        var vKo = pickBestVoice("ko");
        if (vKo) uKo.voice = vKo;
        window.speechSynthesis.speak(uKo);
        queued = true;
      }
      if (enText && String(enText).trim()) {
        var uEn = new window.SpeechSynthesisUtterance(String(enText).trim());
        uEn.lang = "en-US";
        uEn.rate = 0.86;
        uEn.pitch = 1.02;
        var vEn = pickBestVoice("en");
        if (vEn) uEn.voice = vEn;
        window.speechSynthesis.speak(uEn);
        queued = true;
      }
      return queued;
    } catch (e) {
      return false;
    }
  }

  function tone(freq, duration, type, startTimeOffset, gainVal, slideToFreq) {
    var c = ensureContext();
    if (!c) return;
    try {
      var now = c.currentTime + (startTimeOffset || 0);
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = type || "triangle";
      osc.frequency.setValueAtTime(freq, now);
      if (slideToFreq) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideToFreq), now + duration);
      }
      var peak = gainVal || 0.16;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(peak, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(now);
      osc.stop(now + duration + 0.02);
    } catch (e) {}
  }

  window.SoundFX = {
    unlock: function () {
      ensureContext();
      warmUpSpeech();
    },
    setEnabled: function (flag) {
      enabled = !!flag;
      if (!enabled) {
        stopSpeech();
      } else {
        ensureContext();
      }
    },
    isEnabled: function () {
      return enabled;
    },
    setVoiceMode: function (mode) {
      if (mode === "parent" || mode === "touch" || mode === "auto") {
        voiceMode = mode;
        if (mode === "parent") stopSpeech();
      }
    },
    getVoiceMode: function () {
      return voiceMode;
    },
    stopSpeech: stopSpeech,
    speakKoreanText: function (koText) {
      return speakDual(koText, "");
    },
    speakQuestion: function (qObj, forceManualTap) {
      if (!qObj || !enabled) return false;
      var isListenChoice = qObj.format === "listen_choice";
      if (voiceMode === "parent" && !forceManualTap) {
        if (isListenChoice && qObj.ttsEn) {
          return speakDual("", qObj.ttsEn);
        }
        return false;
      }
      if (voiceMode === "parent" && forceManualTap) {
        if (qObj.ttsEn) {
          return speakDual("", qObj.ttsEn);
        }
        return speakDual(qObj.ttsKo || qObj.question, "");
      }
      return speakDual(qObj.ttsKo || qObj.question, qObj.ttsEn || "");
    },
    click: function () {
      tone(520, 0.07, "sine", 0, 0.12, 660);
    },
    tileTap: function (stepIdx) {
      var baseFreq = 540 + (stepIdx || 0) * 90;
      tone(baseFreq, 0.08, "triangle", 0, 0.16, baseFreq * 1.15);
    },
    brushStroke: function () {
      tone(392, 0.09, "sine", 0, 0.14, 587.33);
      tone(783.99, 0.11, "triangle", 0.06, 0.14);
    },
    evolveFanfare: function () {
      var notes = [392.0, 523.25, 659.25, 783.99, 1046.5, 1318.5];
      for (var i = 0; i < notes.length; i++) {
        tone(notes[i], 0.14, "triangle", i * 0.09, 0.19);
      }
      this.shinySparkle(0.55);
    },
    stamp: function () {
      tone(220, 0.09, "triangle", 0, 0.2, 140);
      tone(587.33, 0.12, "triangle", 0.09, 0.16);
      tone(880, 0.22, "triangle", 0.19, 0.18);
    },
    battleStart: function (isGold, isShiny, isReview) {
      var notes = isReview
        ? [440, 554.37, 659.25, 880, 1108.73]
        : (isGold
            ? [392, 493.88, 587.33, 783.99, 987.77, 1174.66]
            : [330, 392, 493.88, 659.25]);
      for (var i = 0; i < notes.length; i++) {
        tone(notes[i], 0.11, "square", i * 0.075, 0.1);
      }
      if (isShiny) {
        this.shinySparkle(notes.length * 0.075 + 0.05);
      }
    },
    shinySparkle: function (delayOffset) {
      var base = delayOffset || 0;
      var sparkleNotes = [1318.5, 1661.2, 1975.5, 2637.0];
      for (var i = 0; i < sparkleNotes.length; i++) {
        tone(sparkleNotes[i], 0.14, "sine", base + i * 0.065, 0.15);
      }
    },
    synergyHit: function () {
      tone(587.33, 0.09, "triangle", 0, 0.2);
      tone(783.99, 0.1, "triangle", 0.08, 0.2);
      tone(1174.66, 0.24, "sine", 0.16, 0.22);
    },
    correct: function () {
      tone(523.25, 0.11, "triangle", 0, 0.18);
      tone(659.25, 0.11, "triangle", 0.09, 0.18);
      tone(783.99, 0.22, "triangle", 0.18, 0.2);
    },
    reveal: function (isShiny) {
      tone(587.33, 0.1, "sine", 0, 0.16);
      tone(783.99, 0.12, "sine", 0.08, 0.17);
      tone(1046.5, 0.28, "triangle", 0.17, 0.2);
      if (isShiny) {
        this.shinySparkle(0.22);
      }
    },
    wrong: function () {
      tone(310, 0.16, "sawtooth", 0, 0.11, 240);
      tone(230, 0.24, "sawtooth", 0.15, 0.11, 175);
    },
    throwBall: function () {
      tone(360, 0.28, "sine", 0, 0.15, 760);
    },
    wiggle: function () {
      tone(440, 0.08, "sine", 0, 0.12, 520);
    },
    catchSuccess: function (isGold, isShiny) {
      var seq = (isGold || isShiny)
        ? [
            [523.25, 0.11, 0.0],
            [659.25, 0.11, 0.11],
            [783.99, 0.11, 0.22],
            [1046.5, 0.14, 0.33],
            [1318.5, 0.42, 0.47]
          ]
        : [
            [523.25, 0.11, 0.0],
            [523.25, 0.11, 0.12],
            [523.25, 0.11, 0.24],
            [783.99, 0.38, 0.36]
          ];
      for (var i = 0; i < seq.length; i++) {
        tone(seq[i][0], seq[i][1], "triangle", seq[i][2], 0.2);
      }
      if (isShiny) {
        this.shinySparkle(0.52);
      }
    },
    flee: function () {
      tone(520, 0.1, "triangle", 0, 0.13, 380);
      tone(380, 0.18, "triangle", 0.1, 0.12, 200);
    }
  };
})();
