// 3단계 핵심 조작 교구 데이터:
// 1) 어문회 8급 핵심 한자 한국 표준 필순 벡터(0..100 격자) + 따라쓰기 문항 생성기
// 2) 초1-1 국어 2조각·3조각 무드래그 한글 글자 조합기 및 어순 탭 배열 데이터
window.HANJA_STROKES = {"一": [[[14, 50], [86, 50]]], "二": [[[24, 34], [76, 34]], [[14, 68], [86, 68]]], "三": [[[22, 26], [78, 26]], [[28, 50], [72, 50]], [[14, 76], [86, 76]]], "四": [[[18, 24], [22, 78]], [[18, 24], [82, 24], [78, 78]], [[40, 26], [38, 52], [28, 62]], [[58, 26], [58, 54], [70, 54]], [[22, 78], [78, 78]]], "五": [[[24, 22], [76, 22]], [[48, 22], [40, 76]], [[24, 48], [72, 48], [68, 76]], [[14, 76], [86, 76]]], "六": [[[50, 16], [50, 32]], [[16, 36], [84, 36]], [[38, 48], [20, 80]], [[62, 48], [80, 80]]], "七": [[[16, 48], [84, 40]], [[44, 18], [44, 74], [52, 80], [82, 80]]], "八": [[[40, 28], [28, 58], [16, 80]], [[56, 24], [70, 58], [86, 80]]], "九": [[[46, 16], [40, 56], [18, 82]], [[20, 38], [66, 34], [62, 76], [86, 76]]], "十": [[[14, 48], [86, 48]], [[50, 14], [50, 86]]], "日": [[[26, 20], [26, 82]], [[26, 20], [74, 20], [74, 82]], [[26, 50], [72, 50]], [[26, 82], [74, 82]]], "月": [[[30, 18], [30, 56], [20, 84]], [[30, 18], [72, 18], [72, 82], [62, 76]], [[30, 40], [70, 40]], [[30, 60], [70, 60]]], "火": [[[24, 36], [18, 54]], [[78, 34], [64, 50]], [[50, 16], [48, 54], [20, 84]], [[50, 52], [82, 84]]], "水": [[[50, 16], [50, 82], [40, 74]], [[16, 44], [38, 42], [20, 76]], [[80, 32], [60, 48]], [[52, 46], [84, 78]]], "木": [[[18, 38], [82, 38]], [[50, 14], [50, 86]], [[48, 38], [18, 78]], [[52, 38], [82, 78]]], "金": [[[50, 14], [16, 48]], [[50, 14], [84, 48]], [[32, 44], [68, 44]], [[24, 60], [76, 60]], [[50, 44], [50, 82]], [[28, 68], [36, 78]], [[72, 66], [62, 78]], [[18, 84], [82, 84]]], "土": [[[24, 46], [76, 46]], [[50, 18], [50, 80]], [[14, 80], [86, 80]]], "山": [[[50, 18], [50, 76]], [[22, 40], [22, 78], [78, 78]], [[78, 36], [78, 82]]], "川": [[[26, 22], [26, 56], [18, 82]], [[50, 24], [50, 76]], [[76, 18], [76, 86]]], "人": [[[52, 18], [38, 52], [16, 82]], [[46, 42], [68, 66], [86, 82]]], "大": [[[18, 42], [82, 42]], [[50, 16], [46, 54], [18, 84]], [[50, 46], [82, 84]]], "小": [[[50, 18], [50, 80], [40, 72]], [[28, 44], [16, 68]], [[72, 44], [84, 68]]], "中": [[[22, 32], [26, 60]], [[22, 32], [78, 32], [74, 60]], [[26, 60], [74, 60]], [[50, 14], [50, 88]]], "王": [[[24, 24], [76, 24]], [[50, 24], [50, 78]], [[28, 50], [72, 50]], [[16, 78], [84, 78]]], "父": [[[34, 20], [20, 40]], [[66, 20], [80, 40]], [[66, 36], [46, 62], [20, 84]], [[34, 38], [56, 62], [82, 84]]], "母": [[[30, 20], [24, 68], [76, 72]], [[30, 20], [72, 20], [68, 84], [56, 78]], [[48, 28], [48, 40]], [[14, 48], [86, 48]], [[48, 56], [48, 68]]], "女": [[[48, 16], [34, 56], [76, 76]], [[70, 36], [52, 64], [22, 82]], [[14, 44], [86, 44]]], "寸": [[[16, 42], [84, 42]], [[64, 16], [64, 82], [52, 74]], [[32, 56], [42, 68]]], "外": [[[32, 20], [18, 48]], [[30, 32], [48, 32], [22, 80]], [[26, 48], [38, 58]], [[64, 16], [64, 86]], [[66, 46], [86, 60]]], "生": [[[30, 20], [20, 48]], [[26, 36], [76, 36]], [[50, 16], [50, 80]], [[28, 58], [72, 58]], [[16, 80], [84, 80]]], "門": [[[18, 20], [18, 84]], [[18, 20], [42, 20], [42, 48]], [[18, 34], [42, 34]], [[18, 48], [42, 48]], [[58, 20], [58, 48]], [[58, 20], [82, 20], [82, 84], [72, 76]], [[58, 34], [82, 34]], [[58, 48], [82, 48]]], "白": [[[50, 14], [38, 28]], [[26, 28], [26, 82]], [[26, 28], [74, 28], [74, 82]], [[26, 54], [74, 54]], [[26, 82], [74, 82]]], "靑": [[[24, 22], [76, 22]], [[50, 12], [50, 44]], [[28, 33], [72, 33]], [[16, 44], [84, 44]], [[32, 54], [32, 86]], [[32, 54], [68, 54], [68, 86], [58, 80]], [[32, 66], [68, 66]], [[32, 76], [68, 76]]], "國": [[[16, 18], [16, 84]], [[16, 18], [84, 18], [84, 84]], [[26, 36], [68, 36]], [[28, 48], [28, 64], [48, 64], [48, 48], [28, 48]], [[26, 72], [52, 68]], [[56, 24], [64, 74], [76, 68]], [[74, 46], [58, 68]], [[68, 24], [74, 30]], [[16, 84], [84, 84]]], "韓": [[[14, 28], [44, 28]], [[29, 16], [29, 40]], [[18, 40], [18, 62], [40, 62], [40, 40], [18, 40]], [[18, 51], [40, 51]], [[14, 72], [44, 72]], [[29, 62], [29, 86]], [[54, 24], [82, 24], [78, 38]], [[50, 38], [86, 38]], [[64, 16], [60, 38]], [[56, 48], [56, 62], [80, 62], [80, 48], [56, 48]], [[54, 72], [84, 72]], [[68, 62], [68, 86]]]};
window.HANGUL_BUILD_ITEMS = [{"id": "hg_01", "unit": "k0", "tier": 1, "emoji": "👜", "word": "[ ? ]방", "hintWord": "가방", "target": "가", "parts": ["ㄱ", "ㅏ"], "distractors": ["ㄴ", "ㅗ", "ㅓ"]}, {"id": "hg_02", "unit": "k0", "tier": 1, "emoji": "🦋", "word": "[ ? ]비", "hintWord": "나비", "target": "나", "parts": ["ㄴ", "ㅏ"], "distractors": ["ㅁ", "ㅜ", "ㅣ"]}, {"id": "hg_03", "unit": "k0", "tier": 1, "emoji": "🐿️", "word": "[ ? ]람쥐", "hintWord": "다람쥐", "target": "다", "parts": ["ㄷ", "ㅏ"], "distractors": ["ㅂ", "ㅗ", "ㅡ"]}, {"id": "hg_04", "unit": "k0", "tier": 1, "emoji": "🦁", "word": "사[ ? ]", "hintWord": "사자", "target": "자", "parts": ["ㅈ", "ㅏ"], "distractors": ["ㅅ", "ㅜ", "ㅓ"]}, {"id": "hg_05", "unit": "k0", "tier": 1, "emoji": "🍌", "word": "바나[ ? ]", "hintWord": "바나나", "target": "나", "parts": ["ㄴ", "ㅏ"], "distractors": ["ㄱ", "ㅗ", "ㅣ"]}, {"id": "hg_06", "unit": "k0", "tier": 1, "emoji": "🧢", "word": "[ ? ]자", "hintWord": "모자", "target": "모", "parts": ["ㅁ", "ㅗ"], "distractors": ["ㅂ", "ㅏ", "ㅜ"]}, {"id": "hg_07", "unit": "k0", "tier": 1, "emoji": "🐄", "word": "음매~ [ ? ]", "hintWord": "소", "target": "소", "parts": ["ㅅ", "ㅗ"], "distractors": ["ㅈ", "ㅏ", "ㅣ"]}, {"id": "hg_08", "unit": "k0", "tier": 1, "emoji": "🥒", "word": "아삭아삭 오[ ? ]", "hintWord": "오이", "target": "이", "parts": ["ㅇ", "ㅣ"], "distractors": ["ㅎ", "ㅏ", "ㅗ"]}, {"id": "hg_09", "unit": "k1", "tier": 2, "emoji": "🍇", "word": "새콤달콤 [ ? ]도", "hintWord": "포도", "target": "포", "parts": ["ㅍ", "ㅗ"], "distractors": ["ㅌ", "ㅏ", "ㅜ"]}, {"id": "hg_10", "unit": "k1", "tier": 2, "emoji": "🍅", "word": "빨간 [ ? ]마토", "hintWord": "토마토", "target": "토", "parts": ["ㅌ", "ㅗ"], "distractors": ["ㅋ", "ㅓ", "ㅣ"]}, {"id": "hg_11", "unit": "k1", "tier": 2, "emoji": "🚌", "word": "부릉부릉 [ ? ]스", "hintWord": "버스", "target": "버", "parts": ["ㅂ", "ㅓ"], "distractors": ["ㅁ", "ㅏ", "ㅗ"]}, {"id": "hg_12", "unit": "k1", "tier": 2, "emoji": "🌧️", "word": "주륵주륵 [ ? ]가 와요", "hintWord": "비", "target": "비", "parts": ["ㅂ", "ㅣ"], "distractors": ["ㄷ", "ㅏ", "ㅜ"]}, {"id": "hg_13", "unit": "k1", "tier": 2, "emoji": "🦆", "word": "꽥꽥 [ ? ]리", "hintWord": "오리", "target": "오", "parts": ["ㅇ", "ㅗ"], "distractors": ["ㄴ", "ㅜ", "ㅏ"]}, {"id": "hg_14", "unit": "k1", "tier": 2, "emoji": "🥛", "word": "고소한 [ ? ]유", "hintWord": "우유", "target": "우", "parts": ["ㅇ", "ㅜ"], "distractors": ["ㅁ", "ㅗ", "ㅣ"]}, {"id": "hg_15", "unit": "k1", "tier": 2, "emoji": "🦊", "word": "영리한 [ ? ]우", "hintWord": "여우", "target": "여", "parts": ["ㅇ", "ㅕ"], "distractors": ["ㅎ", "ㅑ", "ㅗ"]}, {"id": "hg_16", "unit": "k1", "tier": 2, "emoji": "🌳", "word": "푸른 나[ ? ]", "hintWord": "나무", "target": "무", "parts": ["ㅁ", "ㅜ"], "distractors": ["ㅂ", "ㅗ", "ㅏ"]}, {"id": "hg_17", "unit": "k1", "tier": 2, "emoji": "🐕", "word": "멍멍 강아[ ? ]", "hintWord": "강아지", "target": "지", "parts": ["ㅈ", "ㅣ"], "distractors": ["ㅊ", "ㅏ", "ㅜ"]}, {"id": "hg_18", "unit": "k1", "tier": 2, "emoji": "🐸", "word": "폴짝 [ ? ]구리", "hintWord": "개구리", "target": "개", "parts": ["ㄱ", "ㅐ"], "distractors": ["ㅋ", "ㅏ", "ㅗ"]}, {"id": "hg_19", "unit": "k1", "tier": 2, "emoji": "👖", "word": "편한 [ ? ]지", "hintWord": "바지", "target": "바", "parts": ["ㅂ", "ㅏ"], "distractors": ["ㅍ", "ㅓ", "ㅜ"]}, {"id": "hg_20", "unit": "k1", "tier": 2, "emoji": "🚂", "word": "칙칙폭폭 [ ? ]차", "hintWord": "기차", "target": "기", "parts": ["ㄱ", "ㅣ"], "distractors": ["ㄴ", "ㅏ", "ㅗ"]}, {"id": "hg_21", "unit": "k2", "tier": 3, "emoji": "🐻", "word": "커다란 [ ? ]돌이", "hintWord": "곰", "target": "곰", "parts": ["ㄱ", "ㅗ", "ㅁ"], "distractors": ["ㄴ", "ㅜ", "ㅂ"]}, {"id": "hg_22", "unit": "k2", "tier": 3, "emoji": "⚽", "word": "데구르르 축구[ ? ]", "hintWord": "공", "target": "공", "parts": ["ㄱ", "ㅗ", "ㅇ"], "distractors": ["ㄷ", "ㅏ", "ㅁ"]}, {"id": "hg_23", "unit": "k2", "tier": 3, "emoji": "🌙", "word": "밤하늘에 뜬 보름[ ? ]", "hintWord": "달", "target": "달", "parts": ["ㄷ", "ㅏ", "ㄹ"], "distractors": ["ㅂ", "ㅓ", "ㄴ"]}, {"id": "hg_24", "unit": "k2", "tier": 3, "emoji": "⭐", "word": "반짝반짝 작은 [ ? ]", "hintWord": "별", "target": "별", "parts": ["ㅂ", "ㅕ", "ㄹ"], "distractors": ["ㅁ", "ㅓ", "ㅇ"]}, {"id": "hg_25", "unit": "k2", "tier": 3, "emoji": "⛰️", "word": "높고 푸른 [ ? ]", "hintWord": "산", "target": "산", "parts": ["ㅅ", "ㅏ", "ㄴ"], "distractors": ["ㅈ", "ㅗ", "ㅁ"]}, {"id": "hg_26", "unit": "k2", "tier": 3, "emoji": "💧", "word": "시원한 얼음[ ? ]", "hintWord": "물", "target": "물", "parts": ["ㅁ", "ㅜ", "ㄹ"], "distractors": ["ㅂ", "ㅗ", "ㄴ"]}, {"id": "hg_27", "unit": "k2", "tier": 3, "emoji": "🔥", "word": "활활 타오르는 [ ? ]", "hintWord": "불", "target": "불", "parts": ["ㅂ", "ㅜ", "ㄹ"], "distractors": ["ㅍ", "ㅗ", "ㄱ"]}, {"id": "hg_28", "unit": "k2", "tier": 3, "emoji": "🍚", "word": "따뜻한 아침[ ? ]", "hintWord": "밥", "target": "밥", "parts": ["ㅂ", "ㅏ", "ㅂ"], "distractors": ["ㅁ", "ㅓ", "ㄱ"]}, {"id": "hg_29", "unit": "k2", "tier": 3, "emoji": "🏠", "word": "우리 가족이 사는 [ ? ]", "hintWord": "집", "target": "집", "parts": ["ㅈ", "ㅣ", "ㅂ"], "distractors": ["ㅅ", "ㅏ", "ㅁ"]}, {"id": "hg_30", "unit": "k2", "tier": 3, "emoji": "✋", "word": "짝짝 박수 치는 [ ? ]", "hintWord": "손", "target": "손", "parts": ["ㅅ", "ㅗ", "ㄴ"], "distractors": ["ㅈ", "ㅜ", "ㄹ"]}, {"id": "hg_31", "unit": "k2", "tier": 3, "emoji": "🦶", "word": "신발을 신는 [ ? ]", "hintWord": "발", "target": "발", "parts": ["ㅂ", "ㅏ", "ㄹ"], "distractors": ["ㄷ", "ㅗ", "ㄴ"]}, {"id": "hg_32", "unit": "k2", "tier": 3, "emoji": "👀", "word": "초롱초롱 두 [ ? ]", "hintWord": "눈", "target": "눈", "parts": ["ㄴ", "ㅜ", "ㄴ"], "distractors": ["ㅁ", "ㅗ", "ㄹ"]}, {"id": "hg_33", "unit": "k2", "tier": 3, "emoji": "👄", "word": "맛있게 먹는 [ ? ]", "hintWord": "입", "target": "입", "parts": ["ㅇ", "ㅣ", "ㅂ"], "distractors": ["ㅎ", "ㅏ", "ㅁ"]}, {"id": "hg_34", "unit": "k2", "tier": 3, "emoji": "📚", "word": "재미있는 동화[ ? ]", "hintWord": "책", "target": "책", "parts": ["ㅊ", "ㅐ", "ㄱ"], "distractors": ["ㅈ", "ㅏ", "ㅂ"]}, {"id": "hg_35", "unit": "k2", "tier": 3, "emoji": "🐍", "word": "스르륵 기어가는 [ ? ]", "hintWord": "뱀", "target": "뱀", "parts": ["ㅂ", "ㅐ", "ㅁ"], "distractors": ["ㅁ", "ㅏ", "ㄴ"]}, {"id": "hg_36", "unit": "k2", "tier": 3, "emoji": "🐑", "word": "몽글몽글 하얀 [ ? ]", "hintWord": "양", "target": "양", "parts": ["ㅇ", "ㅑ", "ㅇ"], "distractors": ["ㅎ", "ㅏ", "ㄴ"]}, {"id": "hg_37", "unit": "k2", "tier": 4, "emoji": "🌸", "word": "봄에 피는 예쁜 [ ? ]", "hintWord": "꽃", "target": "꽃", "parts": ["ㄲ", "ㅗ", "ㅊ"], "distractors": ["ㄱ", "ㅜ", "ㅅ"]}, {"id": "hg_38", "unit": "k2", "tier": 4, "emoji": "🍞", "word": "폭신폭신 맛있는 [ ? ]", "hintWord": "빵", "target": "빵", "parts": ["ㅃ", "ㅏ", "ㅇ"], "distractors": ["ㅂ", "ㅗ", "ㅁ"]}, {"id": "hg_39", "unit": "k2", "tier": 4, "emoji": "🍯", "word": "달콤한 벌[ ? ]", "hintWord": "꿀", "target": "꿀", "parts": ["ㄲ", "ㅜ", "ㄹ"], "distractors": ["ㄱ", "ㅗ", "ㄴ"]}, {"id": "hg_40", "unit": "k2", "tier": 4, "emoji": "🌲", "word": "나무가 많은 초록 [ ? ]", "hintWord": "숲", "target": "숲", "parts": ["ㅅ", "ㅜ", "ㅍ"], "distractors": ["ㅈ", "ㅗ", "ㅂ"]}, {"id": "hg_41", "unit": "k7", "tier": 6, "mode": "word_order", "emoji": "🏫", "word": "바른 문장이 되도록 순서대로 눌러 보세요!", "hintWord": "나는 학교에 가요", "target": "나는 학교에 가요", "parts": ["나는", "학교에", "가요"], "distractors": ["먹어요"]}, {"id": "hg_42", "unit": "k7", "tier": 6, "mode": "word_order", "emoji": "🍎", "word": "바른 문장이 되도록 순서대로 눌러 보세요!", "hintWord": "동생이 사과를 먹어요", "target": "동생이 사과를 먹어요", "parts": ["동생이", "사과를", "먹어요"], "distractors": ["날아요"]}, {"id": "hg_43", "unit": "k7", "tier": 6, "mode": "word_order", "emoji": "🐦", "word": "바른 문장이 되도록 순서대로 눌러 보세요!", "hintWord": "새가 하늘을 날아요", "target": "새가 하늘을 날아요", "parts": ["새가", "하늘을", "날아요"], "distractors": ["입어요"]}, {"id": "hg_44", "unit": "k7", "tier": 7, "mode": "word_order", "emoji": "🧼", "word": "바른 문장이 되도록 순서대로 눌러 보세요!", "hintWord": "비누로 손을 씻어요", "target": "비누로 손을 씻어요", "parts": ["비누로", "손을", "씻어요"], "distractors": ["달려요"]}, {"id": "hg_45", "unit": "k5", "tier": 5, "mode": "word_order", "emoji": "🌅", "word": "아침에 부모님께 드리는 인사말을 완성해 보세요!", "hintWord": "안녕히 주무셨어요 ?", "target": "안녕히 주무셨어요 ?", "parts": ["안녕히", "주무셨어요", "?"], "distractors": ["축하해"]}, {"id": "hg_46", "unit": "k6", "tier": 6, "mode": "word_order", "emoji": "🎁", "word": "고마운 친구에게 하는 말을 순서대로 눌러 보세요!", "hintWord": "선물 줘서 고마워 !", "target": "선물 줘서 고마워 !", "parts": ["선물", "줘서", "고마워 !"], "distractors": ["미안해"]}];

