// 2022 개정 초1-1 수학(m1~m5) 8종 + 창의력(c2~c5) 4종 시드 기반 동적 SVG 시각 교구 엔진
// mulberry32 결정론적 시드(window.createSeededRng)를 사용해 1·3·7·14일 간격 복습 시 동일한 그림과 보기를 100% 재현합니다.
(function () {
  function pick(rng, arr) {
    return arr[Math.floor(rng() * arr.length)];
  }

  function shuffleWithRng(rng, arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = copy[i];
      copy[i] = copy[j];
      copy[j] = t;
    }
    return copy;
  }

  function makeNumericChoices(rng, ans, minVal, maxVal, suffix) {
    var sfx = suffix || "";
    var list = [String(ans) + sfx];
    var deltas = [-10, -3, -2, -1, 1, 2, 3, 4, 10, -4, 5];
    var guard = 0;
    while (list.length < 4 && guard < 90) {
      guard += 1;
      var c = ans + deltas[Math.floor(rng() * deltas.length)];
      var label = String(c) + sfx;
      if (c >= minVal && c <= maxVal && c !== ans && list.indexOf(label) === -1) {
        list.push(label);
      }
    }
    var cur = minVal;
    while (list.length < 4) {
      var fb = String(cur) + sfx;
      if (cur !== ans && list.indexOf(fb) === -1) list.push(fb);
      cur += 1;
    }
    return shuffleWithRng(rng, list);
  }

  // ---------------- 수학 시각 교구 8종 ----------------

  // 1) m1: 10칸 수 배열판(Ten-Frame) 구슬 세기 (Tier 1~2)
  function tplTenFrame(rng, tier, seed) {
    var count = Math.floor(rng() * 8) + 1; // 1..8
    var askComplement = tier >= 2 && rng() < 0.42;
    var dotColors = ["#FF5252", "#29B6F6", "#66BB6A", "#FFA726", "#AB47BC"];
    var col = pick(rng, dotColors);

    var cells = "";
    for (var i = 0; i < 10; i++) {
      var r = Math.floor(i / 5);
      var c = i % 5;
      var x = 65 + c * 50;
      var y = 16 + r * 44;
      cells += '<rect x="' + x + '" y="' + y + '" width="46" height="40" rx="6" fill="#FFFDF7" stroke="#22313F" stroke-width="2.5"/>';
      if (i < count) {
        cells +=
          '<circle cx="' + (x + 23) + '" cy="' + (y + 20) + '" r="13.5" fill="' + col + '" stroke="#22313F" stroke-width="2.2"/>' +
          '<circle cx="' + (x + 19) + '" cy="' + (y + 15) + '" r="3.5" fill="#FFFFFF" opacity="0.8"/>';
      }
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="55" y="8" width="270" height="100" rx="12" fill="#FFE082" stroke="#22313F" stroke-width="3"/>' +
      cells +
      "</svg>";

    var ans = askComplement ? (10 - count) : count;
    var qText = askComplement
      ? "10칸 수 판을 가득 채우려면 구슬이 몇 개 더 필요할까요?"
      : "10칸 수 판 안에 들어 있는 구슬은 모두 몇 개일까요?";
    var hint = askComplement
      ? ("비어 있는 하얀 칸을 하나씩 세어 보면 " + ans + "칸이에요!")
      : (count >= 5 ? ("윗줄 5개에 아랫줄 " + (count - 5) + "개를 더해 보세요!") : "구슬을 왼쪽부터 하나씩 짚어 세어 보세요!");

    return {
      templateId: "m1_ten_frame",
      subject: "math",
      category: "math",
      unit: "m1",
      tier: Math.min(2, tier),
      domain: "이해력",
      pokeType: "물",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, ans, 1, 9, "개"),
      answer: ans + "개",
      hint: hint,
      ttsKo: qText
    };
  }

  // 2) m1~m3: 모으기와 가르기 연결판 (Number Bonds, Tier 2~4)
  function tplNumberBonds(rng, tier, seed) {
    var maxWhole = tier <= 2 ? 9 : 16;
    var minWhole = tier <= 2 ? 5 : 8;
    var whole = Math.floor(rng() * (maxWhole - minWhole + 1)) + minWhole;
    var left = Math.floor(rng() * (whole - 2)) + 1;
    var right = whole - left;
    var hideWhole = rng() < 0.45;

    var topLabel = hideWhole ? "?" : String(whole);
    var rightLabel = hideWhole ? String(right) : "?";
    var ans = hideWhole ? whole : right;

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<line x1="190" y1="36" x2="112" y2="86" stroke="#22313F" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="190" y1="36" x2="268" y2="86" stroke="#22313F" stroke-width="4" stroke-linecap="round"/>' +
      '<circle cx="190" cy="32" r="24" fill="' + (hideWhole ? "#FFD54F" : "#81D4FA") + '" stroke="#22313F" stroke-width="3"/>' +
      '<text x="190" y="40" text-anchor="middle" font-size="22" font-weight="900" fill="#22313F">' + topLabel + "</text>" +
      '<circle cx="112" cy="86" r="22" fill="#A5D6A7" stroke="#22313F" stroke-width="3"/>' +
      '<text x="112" y="94" text-anchor="middle" font-size="20" font-weight="900" fill="#22313F">' + left + "</text>" +
      '<circle cx="268" cy="86" r="22" fill="' + (!hideWhole ? "#FFD54F" : "#A5D6A7") + '" stroke="#22313F" stroke-width="3"/>' +
      '<text x="268" y="94" text-anchor="middle" font-size="20" font-weight="900" fill="#22313F">' + rightLabel + "</text>" +
      "</svg>";

    var qText = hideWhole
      ? ("모으기 판에서 " + left + "와(과) " + right + "를 모으면 ?에 들어갈 수는?")
      : ("가르기 판에서 " + whole + "을(를) " + left + "와(과) 몇으로 가를 수 있을까요?");
    var hint = hideWhole
      ? (left + " + " + right + "를 계산하면 위쪽 동그라미 수가 나와요!")
      : (left + "에 몇을 더하면 " + whole + "이 되는지 생각해 보세요!");

    return {
      templateId: "m1_number_bonds",
      subject: "math",
      category: "math",
      unit: tier <= 2 ? "m1" : "m3",
      tier: Math.max(2, Math.min(4, tier)),
      domain: "계산력",
      pokeType: "전기",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, ans, 1, maxWhole + 2, ""),
      answer: String(ans),
      hint: hint,
      ttsKo: qText
    };
  }

  // 3) m2: 입체도형(상자·둥근기둥·공) 블록 세기 (Tier 2~4)
  function tpl3dShapes(rng, tier, seed) {
    var nBox = Math.floor(rng() * 3) + 1; // 1..3
    var nCyl = Math.floor(rng() * 3) + 1; // 1..3
    var nBall = Math.floor(rng() * 3) + 1; // 1..3
    while (nBox + nCyl + nBall > 7) {
      if (nBox > 1) nBox -= 1;
      else if (nCyl > 1) nCyl -= 1;
      else nBall -= 1;
    }

    var seq = [];
    var i;
    for (i = 0; i < nBox; i++) seq.push("box");
    for (i = 0; i < nCyl; i++) seq.push("cyl");
    for (i = 0; i < nBall; i++) seq.push("ball");
    seq = shuffleWithRng(rng, seq);

    var total = seq.length;
    var slotW = 46;
    var startX = Math.round((380 - total * slotW) / 2) + 6;
    var shapesSvg = "";

    for (var k = 0; k < seq.length; k++) {
      var sx = startX + k * slotW;
      var kind = seq[k];
      if (kind === "box") {
        // 상자 모양 (직육면체 3D)
        shapesSvg +=
          '<g transform="translate(' + sx + ',34)">' +
          '<polygon points="0,12 10,3 34,3 24,12" fill="#90CAF9" stroke="#22313F" stroke-width="2"/>' +
          '<polygon points="24,12 34,3 34,37 24,46" fill="#1E88E5" stroke="#22313F" stroke-width="2"/>' +
          '<rect x="0" y="12" width="24" height="34" fill="#42A5F5" stroke="#22313F" stroke-width="2"/>' +
          "</g>";
      } else if (kind === "cyl") {
        // 둥근기둥 모양 (원기둥 3D)
        shapesSvg +=
          '<g transform="translate(' + sx + ',34)">' +
          '<path d="M3,10 L3,40 A14,6 0 0,0 31,40 L31,10 Z" fill="#66BB6A" stroke="#22313F" stroke-width="2"/>' +
          '<ellipse cx="17" cy="10" rx="14" ry="6" fill="#A5D6A7" stroke="#22313F" stroke-width="2"/>' +
          "</g>";
      } else {
        // 공 모양 (구 3D)
        shapesSvg +=
          '<g transform="translate(' + sx + ',38)">' +
          '<circle cx="17" cy="21" r="17" fill="#FF7043" stroke="#22313F" stroke-width="2.2"/>' +
          '<ellipse cx="11" cy="14" rx="5" ry="3.5" fill="#FFCCBC" transform="rotate(-25 11 14)"/>' +
          "</g>";
      }
    }

    var targets = [
      { key: "box", name: "상자 모양(파란 블록)", cnt: nBox },
      { key: "cyl", name: "둥근기둥 모양(초록 기둥)", cnt: nCyl },
      { key: "ball", name: "공 모양(주황 공)", cnt: nBall }
    ];
    var target = pick(rng, targets);

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="16" y="14" width="348" height="88" rx="14" fill="#F8FAFC" stroke="#22313F" stroke-width="2.5"/>' +
      '<line x1="28" y1="88" x2="352" y2="88" stroke="#CFD8DC" stroke-width="3"/>' +
      shapesSvg +
      "</svg>";

    var qText = "그림 속에서 「" + target.name + "」은 모두 몇 개일까요?";
    return {
      templateId: "m2_3d_shapes",
      subject: "math",
      category: "math",
      unit: "m2",
      tier: Math.max(2, Math.min(4, tier)),
      domain: "문제해결력",
      pokeType: "강철",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, target.cnt, 0, 7, "개"),
      answer: target.cnt + "개",
      hint: "모양의 특징을 보며 왼쪽부터 「" + target.name + "」만 손가락으로 짚어 세어 보세요!",
      ttsKo: qText
    };
  }

  // 4) m3: 수 띠 점프 덧셈·뺄셈 (Number Line Jump, Tier 3~5)
  function tplNumberLine(rng, tier, seed) {
    var baseStart = tier <= 3 ? 0 : 5;
    var span = 10; // 11 ticks shown
    var isAdd = rng() < 0.58;
    var a, b, ans;
    if (isAdd) {
      a = baseStart + Math.floor(rng() * 5) + 1;
      b = Math.floor(rng() * 4) + 2;
      if (a + b > baseStart + span) b = baseStart + span - a;
      ans = a + b;
    } else {
      a = baseStart + Math.floor(rng() * 5) + 5;
      b = Math.floor(rng() * 4) + 2;
      ans = a - b;
    }

    var x0 = 35;
    var stepX = 31;
    var ticks = "";
    for (var i = 0; i <= span; i++) {
      var val = baseStart + i;
      var tx = x0 + i * stepX;
      var isAns = val === ans;
      ticks +=
        '<line x1="' + tx + '" y1="68" x2="' + tx + '" y2="80" stroke="#22313F" stroke-width="2.5"/>' +
        '<text x="' + tx + '" y="99" text-anchor="middle" font-size="14" font-weight="' + (isAns ? "900" : "700") + '" fill="' + (isAns ? "#D84315" : "#22313F") + '">' +
        (isAns ? "?" : val) +
        "</text>";
    }

    var startX = x0 + (a - baseStart) * stepX;
    var endX = x0 + (ans - baseStart) * stepX;
    var midX = (startX + endX) / 2;
    var arcColor = isAdd ? "#00897B" : "#E53935";
    var jumpLabel = (isAdd ? "+" : "-") + b;

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<line x1="22" y1="74" x2="358" y2="74" stroke="#22313F" stroke-width="3" stroke-linecap="round"/>' +
      ticks +
      '<path d="M' + startX + ',66 Q' + midX + ',14 ' + endX + ',64" fill="none" stroke="' + arcColor + '" stroke-width="3.5"/>' +
      '<circle cx="' + startX + '" cy="74" r="5.5" fill="#29B6F6" stroke="#22313F" stroke-width="2"/>' +
      '<circle cx="' + endX + '" cy="74" r="6.5" fill="#FFD54F" stroke="#22313F" stroke-width="2.2"/>' +
      '<rect x="' + (midX - 20) + '" y="8" width="40" height="22" rx="8" fill="#FFF9C4" stroke="#22313F" stroke-width="2"/>' +
      '<text x="' + midX + '" y="24" text-anchor="middle" font-size="14" font-weight="900" fill="#22313F">' + jumpLabel + "</text>" +
      "</svg>";

    var qText = "수 띠에서 " + a + "부터 화살표(" + jumpLabel + ")만큼 뛰면 ? 자리에 올 수는?";
    return {
      templateId: "m3_number_line",
      subject: "math",
      category: "math",
      unit: "m3",
      tier: Math.max(3, Math.min(5, tier)),
      domain: "계산력",
      pokeType: "전기",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, ans, baseStart, baseStart + span + 2, ""),
      answer: String(ans),
      hint: isAdd
        ? (a + "에서 오른쪽으로 " + b + "칸 한 칸씩 세어 가 보세요!")
        : (a + "에서 왼쪽으로 " + b + "칸 거꾸로 세어 내려가 보세요!"),
      ttsKo: qText
    };
  }

  // 5) m4: 눈금 길이 막대 비교하기 (Tier 4~6)
  function tplLengthBars(rng, tier, seed) {
    var lens = shuffleWithRng(rng, [3, 4, 5, 6, 7, 8, 9]).slice(0, 3);
    var labels = ["가", "나", "다"];
    var colors = ["#FF7043", "#29B6F6", "#66BB6A"];
    var askDiff = tier >= 5 && rng() < 0.5;

    var gridLines = "";
    for (var g = 0; g <= 10; g++) {
      var gx = 68 + g * 27;
      gridLines += '<line x1="' + gx + '" y1="12" x2="' + gx + '" y2="104" stroke="#CFD8DC" stroke-width="1.5" stroke-dasharray="3,3"/>';
    }

    var bars = "";
    for (var i = 0; i < 3; i++) {
      var by = 18 + i * 29;
      var bw = lens[i] * 27;
      bars +=
        '<text x="44" y="' + (by + 16) + '" text-anchor="middle" font-size="15" font-weight="900" fill="#22313F">' + labels[i] + "</text>" +
        '<rect x="68" y="' + by + '" width="' + bw + '" height="20" rx="5" fill="' + colors[i] + '" stroke="#22313F" stroke-width="2.3"/>';
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="20" y="8" width="340" height="100" rx="12" fill="#FFFFFF" stroke="#22313F" stroke-width="2.5"/>' +
      gridLines +
      bars +
      "</svg>";

    if (askDiff) {
      var maxL = Math.max(lens[0], lens[1], lens[2]);
      var minL = Math.min(lens[0], lens[1], lens[2]);
      var diff = maxL - minL;
      var qText = "가장 긴 막대는 가장 짧은 막대보다 눈금 몇 칸 더 길까요?";
      return {
        templateId: "m4_length_bars",
        subject: "math",
        category: "math",
        unit: "m4",
        tier: Math.max(4, Math.min(6, tier)),
        domain: "이해력",
        pokeType: "물",
        svg: svg,
        question: qText,
        choices: makeNumericChoices(rng, diff, 1, 8, "칸"),
        answer: diff + "칸",
        hint: "가장 긴 막대(" + maxL + "칸)에서 가장 짧은 막대(" + minL + "칸)를 빼 보세요!",
        ttsKo: qText
      };
    } else {
      var askLongest = rng() < 0.55;
      var bestIdx = 0;
      for (var m = 1; m < 3; m++) {
        if (askLongest ? (lens[m] > lens[bestIdx]) : (lens[m] < lens[bestIdx])) bestIdx = m;
      }
      var ansStr = labels[bestIdx] + " 막대";
      var qText2 = askLongest ? "세 막대 중에서 길이가 가장 긴 것은 어느 것일까요?" : "세 막대 중에서 길이가 가장 짧은 것은 어느 것일까요?";
      return {
        templateId: "m4_length_bars",
        subject: "math",
        category: "math",
        unit: "m4",
        tier: Math.max(4, Math.min(6, tier)),
        domain: "이해력",
        pokeType: "물",
        svg: svg,
        question: qText2,
        choices: shuffleWithRng(rng, ["가 막대", "나 막대", "다 막대", "모두 같다"]),
        answer: ansStr,
        hint: "왼쪽 끝이 맞춰져 있으니 오른쪽으로 " + (askLongest ? "가장 멀리 나온" : "가장 조금 나온") + " 막대를 찾아요!",
        ttsKo: qText2
      };
    }
  }

  // 6) m4: 양팔 저울 무게 추론 (Balance Scale, Tier 5~7)
  function tplBalanceScale(rng, tier, seed) {
    var equalMode = tier >= 6 && rng() < 0.55;
    if (equalMode) {
      // 수평을 이룬 양팔 저울: [사과 + a] == [total] -> 사과 무게 맞추기!
      var appleW = Math.floor(rng() * 6) + 2; // 2..7
      var extraW = Math.floor(rng() * 5) + 1; // 1..5
      var rightW = appleW + extraW;

      var svgEq =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
        '<polygon points="172,106 208,106 190,68" fill="#8D6E63" stroke="#22313F" stroke-width="2.5"/>' +
        '<line x1="82" y1="68" x2="298" y2="68" stroke="#22313F" stroke-width="4.5" stroke-linecap="round"/>' +
        '<rect x="64" y="58" width="68" height="10" rx="4" fill="#FFE082" stroke="#22313F" stroke-width="2"/>' +
        '<rect x="248" y="58" width="68" height="10" rx="4" fill="#FFE082" stroke="#22313F" stroke-width="2"/>' +
        '<circle cx="84" cy="42" r="14" fill="#FF5252" stroke="#22313F" stroke-width="2.2"/>' +
        '<text x="84" y="47" text-anchor="middle" font-size="13" font-weight="900" fill="#FFFFFF">?</text>' +
        '<rect x="103" y="34" width="24" height="22" rx="5" fill="#90CAF9" stroke="#22313F" stroke-width="2"/>' +
        '<text x="115" y="50" text-anchor="middle" font-size="14" font-weight="900" fill="#22313F">' + extraW + "</text>" +
        '<rect x="266" y="30" width="32" height="26" rx="6" fill="#A5D6A7" stroke="#22313F" stroke-width="2.2"/>' +
        '<text x="282" y="48" text-anchor="middle" font-size="15" font-weight="900" fill="#22313F">' + rightW + "</text>" +
        "</svg>";

      var qEq = "양팔 저울이 반듯하게 수평이에요! 빨간 구슬(?)의 무게는 얼마일까요?";
      return {
        templateId: "m4_balance_scale",
        subject: "math",
        category: "math",
        unit: "m4",
        tier: Math.max(5, Math.min(7, tier)),
        domain: "추론력",
        pokeType: "에스퍼",
        svg: svgEq,
        question: qEq,
        choices: makeNumericChoices(rng, appleW, 1, 14, ""),
        answer: String(appleW),
        hint: "양쪽 무게가 같으므로 (? + " + extraW + " = " + rightW + ")이 되게 하는 수를 찾아보세요!",
        ttsKo: qEq
      };
    } else {
      // 기울어진 양팔 저울 비교
      var leftHeavy = rng() < 0.5;
      var items = shuffleWithRng(rng, [
        { name: "수박", col: "#4CAF50" },
        { name: "호박", col: "#FF9800" },
        { name: "멜론", col: "#AED581" },
        { name: "파인애플", col: "#FDD835" }
      ]).slice(0, 2);
      var leftItem = items[0];
      var rightItem = items[1];
      var lY = leftHeavy ? 78 : 52;
      var rY = leftHeavy ? 52 : 78;
      var ansItem = leftHeavy ? leftItem.name : rightItem.name;

      var svgTilt =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
        '<polygon points="172,108 208,108 190,66" fill="#8D6E63" stroke="#22313F" stroke-width="2.5"/>' +
        '<line x1="88" y1="' + lY + '" x2="292" y2="' + rY + '" stroke="#22313F" stroke-width="4.5" stroke-linecap="round"/>' +
        '<rect x="60" y="' + (lY - 8) + '" width="58" height="9" rx="4" fill="#FFE082" stroke="#22313F" stroke-width="2"/>' +
        '<circle cx="89" cy="' + (lY - 24) + '" r="15" fill="' + leftItem.col + '" stroke="#22313F" stroke-width="2.2"/>' +
        '<text x="89" y="' + (lY + 18) + '" text-anchor="middle" font-size="13" font-weight="900" fill="#22313F">' + leftItem.name + "</text>" +
        '<rect x="262" y="' + (rY - 8) + '" width="58" height="9" rx="4" fill="#FFE082" stroke="#22313F" stroke-width="2"/>' +
        '<circle cx="291" cy="' + (rY - 24) + '" r="15" fill="' + rightItem.col + '" stroke="#22313F" stroke-width="2.2"/>' +
        '<text x="291" y="' + (rY + 18) + '" text-anchor="middle" font-size="13" font-weight="900" fill="#22313F">' + rightItem.name + "</text>" +
        "</svg>";

      var qTilt = "양팔 저울을 보고 두 과일 중 더 무거운 것을 골라 보세요!";
      return {
        templateId: "m4_balance_scale",
        subject: "math",
        category: "math",
        unit: "m4",
        tier: Math.max(4, Math.min(6, tier)),
        domain: "이해력",
        pokeType: "물",
        svg: svgTilt,
        question: qTilt,
        choices: shuffleWithRng(rng, [leftItem.name, rightItem.name, "무게가 똑같다", "알 수 없다"]),
        answer: ansItem,
        hint: "양팔 저울에서는 더 무거운 쪽 접시가 아래로 내려가요!",
        ttsKo: qTilt
      };
    }
  }

  // 7) m5: 10개씩 묶음 막대와 낱개 수 모형 (Base-10 Blocks, Tier 6~8, 50 이하 엄수!)
  function tplBase10Blocks(rng, tier, seed) {
    var tens = Math.floor(rng() * 4) + 1; // 1..4 (10..40)
    var ones = Math.floor(rng() * 9) + 1; // 1..9 -> 11..49 (<= 50!)
    var ans = tens * 10 + ones;

    var rods = "";
    for (var t = 0; t < tens; t++) {
      var rx = 56 + t * 34;
      rods += '<rect x="' + rx + '" y="14" width="22" height="88" rx="4" fill="#4FC3F7" stroke="#22313F" stroke-width="2.2"/>';
      for (var seg = 1; seg < 10; seg++) {
        var sy = 14 + seg * 8.8;
        rods += '<line x1="' + rx + '" y1="' + sy.toFixed(1) + '" x2="' + (rx + 22) + '" y2="' + sy.toFixed(1) + '" stroke="#22313F" stroke-width="1"/>';
      }
    }

    var cubes = "";
    for (var o = 0; o < ones; o++) {
      var col = o % 3;
      var row = Math.floor(o / 3);
      var cx = 224 + col * 28;
      var cy = 74 - row * 26;
      cubes += '<rect x="' + cx + '" y="' + cy + '" width="20" height="20" rx="4" fill="#FFD54F" stroke="#22313F" stroke-width="2"/>';
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="28" y="6" width="324" height="104" rx="14" fill="#FFFDF7" stroke="#22313F" stroke-width="2.5"/>' +
      '<line x1="202" y1="14" x2="202" y2="102" stroke="#CFD8DC" stroke-width="2" stroke-dasharray="4,4"/>' +
      rods +
      cubes +
      "</svg>";

    var qText = "파란 10모형 막대와 노란 낱개 모형이 나타내는 수는 얼마일까요?";
    return {
      templateId: "m5_base10_blocks",
      subject: "math",
      category: "math",
      unit: "m5",
      tier: Math.max(6, Math.min(8, tier)),
      domain: "이해력",
      pokeType: "물",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, ans, 10, 50, ""),
      answer: String(ans),
      hint: "파란 10모형이 " + tens + "개(" + (tens * 10) + ")이고 노란 낱개가 " + ones + "개예요!",
      ttsKo: qText
    };
  }

  // 8) m5/m_adv: 묶음 상자 덧셈·뺄셈 시각 모델 (Tier 7~10)
  function tplBundleBoxOps(rng, tier, seed) {
    var maxBound = tier <= 8 ? 50 : 99;
    var t1 = Math.floor(rng() * 2) + 1; // 1..2
    var o1 = Math.floor(rng() * 4) + 1; // 1..4
    var t2 = Math.floor(rng() * 2) + 1; // 1..2
    var o2 = Math.floor(rng() * 4) + 1; // 1..4
    var a = t1 * 10 + o1;
    var b = t2 * 10 + o2;
    if (a + b > maxBound) b = 10 + o2;
    var ans = a + b;

    function drawGroup(gx, tensCnt, onesCnt, boxCol) {
      var g = "";
      for (var i = 0; i < tensCnt; i++) {
        var bx = gx + i * 36;
        g +=
          '<rect x="' + bx + '" y="30" width="32" height="36" rx="6" fill="' + boxCol + '" stroke="#22313F" stroke-width="2.2"/>' +
          '<text x="' + (bx + 16) + '" y="53" text-anchor="middle" font-size="13" font-weight="900" fill="#22313F">10</text>';
      }
      for (var j = 0; j < onesCnt; j++) {
        var ox = gx + j * 18 + 8;
        g += '<circle cx="' + ox + '" cy="84" r="6.5" fill="#FF7043" stroke="#22313F" stroke-width="1.8"/>';
      }
      return g;
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="20" y="10" width="340" height="96" rx="14" fill="#F8FAFC" stroke="#22313F" stroke-width="2.5"/>' +
      drawGroup(46, Math.floor(a / 10), a % 10, "#81D4FA") +
      '<text x="186" y="64" text-anchor="middle" font-size="28" font-weight="900" fill="#22313F">+</text>' +
      drawGroup(224, Math.floor(b / 10), b % 10, "#A5D6A7") +
      "</svg>";

    var qText = "10개씩 담긴 상자와 낱개 구슬을 모두 합치면 몇 개일까요?";
    return {
      templateId: "m5_visual_bundle_ops",
      subject: "math",
      category: "math",
      unit: tier <= 8 ? "m5" : "m_adv",
      tier: Math.max(7, tier),
      domain: "문제해결력",
      pokeType: "강철",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, ans, 15, maxBound, "개"),
      answer: ans + "개",
      hint: "10상자끼리 먼저 세어 더하고(" + a + " + " + b + "), 아래 낱개 구슬을 합쳐 보세요!",
      ttsKo: qText
    };
  }

  // ---------------- 창의력 시각 교구 4종 ----------------

  // 9) c2: 도형·색깔 복합 규칙 기차 보드 (Tier 1~4)
  function tplShapePattern(rng, tier, seed) {
    var catalog = [
      { name: "빨간 동그라미", shape: "circle", col: "#FF5252" },
      { name: "파란 네모", shape: "rect", col: "#29B6F6" },
      { name: "노란 별", shape: "star", col: "#FFD54F" },
      { name: "초록 세모", shape: "tri", col: "#66BB6A" }
    ];
    var picked = shuffleWithRng(rng, catalog);
    var cycle = tier <= 2 ? [picked[0], picked[1]] : [picked[0], picked[1], picked[2]];
    var seq = [];
    for (var i = 0; i < 6; i++) {
      seq.push(cycle[i % cycle.length]);
    }
    var ansObj = seq[5];

    function renderToken(cx, cy, item, hidden) {
      if (hidden) {
        return (
          '<rect x="' + (cx - 22) + '" y="' + (cy - 22) + '" width="44" height="44" rx="10" fill="#FFF9C4" stroke="#D84315" stroke-width="2.5" stroke-dasharray="4,3"/>' +
          '<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" font-size="22" font-weight="900" fill="#D84315">?</text>'
        );
      }
      if (item.shape === "circle") {
        return '<circle cx="' + cx + '" cy="' + cy + '" r="17" fill="' + item.col + '" stroke="#22313F" stroke-width="2.5"/>';
      }
      if (item.shape === "rect") {
        return '<rect x="' + (cx - 16) + '" y="' + (cy - 16) + '" width="32" height="32" rx="5" fill="' + item.col + '" stroke="#22313F" stroke-width="2.5"/>';
      }
      if (item.shape === "tri") {
        return '<polygon points="' + cx + "," + (cy - 18) + " " + (cx - 18) + "," + (cy + 16) + " " + (cx + 18) + "," + (cy + 16) + '" fill="' + item.col + '" stroke="#22313F" stroke-width="2.5"/>';
      }
      return '<polygon points="' + cx + "," + (cy - 19) + " " + (cx + 5) + "," + (cy - 6) + " " + (cx + 19) + "," + (cy - 6) + " " + (cx + 8) + "," + (cy + 4) + " " + (cx + 12) + "," + (cy + 18) + " " + cx + "," + (cy + 10) + " " + (cx - 12) + "," + (cy + 18) + " " + (cx - 8) + "," + (cy + 4) + " " + (cx - 19) + "," + (cy - 6) + " " + (cx - 5) + "," + (cy - 6) + '" fill="' + item.col + '" stroke="#22313F" stroke-width="2.2"/>';
    }

    var tokensSvg = "";
    for (var k = 0; k < 6; k++) {
      tokensSvg += renderToken(48 + k * 56, 58, seq[k], k === 5);
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="14" y="14" width="352" height="88" rx="14" fill="#FFFFFF" stroke="#22313F" stroke-width="2.5"/>' +
      tokensSvg +
      "</svg>";

    var qText = "모양 기차의 규칙을 보고 맨 오른쪽 ? 칸에 들어갈 모양을 고르세요!";
    return {
      templateId: "c2_shape_color_pattern",
      subject: "creative",
      category: "creative",
      unit: "c2",
      tier: Math.max(1, Math.min(4, tier)),
      domain: "규칙·논리추론",
      pokeType: "에스퍼",
      svg: svg,
      question: qText,
      choices: shuffleWithRng(rng, catalog.map(function (c) { return c.name; })),
      answer: ansObj.name,
      hint: "앞에서부터 " + cycle.length + "개씩 묶어 어떤 순서로 되풀이되는지 소리 내어 읽어 보세요!",
      ttsKo: qText
    };
  }

  // 10) c3: 점선 거울 대칭(데칼코마니) 추론 (Tier 3~6)
  function tplMirrorSymmetry(rng, tier, seed) {
    var palette = [
      { name: "빨간색", hex: "#FF5252" },
      { name: "파란색", hex: "#29B6F6" },
      { name: "노란색", hex: "#FFD54F" },
      { name: "초록색", hex: "#66BB6A" }
    ];
    var shuf = shuffleWithRng(rng, palette);
    // 왼쪽 2열: 바깥줄(outerCol), 거울 바로 옆 안쪽줄(innerCol)
    var outerCol = shuf[0];
    var innerCol = shuf[1];
    var askNearMirror = rng() < 0.55;
    var ansCol = askNearMirror ? innerCol.name : outerCol.name;

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="52" y="10" width="276" height="96" rx="12" fill="#FFFDF7" stroke="#22313F" stroke-width="2.5"/>' +
      // Left painted tiles (outer x=116, inner near mirror x=152)
      '<rect x="114" y="26" width="32" height="30" rx="4" fill="' + outerCol.hex + '" stroke="#22313F" stroke-width="2"/>' +
      '<rect x="114" y="60" width="32" height="30" rx="4" fill="' + outerCol.hex + '" stroke="#22313F" stroke-width="2"/>' +
      '<rect x="150" y="26" width="32" height="30" rx="4" fill="' + innerCol.hex + '" stroke="#22313F" stroke-width="2"/>' +
      '<rect x="150" y="60" width="32" height="30" rx="4" fill="' + innerCol.hex + '" stroke="#22313F" stroke-width="2"/>' +
      // Mirror center line at x=190
      '<line x1="190" y1="12" x2="190" y2="104" stroke="#E53935" stroke-width="3.2" stroke-dasharray="5,4"/>' +
      // Right blank mirrored slots (near mirror x=198, outer right x=234)
      '<rect x="198" y="26" width="32" height="64" rx="6" fill="' + (askNearMirror ? "#FFF9C4" : "#ECEFF1") + '" stroke="#22313F" stroke-width="2" stroke-dasharray="4,3"/>' +
      '<text x="214" y="64" text-anchor="middle" font-size="18" font-weight="900" fill="#D84315">' + (askNearMirror ? "?" : "") + "</text>" +
      '<rect x="234" y="26" width="32" height="64" rx="6" fill="' + (!askNearMirror ? "#FFF9C4" : "#ECEFF1") + '" stroke="#22313F" stroke-width="2" stroke-dasharray="4,3"/>' +
      '<text x="250" y="64" text-anchor="middle" font-size="18" font-weight="900" fill="#D84315">' + (!askNearMirror ? "?" : "") + "</text>" +
      "</svg>";

    var qText = askNearMirror
      ? "빨간 점선을 따라 반으로 접었다 펼쳤어요! 점선 바로 오른쪽(?)에는 무슨 색이 찍힐까요?"
      : "빨간 점선을 따라 반으로 접었다 펼쳤어요! 맨 오른쪽 바깥 칸(?)에는 무슨 색이 찍힐까요?";

    return {
      templateId: "c3_mirror_symmetry",
      subject: "creative",
      category: "creative",
      unit: "c3",
      tier: Math.max(3, Math.min(6, tier)),
      domain: "분류·다른하나",
      pokeType: "페어리",
      svg: svg,
      question: qText,
      choices: shuffleWithRng(rng, palette.map(function (p) { return p.name; })),
      answer: ansCol,
      hint: "데칼코마니로 접으면 점선에서 가까운 칸은 가까운 칸끼리, 먼 칸은 먼 칸끼리 마주 찍혀요!",
      ttsKo: qText
    };
  }

  // 11) c2: 2x2 그림 행렬 퍼즐 추론 (Tier 5~8)
  function tplMatrix2x2(rng, tier, seed) {
    var shapes = shuffleWithRng(rng, [
      { sName: "별", kind: "star" },
      { sName: "동그라미", kind: "circle" }
    ]);
    var colors = shuffleWithRng(rng, [
      { cName: "파란", hex: "#29B6F6" },
      { cName: "노란", hex: "#FFD54F" }
    ]);
    // Top row: colors[0] + shapes[0], colors[0] + shapes[1]
    // Bottom row: colors[1] + shapes[0], ? => colors[1] + shapes[1]
    var ansLabel = colors[1].cName + " " + shapes[1].sName;
    var allCombos = [
      colors[0].cName + " " + shapes[0].sName,
      colors[0].cName + " " + shapes[1].sName,
      colors[1].cName + " " + shapes[0].sName,
      colors[1].cName + " " + shapes[1].sName
    ];

    function drawCellShape(cx, cy, kind, hex) {
      if (kind === "circle") {
        return '<circle cx="' + cx + '" cy="' + cy + '" r="14" fill="' + hex + '" stroke="#22313F" stroke-width="2.3"/>';
      }
      return '<polygon points="' + cx + "," + (cy - 16) + " " + (cx + 4) + "," + (cy - 5) + " " + (cx + 16) + "," + (cy - 5) + " " + (cx + 7) + "," + (cy + 3) + " " + (cx + 10) + "," + (cy + 15) + " " + cx + "," + (cy + 8) + " " + (cx - 10) + "," + (cy + 15) + " " + (cx - 7) + "," + (cy + 3) + " " + (cx - 16) + "," + (cy - 5) + " " + (cx - 4) + "," + (cy - 5) + '" fill="' + hex + '" stroke="#22313F" stroke-width="2"/>';
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="122" y="8" width="136" height="100" rx="12" fill="#FFFFFF" stroke="#22313F" stroke-width="3"/>' +
      '<line x1="190" y1="8" x2="190" y2="108" stroke="#22313F" stroke-width="2.2"/>' +
      '<line x1="122" y1="58" x2="258" y2="58" stroke="#22313F" stroke-width="2.2"/>' +
      drawCellShape(156, 33, shapes[0].kind, colors[0].hex) +
      drawCellShape(224, 33, shapes[1].kind, colors[0].hex) +
      drawCellShape(156, 83, shapes[0].kind, colors[1].hex) +
      '<rect x="194" y="62" width="60" height="42" rx="8" fill="#FFF9C4"/>' +
      '<text x="224" y="90" text-anchor="middle" font-size="22" font-weight="900" fill="#D84315">?</text>' +
      "</svg>";

    var qText = "가로줄과 세로줄의 변화 규칙을 보고 오른쪽 아래 ? 칸에 알맞은 모양을 고르세요!";
    return {
      templateId: "c2_matrix_2x2",
      subject: "creative",
      category: "creative",
      unit: "c2",
      tier: Math.max(5, Math.min(8, tier)),
      domain: "규칙·논리추론",
      pokeType: "에스퍼",
      svg: svg,
      question: qText,
      choices: shuffleWithRng(rng, allCombos),
      answer: ansLabel,
      hint: "윗줄과 아랫줄의 색깔 규칙을 보고, 왼쪽 줄과 오른쪽 줄의 모양 규칙을 합쳐 보세요!",
      ttsKo: qText
    };
  }

  // 12) c5: 입체 쌓기나무 숨은 블록 세기 (Tier 6~10)
  function tplStackedCubes(rng, tier, seed) {
    // Base layer columns (3 slots) + 2nd floor blocks on top of selected base slots
    var layouts = [
      { cols: [2, 1, 1], total: 4 },
      { cols: [2, 2, 1], total: 5 },
      { cols: [2, 1, 2], total: 5 },
      { cols: [3, 2, 1], total: 6 },
      { cols: [2, 2, 2], total: 6 },
      { cols: [3, 2, 2], total: 7 }
    ];
    var chosen = pick(rng, tier <= 7 ? layouts.slice(0, 4) : layouts);

    function drawIsoCube(x, y) {
      return (
        '<g transform="translate(' + x + "," + y + ')">' +
        '<polygon points="0,-12 20,-22 40,-12 20,-2" fill="#FFE082" stroke="#22313F" stroke-width="2"/>' +
        '<polygon points="0,-12 20,-2 20,20 0,10" fill="#FFB300" stroke="#22313F" stroke-width="2"/>' +
        '<polygon points="20,-2 40,-12 40,10 20,20" fill="#FFA000" stroke="#22313F" stroke-width="2"/>' +
        "</g>"
      );
    }

    var cubesSvg = "";
    for (var c = 0; c < 3; c++) {
      var h = chosen.cols[c];
      var bx = 122 + c * 44;
      var baseY = 82 + (c === 1 ? 6 : 0);
      for (var lv = 0; lv < h; lv++) {
        cubesSvg += drawIsoCube(bx, baseY - lv * 22);
      }
    }

    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 116">' +
      '<rect x="44" y="6" width="292" height="104" rx="14" fill="#F8FAFC" stroke="#22313F" stroke-width="2.5"/>' +
      cubesSvg +
      "</svg>";

    var qText = "2층 블록 아래에 받치고 있는 1층 블록까지 모두 세면 쌓기나무는 몇 개일까요?";
    return {
      templateId: "c5_stacked_cubes",
      subject: "creative",
      category: "creative",
      unit: "c5",
      tier: Math.max(6, tier),
      domain: "창의해결·상황판단",
      pokeType: "페어리",
      svg: svg,
      question: qText,
      choices: makeNumericChoices(rng, chosen.total, 3, 9, "개"),
      answer: chosen.total + "개",
      hint: "왼쪽 기둥(" + chosen.cols[0] + "층) + 가운데 기둥(" + chosen.cols[1] + "층) + 오른쪽 기둥(" + chosen.cols[2] + "층)을 차례로 더해 보세요!",
      ttsKo: qText
    };
  }

  var MATH_TEMPLATES = {
    m1_ten_frame: { fn: tplTenFrame, minTier: 1, maxTier: 3 },
    m1_number_bonds: { fn: tplNumberBonds, minTier: 2, maxTier: 5 },
    m2_3d_shapes: { fn: tpl3dShapes, minTier: 2, maxTier: 5 },
    m3_number_line: { fn: tplNumberLine, minTier: 3, maxTier: 6 },
    m4_length_bars: { fn: tplLengthBars, minTier: 4, maxTier: 7 },
    m4_balance_scale: { fn: tplBalanceScale, minTier: 4, maxTier: 8 },
    m5_base10_blocks: { fn: tplBase10Blocks, minTier: 6, maxTier: 9 },
    m5_visual_bundle_ops: { fn: tplBundleBoxOps, minTier: 7, maxTier: 10 }
  };

  var CREATIVE_TEMPLATES = {
    c2_shape_color_pattern: { fn: tplShapePattern, minTier: 1, maxTier: 5 },
    c3_mirror_symmetry: { fn: tplMirrorSymmetry, minTier: 3, maxTier: 7 },
    c2_matrix_2x2: { fn: tplMatrix2x2, minTier: 5, maxTier: 9 },
    c5_stacked_cubes: { fn: tplStackedCubes, minTier: 6, maxTier: 10 }
  };

  function buildFromRegistry(registry, prefix, maxTier, explicitSeed, explicitTemplateId) {
    var tier = Math.max(1, Math.min(10, Number(maxTier) || 4));
    var seed = (explicitSeed !== undefined && explicitSeed !== null)
      ? (Number(explicitSeed) >>> 0)
      : ((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0);
    if (seed === 0) seed = 20270319;
    var rng = window.createSeededRng(seed);

    var tplKey = explicitTemplateId && registry[explicitTemplateId] ? explicitTemplateId : null;
    if (!tplKey) {
      var allKeys = Object.keys(registry);
      var eligible = allKeys.filter(function (k) {
        return registry[k].minTier <= tier && tier <= registry[k].maxTier + 1;
      });
      if (eligible.length === 0) {
        eligible = allKeys.filter(function (k) { return registry[k].minTier <= tier; });
      }
      if (eligible.length === 0) eligible = [allKeys[0]];
      tplKey = eligible[Math.floor(rng() * eligible.length)];
    }

    var built = registry[tplKey].fn(rng, tier, seed);
    built.id = prefix + "_" + tplKey + "_" + tier + "_" + seed;
    built.seed = seed;
    built.templateId = tplKey;
    built.format = "svg_visual";
    built.ttsEn = "";
    return built;
  }

  window.VISUAL_TEMPLATE_IDS = {
    math: Object.keys(MATH_TEMPLATES),
    creative: Object.keys(CREATIVE_TEMPLATES)
  };

  window.generateDynamicVisualMath = function (maxTier, explicitSeed, explicitTemplateId) {
    return buildFromRegistry(MATH_TEMPLATES, "vmath", maxTier, explicitSeed, explicitTemplateId);
  };

  window.generateDynamicVisualCreative = function (maxTier, explicitSeed, explicitTemplateId) {
    return buildFromRegistry(CREATIVE_TEMPLATES, "vcre", maxTier, explicitSeed, explicitTemplateId);
  };
})();