window.composeHangulParts = function (parts) {
  if (!parts || parts.length === 0) return "";
  var CHO = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
  var JUNG = ["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];
  var JONG = ["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
  var cIdx = CHO.indexOf(parts[0]);
  if (cIdx === -1) return parts.join(" ");
  if (parts.length === 1 || !parts[1]) return parts[0];
  var vIdx = JUNG.indexOf(parts[1]);
  if (vIdx === -1) return parts.join("");
  var tIdx = (parts.length >= 3 && parts[2]) ? JONG.indexOf(parts[2]) : 0;
  if (tIdx === -1) tIdx = 0;
  return String.fromCharCode(0xAC00 + (cIdx * 21 + vIdx) * 28 + tIdx);
};

window.generateHangulBuildQuestion = function (maxTier, forcedUnitId) {
  var list = window.HANGUL_BUILD_ITEMS || [];
  var pool = list.filter(function (it) {
    if (forcedUnitId) return it.unit === forcedUnitId;
    return (it.tier || 1) <= Math.max(2, maxTier || 2);
  });
  if (pool.length === 0) pool = list;
  var picked = pool[Math.floor(Math.random() * pool.length)];
  var isWordOrder = picked.mode === "word_order";
  var allTiles = picked.parts.concat(picked.distractors || []);
  return {
    id: "hbuild_" + picked.id,
    category: "korean",
    subject: "korean",
    unit: picked.unit,
    tier: picked.tier,
    domain: isWordOrder ? "쓰기·맞춤법" : "문법·글자짜임",
    pokeType: isWordOrder ? "땅" : "바위",
    inputType: "hangul_assemble",
    assembleMode: isWordOrder ? "word_order" : "jamo",
    parts: picked.parts.slice(),
    tiles: allTiles,
    emoji: picked.emoji,
    hintWord: picked.hintWord,
    question: isWordOrder
      ? (picked.emoji + " " + picked.word)
      : (picked.emoji + " '" + picked.hintWord + "'에서 빈칸 " + picked.word + " 글자를 블록을 차례대로 눌러 조립해 보세요!"),
    choices: [picked.target, "가", "나", "다"],
    answer: picked.target,
    hint: isWordOrder
      ? ("'" + picked.parts[0] + "'부터 차례대로 눌러 문장을 완성해 보세요!")
      : ("차례대로 [" + picked.parts.join(" + ") + "] 블록을 톡톡 눌러 보세요!")
  };
};

window.generateHanjaTraceQuestion = function (maxTier, knownHanjaList, forcedChar) {
  var dict = window.HANJA_50_LIST || [];
  var strokesMap = window.HANJA_STROKES || {};
  var unitTierMap = { h1: 2, h2: 3, h3: 4, h4: 5, h5: 6, h6: 7, h7: 8 };
  var candidates = dict.filter(function (item) {
    if (!strokesMap[item.ch]) return false;
    if (forcedChar) return item.ch === forcedChar;
    var uTier = unitTierMap[item.unit] || 2;
    return uTier <= Math.max(2, maxTier || 2);
  });
  if (candidates.length === 0) {
    candidates = dict.filter(function (item) { return !!strokesMap[item.ch]; });
  }
  // Prefer characters not already marked known when available
  var known = knownHanjaList || [];
  var fresh = candidates.filter(function (item) { return known.indexOf(item.ch) === -1; });
  var pool = (fresh.length > 0 && !forcedChar) ? fresh : candidates;
  var picked = pool[Math.floor(Math.random() * pool.length)];
  var stList = strokesMap[picked.ch];
  return {
    id: "htrace_" + picked.ch,
    category: "hanja",
    subject: "hanja",
    unit: picked.unit || "h1",
    tier: unitTierMap[picked.unit] || 2,
    domain: "획수·필순",
    pokeType: "고스트",
    inputType: "hanja_trace",
    hanjaChar: picked.ch,
    hanjaHun: picked.hun,
    strokes: stList,
    question: "🖌️ [" + picked.hun + "] 한자 '" + picked.ch + "'을(를) 번호 순서대로 따라 써 보세요! (" + stList.length + "획)",
    choices: [picked.ch, "一", "十", "大"],
    answer: picked.ch,
    hint: "초록색 출발점(●)에서 노란색 별(★)까지 화살표 방향으로 쓱 긋거나 두 번 톡톡 눌러 보세요!"
  };
};
