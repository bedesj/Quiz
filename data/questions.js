// 2022 개정 교육과정 초1-1 성취기준 정렬 5교과(국어·수학·영어·창의력·한자) 540문항 & 시드 기반 동적 수학 엔진
window.QUIZ_CATEGORIES = {
  korean: { id: "korean", name: "국어 (한글·낱말)", emoji: "📖", color: "#42A5F5" },
  math: { id: "math", name: "수학 (수·연산·모양)", emoji: "🔢", color: "#FF7043" },
  english: { id: "english", name: "영어 (알파벳·단어)", emoji: "🔤", color: "#66BB6A" },
  creative: { id: "creative", name: "창의력 (수수께끼·추론)", emoji: "💡", color: "#AB47BC" },
  hanja: { id: "hanja", name: "한자 (8급~7급)", emoji: "🖌️", color: "#EC407A" }
};

// 10단계(Tier 1~10) 단원 해금 및 출발 프리셋 정의 (5교과 통합)
window.CURRICULUM_TIERS = [
  { tier: 1, label: "Tier 1 · 입학 첫걸음 (1~2주)", desc: "한글 자모음 · 9까지의 수 · Aa~Dd · 기초 수수께끼 · 수 한자" },
  { tier: 2, label: "Tier 2 · 글자와 규칙 놀이 (3~4주)", desc: "받침 없는 글자 · 모으기·가르기 · Ee~Hh · 모양 규칙 찾기" },
  { tier: 3, label: "Tier 3 · 받침과 여러 모양 (5~6주)", desc: "받침 있는 글자 · 입체 모양 · Ii~Ll · 다른 하나·순서 추리" },
  { tier: 4, label: "Tier 4 · 기초를 아는 수준 (7~8주)", desc: "낱말과 반대말 · 19 이하 덧뺄셈 · Mm~Pp · 연상·상황 창의력" },
  { tier: 5, label: "Tier 5 · 이야기와 파닉스 (9~10주)", desc: "인사말·연음 · 덧뺄셈 이야기 · Qq~Uu · 색 혼합·방향 규칙" },
  { tier: 6, label: "Tier 6 · 비교와 문장 부호 (11~12주)", desc: "문장 부호·동시 · 길이·무게 비교 · Vv~Zz · 복합 패턴·대칭" },
  { tier: 7, label: "Tier 7 · 앞서 있는 수준 (13~14주)", desc: "짧은 글·어순 · 50까지의 묶음 수 · 영어 인사 · 논리 조건 추론" },
  { tier: 8, label: "Tier 8 · 1학기 완성 (15~16주)", desc: "높임말·맞춤법 · 50 이하 덧뺄셈 · 색깔·수(1~10) · 발명 아이디어" },
  { tier: 9, label: "Tier 9 · 심화 도전 I (17주+)", desc: "두 자리 받아올림·받아내림 연산 및 창의 수리 퍼즐" },
  { tier: 10, label: "Tier 10 · 챔피언 마스터", desc: "100까지의 응용 연산 및 관점 전환 마스터 도전" }
];

window.LEVEL_PRESETS = {
  starter: {
    id: "starter",
    name: "🌱 처음부터 차근차근 (Tier 1~2)",
    desc: "자모음·9까지의 수·알파벳 Aa·쉬운 그림 수수께끼부터 시작해요.",
    tiers: { korean: 2, math: 2, english: 2, creative: 2, hanja: 2 }
  },
  basic: {
    id: "basic",
    name: "🌿 기초를 아는 수준 (Tier 4)",
    desc: "받침 낱말·19 이하 덧뺄셈·기초 영단어·규칙·연상 창의력부터 시작해요.",
    tiers: { korean: 4, math: 4, english: 4, creative: 4, hanja: 3 }
  },
  advanced: {
    id: "advanced",
    name: "🌳 앞서 있는 수준 (Tier 7)",
    desc: "짧은 글·50까지의 수·생활 영어·논리 조건 추론까지 넓게 풀어요.",
    tiers: { korean: 7, math: 7, english: 7, creative: 7, hanja: 7 }
  },
  master: {
    id: "master",
    name: "👑 학기 완주·심화 도전 (Tier 10)",
    desc: "100까지의 받아올림·받아내림 연산과 심화 창의 퍼즐까지 모두 열어요.",
    tiers: { korean: 10, math: 10, english: 10, creative: 10, hanja: 10 }
  }
};

// 수준 확인 미니 진단 문항 ID (8문항: 국어 2 · 수학 2 · 영어 2 · 창의력 2)
window.PLACEMENT_DIAGNOSTIC_IDS = [
  "kor_f01", "kor_f20",
  "math_f01", "math_f30",
  "eng_f01", "eng_f20",
  "cre_f01", "cre_f22"
];


window.SUBJECT_UNITS = {
  "korean": [
    {
      "id": "k0",
      "title": "한글 놀이",
      "desc": "자음자와 모음자, 소리 마디",
      "tier": 1
    },
    {
      "id": "k1",
      "title": "1. 글자를 만들어요",
      "desc": "받침이 없는 글자와 기초 낱말",
      "tier": 2
    },
    {
      "id": "k2",
      "title": "2. 받침이 있는 글자를 읽어요",
      "desc": "받침 ㄱ·ㄴ·ㄹ·ㅁ·ㅂ·ㅅ·ㅇ",
      "tier": 3
    },
    {
      "id": "k3",
      "title": "3. 낱말과 친해져요",
      "desc": "사물 이름, 범주 어휘, 반대말",
      "tier": 4
    },
    {
      "id": "k4",
      "title": "4. 여러 가지 낱말을 익혀요",
      "desc": "소리와 모양을 흉내 내는 말",
      "tier": 5
    },
    {
      "id": "k5",
      "title": "5. 반갑게 인사해요",
      "desc": "상황별 인사말과 이어 읽기 발음",
      "tier": 5
    },
    {
      "id": "k6",
      "title": "6. 또박또박 읽어요",
      "desc": "문장 부호와 창작 동시·짧은 글",
      "tier": 6
    },
    {
      "id": "k7",
      "title": "7. 알맞은 낱말을 찾아요",
      "desc": "문장 어순 완성과 높임말",
      "tier": 7
    },
    {
      "id": "k8",
      "title": "도전 · 국어 종합",
      "desc": "1학기 맞춤법과 어휘 종합 도전",
      "tier": 8
    }
  ],
  "math": [
    {
      "id": "m1",
      "title": "1. 9까지의 수",
      "desc": "수 세기, 1 큰 수와 작은 수, 0, 크기 비교",
      "tier": 1
    },
    {
      "id": "m2",
      "title": "2. 여러 가지 모양",
      "desc": "상자 모양, 둥근기둥 모양, 공 모양",
      "tier": 3
    },
    {
      "id": "m3",
      "title": "3. 덧셈과 뺄셈",
      "desc": "모으기와 가르기, 19 이하 덧셈과 뺄셈",
      "tier": 4
    },
    {
      "id": "m4",
      "title": "4. 비교하기",
      "desc": "길이, 무게(양팔 저울), 넓이, 담는 양 비교",
      "tier": 5
    },
    {
      "id": "m5",
      "title": "5. 50까지의 수",
      "desc": "10개씩 묶음과 낱개, 50 이하 덧뺄셈",
      "tier": 7
    },
    {
      "id": "m_c1",
      "title": "도전 1",
      "desc": "두 자리 받아올림 덧셈 심화",
      "tier": 9
    },
    {
      "id": "m_c2",
      "title": "도전 2",
      "desc": "두 자리 받아내림 뺄셈 심화",
      "tier": 9
    },
    {
      "id": "m_c3",
      "title": "도전 3",
      "desc": "100까지의 수 이야기 문장제 도전",
      "tier": 10
    }
  ],
  "english": [
    {
      "id": "e1",
      "title": "1. 알파벳 Aa~Dd",
      "desc": "A B C D 대소문자와 첫소리",
      "tier": 1
    },
    {
      "id": "e2",
      "title": "2. 알파벳 Ee~Hh",
      "desc": "E F G H 대소문자와 첫소리",
      "tier": 2
    },
    {
      "id": "e3",
      "title": "3. 알파벳 Ii~Ll",
      "desc": "I J K L 대소문자와 기초 낱말",
      "tier": 3
    },
    {
      "id": "e4",
      "title": "4. 알파벳 Mm~Pp",
      "desc": "M N O P 대소문자와 파닉스",
      "tier": 4
    },
    {
      "id": "e5",
      "title": "5. 알파벳 Qq~Uu",
      "desc": "Q R S T U 대소문자와 낱말",
      "tier": 5
    },
    {
      "id": "e6",
      "title": "6. 알파벳 Vv~Zz",
      "desc": "V W X Y Z 알파벳 완성",
      "tier": 6
    },
    {
      "id": "e7",
      "title": "7. 인사와 내 이름",
      "desc": "만남·헤어짐·감사 인사 표현",
      "tier": 7
    },
    {
      "id": "e8",
      "title": "8. 색깔과 수",
      "desc": "기초 색깔과 1~10 영어 숫자",
      "tier": 8
    }
  ],
  "hanja": [
    {
      "id": "h1",
      "title": "[8급] 1. 수와 셈",
      "desc": "一 二 三 四 五 六 七 八 九 十",
      "tier": 1
    },
    {
      "id": "h2",
      "title": "[8급] 2. 요일과 자연",
      "desc": "日 月 火 水 木 金 土 山",
      "tier": 2
    },
    {
      "id": "h3",
      "title": "[8급] 3. 가족과 사람",
      "desc": "父 母 兄 弟 人 女 王 民 寸",
      "tier": 3
    },
    {
      "id": "h4",
      "title": "[8급] 4. 크기와 방향",
      "desc": "大 小 中 東 西 南 北 外",
      "tier": 4
    },
    {
      "id": "h5",
      "title": "[8급] 5. 학교 생활",
      "desc": "學 校 敎 室 先 生 門",
      "tier": 5
    },
    {
      "id": "h6",
      "title": "[8급] 6. 나라와 시간",
      "desc": "韓 國 軍 靑 白 年 長 萬",
      "tier": 6
    },
    {
      "id": "h7",
      "title": "[8급] 종합 복습",
      "desc": "8급 50자 한자어·상대자 종합",
      "tier": 6
    },
    {
      "id": "h8",
      "title": "[준7급] 7. 집·몸·위치",
      "desc": "家 間 內 男 子 手 足 上 下 左 右 前 後 立 自 孝",
      "tier": 7
    },
    {
      "id": "h9",
      "title": "[준7급] 8. 자연·시간·마을",
      "desc": "江 海 空 氣 電 時 午 每 食 物 車 道 市 場 農 工",
      "tier": 8
    },
    {
      "id": "h10",
      "title": "[준7급] 9. 배움과 바른 생활",
      "desc": "記 名 話 答 事 動 力 活 安 平 正 直 全 方 不 世 漢",
      "tier": 8
    },
    {
      "id": "h11",
      "title": "[7급] 10. 사계절과 자연",
      "desc": "春 夏 秋 冬 天 地 川 林 草 花 植 色 夕 百 千",
      "tier": 9
    },
    {
      "id": "h12",
      "title": "[7급] 11. 마음·가족·이웃",
      "desc": "口 面 心 命 夫 祖 老 主 住 里 村 洞 邑 入 出 來 登 休",
      "tier": 9
    },
    {
      "id": "h13",
      "title": "[7급] 12. 글자·산수·7급 완성",
      "desc": "歌 文 字 語 問 算 數 紙 旗 同 有 育 所 少 重 便 然",
      "tier": 10
    }
  ]
};

window.HANJA_150_LIST = [
  {
    "ch": "一",
    "hun": "한 일",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "二",
    "hun": "두 이",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "三",
    "hun": "석 삼",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "四",
    "hun": "넉 사",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "五",
    "hun": "다섯 오",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "六",
    "hun": "여섯 륙",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "七",
    "hun": "일곱 칠",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "八",
    "hun": "여덟 팔",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "九",
    "hun": "아홉 구",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "十",
    "hun": "열 십",
    "grade": "8급",
    "unit": "h1"
  },
  {
    "ch": "日",
    "hun": "날 일",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "月",
    "hun": "달 월",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "火",
    "hun": "불 화",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "水",
    "hun": "물 수",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "木",
    "hun": "나무 목",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "金",
    "hun": "쇠 금",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "土",
    "hun": "흙 토",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "山",
    "hun": "메 산",
    "grade": "8급",
    "unit": "h2"
  },
  {
    "ch": "父",
    "hun": "아비 부",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "母",
    "hun": "어미 모",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "兄",
    "hun": "형 형",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "弟",
    "hun": "아우 제",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "人",
    "hun": "사람 인",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "女",
    "hun": "계집 녀",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "王",
    "hun": "임금 왕",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "民",
    "hun": "백성 민",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "寸",
    "hun": "마디 촌",
    "grade": "8급",
    "unit": "h3"
  },
  {
    "ch": "大",
    "hun": "큰 대",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "小",
    "hun": "작을 소",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "中",
    "hun": "가운데 중",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "東",
    "hun": "동녘 동",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "西",
    "hun": "서녘 서",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "南",
    "hun": "남녘 남",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "北",
    "hun": "북녘 북",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "外",
    "hun": "바깥 외",
    "grade": "8급",
    "unit": "h4"
  },
  {
    "ch": "學",
    "hun": "배울 학",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "校",
    "hun": "학교 교",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "敎",
    "hun": "가르칠 교",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "室",
    "hun": "집 실",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "先",
    "hun": "먼저 선",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "生",
    "hun": "날 생",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "門",
    "hun": "문 문",
    "grade": "8급",
    "unit": "h5"
  },
  {
    "ch": "韓",
    "hun": "한국 한",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "國",
    "hun": "나라 국",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "軍",
    "hun": "군사 군",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "靑",
    "hun": "푸를 청",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "白",
    "hun": "흰 백",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "年",
    "hun": "해 년",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "長",
    "hun": "긴 장",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "萬",
    "hun": "일만 만",
    "grade": "8급",
    "unit": "h6"
  },
  {
    "ch": "家",
    "hun": "집 가",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "間",
    "hun": "사이 간",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "內",
    "hun": "안 내",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "男",
    "hun": "사내 남",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "子",
    "hun": "아들 자",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "姓",
    "hun": "성 성",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "手",
    "hun": "손 수",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "足",
    "hun": "발 족",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "上",
    "hun": "윗 상",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "下",
    "hun": "아래 하",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "左",
    "hun": "왼 좌",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "右",
    "hun": "오른 우",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "前",
    "hun": "앞 전",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "後",
    "hun": "뒤 후",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "立",
    "hun": "설 립",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "自",
    "hun": "스스로 자",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "孝",
    "hun": "효도 효",
    "grade": "준7급",
    "unit": "h8"
  },
  {
    "ch": "江",
    "hun": "강 강",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "海",
    "hun": "바다 해",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "空",
    "hun": "빌 공",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "氣",
    "hun": "기운 기",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "電",
    "hun": "번개 전",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "時",
    "hun": "때 시",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "午",
    "hun": "낮 오",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "每",
    "hun": "매양 매",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "食",
    "hun": "밥 식",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "物",
    "hun": "물건 물",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "車",
    "hun": "수레 차",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "道",
    "hun": "길 도",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "市",
    "hun": "저자 시",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "場",
    "hun": "마당 장",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "農",
    "hun": "농사 농",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "工",
    "hun": "장인 공",
    "grade": "준7급",
    "unit": "h9"
  },
  {
    "ch": "記",
    "hun": "기록할 기",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "名",
    "hun": "이름 명",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "話",
    "hun": "말씀 화",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "答",
    "hun": "대답 답",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "事",
    "hun": "일 사",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "動",
    "hun": "움직일 동",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "力",
    "hun": "힘 력",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "活",
    "hun": "살 활",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "安",
    "hun": "편안 안",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "平",
    "hun": "평평할 평",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "正",
    "hun": "바를 정",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "直",
    "hun": "곧을 직",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "全",
    "hun": "온전 전",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "方",
    "hun": "모 방",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "不",
    "hun": "아닐 불",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "世",
    "hun": "인간 세",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "漢",
    "hun": "한수 한",
    "grade": "준7급",
    "unit": "h10"
  },
  {
    "ch": "春",
    "hun": "봄 춘",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "夏",
    "hun": "여름 하",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "秋",
    "hun": "가을 추",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "冬",
    "hun": "겨울 동",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "天",
    "hun": "하늘 천",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "地",
    "hun": "땅 지",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "川",
    "hun": "내 천",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "林",
    "hun": "수풀 림",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "草",
    "hun": "풀 초",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "花",
    "hun": "꽃 화",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "植",
    "hun": "심을 식",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "色",
    "hun": "빛 색",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "夕",
    "hun": "저녁 석",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "百",
    "hun": "일백 백",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "千",
    "hun": "일천 천",
    "grade": "7급",
    "unit": "h11"
  },
  {
    "ch": "口",
    "hun": "입 구",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "面",
    "hun": "낯 면",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "心",
    "hun": "마음 심",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "命",
    "hun": "목숨 명",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "夫",
    "hun": "지아비 부",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "祖",
    "hun": "할아비 조",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "老",
    "hun": "늙을 로",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "主",
    "hun": "주인 주",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "住",
    "hun": "살 주",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "里",
    "hun": "마을 리",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "村",
    "hun": "마을 촌",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "洞",
    "hun": "골 동",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "邑",
    "hun": "고을 읍",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "入",
    "hun": "들 입",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "出",
    "hun": "날 출",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "來",
    "hun": "올 래",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "登",
    "hun": "오를 등",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "休",
    "hun": "쉴 휴",
    "grade": "7급",
    "unit": "h12"
  },
  {
    "ch": "歌",
    "hun": "노래 가",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "文",
    "hun": "글월 문",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "字",
    "hun": "글자 자",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "語",
    "hun": "말씀 어",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "問",
    "hun": "물을 문",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "算",
    "hun": "셈 산",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "數",
    "hun": "셈 수",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "紙",
    "hun": "종이 지",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "旗",
    "hun": "기 기",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "同",
    "hun": "한가지 동",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "有",
    "hun": "있을 유",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "育",
    "hun": "기를 육",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "所",
    "hun": "바 소",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "少",
    "hun": "적을 소",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "重",
    "hun": "무거울 중",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "便",
    "hun": "편할 편",
    "grade": "7급",
    "unit": "h13"
  },
  {
    "ch": "然",
    "hun": "그럴 연",
    "grade": "7급",
    "unit": "h13"
  }
];
window.HANJA_50_LIST = window.HANJA_150_LIST;

window.SUBJECT_DOMAINS_LIST = {
  korean: ["듣기·말하기", "읽기", "쓰기·맞춤법", "문법·글자짜임", "어휘", "문학·동시"],
  math: ["계산력", "이해력", "추론력", "문제해결력"],
  english: ["알파벳", "소리·파닉스", "영어 낱말", "인사·표현"],
  hanja: ["뜻과 음", "한자 낱말", "상대 한자", "획수·필순"]
};

window.QUIZ_BANK = {
  "math": [
    {
      "id": "math_001",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "3 + 4 = ?",
      "choices": [
        "6",
        "7",
        "4",
        "8"
      ],
      "answer": "7",
      "hint": "손가락이나 수 구슬로 3에서 차근차근 세어 보면 금방 찾을 수 있어요!",
      "ttsKo": "3 더하기 4 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_002",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "5 + 6 = ?",
      "choices": [
        "21",
        "11",
        "10",
        "15"
      ],
      "answer": "11",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "5 더하기 6 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_003",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "7 + 5 = ?",
      "choices": [
        "10",
        "13",
        "12",
        "14"
      ],
      "answer": "12",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "7 더하기 5 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_004",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "8 + 6 = ?",
      "choices": [
        "4",
        "14",
        "13",
        "18"
      ],
      "answer": "14",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "8 더하기 6 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_005",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "9 + 4 = ?",
      "choices": [
        "12",
        "11",
        "16",
        "13"
      ],
      "answer": "13",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "9 더하기 4 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_006",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "6 + 7 = ?",
      "choices": [
        "10",
        "23",
        "14",
        "13"
      ],
      "answer": "13",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "6 더하기 7 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_007",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "8 + 8 = ?",
      "choices": [
        "17",
        "6",
        "16",
        "26"
      ],
      "answer": "16",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "8 더하기 8 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_008",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "9 + 7 = ?",
      "choices": [
        "19",
        "6",
        "14",
        "16"
      ],
      "answer": "16",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "9 더하기 7 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_009",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "4 + 9 = ?",
      "choices": [
        "13",
        "3",
        "15",
        "10"
      ],
      "answer": "13",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "4 더하기 9 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_010",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "7 + 8 = ?",
      "choices": [
        "5",
        "14",
        "15",
        "13"
      ],
      "answer": "15",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "7 더하기 8 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_011",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "11 + 5 = ?",
      "choices": [
        "16",
        "18",
        "15",
        "13"
      ],
      "answer": "16",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "11 더하기 5 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_012",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "12 + 7 = ?",
      "choices": [
        "29",
        "19",
        "21",
        "23"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "12 더하기 7 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_013",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "14 + 5 = ?",
      "choices": [
        "19",
        "20",
        "17",
        "23"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "14 더하기 5 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_014",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "13 + 6 = ?",
      "choices": [
        "20",
        "19",
        "17",
        "22"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "13 더하기 6 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_015",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "15 + 4 = ?",
      "choices": [
        "17",
        "19",
        "18",
        "29"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "15 더하기 4 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_016",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "10 + 9 = ?",
      "choices": [
        "21",
        "19",
        "16",
        "18"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "10 더하기 9 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_017",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "6 + 12 = ?",
      "choices": [
        "18",
        "8",
        "16",
        "19"
      ],
      "answer": "18",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "6 더하기 12 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_018",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "8 + 11 = ?",
      "choices": [
        "29",
        "19",
        "22",
        "20"
      ],
      "answer": "19",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "8 더하기 11 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_019",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "9 + 9 = ?",
      "choices": [
        "21",
        "18",
        "20",
        "8"
      ],
      "answer": "18",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "9 더하기 9 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_020",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "7 + 13 = ?",
      "choices": [
        "30",
        "21",
        "20",
        "18"
      ],
      "answer": "20",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "7 더하기 13 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_021",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "10 - 3 = ?",
      "choices": [
        "11",
        "10",
        "5",
        "7"
      ],
      "answer": "7",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "10 빼기 3 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_022",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "12 - 5 = ?",
      "choices": [
        "7",
        "5",
        "4",
        "6"
      ],
      "answer": "7",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "12 빼기 5 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_023",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "14 - 6 = ?",
      "choices": [
        "8",
        "9",
        "7",
        "11"
      ],
      "answer": "8",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "14 빼기 6 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_024",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "15 - 8 = ?",
      "choices": [
        "7",
        "10",
        "8",
        "6"
      ],
      "answer": "7",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "15 빼기 8 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_025",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "16 - 7 = ?",
      "choices": [
        "8",
        "19",
        "9",
        "6"
      ],
      "answer": "9",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "16 빼기 7 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_026",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "18 - 9 = ?",
      "choices": [
        "9",
        "10",
        "19",
        "12"
      ],
      "answer": "9",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "18 빼기 9 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_027",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "17 - 8 = ?",
      "choices": [
        "6",
        "9",
        "7",
        "19"
      ],
      "answer": "9",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "17 빼기 8 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_028",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "13 - 5 = ?",
      "choices": [
        "12",
        "7",
        "8",
        "10"
      ],
      "answer": "8",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "13 빼기 5 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_029",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "19 - 6 = ?",
      "choices": [
        "16",
        "3",
        "13",
        "14"
      ],
      "answer": "13",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "19 빼기 6 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_030",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "20 - 7 = ?",
      "choices": [
        "13",
        "15",
        "16",
        "11"
      ],
      "answer": "13",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "20 빼기 7 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_031",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "11 - 4 = ?",
      "choices": [
        "10",
        "8",
        "7",
        "9"
      ],
      "answer": "7",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "11 빼기 4 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_032",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "15 - 6 = ?",
      "choices": [
        "10",
        "9",
        "13",
        "6"
      ],
      "answer": "9",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "15 빼기 6 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_033",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "16 - 9 = ?",
      "choices": [
        "10",
        "7",
        "9",
        "17"
      ],
      "answer": "7",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "16 빼기 9 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_034",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "14 - 8 = ?",
      "choices": [
        "6",
        "3",
        "4",
        "8"
      ],
      "answer": "6",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "14 빼기 8 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_035",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "20 - 12 = ?",
      "choices": [
        "9",
        "10",
        "7",
        "8"
      ],
      "answer": "8",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "20 빼기 12 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_036",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "20 + 30 = ?",
      "choices": [
        "50",
        "52",
        "60",
        "53"
      ],
      "answer": "50",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "20 더하기 30 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_037",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "25 + 14 = ?",
      "choices": [
        "49",
        "40",
        "39",
        "43"
      ],
      "answer": "39",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "25 더하기 14 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_038",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "32 + 17 = ?",
      "choices": [
        "49",
        "59",
        "47",
        "51"
      ],
      "answer": "49",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "32 더하기 17 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_039",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "41 + 28 = ?",
      "choices": [
        "59",
        "69",
        "67",
        "79"
      ],
      "answer": "69",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "41 더하기 28 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_040",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "18 + 15 = ?",
      "choices": [
        "33",
        "31",
        "23",
        "37"
      ],
      "answer": "33",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "18 더하기 15 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_041",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "27 + 16 = ?",
      "choices": [
        "43",
        "45",
        "53",
        "33"
      ],
      "answer": "43",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "27 더하기 16 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_042",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "36 + 25 = ?",
      "choices": [
        "71",
        "62",
        "61",
        "60"
      ],
      "answer": "61",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "36 더하기 25 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_043",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "48 + 14 = ?",
      "choices": [
        "62",
        "65",
        "59",
        "52"
      ],
      "answer": "62",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "48 더하기 14 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_044",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "53 + 29 = ?",
      "choices": [
        "72",
        "79",
        "85",
        "82"
      ],
      "answer": "82",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "53 더하기 29 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_045",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "64 + 18 = ?",
      "choices": [
        "84",
        "82",
        "72",
        "81"
      ],
      "answer": "82",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "64 더하기 18 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_046",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "45 + 35 = ?",
      "choices": [
        "77",
        "78",
        "70",
        "80"
      ],
      "answer": "80",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "45 더하기 35 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_047",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "56 + 27 = ?",
      "choices": [
        "82",
        "80",
        "83",
        "85"
      ],
      "answer": "83",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "56 더하기 27 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_048",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "38 + 44 = ?",
      "choices": [
        "81",
        "79",
        "82",
        "86"
      ],
      "answer": "82",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "38 더하기 44 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_049",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "29 + 53 = ?",
      "choices": [
        "86",
        "79",
        "82",
        "92"
      ],
      "answer": "82",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "29 더하기 53 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_050",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "67 + 26 = ?",
      "choices": [
        "92",
        "95",
        "93",
        "90"
      ],
      "answer": "93",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "67 더하기 26 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_051",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "72 + 19 = ?",
      "choices": [
        "88",
        "89",
        "93",
        "91"
      ],
      "answer": "91",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "72 더하기 19 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_052",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "55 + 45 = ?",
      "choices": [
        "99",
        "97",
        "90",
        "100"
      ],
      "answer": "100",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "55 더하기 45 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_053",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "63 + 37 = ?",
      "choices": [
        "98",
        "97",
        "99",
        "100"
      ],
      "answer": "100",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "63 더하기 37 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_054",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "49 + 34 = ?",
      "choices": [
        "86",
        "73",
        "85",
        "83"
      ],
      "answer": "83",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "49 더하기 34 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_055",
      "subject": "math",
      "category": "math",
      "unit": "m_c1",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "76 + 24 = ?",
      "choices": [
        "99",
        "97",
        "100",
        "98"
      ],
      "answer": "100",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "76 더하기 24 더하기 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_056",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "50 - 20 = ?",
      "choices": [
        "30",
        "33",
        "34",
        "28"
      ],
      "answer": "30",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "50 빼기 20 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_057",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "47 - 15 = ?",
      "choices": [
        "22",
        "34",
        "30",
        "32"
      ],
      "answer": "32",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "47 빼기 15 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_058",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "68 - 24 = ?",
      "choices": [
        "54",
        "44",
        "42",
        "46"
      ],
      "answer": "44",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "68 빼기 24 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_059",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "34 - 16 = ?",
      "choices": [
        "28",
        "18",
        "16",
        "22"
      ],
      "answer": "18",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "34 빼기 16 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_060",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "42 - 18 = ?",
      "choices": [
        "24",
        "27",
        "26",
        "28"
      ],
      "answer": "24",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "42 빼기 18 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_061",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "51 - 23 = ?",
      "choices": [
        "28",
        "31",
        "29",
        "18"
      ],
      "answer": "28",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "51 빼기 23 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_062",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "63 - 27 = ?",
      "choices": [
        "35",
        "38",
        "36",
        "39"
      ],
      "answer": "36",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "63 빼기 27 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_063",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "75 - 38 = ?",
      "choices": [
        "37",
        "27",
        "40",
        "38"
      ],
      "answer": "37",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "75 빼기 38 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_064",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "82 - 45 = ?",
      "choices": [
        "37",
        "34",
        "47",
        "39"
      ],
      "answer": "37",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "82 빼기 45 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_065",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "90 - 36 = ?",
      "choices": [
        "55",
        "64",
        "52",
        "54"
      ],
      "answer": "54",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "90 빼기 36 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_066",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "60 - 25 = ?",
      "choices": [
        "33",
        "39",
        "35",
        "34"
      ],
      "answer": "35",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "60 빼기 25 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_067",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "84 - 39 = ?",
      "choices": [
        "55",
        "49",
        "46",
        "45"
      ],
      "answer": "45",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "84 빼기 39 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_068",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "95 - 47 = ?",
      "choices": [
        "52",
        "48",
        "45",
        "47"
      ],
      "answer": "48",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "95 빼기 47 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_069",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "100 - 35 = ?",
      "choices": [
        "66",
        "62",
        "65",
        "55"
      ],
      "answer": "65",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "100 빼기 35 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_070",
      "subject": "math",
      "category": "math",
      "unit": "m_c2",
      "tier": 9,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "100 - 58 = ?",
      "choices": [
        "39",
        "32",
        "42",
        "46"
      ],
      "answer": "42",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "100 빼기 58 계산 결과는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_071",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 5,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "나무에 사과가 8개 있었어요. 6개가 더 열렸다면 모두 몇 개일까요?",
      "choices": [
        "13",
        "14",
        "16",
        "12"
      ],
      "answer": "14",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "나무에 사과가 8개 있었어요. 6개가 더 열렸다면 모두 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_072",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 5,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "몬스터볼이 15개 있었는데 7개를 던졌어요. 남은 몬스터볼은 몇 개일까요?",
      "choices": [
        "9",
        "6",
        "8",
        "7"
      ],
      "answer": "8",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "몬스터볼이 15개 있었는데 7개를 던졌어요. 남은 몬스터볼은 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_073",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 5,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "연못에 꼬부기 9마리와 고라파덕 5마리가 놀고 있어요. 모두 몇 마리일까요?",
      "choices": [
        "16",
        "14",
        "13",
        "15"
      ],
      "answer": "14",
      "hint": "10을 먼저 만들어 보거나 10에서 빼서 계산하면 훨씬 쉬워요!",
      "ttsKo": "연못에 꼬부기 9마리와 고라파덕 5마리가 놀고 있어요. 모두 몇 마리일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_074",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 8,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "사탕 20개 중에서 동생에게 8개를 주었어요. 몇 개가 남았을까요?",
      "choices": [
        "11",
        "12",
        "13",
        "10"
      ],
      "answer": "12",
      "hint": "10개씩 묶음(십의 자리)끼리 먼저 계산하고 낱개(일의 자리)를 합쳐 보세요!",
      "ttsKo": "사탕 20개 중에서 동생에게 8개를 주었어요. 몇 개가 남았을까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_075",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "꽃밭에 노란 꽃이 13송이, 빨간 꽃이 12송이 피었어요. 모두 몇 송이일까요?",
      "choices": [
        "25",
        "24",
        "26",
        "23"
      ],
      "answer": "25",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "꽃밭에 노란 꽃이 13송이, 빨간 꽃이 12송이 피었어요. 모두 몇 송이일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_076",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "버스에 24명이 타고 있었는데 9명이 내렸어요. 남은 사람은 몇 명일까요?",
      "choices": [
        "13",
        "14",
        "16",
        "15"
      ],
      "answer": "15",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "버스에 24명이 타고 있었는데 9명이 내렸어요. 남은 사람은 몇 명일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_077",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "스티커를 어제 18장, 오늘 14장 모았어요. 모두 몇 장 모았을까요?",
      "choices": [
        "31",
        "30",
        "34",
        "32"
      ],
      "answer": "32",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "스티커를 어제 18장, 오늘 14장 모았어요. 모두 몇 장 모았을까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_078",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "색종이 40장 중에서 15장으로 종이접기를 했어요. 남은 색종이는 몇 장일까요?",
      "choices": [
        "25",
        "23",
        "24",
        "27"
      ],
      "answer": "25",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "색종이 40장 중에서 15장으로 종이접기를 했어요. 남은 색종이는 몇 장일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_079",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "바구니에 밤이 26개 있었는데 아빠가 17개를 더 주워 오셨어요. 모두 몇 개일까요?",
      "choices": [
        "42",
        "45",
        "43",
        "41"
      ],
      "answer": "43",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "바구니에 밤이 26개 있었는데 아빠가 17개를 더 주워 오셨어요. 모두 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_080",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "동화책이 모두 50쪽인데 지금까지 23쪽을 읽었어요. 남은 쪽수는 몇 쪽일까요?",
      "choices": [
        "25",
        "28",
        "27",
        "26"
      ],
      "answer": "27",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "동화책이 모두 50쪽인데 지금까지 23쪽을 읽었어요. 남은 쪽수는 몇 쪽일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_081",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "숲속에서 도토리를 다람쥐가 35개, 청설모가 25개 모았어요. 합치면 몇 개일까요?",
      "choices": [
        "55",
        "65",
        "50",
        "60"
      ],
      "answer": "60",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "숲속에서 도토리를 다람쥐가 35개, 청설모가 25개 모았어요. 합치면 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_082",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "풍선 60개 중에서 18개가 하늘로 날아갔어요. 남은 풍선은 몇 개일까요?",
      "choices": [
        "44",
        "40",
        "48",
        "42"
      ],
      "answer": "42",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "풍선 60개 중에서 18개가 하늘로 날아갔어요. 남은 풍선은 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_083",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "구슬이 파란색 28개, 초록색 34개 있어요. 구슬은 모두 몇 개일까요?",
      "choices": [
        "60",
        "64",
        "62",
        "52"
      ],
      "answer": "62",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "구슬이 파란색 28개, 초록색 34개 있어요. 구슬은 모두 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_084",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "과자가 72개 들어 있는 상자에서 25개를 먹었어요. 남은 과자는 몇 개일까요?",
      "choices": [
        "48",
        "47",
        "57",
        "45"
      ],
      "answer": "47",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "과자가 72개 들어 있는 상자에서 25개를 먹었어요. 남은 과자는 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_085",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "도감에 포켓몬을 지난주에 37마리, 이번 주에 26마리 등록했어요. 모두 몇 마리일까요?",
      "choices": [
        "65",
        "62",
        "61",
        "63"
      ],
      "answer": "63",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "도감에 포켓몬을 지난주에 37마리, 이번 주에 26마리 등록했어요. 모두 몇 마리일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_086",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "줄넘기를 형은 80번, 동생은 54번 했어요. 형은 동생보다 몇 번 더 했을까요?",
      "choices": [
        "25",
        "36",
        "24",
        "26"
      ],
      "answer": "26",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "줄넘기를 형은 80번, 동생은 54번 했어요. 형은 동생보다 몇 번 더 했을까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_087",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "나무 열매를 오전에 46개, 오후에 38개 땄어요. 모두 몇 개를 땄을까요?",
      "choices": [
        "86",
        "82",
        "84",
        "74"
      ],
      "answer": "84",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "나무 열매를 오전에 46개, 오후에 38개 땄어요. 모두 몇 개를 땄을까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_088",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "100점 만점인 퀴즈에서 15점짜리 문제를 틀렸어요. 몇 점을 받았을까요?",
      "choices": [
        "85",
        "75",
        "95",
        "80"
      ],
      "answer": "85",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "100점 만점인 퀴즈에서 15점짜리 문제를 틀렸어요. 몇 점을 받았을까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_089",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "색연필 36자루와 사인펜 24자루를 합하면 모두 몇 자루일까요?",
      "choices": [
        "62",
        "58",
        "50",
        "60"
      ],
      "answer": "60",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "색연필 36자루와 사인펜 24자루를 합하면 모두 몇 자루일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_090",
      "subject": "math",
      "category": "math",
      "unit": "m_c3",
      "tier": 10,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "구슬 90개 중에서 친구에게 45개를 나누어 주었어요. 남은 구슬은 몇 개일까요?",
      "choices": [
        "55",
        "40",
        "35",
        "45"
      ],
      "answer": "45",
      "hint": "일의 자리부터 차근차근 계산하고, 10이 넘거나 모자라면 십의 자리에서 받아올림·받아내림해 보세요!",
      "ttsKo": "구슬 90개 중에서 친구에게 45개를 나누어 주었어요. 남은 구슬은 몇 개일까요얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f01",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "이해력",
      "pokeType": "물",
      "question": "사과 개수를 세어 보세요!\n🍎 🍎 🍎 🍎 🍎",
      "choices": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": "5",
      "hint": "손가락으로 사과를 하나씩 짚으며 1, 2, 3, 4, 5 세어 보세요!",
      "ttsKo": "사과 개수를 세어 보세요!\n🍎 🍎 🍎 🍎 🍎",
      "ttsEn": ""
    },
    {
      "id": "math_f02",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "이해력",
      "pokeType": "물",
      "question": "별은 모두 몇 개일까요?\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
      "choices": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": "7",
      "hint": "별이 다섯 개에 두 개 더 있으니 7개예요!",
      "ttsKo": "별은 모두 몇 개일까요?\n⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
      "ttsEn": ""
    },
    {
      "id": "math_f03",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "이해력",
      "pokeType": "물",
      "question": "아무것도 없는 빈 접시의 개수를 숫자로 쓰면 무엇일까요?",
      "choices": [
        "0",
        "1",
        "5",
        "10"
      ],
      "answer": "0",
      "hint": "하나도 없는 것은 숫자 '0(영)'으로 나타내요!",
      "ttsKo": "아무것도 없는 빈 접시의 개수를 숫자로 쓰면 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f04",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "이해력",
      "pokeType": "물",
      "question": "수 띠에서 빈칸(?)에 들어갈 알맞은 숫자는 무엇일까요?",
      "choices": [
        "6",
        "8",
        "3",
        "9"
      ],
      "answer": "6",
      "hint": "5보다 1 큰 수이자 7 바로 앞의 수는 6이에요!",
      "ttsKo": "수 띠에서 빈칸(?)에 들어갈 알맞은 숫자는 무엇일까요?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 68\" role=\"img\" aria-label=\"1부터 9까지의 수 띠\"><rect x=\"4\" y=\"4\" width=\"372\" height=\"60\" rx=\"14\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"33.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">1</text><rect x=\"53\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"72.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">2</text><rect x=\"92\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"111.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">3</text><rect x=\"131\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"150.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">4</text><circle cx=\"150.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"170\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"189.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">5</text><circle cx=\"189.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"209\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFD43B\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"228.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#D9480F\">?</text><rect x=\"248\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"267.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">7</text><circle cx=\"267.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"287\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"306.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">8</text><rect x=\"326\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"345.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">9</text></svg>"
    },
    {
      "id": "math_f05",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "수 띠에 색칠된 숫자(4, 6, 8, 9) 중에서 가장 큰 수는 무엇일까요?",
      "choices": [
        "9",
        "6",
        "8",
        "4"
      ],
      "answer": "9",
      "hint": "수 띠에서 가장 오른쪽에 색칠된 숫자 9가 제일 큰 수예요!",
      "ttsKo": "수 띠에 색칠된 숫자(4, 6, 8, 9) 중에서 가장 큰 수는 무엇일까요?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 68\" role=\"img\" aria-label=\"1부터 9까지의 수 띠\"><rect x=\"4\" y=\"4\" width=\"372\" height=\"60\" rx=\"14\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"33.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">1</text><rect x=\"53\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"72.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">2</text><rect x=\"92\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"111.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">3</text><rect x=\"131\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"150.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">4</text><circle cx=\"150.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"170\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"189.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">5</text><rect x=\"209\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"228.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">6</text><circle cx=\"228.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"248\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"267.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">7</text><rect x=\"287\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"306.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">8</text><circle cx=\"306.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"326\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"345.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">9</text><circle cx=\"345.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/></svg>"
    },
    {
      "id": "math_f06",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 1,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "수 띠에 색칠된 숫자(2, 5, 7, 9) 중에서 가장 작은 수는 무엇일까요?",
      "choices": [
        "2",
        "5",
        "7",
        "9"
      ],
      "answer": "2",
      "hint": "수 띠에서 가장 왼쪽에 색칠된 숫자 2가 제일 작은 수예요!",
      "ttsKo": "수 띠에 색칠된 숫자(2, 5, 7, 9) 중에서 가장 작은 수는 무엇일까요?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 68\" role=\"img\" aria-label=\"1부터 9까지의 수 띠\"><rect x=\"4\" y=\"4\" width=\"372\" height=\"60\" rx=\"14\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\" stroke-width=\"1.5\"/><rect x=\"14\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"33.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">1</text><rect x=\"53\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"72.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">2</text><circle cx=\"72.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"92\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"111.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">3</text><rect x=\"131\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"150.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">4</text><rect x=\"170\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"189.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">5</text><circle cx=\"189.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"209\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"228.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">6</text><rect x=\"248\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"267.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">7</text><circle cx=\"267.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/><rect x=\"287\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#232538\" stroke-width=\"2\"/><text x=\"306.5\" y=\"44\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#64748B\">8</text><rect x=\"326\" y=\"18\" width=\"39\" height=\"40\" rx=\"6\" fill=\"#74C0FC\" stroke=\"#232538\" stroke-width=\"2.8\"/><text x=\"345.5\" y=\"44\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#0B3C5D\">9</text><circle cx=\"345.5\" cy=\"11\" r=\"4.2\" fill=\"#FF6B6B\" stroke=\"#232538\" stroke-width=\"1.5\"/></svg>"
    },
    {
      "id": "math_f07",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "모으기 놀이! 3과 2를 모으면 얼마가 될까요?\n🟢🟢🟢 + 🟢🟢",
      "choices": [
        "5",
        "4",
        "6",
        "7"
      ],
      "answer": "5",
      "hint": "초록 구슬 3개와 2개를 한데 모으면 5개가 돼요!",
      "ttsKo": "모으기 놀이! 3과 2를 모으면 얼마가 될까요?\n🟢🟢🟢 더하기 🟢🟢",
      "ttsEn": ""
    },
    {
      "id": "math_f08",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "가르기 놀이! 7을 4와 몇으로 가를 수 있을까요?\n7 ➡️ ( 4 ) 와 ( ? )",
      "choices": [
        "3",
        "2",
        "4",
        "5"
      ],
      "answer": "3",
      "hint": "4에 3을 더하면 7이 되니까 4와 3으로 가를 수 있어요!",
      "ttsKo": "가르기 놀이! 7을 4와 몇으로 가를 수 있을까요?\n7 ➡️ ( 4 ) 와 빈칸",
      "ttsEn": ""
    },
    {
      "id": "math_f09",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "모으기 놀이! 5와 4를 모으면 얼마가 될까요?",
      "choices": [
        "9",
        "8",
        "7",
        "10"
      ],
      "answer": "9",
      "hint": "한 손 5개에 4개를 더 펴면 9개가 돼요!",
      "ttsKo": "모으기 놀이! 5와 4를 모으면 얼마가 될까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f10",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "이해력",
      "pokeType": "물",
      "question": "'일곱'을 숫자로 바르게 쓴 것은 무엇일까요?",
      "choices": [
        "7",
        "6",
        "8",
        "9"
      ],
      "answer": "7",
      "hint": "하나, 둘, 셋, 넷, 다섯, 여섯, 일곱은 숫자 7이에요!",
      "ttsKo": "'일곱'을 숫자로 바르게 쓴 것은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f11",
      "subject": "math",
      "category": "math",
      "unit": "m1",
      "tier": 2,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "달리기 줄에서 피카츄 앞에 3명이 서 있어요. 피카츄는 앞에서 몇째일까요?",
      "choices": [
        "넷째",
        "셋째",
        "다섯째",
        "둘째"
      ],
      "answer": "넷째",
      "hint": "앞에 3명이 있으니까 그 바로 뒤인 피카츄는 넷째예요!",
      "ttsKo": "달리기 줄에서 피카츄 앞에 3명이 서 있어요. 피카츄는 앞에서 몇째일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f12",
      "subject": "math",
      "category": "math",
      "unit": "m2",
      "tier": 3,
      "domain": "이해력",
      "pokeType": "물",
      "question": "축구공과 구슬처럼 사방으로 데구르르 잘 굴러가는 모양은?",
      "choices": [
        "공 모양",
        "상자 모양",
        "세모 모양",
        "네모 판 모양"
      ],
      "answer": "공 모양",
      "hint": "모서리가 없이 둥근 '공 모양'은 어느 쪽으로나 잘 굴러가요!",
      "ttsKo": "축구공과 구슬처럼 사방으로 데구르르 잘 굴러가는 모양은?",
      "ttsEn": ""
    },
    {
      "id": "math_f13",
      "subject": "math",
      "category": "math",
      "unit": "m2",
      "tier": 3,
      "domain": "이해력",
      "pokeType": "물",
      "question": "주사위와 휴지 상자처럼 반듯한 면과 뾰족한 모서리가 있어 쌓기 좋은 모양은?",
      "choices": [
        "상자 모양",
        "공 모양",
        "물방울 모양",
        "구름 모양"
      ],
      "answer": "상자 모양",
      "hint": "평평한 면이 있는 '상자 모양'은 흔들리지 않고 높이 쌓을 수 있어요!",
      "ttsKo": "주사위와 휴지 상자처럼 반듯한 면과 뾰족한 모서리가 있어 쌓기 좋은 모양은?",
      "ttsEn": ""
    },
    {
      "id": "math_f14",
      "subject": "math",
      "category": "math",
      "unit": "m2",
      "tier": 3,
      "domain": "이해력",
      "pokeType": "물",
      "question": "딱풀이나 통조림 캔처럼 위아래는 둥글고 옆으로 눕히면 굴러가는 모양은?",
      "choices": [
        "둥근기둥 모양",
        "공 모양",
        "상자 모양",
        "별 모양"
      ],
      "answer": "둥근기둥 모양",
      "hint": "세우면 쌓을 수 있고 눕히면 굴러가는 모양을 '둥근기둥 모양'이라고 해요!",
      "ttsKo": "딱풀이나 통조림 캔처럼 위아래는 둥글고 옆으로 눕히면 굴러가는 모양은?",
      "ttsEn": ""
    },
    {
      "id": "math_f15",
      "subject": "math",
      "category": "math",
      "unit": "m2",
      "tier": 3,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "높이 쌓기 놀이를 할 때 맨 아래에 놓으면 굴러가 버려서 쌓기 어려운 모양은?",
      "choices": [
        "공 모양",
        "상자 모양",
        "세워 놓은 둥근기둥 모양",
        "벽돌 모양"
      ],
      "answer": "공 모양",
      "hint": "공 모양은 평평한 부분이 없어서 위에 다른 블록을 올리면 굴러가요!",
      "ttsKo": "높이 쌓기 놀이를 할 때 맨 아래에 놓으면 굴러가 버려서 쌓기 어려운 모양은?",
      "ttsEn": ""
    },
    {
      "id": "math_f16",
      "subject": "math",
      "category": "math",
      "unit": "m2",
      "tier": 4,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "로봇 장난감을 상자 모양 3개와 공 모양 1개로 만들었어요. 사용한 블록은 모두 몇 개일까요?",
      "choices": [
        "4개",
        "3개",
        "5개",
        "2개"
      ],
      "answer": "4개",
      "hint": "상자 모양 3개와 공 모양 1개를 더하면 모두 4개예요!",
      "ttsKo": "로봇 장난감을 상자 모양 3개와 공 모양 1개로 만들었어요. 사용한 블록은 모두 몇 개일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f17",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 3,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "2 + 5 = ?",
      "choices": [
        "7",
        "6",
        "8",
        "5"
      ],
      "answer": "7",
      "hint": "5에서 앞으로 2칸 더 세어 보면 6, 7이에요!",
      "ttsKo": "2 더하기 5 는 ?",
      "ttsEn": ""
    },
    {
      "id": "math_f18",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 3,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "8 - 3 = ?",
      "choices": [
        "5",
        "4",
        "6",
        "3"
      ],
      "answer": "5",
      "hint": "8개 중에서 3개를 덜어 내면 5개가 남아요!",
      "ttsKo": "8 빼기 3 는 ?",
      "ttsEn": ""
    },
    {
      "id": "math_f19",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "6 + 0 = ?",
      "choices": [
        "6",
        "0",
        "7",
        "5"
      ],
      "answer": "6",
      "hint": "아무것도 더하지 않는 0을 더하면 원래 수 6 그대로예요!",
      "ttsKo": "6 더하기 0 는 ?",
      "ttsEn": ""
    },
    {
      "id": "math_f20",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "9 - 9 = ?",
      "choices": [
        "0",
        "9",
        "1",
        "8"
      ],
      "answer": "0",
      "hint": "9개에서 9개를 모두 빼면 하나도 남지 않아 0이 돼요!",
      "ttsKo": "9 빼기 9 는 ?",
      "ttsEn": ""
    },
    {
      "id": "math_f21",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 4,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "빈칸에 알맞은 수를 골라 보세요!\n4 + ( ? ) = 10",
      "choices": [
        "6",
        "5",
        "7",
        "4"
      ],
      "answer": "6",
      "hint": "10이 되는 짝꿍 수! 4와 6이 만나면 딱 10이 돼요!",
      "ttsKo": "빈칸에 알맞은 수를 골라 보세요!\n4 더하기 빈칸 는 10",
      "ttsEn": ""
    },
    {
      "id": "math_f22",
      "subject": "math",
      "category": "math",
      "unit": "m3",
      "tier": 5,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "연못에 오리 5마리가 있었는데 3마리가 더 헤엄쳐 왔어요. 오리는 모두 몇 마리일까요?",
      "choices": [
        "8마리",
        "2마리",
        "7마리",
        "9마리"
      ],
      "answer": "8마리",
      "hint": "더 왔으니까 덧셈! 5 + 3 = 8마리예요!",
      "ttsKo": "연못에 오리 5마리가 있었는데 3마리가 더 헤엄쳐 왔어요. 오리는 모두 몇 마리일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f23",
      "subject": "math",
      "category": "math",
      "unit": "m4",
      "tier": 5,
      "domain": "이해력",
      "pokeType": "물",
      "question": "연필과 지우개의 길이를 비교할 때 가장 알맞은 말은?",
      "choices": [
        "연필이 지우개보다 더 깁니다",
        "연필이 지우개보다 더 무겁습니다",
        "연필이 지우개보다 더 넓습니다",
        "연필이 지우개보다 더 차갑습니다"
      ],
      "answer": "연필이 지우개보다 더 깁니다",
      "hint": "길고 짧은 정도를 비교할 때는 '더 깁니다 / 더 짧습니다'라고 말해요!",
      "ttsKo": "연필과 지우개의 길이를 비교할 때 가장 알맞은 말은?",
      "ttsEn": ""
    },
    {
      "id": "math_f24",
      "subject": "math",
      "category": "math",
      "unit": "m4",
      "tier": 5,
      "domain": "이해력",
      "pokeType": "물",
      "question": "양팔 저울에 수박과 딸기를 올렸더니 수박 쪽으로 저울이 내려갔어요. 어느 것이 더 무거울까요?",
      "choices": [
        "수박",
        "딸기",
        "무게가 같다",
        "알 수 없다"
      ],
      "answer": "수박",
      "hint": "양팔 저울에서는 더 무거운 쪽이 아래로 내려가요!",
      "ttsKo": "양팔 저울에 수박과 딸기를 올렸더니 수박 쪽으로 저울이 내려갔어요. 어느 것이 더 무거울까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f25",
      "subject": "math",
      "category": "math",
      "unit": "m4",
      "tier": 6,
      "domain": "이해력",
      "pokeType": "물",
      "question": "물병에 담긴 물의 양을 비교할 때 쓰는 바른 말은?",
      "choices": [
        "더 많습니다 / 더 적습니다",
        "더 깁니다 / 더 짧습니다",
        "더 키가 큽니다",
        "더 빠릅니다"
      ],
      "answer": "더 많습니다 / 더 적습니다",
      "hint": "담을 수 있는 양을 비교할 때는 '더 많다 / 더 적다'를 사용해요!",
      "ttsKo": "물병에 담긴 물의 양을 비교할 때 쓰는 바른 말은?",
      "ttsEn": ""
    },
    {
      "id": "math_f26",
      "subject": "math",
      "category": "math",
      "unit": "m4",
      "tier": 6,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "기린은 사슴보다 키가 크고, 사슴은 토끼보다 키가 커요. 키가 가장 큰 동물은?",
      "choices": [
        "기린",
        "사슴",
        "토끼",
        "다람쥐"
      ],
      "answer": "기린",
      "hint": "기린 > 사슴 > 토끼 순서이므로 기린이 가장 키가 커요!",
      "ttsKo": "기린은 사슴보다 키가 크고, 사슴은 토끼보다 키가 커요. 키가 가장 큰 동물은?",
      "ttsEn": ""
    },
    {
      "id": "math_f27",
      "subject": "math",
      "category": "math",
      "unit": "m4",
      "tier": 6,
      "domain": "이해력",
      "pokeType": "물",
      "question": "거실 바닥과 손수건의 넓이를 비교하면 어느 것이 더 넓을까요?",
      "choices": [
        "거실 바닥",
        "손수건",
        "넓이가 같다",
        "비교할 수 없다"
      ],
      "answer": "거실 바닥",
      "hint": "넓이를 비교하면 거실 바닥이 손수건보다 훨씬 더 넓어요!",
      "ttsKo": "거실 바닥과 손수건의 넓이를 비교하면 어느 것이 더 넓을까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f28",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 6,
      "domain": "이해력",
      "pokeType": "물",
      "question": "10개씩 묶음 2개와 낱개 4개는 얼마일까요?",
      "choices": [
        "24",
        "42",
        "14",
        "20"
      ],
      "answer": "24",
      "hint": "10개씩 묶음 2개는 20이고 낱개 4개를 합치면 24예요!",
      "ttsKo": "10개씩 묶음 2개와 낱개 4개는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f29",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 6,
      "domain": "이해력",
      "pokeType": "물",
      "question": "10개씩 묶음 3개와 낱개 0개는 얼마일까요?",
      "choices": [
        "30",
        "3",
        "13",
        "33"
      ],
      "answer": "30",
      "hint": "10이 3개 모이면 30(삼십 또는 서른)이에요!",
      "ttsKo": "10개씩 묶음 3개와 낱개 0개는 얼마일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f30",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "이해력",
      "pokeType": "물",
      "question": "10개씩 묶음 4개와 낱개 7개를 바르게 나타낸 수는?",
      "choices": [
        "47",
        "40",
        "74",
        "11"
      ],
      "answer": "47",
      "hint": "십의 자리에 4, 일의 자리에 7을 써서 47이 돼요!",
      "ttsKo": "10개씩 묶음 4개와 낱개 7개를 바르게 나타낸 수는?",
      "ttsEn": ""
    },
    {
      "id": "math_f31",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "이해력",
      "pokeType": "물",
      "question": "'서른(삼십)'을 숫자로 바르게 쓴 것은 무엇일까요?",
      "choices": [
        "30",
        "20",
        "40",
        "50"
      ],
      "answer": "30",
      "hint": "열(10), 스물(20), 서른(30), 마흔(40), 쉰(50) 중 서른은 30이에요!",
      "ttsKo": "'서른(삼십)'을 숫자로 바르게 쓴 것은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "math_f32",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "수 띠에서 2씩 뛰어 세기를 할 때 빈칸(?)에 알맞은 수는?",
      "choices": [
        "18",
        "17",
        "19",
        "15"
      ],
      "answer": "18",
      "hint": "16에서 2만큼 더 뛰어 세면 18이에요!",
      "ttsKo": "수 띠에서 2씩 뛰어 세기를 할 때 빈칸(?)에 알맞은 수는?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 76\" role=\"img\" aria-label=\"뛰어 세기 수 띠\"><rect x=\"4\" y=\"4\" width=\"372\" height=\"68\" rx=\"14\" fill=\"#FFFDF5\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><rect x=\"23.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"50.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">12</text><path d=\"M61.9,25 Q85.0,8 108.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"85.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+2</text><rect x=\"93.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"120.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">14</text><path d=\"M131.9,25 Q155.0,8 178.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"155.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+2</text><rect x=\"163.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"190.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">16</text><path d=\"M201.9,25 Q225.0,8 248.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"225.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+2</text><rect x=\"233.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#FFD43B\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"260.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#D9480F\">?</text><path d=\"M271.9,25 Q295.0,8 318.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"295.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+2</text><rect x=\"303.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"330.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">20</text></svg>"
    },
    {
      "id": "math_f33",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 7,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "수 띠에서 10씩 뛰어 세기를 할 때 빈칸(?)에 알맞은 수는?",
      "choices": [
        "40",
        "35",
        "45",
        "25"
      ],
      "answer": "40",
      "hint": "10씩 커지므로 30 다음은 40이에요!",
      "ttsKo": "수 띠에서 10씩 뛰어 세기를 할 때 빈칸(?)에 알맞은 수는?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 76\" role=\"img\" aria-label=\"뛰어 세기 수 띠\"><rect x=\"4\" y=\"4\" width=\"372\" height=\"68\" rx=\"14\" fill=\"#FFFDF5\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><rect x=\"23.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"50.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">10</text><path d=\"M61.9,25 Q85.0,8 108.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"85.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+10</text><rect x=\"93.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"120.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">20</text><path d=\"M131.9,25 Q155.0,8 178.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"155.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+10</text><rect x=\"163.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"190.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">30</text><path d=\"M201.9,25 Q225.0,8 248.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"225.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+10</text><rect x=\"233.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#FFD43B\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"260.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#D9480F\">?</text><path d=\"M271.9,25 Q295.0,8 318.1,25\" fill=\"none\" stroke=\"#FA5252\" stroke-width=\"2.2\"/><text x=\"295.0\" y=\"17\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"900\" fill=\"#C92A2A\">+10</text><rect x=\"303.0\" y=\"28\" width=\"54\" height=\"38\" rx=\"9\" fill=\"#E7F5FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"330.0\" y=\"53\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#1E293B\">50</text></svg>"
    },
    {
      "id": "math_f34",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 8,
      "domain": "추론력",
      "pokeType": "에스퍼",
      "question": "수 띠 카드(39, 48, 29, 42) 중에서 가장 큰 수는 무엇일까요?",
      "choices": [
        "48",
        "39",
        "42",
        "29"
      ],
      "answer": "48",
      "hint": "먼저 10개씩 묶음 수가 4개인 48과 42를 비교하면 낱개가 8개인 48이 제일 커요!",
      "ttsKo": "수 띠 카드(39, 48, 29, 42) 중에서 가장 큰 수는 무엇일까요?",
      "ttsEn": "",
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 72\" role=\"img\" aria-label=\"두 자리 수 비교 수 띠\"><rect x=\"6\" y=\"6\" width=\"368\" height=\"60\" rx=\"14\" fill=\"#F1F5F9\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/><rect x=\"21.0\" y=\"13\" width=\"74\" height=\"46\" rx=\"10\" fill=\"#FFD8A8\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"58.0\" y=\"38\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#1E293B\">39</text><text x=\"58.0\" y=\"53\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"900\" fill=\"#475569\">10묶음 ●●●</text><rect x=\"109.0\" y=\"13\" width=\"74\" height=\"46\" rx=\"10\" fill=\"#A5D8FF\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"146.0\" y=\"38\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#1E293B\">48</text><text x=\"146.0\" y=\"53\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"900\" fill=\"#475569\">10묶음 ●●●●</text><rect x=\"197.0\" y=\"13\" width=\"74\" height=\"46\" rx=\"10\" fill=\"#D3F9D8\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"234.0\" y=\"38\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#1E293B\">29</text><text x=\"234.0\" y=\"53\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"900\" fill=\"#475569\">10묶음 ●●</text><rect x=\"285.0\" y=\"13\" width=\"74\" height=\"46\" rx=\"10\" fill=\"#FCC2D7\" stroke=\"#232538\" stroke-width=\"2.5\"/><text x=\"322.0\" y=\"38\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"900\" fill=\"#1E293B\">42</text><text x=\"322.0\" y=\"53\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"900\" fill=\"#475569\">10묶음 ●●●●</text></svg>"
    },
    {
      "id": "math_f35",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 8,
      "domain": "계산력",
      "pokeType": "전기",
      "question": "32 + 15 = ?",
      "choices": [
        "47",
        "45",
        "37",
        "50"
      ],
      "answer": "47",
      "hint": "10개씩 묶음(30+10=40)과 낱개(2+5=7)를 각각 더하면 47이에요!",
      "ttsKo": "32 더하기 15 는 ?",
      "ttsEn": ""
    },
    {
      "id": "math_f36",
      "subject": "math",
      "category": "math",
      "unit": "m5",
      "tier": 8,
      "domain": "문제해결력",
      "pokeType": "강철",
      "question": "스티커가 한 장에 10개씩 붙어 있어요. 4장과 낱개 5장이 있으면 스티커는 모두 몇 개일까요?",
      "choices": [
        "45개",
        "54개",
        "19개",
        "40개"
      ],
      "answer": "45개",
      "hint": "10개씩 4장(40개)과 낱개 5개를 합치면 45개예요!",
      "ttsKo": "스티커가 한 장에 10개씩 붙어 있어요. 4장과 낱개 5장이 있으면 스티커는 모두 몇 개일까요?",
      "ttsEn": ""
    }
  ],
  "korean": [
    {
      "id": "kor_001",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'크다'의 반대말은 무엇일까요?",
      "choices": [
        "많다",
        "높다",
        "작다",
        "길다"
      ],
      "answer": "작다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '작'(으)로 시작해요.",
      "ttsKo": "'크다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_002",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'길다'의 반대말은 무엇일까요?",
      "choices": [
        "작다",
        "낮다",
        "좁다",
        "짧다"
      ],
      "answer": "짧다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '짧'(으)로 시작해요.",
      "ttsKo": "'길다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_003",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'밝다'의 반대말은 무엇일까요?",
      "choices": [
        "차갑다",
        "조용하다",
        "흐리다",
        "어둡다"
      ],
      "answer": "어둡다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '어'(으)로 시작해요.",
      "ttsKo": "'밝다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_004",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'무겁다'의 반대말은 무엇일까요?",
      "choices": [
        "작다",
        "부드럽다",
        "얇다",
        "가볍다"
      ],
      "answer": "가볍다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '가'(으)로 시작해요.",
      "ttsKo": "'무겁다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_005",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'빠르다'의 반대말은 무엇일까요?",
      "choices": [
        "짧다",
        "가깝다",
        "약하다",
        "느리다"
      ],
      "answer": "느리다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '느'(으)로 시작해요.",
      "ttsKo": "'빠르다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_006",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'높다'의 반대말은 무엇일까요?",
      "choices": [
        "낮다",
        "좁다",
        "얕다",
        "작다"
      ],
      "answer": "낮다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '낮'(으)로 시작해요.",
      "ttsKo": "'높다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_007",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'넓다'의 반대말은 무엇일까요?",
      "choices": [
        "좁다",
        "얇다",
        "짧다",
        "가볍다"
      ],
      "answer": "좁다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '좁'(으)로 시작해요.",
      "ttsKo": "'넓다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_008",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'차갑다'의 반대말은 무엇일까요?",
      "choices": [
        "단단하다",
        "시원하다",
        "뜨겁다",
        "매콤하다"
      ],
      "answer": "뜨겁다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '뜨'(으)로 시작해요.",
      "ttsKo": "'차갑다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_009",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "문을 '열다'의 반대말은 무엇일까요?",
      "choices": [
        "밀다",
        "잡다",
        "놓다",
        "닫다"
      ],
      "answer": "닫다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '닫'(으)로 시작해요.",
      "ttsKo": "문을 '열다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_010",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "줄을 '밀다'의 반대말은 무엇일까요?",
      "choices": [
        "던지다",
        "올리다",
        "당기다",
        "놓치다"
      ],
      "answer": "당기다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '당'(으)로 시작해요.",
      "ttsKo": "줄을 '밀다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_011",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'가깝다'의 반대말은 무엇일까요?",
      "choices": [
        "길다",
        "멀다",
        "크다",
        "높다"
      ],
      "answer": "멀다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '멀'(으)로 시작해요.",
      "ttsKo": "'가깝다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_012",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'많다'의 반대말은 무엇일까요?",
      "choices": [
        "적다",
        "얇다",
        "낮다",
        "작다"
      ],
      "answer": "적다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '적'(으)로 시작해요.",
      "ttsKo": "'많다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_013",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'강하다'의 반대말은 무엇일까요?",
      "choices": [
        "느리다",
        "가볍다",
        "부드럽다",
        "약하다"
      ],
      "answer": "약하다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '약'(으)로 시작해요.",
      "ttsKo": "'강하다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_014",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'깊다'의 반대말은 무엇일까요?",
      "choices": [
        "좁다",
        "얕다",
        "낮다",
        "짧다"
      ],
      "answer": "얕다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '얕'(으)로 시작해요.",
      "ttsKo": "'깊다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_015",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'두껍다'의 반대말은 무엇일까요?",
      "choices": [
        "좁다",
        "가볍다",
        "얇다",
        "작다"
      ],
      "answer": "얇다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '얇'(으)로 시작해요.",
      "ttsKo": "'두껍다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_016",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'부지런하다'의 반대말은 무엇일까요?",
      "choices": [
        "게으르다",
        "심심하다",
        "천천히",
        "조용하다"
      ],
      "answer": "게으르다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '게'(으)로 시작해요.",
      "ttsKo": "'부지런하다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_017",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'입다'의 반대말로 옷을 벗을 때 쓰는 말은?",
      "choices": [
        "벗다",
        "놓다",
        "열다",
        "풀다"
      ],
      "answer": "벗다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '벗'(으)로 시작해요.",
      "ttsKo": "'입다'의 반대말로 옷을 벗을 때 쓰는 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_018",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'사다'의 반대말로 물건을 파는 것을 뜻하는 말은?",
      "choices": [
        "바꾸다",
        "팔다",
        "빌리다",
        "주다"
      ],
      "answer": "팔다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '팔'(으)로 시작해요.",
      "ttsKo": "'사다'의 반대말로 물건을 파는 것을 뜻하는 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_019",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'올라가다'의 반대말은 무엇일까요?",
      "choices": [
        "내려가다",
        "걸어가다",
        "뛰어가다",
        "돌아가다"
      ],
      "answer": "내려가다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '내'(으)로 시작해요.",
      "ttsKo": "'올라가다'의 반대말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_020",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 5,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'칭찬하다'의 반대말과 가장 가까운 것은?",
      "choices": [
        "인사하다",
        "꾸중하다",
        "약속하다",
        "자랑하다"
      ],
      "answer": "꾸중하다",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '꾸'(으)로 시작해요.",
      "ttsKo": "'칭찬하다'의 반대말과 가장 가까운 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_021",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "음식을 만드는 곳을 뜻하는 바른 글자는 무엇일까요?",
      "choices": [
        "부얻",
        "부엌",
        "부억",
        "부엎"
      ],
      "answer": "부엌",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "음식을 만드는 곳을 뜻하는 바른 글자는 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_022",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "꽃이 많이 피어 있는 밭을 바르게 쓴 낱말은?",
      "choices": [
        "꽃받",
        "꼳받",
        "꽃밭",
        "꼳밭"
      ],
      "answer": "꽃밭",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "꽃이 많이 피어 있는 밭을 바르게 쓴 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_023",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "낮에 자는 잠을 바르게 쓴 낱말은 무엇일까요?",
      "choices": [
        "낱잠",
        "낮잠",
        "낳잠",
        "낫잠"
      ],
      "answer": "낮잠",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "낮에 자는 잠을 바르게 쓴 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_024",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "손을 깨끗이 씻을 때 바른 표기는 무엇일까요?",
      "choices": [
        "깨끄티",
        "깨끗히",
        "깨끗이",
        "깨끄시"
      ],
      "answer": "깨끗이",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "손을 깨끗이 씻을 때 바른 표기는 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_025",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "매콤달콤 맛있는 분식 이름을 바르게 쓴 것은?",
      "choices": [
        "떡볶이",
        "떡보끼",
        "떡복이",
        "떡뽂이"
      ],
      "answer": "떡볶이",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "매콤달콤 맛있는 분식 이름을 바르게 쓴 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_026",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "감기에 걸린 친구에게 하는 바른 인사말은?",
      "choices": [
        "감기 빨리 남아!",
        "감기 빨리 나아!",
        "감기 빨리 날아!",
        "감기 빨리 낳아!"
      ],
      "answer": "감기 빨리 나아!",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "감기에 걸린 친구에게 하는 바른 인사말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_027",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "'거짓말'의 반대말로 바르게 쓰인 낱말은?",
      "choices": [
        "찰말",
        "창말",
        "찬말",
        "참말"
      ],
      "answer": "참말",
      "hint": "뜻이 정반대인 낱말을 떠올려 보세요! 정답은 '참'(으)로 시작해요.",
      "ttsKo": "'거짓말'의 반대말로 바르게 쓰인 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_028",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "비 온 뒤 하늘에 뜨는 일곱 빛깔은 무엇일까요?",
      "choices": [
        "물지개",
        "무지게",
        "무지개빛깔이",
        "무지개"
      ],
      "answer": "무지개",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "비 온 뒤 하늘에 뜨는 일곱 빛깔은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_029",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "길 잃은 물건을 '찾다'가 맞을까요, '찻다'가 맞을까요?",
      "choices": [
        "찻다",
        "챃다",
        "찾앗다",
        "찾다"
      ],
      "answer": "찾다",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "길 잃은 물건을 '찾다'가 맞을까요, '찻다'가 맞을까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_030",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 받침이 바르게 쓰인 낱말은 무엇일까요?",
      "choices": [
        "할아버지",
        "할아범지",
        "한아버지",
        "하라버지"
      ],
      "answer": "할아버지",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 받침이 바르게 쓰인 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_031",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 7,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "다음 중 맞춤법이 바른 낱말은 무엇일까요?",
      "choices": [
        "연필깎이",
        "연필깤이",
        "연필깍이",
        "연필까끼"
      ],
      "answer": "연필깎이",
      "hint": "소리 나는 대로 쓰지 않고 원래 글자 모양과 받침을 바르게 쓴 것을 골라 보세요!",
      "ttsKo": "다음 중 맞춤법이 바른 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_032",
      "subject": "korean",
      "category": "korean",
      "unit": "k8",
      "tier": 8,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "다음 중 맞춤법이 바른 문장은 무엇일까요?",
      "choices": [
        "내일 만낳자",
        "내일 만나자",
        "네일 만나자",
        "내일 만날자"
      ],
      "answer": "내일 만나자",
      "hint": "소리 나는 대로 쓰지 않고 원래 글자 모양과 받침을 바르게 쓴 것을 골라 보세요!",
      "ttsKo": "다음 중 맞춤법이 바른 문장은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_033",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "'얼음이 녹아서 물이 (   )'에 알맞은 말은?",
      "choices": [
        "되었다",
        "돼었다",
        "됀다",
        "되였다"
      ],
      "answer": "되었다",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "'얼음이 녹아서 물이 빈칸'에 알맞은 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_034",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 'ㅎ' 받침이 들어가는 바른 낱말은?",
      "choices": [
        "좋다",
        "졷다",
        "종다",
        "조타"
      ],
      "answer": "좋다",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 'ㅎ' 받침이 들어가는 바른 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_035",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 쌍받침 'ㅆ'이 들어가는 바른 낱말은?",
      "choices": [
        "입어요",
        "잇어요",
        "있어요",
        "이써요"
      ],
      "answer": "있어요",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 쌍받침 'ㅆ'이 들어가는 바른 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_036",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "가을에 빨갛게 익는 과일 '사과'와 함께 많이 열리는 '감' 말고, 가시 송이 속에 든 열매는?",
      "choices": [
        "밥",
        "밤",
        "발",
        "밭"
      ],
      "answer": "밤",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "가을에 빨갛게 익는 과일 '사과'와 함께 많이 열리는 '감' 말고, 가시 송이 속에 든 열매는?",
      "ttsEn": ""
    },
    {
      "id": "kor_037",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 받침 'ㄹ'이 들어간 동물 이름은?",
      "choices": [
        "고양이",
        "강아지",
        "코끼리",
        "달팽이"
      ],
      "answer": "달팽이",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 받침 'ㄹ'이 들어간 동물 이름은?",
      "ttsEn": ""
    },
    {
      "id": "kor_038",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 받침이 없는 글자로만 이루어진 낱말은?",
      "choices": [
        "수박",
        "딸기",
        "포도송이",
        "바나나"
      ],
      "answer": "바나나",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 받침이 없는 글자로만 이루어진 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_039",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "다음 중 첫소리에 쌍자음(ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)이 들어간 동물은?",
      "choices": [
        "기린",
        "하마",
        "사자",
        "토끼"
      ],
      "answer": "토끼",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "다음 중 첫소리에 쌍자음(ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)이 들어간 동물은?",
      "ttsEn": ""
    },
    {
      "id": "kor_040",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "어제 있었던 일을 적는 공책을 바르게 쓴 말은?",
      "choices": [
        "일기잔",
        "이기장",
        "일기짱",
        "일기장"
      ],
      "answer": "일기장",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "어제 있었던 일을 적는 공책을 바르게 쓴 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_041",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "이가 아플 때 가는 병원을 바르게 쓴 낱말은?",
      "choices": [
        "치과",
        "칙과",
        "칫과",
        "칭과"
      ],
      "answer": "치과",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "이가 아플 때 가는 병원을 바르게 쓴 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_042",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "'고맙습니다'와 비슷한 뜻의 바른 높임말은?",
      "choices": [
        "간사합니다",
        "감솨합니다",
        "감사합니다",
        "갑사합니다"
      ],
      "answer": "감사합니다",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "'고맙습니다'와 비슷한 뜻의 바른 높임말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_043",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "친구와 한 약속을 꼭 '(   )'에 들어갈 바른 말은?",
      "choices": [
        "지켜요우",
        "지켜여요",
        "지켜요",
        "직혀요"
      ],
      "answer": "지켜요",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "친구와 한 약속을 꼭 '빈칸'에 들어갈 바른 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_044",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "다음 중 '넓다'처럼 겹받침이 들어간 바른 낱말은?",
      "choices": [
        "여덜",
        "여덥",
        "여덟",
        "여덣"
      ],
      "answer": "여덟",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "다음 중 '넓다'처럼 겹받침이 들어간 바른 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_045",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "닭이 낳은 알을 가리키는 바른 낱말은 무엇일까요?",
      "choices": [
        "달걀",
        "닭알이",
        "단걀",
        "달갈"
      ],
      "answer": "달걀",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "닭이 낳은 알을 가리키는 바른 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_046",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "강아지가 반갑게 꼬리를 (   ) 흔들어요.",
      "choices": [
        "번쩍번쩍",
        "데구르르",
        "우르릉",
        "살랑살랑"
      ],
      "answer": "살랑살랑",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "강아지가 반갑게 꼬리를 빈칸 흔들어요.",
      "ttsEn": ""
    },
    {
      "id": "kor_047",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "아기 참새가 나뭇가지에서 (   ) 노래해요.",
      "choices": [
        "야옹",
        "멍멍",
        "음매",
        "짹짹"
      ],
      "answer": "짹짹",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "아기 참새가 나뭇가지에서 빈칸 노래해요.",
      "ttsEn": ""
    },
    {
      "id": "kor_048",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "개구리가 연못가에서 (   ) 울어요.",
      "choices": [
        "꿀꿀",
        "개굴개굴",
        "삐약삐약",
        "어흥"
      ],
      "answer": "개굴개굴",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "개구리가 연못가에서 빈칸 울어요.",
      "ttsEn": ""
    },
    {
      "id": "kor_049",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "밤하늘에 작은 별들이 (   ) 빛나요.",
      "choices": [
        "주룩주룩",
        "반짝반짝",
        "보글보글",
        "쿵쿵"
      ],
      "answer": "반짝반짝",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "밤하늘에 작은 별들이 빈칸 빛나요.",
      "ttsEn": ""
    },
    {
      "id": "kor_050",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "냄비에 찌개가 맛있게 (   ) 끓어요.",
      "choices": [
        "깡충깡충",
        "팔랑팔랑",
        "사각사각",
        "보글보글"
      ],
      "answer": "보글보글",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "냄비에 찌개가 맛있게 빈칸 끓어요.",
      "ttsEn": ""
    },
    {
      "id": "kor_051",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "토끼가 풀밭 위를 (   ) 뛰어다녀요.",
      "choices": [
        "엉금엉금",
        "살금살금",
        "깡충깡충",
        "뒤뚱뒤뚱"
      ],
      "answer": "깡충깡충",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "토끼가 풀밭 위를 빈칸 뛰어다녀요.",
      "ttsEn": ""
    },
    {
      "id": "kor_052",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "거북이가 모래사장을 (   ) 기어가요.",
      "choices": [
        "후다닥",
        "엉금엉금",
        "쌩쌩",
        "펄쩍펄쩍"
      ],
      "answer": "엉금엉금",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "거북이가 모래사장을 빈칸 기어가요.",
      "ttsEn": ""
    },
    {
      "id": "kor_053",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "나비가 꽃밭 위를 (   ) 날아다녀요.",
      "choices": [
        "보슬보슬",
        "훨훨",
        "데굴데굴",
        "쿵쾅쿵쾅"
      ],
      "answer": "훨훨",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "나비가 꽃밭 위를 빈칸 날아다녀요.",
      "ttsEn": ""
    },
    {
      "id": "kor_054",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "가을바람에 낙엽이 (   ) 떨어져요.",
      "choices": [
        "칙칙폭폭",
        "우수수",
        "쨍그랑",
        "우당탕"
      ],
      "answer": "우수수",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "가을바람에 낙엽이 빈칸 떨어져요.",
      "ttsEn": ""
    },
    {
      "id": "kor_055",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "소나기가 하늘에서 (   ) 내려요.",
      "choices": [
        "사르르",
        "모락모락",
        "주룩주룩",
        "반짝반짝"
      ],
      "answer": "주룩주룩",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "소나기가 하늘에서 빈칸 내려요.",
      "ttsEn": ""
    },
    {
      "id": "kor_056",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "따뜻한 찐빵에서 김이 (   ) 피어올라요.",
      "choices": [
        "모락모락",
        "삐걱삐걱",
        "출렁출렁",
        "덜컹덜컹"
      ],
      "answer": "모락모락",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "따뜻한 찐빵에서 김이 빈칸 피어올라요.",
      "ttsEn": ""
    },
    {
      "id": "kor_057",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "아기가 새근새근 (   ) 잠을 자요.",
      "choices": [
        "깔깔",
        "엉엉",
        "쿨쿨",
        "와구와구"
      ],
      "answer": "쿨쿨",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "아기가 새근새근 빈칸 잠을 자요.",
      "ttsEn": ""
    },
    {
      "id": "kor_058",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "사과를 한 입 베어 물었더니 (   ) 소리가 났어요.",
      "choices": [
        "출렁출렁",
        "둥실둥실",
        "미끌미끌",
        "아삭아삭"
      ],
      "answer": "아삭아삭",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "사과를 한 입 베어 물었더니 빈칸 소리가 났어요.",
      "ttsEn": ""
    },
    {
      "id": "kor_059",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "둥근 공이 비탈길을 따라 (   ) 굴러가요.",
      "choices": [
        "사뿐사뿐",
        "모락모락",
        "데구르르",
        "반짝반짝"
      ],
      "answer": "데구르르",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "둥근 공이 비탈길을 따라 빈칸 굴러가요.",
      "ttsEn": ""
    },
    {
      "id": "kor_060",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "오리가 물가를 (   ) 걸어가요.",
      "choices": [
        "성큼성큼",
        "보글보글",
        "뒤뚱뒤뚱",
        "번쩍번쩍"
      ],
      "answer": "뒤뚱뒤뚱",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "오리가 물가를 빈칸 걸어가요.",
      "ttsEn": ""
    },
    {
      "id": "kor_061",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "시냇물이 바위 사이로 (   ) 흘러가요.",
      "choices": [
        "쿵쿵",
        "쨍쨍",
        "빵빵",
        "졸졸"
      ],
      "answer": "졸졸",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "시냇물이 바위 사이로 빈칸 흘러가요.",
      "ttsEn": ""
    },
    {
      "id": "kor_062",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "여름 한낮에 햇볕이 (   ) 내리쬐어요.",
      "choices": [
        "부슬부슬",
        "쨍쨍",
        "소복소복",
        "주룩주룩"
      ],
      "answer": "쨍쨍",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "여름 한낮에 햇볕이 빈칸 내리쬐어요.",
      "ttsEn": ""
    },
    {
      "id": "kor_063",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "겨울밤에 하얀 눈이 마당에 (   ) 쌓여요.",
      "choices": [
        "우르릉",
        "쨍그랑",
        "보글보글",
        "소복소복"
      ],
      "answer": "소복소복",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "겨울밤에 하얀 눈이 마당에 빈칸 쌓여요.",
      "ttsEn": ""
    },
    {
      "id": "kor_064",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "코끼리가 무거운 발걸음으로 (   ) 걸어가요.",
      "choices": [
        "살랑살랑",
        "쿵쿵",
        "사뿐사뿐",
        "팔랑팔랑"
      ],
      "answer": "쿵쿵",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "코끼리가 무거운 발걸음으로 빈칸 걸어가요.",
      "ttsEn": ""
    },
    {
      "id": "kor_065",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "하늘에 흰 구름이 (   ) 떠다녀요.",
      "choices": [
        "달그락",
        "둥실둥실",
        "와장창",
        "칙칙폭폭"
      ],
      "answer": "둥실둥실",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "하늘에 흰 구름이 빈칸 떠다녀요.",
      "ttsEn": ""
    },
    {
      "id": "kor_066",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "책을 빌려 읽거나 공부할 수 있는 곳을 무엇이라 하나요?",
      "choices": [
        "소방서",
        "도서관",
        "우체국",
        "세탁소"
      ],
      "answer": "도서관",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "책을 빌려 읽거나 공부할 수 있는 곳을 무엇이라 하나요?",
      "ttsEn": ""
    },
    {
      "id": "kor_067",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "불이 났을 때 출동해서 불을 꺼 주는 고마운 곳은?",
      "choices": [
        "박물관",
        "빵집",
        "문구점",
        "소방서"
      ],
      "answer": "소방서",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "불이 났을 때 출동해서 불을 꺼 주는 고마운 곳은?",
      "ttsEn": ""
    },
    {
      "id": "kor_068",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "편지나 소포를 보내 줄 때 가는 곳은 어디일까요?",
      "choices": [
        "동물원",
        "수영장",
        "우체국",
        "미용실"
      ],
      "answer": "우체국",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "편지나 소포를 보내 줄 때 가는 곳은 어디일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_069",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "옛날 유물과 역사를 구경할 수 있는 곳은 어디일까요?",
      "choices": [
        "박물관",
        "정육점",
        "약국",
        "세차장"
      ],
      "answer": "박물관",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "옛날 유물과 역사를 구경할 수 있는 곳은 어디일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_070",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "기차를 타거나 내리는 곳을 무엇이라고 부를까요?",
      "choices": [
        "기차역",
        "교실",
        "놀이터",
        "항구"
      ],
      "answer": "기차역",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "기차를 타거나 내리는 곳을 무엇이라고 부를까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_071",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "배가 드나들고 머무르는 바닷가 장소를 무엇이라 할까요?",
      "choices": [
        "도서관",
        "항구",
        "공항",
        "정류장"
      ],
      "answer": "항구",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "배가 드나들고 머무르는 바닷가 장소를 무엇이라 할까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_072",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "비행기를 타고 내리는 넓은 장소를 무엇이라 할까요?",
      "choices": [
        "목장",
        "과수원",
        "항구",
        "공항"
      ],
      "answer": "공항",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "비행기를 타고 내리는 넓은 장소를 무엇이라 할까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_073",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "사과, 배, 복숭아 같은 과일 나무를 기르는 곳은?",
      "choices": [
        "수족관",
        "도서관",
        "과수원",
        "우체국"
      ],
      "answer": "과수원",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "사과, 배, 복숭아 같은 과일 나무를 기르는 곳은?",
      "ttsEn": ""
    },
    {
      "id": "kor_074",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "하루 중 해가 동쪽에서 떠오르는 때는 언제일까요?",
      "choices": [
        "밤",
        "자정",
        "아침",
        "저녁"
      ],
      "answer": "아침",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "하루 중 해가 동쪽에서 떠오르는 때는 언제일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_075",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "일 년 중 날씨가 가장 덥고 물놀이를 많이 하는 계절은?",
      "choices": [
        "여름",
        "가을",
        "겨울",
        "봄"
      ],
      "answer": "여름",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "일 년 중 날씨가 가장 덥고 물놀이를 많이 하는 계절은?",
      "ttsEn": ""
    },
    {
      "id": "kor_076",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "일 년 중 나뭇잎이 알록달록 단풍으로 물드는 계절은?",
      "choices": [
        "겨울",
        "여름",
        "봄",
        "가을"
      ],
      "answer": "가을",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "일 년 중 나뭇잎이 알록달록 단풍으로 물드는 계절은?",
      "ttsEn": ""
    },
    {
      "id": "kor_077",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "언 땅이 녹고 새싹과 개나리꽃이 피어나는 계절은?",
      "choices": [
        "겨울",
        "여름",
        "가을",
        "봄"
      ],
      "answer": "봄",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "언 땅이 녹고 새싹과 개나리꽃이 피어나는 계절은?",
      "ttsEn": ""
    },
    {
      "id": "kor_078",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "아빠의 형이나 남동생을 부르는 말로 알맞은 것은?",
      "choices": [
        "할머니",
        "고모",
        "이모",
        "삼촌"
      ],
      "answer": "삼촌",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "아빠의 형이나 남동생을 부르는 말로 알맞은 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_079",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "엄마의 여자 형제를 부르는 말은 무엇일까요?",
      "choices": [
        "이모",
        "고모",
        "외삼촌",
        "삼촌"
      ],
      "answer": "이모",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "엄마의 여자 형제를 부르는 말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_080",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "아빠의 여자 형제를 부르는 말은 무엇일까요?",
      "choices": [
        "이모",
        "형",
        "삼촌",
        "고모"
      ],
      "answer": "고모",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "아빠의 여자 형제를 부르는 말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_081",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "속담 '가는 말이 고와야 (   ) 말이 곱다'에 들어갈 말은?",
      "choices": [
        "오는",
        "자는",
        "뛰는",
        "나는"
      ],
      "answer": "오는",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "속담 '가는 말이 고와야 빈칸 말이 곱다'에 들어갈 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_082",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "속담 '티끌 모아 (   )'에서 아주 큰 산을 뜻하는 말은?",
      "choices": [
        "태산",
        "하늘",
        "바다",
        "구름"
      ],
      "answer": "태산",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "속담 '티끌 모아 빈칸'에서 아주 큰 산을 뜻하는 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_083",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "속담 '천 리 길도 (   )부터'에 들어갈 알맞은 말은?",
      "choices": [
        "비행기",
        "자전거",
        "달리기",
        "한 걸음"
      ],
      "answer": "한 걸음",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "속담 '천 리 길도 빈칸부터'에 들어갈 알맞은 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_084",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "속담 '원숭이도 (   )에서 떨어질 때가 있다'에 들어갈 말은?",
      "choices": [
        "구름",
        "바다",
        "책상",
        "나무"
      ],
      "answer": "나무",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "속담 '원숭이도 빈칸에서 떨어질 때가 있다'에 들어갈 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_085",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "속담 '낮말은 새가 듣고 밤말은 (   )가 듣는다'에 들어갈 동물은?",
      "choices": [
        "고래",
        "호랑이",
        "쥐",
        "거북이"
      ],
      "answer": "쥐",
      "hint": "소리와 모양을 생생하게 흉내 내는 말(의성어·의태어)을 문장에 넣어 읽어 보세요!",
      "ttsKo": "속담 '낮말은 새가 듣고 밤말은 빈칸가 듣는다'에 들어갈 동물은?",
      "ttsEn": ""
    },
    {
      "id": "kor_086",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "모르는 낱말의 뜻을 찾아볼 때 보는 책을 무엇이라 하나요?",
      "choices": [
        "지도책",
        "요리책",
        "국어사전",
        "스케치북"
      ],
      "answer": "국어사전",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "모르는 낱말의 뜻을 찾아볼 때 보는 책을 무엇이라 하나요?",
      "ttsEn": ""
    },
    {
      "id": "kor_087",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "길을 잃지 않도록 도로와 건물 위치를 그려 놓은 것은?",
      "choices": [
        "시계",
        "온도계",
        "지도",
        "달력"
      ],
      "answer": "지도",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "길을 잃지 않도록 도로와 건물 위치를 그려 놓은 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_088",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "오늘이 몇 월 며칠이고 무슨 요일인지 알려 주는 것은?",
      "choices": [
        "달력",
        "나침반",
        "자",
        "저울"
      ],
      "answer": "달력",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "오늘이 몇 월 며칠이고 무슨 요일인지 알려 주는 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_089",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "동서남북 방향을 찾을 때 사용하는 도구는 무엇일까요?",
      "choices": [
        "나침반",
        "돋보기",
        "주사기",
        "청진기"
      ],
      "answer": "나침반",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "동서남북 방향을 찾을 때 사용하는 도구는 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_090",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 3,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "작은 글씨나 곤충을 크게 확대해서 볼 때 쓰는 도구는?",
      "choices": [
        "자석",
        "돋보기",
        "가위",
        "지우개"
      ],
      "answer": "돋보기",
      "hint": "문장이 설명하는 특징을 잘 떠올리면 알맞은 낱말이 보여요!",
      "ttsKo": "작은 글씨나 곤충을 크게 확대해서 볼 때 쓰는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f01",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "자음 'ㄱ'과 모음 'ㅏ'를 합치면 어떤 글자가 될까요?",
      "choices": [
        "가",
        "나",
        "다",
        "마"
      ],
      "answer": "가",
      "hint": "'ㄱ' 소리에 'ㅏ' 소리를 붙이면 '가'가 돼요!",
      "ttsKo": "자음 'ㄱ'과 모음 'ㅏ'를 합치면 어떤 글자가 될까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f02",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "자음 'ㄴ'과 모음 'ㅗ'를 합치면 어떤 글자가 될까요?",
      "choices": [
        "노",
        "누",
        "나",
        "네"
      ],
      "answer": "노",
      "hint": "'ㄴ' 아래에 위로 솟은 'ㅗ'를 받치면 '노'가 돼요!",
      "ttsKo": "자음 'ㄴ'과 모음 'ㅗ'를 합치면 어떤 글자가 될까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f03",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "자음 'ㅁ'과 모음 'ㅜ'를 합치면 어떤 글자가 될까요?",
      "choices": [
        "무",
        "모",
        "마",
        "미"
      ],
      "answer": "무",
      "hint": "무우 할 때의 '무' 글자가 만들어져요!",
      "ttsKo": "자음 'ㅁ'과 모음 'ㅜ'를 합치면 어떤 글자가 될까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f04",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'바나나'의 첫 번째 글자에 들어 있는 자음은 무엇일까요?",
      "choices": [
        "ㅂ",
        "ㄴ",
        "ㅁ",
        "ㅅ"
      ],
      "answer": "ㅂ",
      "hint": "'바'는 자음 'ㅂ'과 모음 'ㅏ'가 만난 글자예요!",
      "ttsKo": "'바나나'의 첫 번째 글자에 들어 있는 자음은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f05",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'우유'에 들어 있지 않은 모음은 무엇일까요?",
      "choices": [
        "ㅏ",
        "ㅜ",
        "ㅠ",
        "모두 있음"
      ],
      "answer": "ㅏ",
      "hint": "'우'에는 ㅜ, '유'에는 ㅠ가 들어 있고 ㅏ는 없어요!",
      "ttsKo": "'우유'에 들어 있지 않은 모음은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f06",
      "subject": "korean",
      "category": "korean",
      "unit": "k0",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "다음 중 동그라미 모양의 자음 'ㅇ'으로 시작하는 낱말은?",
      "choices": [
        "오리",
        "사자",
        "토끼",
        "기린"
      ],
      "answer": "오리",
      "hint": "'오리'의 '오'와 '리' 중 첫 글자 '오'가 'ㅇ'으로 시작해요!",
      "ttsKo": "다음 중 동그라미 모양의 자음 'ㅇ'으로 시작하는 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f07",
      "subject": "korean",
      "category": "korean",
      "unit": "k1",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "다음 중 받침이 없는 낱말을 골라 보세요!",
      "choices": [
        "나비",
        "구름",
        "하늘",
        "연필"
      ],
      "answer": "나비",
      "hint": "'나'와 '비'는 아래에 받침이 하나도 없어요!",
      "ttsKo": "다음 중 받침이 없는 낱말을 골라 보세요!",
      "ttsEn": ""
    },
    {
      "id": "kor_f08",
      "subject": "korean",
      "category": "korean",
      "unit": "k1",
      "tier": 1,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "다음 중 모든 글자에 받침이 없는 낱말은 무엇일까요?",
      "choices": [
        "나무",
        "수박",
        "가방",
        "우산"
      ],
      "answer": "나무",
      "hint": "'나'와 '무' 모두 받침 없이 깨끗한 글자예요!",
      "ttsKo": "다음 중 모든 글자에 받침이 없는 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f09",
      "subject": "korean",
      "category": "korean",
      "unit": "k1",
      "tier": 2,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "비 오는 날 머리에 펼쳐 쓰는 물건의 바른 이름은?",
      "choices": [
        "우산",
        "오산",
        "유산",
        "아산"
      ],
      "answer": "우산",
      "hint": "비를 막아 주는 '우산'이에요!",
      "ttsKo": "비 오는 날 머리에 펼쳐 쓰는 물건의 바른 이름은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f10",
      "subject": "korean",
      "category": "korean",
      "unit": "k1",
      "tier": 2,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "젖소가 우리에게 주는 하얗고 고소한 마실 거리는?",
      "choices": [
        "우유",
        "오이",
        "여우",
        "아이"
      ],
      "answer": "우유",
      "hint": "'우'와 '유'가 만난 '우유'예요!",
      "ttsKo": "젖소가 우리에게 주는 하얗고 고소한 마실 거리는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f11",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 2,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'산' 글자 아래에 들어 있는 받침은 무엇일까요?",
      "choices": [
        "ㄴ",
        "ㅁ",
        "ㅇ",
        "ㄹ"
      ],
      "answer": "ㄴ",
      "hint": "'사' 아래에 'ㄴ' 받침이 들어가서 '산'이 되었어요!",
      "ttsKo": "'산' 글자 아래에 들어 있는 받침은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f12",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 2,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'공' 글자 아래에 들어 있는 받침은 무엇일까요?",
      "choices": [
        "ㅇ",
        "ㄱ",
        "ㄴ",
        "ㅂ"
      ],
      "answer": "ㅇ",
      "hint": "'고' 아래에 동그란 'ㅇ' 받침이 들어가서 '공'이 돼요!",
      "ttsKo": "'공' 글자 아래에 들어 있는 받침은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f13",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 2,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'달' 글자와 같은 'ㄹ' 받침이 들어 있는 낱말은?",
      "choices": [
        "물",
        "강",
        "집",
        "책"
      ],
      "answer": "물",
      "hint": "'달'과 '물'은 모두 아래에 'ㄹ' 받침이 있어요!",
      "ttsKo": "'달' 글자와 같은 'ㄹ' 받침이 들어 있는 낱말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f14",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 3,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'가' 아래에 'ㅂ' 받침을 넣으면 어떤 글자가 될까요?",
      "choices": [
        "갑",
        "감",
        "강",
        "갈"
      ],
      "answer": "갑",
      "hint": "'가' + 받침 'ㅂ'은 '갑'이에요!",
      "ttsKo": "'가' 아래에 'ㅂ' 받침을 넣으면 어떤 글자가 될까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f15",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 3,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'수박'에서 받침이 있는 글자는 어느 것일까요?",
      "choices": [
        "박",
        "수",
        "둘 다 없음",
        "둘 다 있음"
      ],
      "answer": "박",
      "hint": "'수'는 받침이 없고 '박'에는 'ㄱ' 받침이 있어요!",
      "ttsKo": "'수박'에서 받침이 있는 글자는 어느 것일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f16",
      "subject": "korean",
      "category": "korean",
      "unit": "k2",
      "tier": 3,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "다음 중 두 글자 모두 받침이 있는 낱말은 무엇일까요?",
      "choices": [
        "연필",
        "바다",
        "나비",
        "포도"
      ],
      "answer": "연필",
      "hint": "'연'(ㄴ 받침)과 '필'(ㄹ 받침)은 두 글자 모두 받침이 있어요!",
      "ttsKo": "다음 중 두 글자 모두 받침이 있는 낱말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f17",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 3,
      "domain": "듣기·말하기",
      "pokeType": "노말",
      "question": "아침에 학교에서 선생님을 만났을 때 알맞은 인사말은?",
      "choices": [
        "안녕하세요?",
        "안녕히 주무세요.",
        "잘 먹겠습니다.",
        "미안합니다."
      ],
      "answer": "안녕하세요?",
      "hint": "선생님과 친구를 만났을 때는 밝게 '안녕하세요?'라고 인사해요!",
      "ttsKo": "아침에 학교에서 선생님을 만났을 때 알맞은 인사말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f18",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 3,
      "domain": "듣기·말하기",
      "pokeType": "노말",
      "question": "친구가 지우개를 빌려주었을 때 해야 할 알맞은 말은?",
      "choices": [
        "고마워!",
        "내가 먼저 할래!",
        "비켜 줄래?",
        "잘 자!"
      ],
      "answer": "고마워!",
      "hint": "도움을 받았을 때는 고마운 마음을 담아 '고마워!'라고 말해요.",
      "ttsKo": "친구가 지우개를 빌려주었을 때 해야 할 알맞은 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f19",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 4,
      "domain": "듣기·말하기",
      "pokeType": "노말",
      "question": "실수로 친구의 발을 살짝 밟았을 때 가장 먼저 할 말은?",
      "choices": [
        "미안해, 괜찮니?",
        "왜 거기 서 있어?",
        "모른 척 지나간다.",
        "빨리 달린다."
      ],
      "answer": "미안해, 괜찮니?",
      "hint": "실수를 했을 때는 먼저 사과하고 친구가 괜찮은지 살펴요.",
      "ttsKo": "실수로 친구의 발을 살짝 밟았을 때 가장 먼저 할 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f20",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 5,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "'꽃이 피었어요'에서 '꽃이'는 소리 내어 읽을 때 어떻게 들릴까요?",
      "choices": [
        "[꼬치]",
        "[꼬시]",
        "[꼬기]",
        "[꽃이]"
      ],
      "answer": "[꼬치]",
      "hint": "받침 'ㅊ' 소리가 뒤의 '이'로 이어져 [꼬치]라고 소리 나요!",
      "ttsKo": "'꽃이 피었어요'에서 '꽃이'는 소리 내어 읽을 때 어떻게 들릴까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f21",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 5,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "'친구와 같이 가요'에서 '같이'를 바르게 소리 내어 읽은 것은?",
      "choices": [
        "[가치]",
        "[가티]",
        "[가시]",
        "[갈치]"
      ],
      "answer": "[가치]",
      "hint": "'같이'는 소리 내어 읽을 때 [가치]라고 발음해요!",
      "ttsKo": "'친구와 같이 가요'에서 '같이'를 바르게 소리 내어 읽은 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f22",
      "subject": "korean",
      "category": "korean",
      "unit": "k5",
      "tier": 5,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "소리 내어 읽을 때 [구거]라고 들리는 과목 이름의 바른 표기는?",
      "choices": [
        "국어",
        "구거",
        "국거",
        "구어"
      ],
      "answer": "국어",
      "hint": "소리는 [구거]로 나지만 쓸 때는 '국어'라고 적어요!",
      "ttsKo": "소리 내어 읽을 때 [구거]라고 들리는 과목 이름의 바른 표기는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f23",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 5,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "궁금한 것을 물어보는 문장 끝에 찍는 문장 부호는?",
      "choices": [
        "? (물음표)",
        ". (마침표)",
        ", (쉼표)",
        "! (느낌표)"
      ],
      "answer": "? (물음표)",
      "hint": "물어보는 말 끝에는 귀 모양을 닮은 물음표(?)를 써요!",
      "ttsKo": "궁금한 것을 물어보는 문장 끝에 찍는 문장 부호는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f24",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 5,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'우와, 무지개가 정말 예쁘다( )' 빈칸에 가장 어울리는 부호는?",
      "choices": [
        "! (느낌표)",
        "? (물음표)",
        ", (쉼표)",
        "- (붙임표)"
      ],
      "answer": "! (느낌표)",
      "hint": "기쁘거나 깜짝 놀란 느낌을 나타낼 때는 느낌표(!)를 찍어요!",
      "ttsKo": "'우와, 무지개가 정말 예쁘다( )' 빈칸에 가장 어울리는 부호는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f25",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 6,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "설명하는 문장이 끝났을 때 맨 끝에 찍는 문장 부호는?",
      "choices": [
        ". (마침표)",
        "? (물음표)",
        ", (쉼표)",
        "~ (물결표)"
      ],
      "answer": ". (마침표)",
      "hint": "평소 사실을 알려 주는 문장 끝에는 작은 점인 마침표(.)를 찍어요!",
      "ttsKo": "설명하는 문장이 끝났을 때 맨 끝에 찍는 문장 부호는?",
      "ttsEn": ""
    },
    {
      "id": "kor_f26",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 6,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "창작 동시: '노란 민들레가 햇살을 보고 방긋 웃어요.' 여기서 민들레의 색깔은?",
      "choices": [
        "노란색",
        "파란색",
        "보라색",
        "검은색"
      ],
      "answer": "노란색",
      "hint": "동시 첫머리에서 '노란 민들레'라고 노래했어요!",
      "ttsKo": "창작 동시: '노란 민들레가 햇살을 보고 방긋 웃어요.' 여기서 민들레의 색깔은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f27",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 6,
      "domain": "문학·동시",
      "pokeType": "페어리",
      "question": "창작 동시: '빗방울이 우산 위에서 톡톡톡 춤을 춥니다.' 빗방울 소리를 흉내 낸 말은?",
      "choices": [
        "톡톡톡",
        "우산",
        "빗방울",
        "춥니다"
      ],
      "answer": "톡톡톡",
      "hint": "우산 위에 떨어지는 소리를 '톡톡톡'이라고 표현했어요!",
      "ttsKo": "창작 동시: '빗방울이 우산 위에서 톡톡톡 춤을 춥니다.' 빗방울 소리를 흉내 낸 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f28",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 6,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "짧은 글: '다람쥐는 겨울이 오기 전에 도토리를 모아요.' 다람쥐가 모으는 것은?",
      "choices": [
        "도토리",
        "솔방울",
        "조개껍데기",
        "눈사람"
      ],
      "answer": "도토리",
      "hint": "다람쥐가 겨울을 준비하며 모으는 먹이는 '도토리'예요!",
      "ttsKo": "짧은 글: '다람쥐는 겨울이 오기 전에 도토리를 모아요.' 다람쥐가 모으는 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f29",
      "subject": "korean",
      "category": "korean",
      "unit": "k7",
      "tier": 6,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "낱말을 바른 순서로 놓은 자연스러운 문장을 골라 보세요!",
      "choices": [
        "토끼가 당근을 맛있게 먹어요.",
        "먹어요 당근을 토끼가 맛있게.",
        "당근이 토끼를 맛있게 먹어요.",
        "맛있게 토끼를 당근이 먹어요."
      ],
      "answer": "토끼가 당근을 맛있게 먹어요.",
      "hint": "'누가(토끼가) + 무엇을(당근을) + 어찌해요(먹어요)' 순서가 가장 자연스러워요!",
      "ttsKo": "낱말을 바른 순서로 놓은 자연스러운 문장을 골라 보세요!",
      "ttsEn": ""
    },
    {
      "id": "kor_f30",
      "subject": "korean",
      "category": "korean",
      "unit": "k7",
      "tier": 7,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "'하늘에 ( ) 떠 있어요.' 빈칸에 자연스럽게 들어갈 말은?",
      "choices": [
        "구름이",
        "구름을",
        "구름에게",
        "구름으로"
      ],
      "answer": "구름이",
      "hint": "'무엇이 떠 있어요'에 맞게 '구름이'를 넣어야 자연스러워요!",
      "ttsKo": "'하늘에 ( ) 떠 있어요.' 빈칸에 자연스럽게 들어갈 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f31",
      "subject": "korean",
      "category": "korean",
      "unit": "k8",
      "tier": 8,
      "domain": "쓰기·맞춤법",
      "pokeType": "땅",
      "question": "'동생이 그림책을 ( ).' 문장 끝에 어울리는 말은 무엇일까요?",
      "choices": [
        "읽어요",
        "마셔요",
        "신어요",
        "입어요"
      ],
      "answer": "읽어요",
      "hint": "책은 눈과 입으로 '읽어요'와 짝을 이루어요!",
      "ttsKo": "'동생이 그림책을 ( ).' 문장 끝에 어울리는 말은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "kor_f32",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 2,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "다음 중 하늘을 날아다니는 동물이 아닌 것은?",
      "choices": [
        "거북이",
        "참새",
        "제비",
        "나비"
      ],
      "answer": "거북이",
      "hint": "거북이는 날개가 없고 땅과 물속을 천천히 걸어 다녀요!",
      "ttsKo": "다음 중 하늘을 날아다니는 동물이 아닌 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f33",
      "subject": "korean",
      "category": "korean",
      "unit": "k3",
      "tier": 2,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "학교 교실에서 공부할 때 쓰는 학용품이 아닌 것은?",
      "choices": [
        "프라이팬",
        "연필",
        "지우개",
        "공책"
      ],
      "answer": "프라이팬",
      "hint": "프라이팬은 부엌에서 요리할 때 쓰는 도구예요!",
      "ttsKo": "학교 교실에서 공부할 때 쓰는 학용품이 아닌 것은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f34",
      "subject": "korean",
      "category": "korean",
      "unit": "k4",
      "tier": 4,
      "domain": "어휘",
      "pokeType": "벌레",
      "question": "아기 병아리가 종종걸음으로 걷는 모양을 흉내 낸 말은?",
      "choices": [
        "아장아장",
        "우르르쾅쾅",
        "출렁출렁",
        "펄펄"
      ],
      "answer": "아장아장",
      "hint": "작고 귀여운 아기나 병아리가 걷는 모습은 '아장아장'이에요!",
      "ttsKo": "아기 병아리가 종종걸음으로 걷는 모양을 흉내 낸 말은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f35",
      "subject": "korean",
      "category": "korean",
      "unit": "k6",
      "tier": 7,
      "domain": "읽기",
      "pokeType": "풀",
      "question": "짧은 글: '민수는 아침에 일어나 이불을 개고 세수를 했어요.' 민수가 먼저 한 일은?",
      "choices": [
        "이불 개기",
        "세수하기",
        "아침밥 먹기",
        "학교 가기"
      ],
      "answer": "이불 개기",
      "hint": "글의 순서대로 이불을 먼저 개고 그다음에 세수를 했어요!",
      "ttsKo": "짧은 글: '민수는 아침에 일어나 이불을 개고 세수를 했어요.' 민수가 먼저 한 일은?",
      "ttsEn": ""
    },
    {
      "id": "kor_f36",
      "subject": "korean",
      "category": "korean",
      "unit": "k8",
      "tier": 8,
      "domain": "문법·글자짜임",
      "pokeType": "바위",
      "question": "'할머니께서 과일을 ( ).' 웃어른께 알맞은 높임말은?",
      "choices": [
        "주셨어요",
        "줬어",
        "던졌어",
        "먹어"
      ],
      "answer": "주셨어요",
      "hint": "할머니처럼 웃어른께는 '주셨어요'처럼 높임말을 써요!",
      "ttsKo": "'할머니께서 과일을 ( ).' 웃어른께 알맞은 높임말은?",
      "ttsEn": ""
    }
  ],
  "english": [
    {
      "id": "eng_001",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐶 강아지",
      "choices": [
        "cat",
        "fox",
        "dog",
        "pig"
      ],
      "answer": "dog",
      "hint": "첫소리 알파벳 'D (d)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 강아지",
      "ttsEn": "dog"
    },
    {
      "id": "eng_002",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐱 고양이",
      "choices": [
        "bat",
        "cat",
        "dog",
        "cow"
      ],
      "answer": "cat",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 고양이",
      "ttsEn": "cat"
    },
    {
      "id": "eng_003",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐰 토끼",
      "choices": [
        "panda",
        "rabbit",
        "tiger",
        "monkey"
      ],
      "answer": "rabbit",
      "hint": "첫소리 알파벳 'R (r)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 토끼",
      "ttsEn": "rabbit"
    },
    {
      "id": "eng_004",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐻 곰",
      "choices": [
        "bird",
        "deer",
        "bee",
        "bear"
      ],
      "answer": "bear",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 곰",
      "ttsEn": "bear"
    },
    {
      "id": "eng_005",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦁 사자",
      "choices": [
        "zebra",
        "horse",
        "sheep",
        "lion"
      ],
      "answer": "lion",
      "hint": "첫소리 알파벳 'L (l)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 사자",
      "ttsEn": "lion"
    },
    {
      "id": "eng_006",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐯 호랑이",
      "choices": [
        "lion",
        "mouse",
        "tiger",
        "rabbit"
      ],
      "answer": "tiger",
      "hint": "첫소리 알파벳 'T (t)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 호랑이",
      "ttsEn": "tiger"
    },
    {
      "id": "eng_007",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐘 코끼리",
      "choices": [
        "penguin",
        "dolphin",
        "giraffe",
        "elephant"
      ],
      "answer": "elephant",
      "hint": "첫소리 알파벳 'E (e)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 코끼리",
      "ttsEn": "elephant"
    },
    {
      "id": "eng_008",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐵 원숭이",
      "choices": [
        "koala",
        "donkey",
        "panda",
        "monkey"
      ],
      "answer": "monkey",
      "hint": "첫소리 알파벳 'M (m)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 원숭이",
      "ttsEn": "monkey"
    },
    {
      "id": "eng_009",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐷 돼지",
      "choices": [
        "cow",
        "hen",
        "dog",
        "pig"
      ],
      "answer": "pig",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 돼지",
      "ttsEn": "pig"
    },
    {
      "id": "eng_010",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐮 소",
      "choices": [
        "ant",
        "fox",
        "cow",
        "pig"
      ],
      "answer": "cow",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 소",
      "ttsEn": "cow"
    },
    {
      "id": "eng_011",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐴 말",
      "choices": [
        "mouse",
        "house",
        "horse",
        "sheep"
      ],
      "answer": "horse",
      "hint": "첫소리 알파벳 'H (h)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 말",
      "ttsEn": "horse"
    },
    {
      "id": "eng_012",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐑 양",
      "choices": [
        "sheep",
        "snake",
        "snail",
        "shark"
      ],
      "answer": "sheep",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 양",
      "ttsEn": "sheep"
    },
    {
      "id": "eng_013",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐔 닭",
      "choices": [
        "frog",
        "chicken",
        "fish",
        "duck"
      ],
      "answer": "chicken",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 닭",
      "ttsEn": "chicken"
    },
    {
      "id": "eng_014",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦆 오리",
      "choices": [
        "dog",
        "duck",
        "dove",
        "deer"
      ],
      "answer": "duck",
      "hint": "첫소리 알파벳 'D (d)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 오리",
      "ttsEn": "duck"
    },
    {
      "id": "eng_015",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐸 개구리",
      "choices": [
        "frog",
        "fish",
        "crab",
        "fox"
      ],
      "answer": "frog",
      "hint": "첫소리 알파벳 'F (f)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 개구리",
      "ttsEn": "frog"
    },
    {
      "id": "eng_016",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐢 거북이",
      "choices": [
        "spider",
        "tiger",
        "rabbit",
        "turtle"
      ],
      "answer": "turtle",
      "hint": "첫소리 알파벳 'T (t)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 거북이",
      "ttsEn": "turtle"
    },
    {
      "id": "eng_017",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐍 뱀",
      "choices": [
        "shark",
        "whale",
        "snake",
        "zebra"
      ],
      "answer": "snake",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 뱀",
      "ttsEn": "snake"
    },
    {
      "id": "eng_018",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐟 물고기",
      "choices": [
        "bear",
        "fish",
        "frog",
        "bird"
      ],
      "answer": "fish",
      "hint": "첫소리 알파벳 'F (f)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 물고기",
      "ttsEn": "fish"
    },
    {
      "id": "eng_019",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐳 고래",
      "choices": [
        "whale",
        "horse",
        "camel",
        "shark"
      ],
      "answer": "whale",
      "hint": "첫소리 알파벳 'W (w)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 고래",
      "ttsEn": "whale"
    },
    {
      "id": "eng_020",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐬 돌고래",
      "choices": [
        "elephant",
        "dolphin",
        "penguin",
        "octopus"
      ],
      "answer": "dolphin",
      "hint": "첫소리 알파벳 'D (d)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 돌고래",
      "ttsEn": "dolphin"
    },
    {
      "id": "eng_021",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦈 상어",
      "choices": [
        "snake",
        "shrimp",
        "shark",
        "sheep"
      ],
      "answer": "shark",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 상어",
      "ttsEn": "shark"
    },
    {
      "id": "eng_022",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐙 문어",
      "choices": [
        "penguin",
        "jellyfish",
        "octopus",
        "ostrich"
      ],
      "answer": "octopus",
      "hint": "첫소리 알파벳 'O (o)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 문어",
      "ttsEn": "octopus"
    },
    {
      "id": "eng_023",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦋 나비",
      "choices": [
        "butterfly",
        "dragonfly",
        "ladybug",
        "spider"
      ],
      "answer": "butterfly",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 나비",
      "ttsEn": "butterfly"
    },
    {
      "id": "eng_024",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐝 꿀벌",
      "choices": [
        "bug",
        "bee",
        "ant",
        "bat"
      ],
      "answer": "bee",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 꿀벌",
      "ttsEn": "bee"
    },
    {
      "id": "eng_025",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐧 펭귄",
      "choices": [
        "parrot",
        "penguin",
        "dolphin",
        "pelican"
      ],
      "answer": "penguin",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 펭귄",
      "ttsEn": "penguin"
    },
    {
      "id": "eng_026",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦊 여우",
      "choices": [
        "wolf",
        "box",
        "fox",
        "cow"
      ],
      "answer": "fox",
      "hint": "첫소리 알파벳 'F (f)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 여우",
      "ttsEn": "fox"
    },
    {
      "id": "eng_027",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐼 판다",
      "choices": [
        "zebra",
        "camel",
        "koala",
        "panda"
      ],
      "answer": "panda",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 판다",
      "ttsEn": "panda"
    },
    {
      "id": "eng_028",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦒 기린",
      "choices": [
        "gorilla",
        "giraffe",
        "elephant",
        "hippo"
      ],
      "answer": "giraffe",
      "hint": "첫소리 알파벳 'G (g)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 기린",
      "ttsEn": "giraffe"
    },
    {
      "id": "eng_029",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🦓 얼룩말",
      "choices": [
        "horse",
        "panda",
        "tiger",
        "zebra"
      ],
      "answer": "zebra",
      "hint": "첫소리 알파벳 'Z (z)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 얼룩말",
      "ttsEn": "zebra"
    },
    {
      "id": "eng_030",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🐜 개미",
      "choices": [
        "bee",
        "owl",
        "cat",
        "ant"
      ],
      "answer": "ant",
      "hint": "첫소리 알파벳 'A (a)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 개미",
      "ttsEn": "ant"
    },
    {
      "id": "eng_031",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍎 사과",
      "choices": [
        "peach",
        "apple",
        "grape",
        "melon"
      ],
      "answer": "apple",
      "hint": "첫소리 알파벳 'A (a)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 사과",
      "ttsEn": "apple"
    },
    {
      "id": "eng_032",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍌 바나나",
      "choices": [
        "banana",
        "orange",
        "tomato",
        "potato"
      ],
      "answer": "banana",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 바나나",
      "ttsEn": "banana"
    },
    {
      "id": "eng_033",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍇 포도",
      "choices": [
        "lemon",
        "mango",
        "grape",
        "apple"
      ],
      "answer": "grape",
      "hint": "첫소리 알파벳 'G (g)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 포도",
      "ttsEn": "grape"
    },
    {
      "id": "eng_034",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍓 딸기",
      "choices": [
        "watermelon",
        "pineapple",
        "blueberry",
        "strawberry"
      ],
      "answer": "strawberry",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 딸기",
      "ttsEn": "strawberry"
    },
    {
      "id": "eng_035",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍉 수박",
      "choices": [
        "pumpkin",
        "cucumber",
        "watermelon",
        "strawberry"
      ],
      "answer": "watermelon",
      "hint": "첫소리 알파벳 'W (w)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 수박",
      "ttsEn": "watermelon"
    },
    {
      "id": "eng_036",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍑 복숭아",
      "choices": [
        "pear",
        "peach",
        "plum",
        "grape"
      ],
      "answer": "peach",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 복숭아",
      "ttsEn": "peach"
    },
    {
      "id": "eng_037",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍊 오렌지",
      "choices": [
        "orange",
        "cherry",
        "carrot",
        "banana"
      ],
      "answer": "orange",
      "hint": "첫소리 알파벳 'O (o)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 오렌지",
      "ttsEn": "orange"
    },
    {
      "id": "eng_038",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍋 레몬",
      "choices": [
        "melon",
        "onion",
        "lemon",
        "apple"
      ],
      "answer": "lemon",
      "hint": "첫소리 알파벳 'L (l)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 레몬",
      "ttsEn": "lemon"
    },
    {
      "id": "eng_039",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍒 체리",
      "choices": [
        "cherry",
        "cheese",
        "chicken",
        "berry"
      ],
      "answer": "cherry",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 체리",
      "ttsEn": "cherry"
    },
    {
      "id": "eng_040",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍞 빵",
      "choices": [
        "butter",
        "salad",
        "bread",
        "noodle"
      ],
      "answer": "bread",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 빵",
      "ttsEn": "bread"
    },
    {
      "id": "eng_041",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🥛 우유",
      "choices": [
        "water",
        "juice",
        "milk",
        "soup"
      ],
      "answer": "milk",
      "hint": "첫소리 알파벳 'M (m)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 우유",
      "ttsEn": "milk"
    },
    {
      "id": "eng_042",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🥚 달걀",
      "choices": [
        "pie",
        "egg",
        "jam",
        "ham"
      ],
      "answer": "egg",
      "hint": "첫소리 알파벳 'E (e)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 달걀",
      "ttsEn": "egg"
    },
    {
      "id": "eng_043",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🧀 치즈",
      "choices": [
        "cheese",
        "cherry",
        "cookie",
        "butter"
      ],
      "answer": "cheese",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 치즈",
      "ttsEn": "cheese"
    },
    {
      "id": "eng_044",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍰 케이크",
      "choices": [
        "candy",
        "cake",
        "bread",
        "pizza"
      ],
      "answer": "cake",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 케이크",
      "ttsEn": "cake"
    },
    {
      "id": "eng_045",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍕 피자",
      "choices": [
        "salad",
        "steak",
        "pizza",
        "pasta"
      ],
      "answer": "pizza",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 피자",
      "ttsEn": "pizza"
    },
    {
      "id": "eng_046",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n💧 물",
      "choices": [
        "sugar",
        "milk",
        "water",
        "honey"
      ],
      "answer": "water",
      "hint": "첫소리 알파벳 'W (w)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 물",
      "ttsEn": "water"
    },
    {
      "id": "eng_047",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍦 아이스크림",
      "choices": [
        "popcorn",
        "ice cream",
        "pancake",
        "hot dog"
      ],
      "answer": "ice cream",
      "hint": "첫소리 알파벳 'I (i)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 아이스크림",
      "ttsEn": "ice cream"
    },
    {
      "id": "eng_048",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍪 쿠키",
      "choices": [
        "cookie",
        "candy",
        "muffin",
        "donut"
      ],
      "answer": "cookie",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 쿠키",
      "ttsEn": "cookie"
    },
    {
      "id": "eng_049",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🥕 당근",
      "choices": [
        "potato",
        "pepper",
        "onion",
        "carrot"
      ],
      "answer": "carrot",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 당근",
      "ttsEn": "carrot"
    },
    {
      "id": "eng_050",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌽 옥수수",
      "choices": [
        "bean",
        "soup",
        "corn",
        "rice"
      ],
      "answer": "corn",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 옥수수",
      "ttsEn": "corn"
    },
    {
      "id": "eng_051",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍅 토마토",
      "choices": [
        "banana",
        "orange",
        "potato",
        "tomato"
      ],
      "answer": "tomato",
      "hint": "첫소리 알파벳 'T (t)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 토마토",
      "ttsEn": "tomato"
    },
    {
      "id": "eng_052",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🍬 사탕",
      "choices": [
        "candy",
        "cake",
        "cookie",
        "jelly"
      ],
      "answer": "candy",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 사탕",
      "ttsEn": "candy"
    },
    {
      "id": "eng_053",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n☀️ 해(태양)",
      "choices": [
        "moon",
        "sky",
        "star",
        "sun"
      ],
      "answer": "sun",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 해태양",
      "ttsEn": "sun"
    },
    {
      "id": "eng_054",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌙 달",
      "choices": [
        "sun",
        "wind",
        "cloud",
        "moon"
      ],
      "answer": "moon",
      "hint": "첫소리 알파벳 'M (m)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 달",
      "ttsEn": "moon"
    },
    {
      "id": "eng_055",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n⭐ 별",
      "choices": [
        "rain",
        "tree",
        "snow",
        "star"
      ],
      "answer": "star",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 별",
      "ttsEn": "star"
    },
    {
      "id": "eng_056",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n☁️ 구름",
      "choices": [
        "wind",
        "cloud",
        "stone",
        "river"
      ],
      "answer": "cloud",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 구름",
      "ttsEn": "cloud"
    },
    {
      "id": "eng_057",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌧️ 비",
      "choices": [
        "snow",
        "wind",
        "fire",
        "rain"
      ],
      "answer": "rain",
      "hint": "첫소리 알파벳 'R (r)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 비",
      "ttsEn": "rain"
    },
    {
      "id": "eng_058",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n❄️ 눈(송이)",
      "choices": [
        "snow",
        "sand",
        "star",
        "rain"
      ],
      "answer": "snow",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 눈송이",
      "ttsEn": "snow"
    },
    {
      "id": "eng_059",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌈 무지개",
      "choices": [
        "mountain",
        "rainbow",
        "thunder",
        "sunshine"
      ],
      "answer": "rainbow",
      "hint": "첫소리 알파벳 'R (r)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 무지개",
      "ttsEn": "rainbow"
    },
    {
      "id": "eng_060",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌳 나무",
      "choices": [
        "leaf",
        "tree",
        "grass",
        "flower"
      ],
      "answer": "tree",
      "hint": "첫소리 알파벳 'T (t)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 나무",
      "ttsEn": "tree"
    },
    {
      "id": "eng_061",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌸 꽃",
      "choices": [
        "forest",
        "garden",
        "branch",
        "flower"
      ],
      "answer": "flower",
      "hint": "첫소리 알파벳 'F (f)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 꽃",
      "ttsEn": "flower"
    },
    {
      "id": "eng_062",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🔥 불",
      "choices": [
        "water",
        "fire",
        "earth",
        "wind"
      ],
      "answer": "fire",
      "hint": "첫소리 알파벳 'F (f)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 불",
      "ttsEn": "fire"
    },
    {
      "id": "eng_063",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🌊 바다",
      "choices": [
        "sea",
        "hill",
        "sky",
        "lake"
      ],
      "answer": "sea",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 바다",
      "ttsEn": "sea"
    },
    {
      "id": "eng_064",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n⛰️ 산",
      "choices": [
        "island",
        "forest",
        "mountain",
        "desert"
      ],
      "answer": "mountain",
      "hint": "첫소리 알파벳 'M (m)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 산",
      "ttsEn": "mountain"
    },
    {
      "id": "eng_065",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚗 자동차",
      "choices": [
        "bus",
        "cab",
        "van",
        "car"
      ],
      "answer": "car",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 자동차",
      "ttsEn": "car"
    },
    {
      "id": "eng_066",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚌 버스",
      "choices": [
        "bus",
        "bike",
        "ship",
        "car"
      ],
      "answer": "bus",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 버스",
      "ttsEn": "bus"
    },
    {
      "id": "eng_067",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚂 기차",
      "choices": [
        "plane",
        "truck",
        "train",
        "boat"
      ],
      "answer": "train",
      "hint": "첫소리 알파벳 'T (t)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 기차",
      "ttsEn": "train"
    },
    {
      "id": "eng_068",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n✈️ 비행기",
      "choices": [
        "airplane",
        "rocket",
        "bicycle",
        "subway"
      ],
      "answer": "airplane",
      "hint": "첫소리 알파벳 'A (a)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 비행기",
      "ttsEn": "airplane"
    },
    {
      "id": "eng_069",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚢 배",
      "choices": [
        "shop",
        "train",
        "ship",
        "shoe"
      ],
      "answer": "ship",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 배",
      "ttsEn": "ship"
    },
    {
      "id": "eng_070",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚲 자전거",
      "choices": [
        "bicycle",
        "scooter",
        "tractor",
        "airplane"
      ],
      "answer": "bicycle",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 자전거",
      "ttsEn": "bicycle"
    },
    {
      "id": "eng_071",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🚀 로켓",
      "choices": [
        "rocket",
        "planet",
        "helmet",
        "robot"
      ],
      "answer": "rocket",
      "hint": "첫소리 알파벳 'R (r)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 로켓",
      "ttsEn": "rocket"
    },
    {
      "id": "eng_072",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🏠 집",
      "choices": [
        "store",
        "park",
        "school",
        "house"
      ],
      "answer": "house",
      "hint": "첫소리 알파벳 'H (h)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 집",
      "ttsEn": "house"
    },
    {
      "id": "eng_073",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🏫 학교",
      "choices": [
        "school",
        "garden",
        "market",
        "church"
      ],
      "answer": "school",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 학교",
      "ttsEn": "school"
    },
    {
      "id": "eng_074",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n📖 책",
      "choices": [
        "card",
        "book",
        "note",
        "desk"
      ],
      "answer": "book",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 책",
      "ttsEn": "book"
    },
    {
      "id": "eng_075",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n✏️ 연필",
      "choices": [
        "pencil",
        "crayon",
        "ruler",
        "eraser"
      ],
      "answer": "pencil",
      "hint": "첫소리 알파벳 'P (p)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 연필",
      "ttsEn": "pencil"
    },
    {
      "id": "eng_076",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🎒 가방",
      "choices": [
        "cap",
        "box",
        "bag",
        "cup"
      ],
      "answer": "bag",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 가방",
      "ttsEn": "bag"
    },
    {
      "id": "eng_077",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n⏰ 시계",
      "choices": [
        "chair",
        "table",
        "phone",
        "clock"
      ],
      "answer": "clock",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 시계",
      "ttsEn": "clock"
    },
    {
      "id": "eng_078",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n⚽ 공",
      "choices": [
        "ball",
        "bell",
        "doll",
        "wall"
      ],
      "answer": "ball",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 공",
      "ttsEn": "ball"
    },
    {
      "id": "eng_079",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👑 왕관",
      "choices": [
        "crown",
        "cloud",
        "glove",
        "clown"
      ],
      "answer": "crown",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 왕관",
      "ttsEn": "crown"
    },
    {
      "id": "eng_080",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🎩 모자",
      "choices": [
        "coat",
        "belt",
        "hat",
        "sock"
      ],
      "answer": "hat",
      "hint": "첫소리 알파벳 'H (h)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 모자",
      "ttsEn": "hat"
    },
    {
      "id": "eng_081",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👟 신발",
      "choices": [
        "skirt",
        "shoes",
        "shirt",
        "pants"
      ],
      "answer": "shoes",
      "hint": "첫소리 알파벳 'S (s)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 신발",
      "ttsEn": "shoes"
    },
    {
      "id": "eng_082",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 8,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n☂️ 우산",
      "choices": [
        "backpack",
        "calendar",
        "computer",
        "umbrella"
      ],
      "answer": "umbrella",
      "hint": "첫소리 알파벳 'U (u)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 우산",
      "ttsEn": "umbrella"
    },
    {
      "id": "eng_083",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🔑 열쇠",
      "choices": [
        "ring",
        "key",
        "coin",
        "lock"
      ],
      "answer": "key",
      "hint": "첫소리 알파벳 'K (k)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 열쇠",
      "ttsEn": "key"
    },
    {
      "id": "eng_084",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🛏️ 침대",
      "choices": [
        "door",
        "desk",
        "bed",
        "lamp"
      ],
      "answer": "bed",
      "hint": "첫소리 알파벳 'B (b)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 침대",
      "ttsEn": "bed"
    },
    {
      "id": "eng_085",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n🪑 의자",
      "choices": [
        "chair",
        "floor",
        "table",
        "shelf"
      ],
      "answer": "chair",
      "hint": "첫소리 알파벳 'C (c)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 의자",
      "ttsEn": "chair"
    },
    {
      "id": "eng_086",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👀 눈(신체)",
      "choices": [
        "leg",
        "ear",
        "eye",
        "arm"
      ],
      "answer": "eye",
      "hint": "첫소리 알파벳 'E (e)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 눈신체",
      "ttsEn": "eye"
    },
    {
      "id": "eng_087",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👃 코",
      "choices": [
        "hand",
        "knee",
        "neck",
        "nose"
      ],
      "answer": "nose",
      "hint": "첫소리 알파벳 'N (n)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 코",
      "ttsEn": "nose"
    },
    {
      "id": "eng_088",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👄 입",
      "choices": [
        "thumb",
        "mouth",
        "cheek",
        "tooth"
      ],
      "answer": "mouth",
      "hint": "첫소리 알파벳 'M (m)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 입",
      "ttsEn": "mouth"
    },
    {
      "id": "eng_089",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n👂 귀",
      "choices": [
        "toe",
        "eye",
        "ear",
        "lip"
      ],
      "answer": "ear",
      "hint": "첫소리 알파벳 'E (e)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 귀",
      "ttsEn": "ear"
    },
    {
      "id": "eng_090",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "question": "그림에 알맞은 영어 단어는 무엇일까요?\n✋ 손",
      "choices": [
        "hair",
        "hand",
        "foot",
        "head"
      ],
      "answer": "hand",
      "hint": "첫소리 알파벳 'H (h)' 소리로 시작하는 영어 낱말을 찾아보세요!",
      "ttsKo": "그림에 알맞은 영어 단어는 무엇일까요? 손",
      "ttsEn": "hand"
    },
    {
      "id": "eng_f01",
      "subject": "english",
      "category": "english",
      "unit": "e1",
      "tier": 1,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'A'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "a",
        "b",
        "c",
        "d"
      ],
      "answer": "a",
      "hint": "대문자 A의 짝꿍 소문자는 동그란 모양에 꼬리가 달린 'a'예요!",
      "ttsKo": "대문자 'A'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "Apple"
    },
    {
      "id": "eng_f02",
      "subject": "english",
      "category": "english",
      "unit": "e1",
      "tier": 1,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'B'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "b",
        "d",
        "p",
        "a"
      ],
      "answer": "b",
      "hint": "기둥 오른쪽에 배가 볼록 나온 'b'가 B의 소문자예요!",
      "ttsKo": "대문자 'B'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "Bear"
    },
    {
      "id": "eng_f03",
      "subject": "english",
      "category": "english",
      "unit": "e1",
      "tier": 1,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'apple(사과)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "A",
        "B",
        "C",
        "D"
      ],
      "answer": "A",
      "hint": "'애플(apple)'은 [애] 소리가 나는 알파벳 A로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "apple"
    },
    {
      "id": "eng_f04",
      "subject": "english",
      "category": "english",
      "unit": "e1",
      "tier": 2,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'cat(고양이)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "C",
        "A",
        "B",
        "D"
      ],
      "answer": "C",
      "hint": "'캣(cat)'은 [크] 소리가 나는 알파벳 C로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "cat"
    },
    {
      "id": "eng_f05",
      "subject": "english",
      "category": "english",
      "unit": "e2",
      "tier": 2,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "알파벳 순서대로 빈칸에 들어갈 글자는?\nE → F → ( ? ) → H",
      "choices": [
        "G",
        "D",
        "I",
        "J"
      ],
      "answer": "G",
      "hint": "E, F 다음에는 G가 오고 그다음이 H예요!",
      "ttsKo": "알파벳 순서대로 빈칸에 들어갈 글자는?\nE → F → ( ? ) → H",
      "ttsEn": "E, F, G, H"
    },
    {
      "id": "eng_f06",
      "subject": "english",
      "category": "english",
      "unit": "e2",
      "tier": 2,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'E'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "e",
        "f",
        "g",
        "c"
      ],
      "answer": "e",
      "hint": "대문자 E의 소문자는 'e'예요!",
      "ttsKo": "대문자 'E'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "egg"
    },
    {
      "id": "eng_f07",
      "subject": "english",
      "category": "english",
      "unit": "e2",
      "tier": 2,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'fish(물고기)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "F",
        "E",
        "G",
        "H"
      ],
      "answer": "F",
      "hint": "'피시(fish)'는 윗니로 아랫입술을 살짝 스치는 F로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "fish"
    },
    {
      "id": "eng_f08",
      "subject": "english",
      "category": "english",
      "unit": "e2",
      "tier": 3,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "choice",
      "question": "🎩 모자 그림의 영어 단어 'hat'은 어떤 알파벳으로 시작할까요?",
      "choices": [
        "h",
        "e",
        "f",
        "g"
      ],
      "answer": "h",
      "hint": "[흐] 소리가 나는 알파벳 'h'로 시작해요!",
      "ttsKo": "🎩 모자 그림의 영어 단어 'hat'은 어떤 알파벳으로 시작할까요?",
      "ttsEn": "hat"
    },
    {
      "id": "eng_f09",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'I'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "i",
        "j",
        "l",
        "k"
      ],
      "answer": "i",
      "hint": "위에 작은 점이 콕 찍힌 'i'가 I의 소문자예요!",
      "ttsKo": "대문자 'I'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "igloo"
    },
    {
      "id": "eng_f10",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "알파벳 순서대로 빈칸에 들어갈 글자는?\nI → J → K → ( ? )",
      "choices": [
        "L",
        "M",
        "H",
        "N"
      ],
      "answer": "L",
      "hint": "I, J, K 다음에는 L이 와요!",
      "ttsKo": "알파벳 순서대로 빈칸에 들어갈 글자는?\nI → J → K → ( ? )",
      "ttsEn": "I, J, K, L"
    },
    {
      "id": "eng_f11",
      "subject": "english",
      "category": "english",
      "unit": "e3",
      "tier": 3,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'lion(사자)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "L",
        "I",
        "J",
        "K"
      ],
      "answer": "L",
      "hint": "'라이언(lion)'은 혀끝을 윗잇몸에 대는 [르] 소리 L로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "lion"
    },
    {
      "id": "eng_f12",
      "subject": "english",
      "category": "english",
      "unit": "e4",
      "tier": 4,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'M'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "m",
        "n",
        "w",
        "u"
      ],
      "answer": "m",
      "hint": "산봉우리가 두 개 있는 'm'이 M의 소문자예요!",
      "ttsKo": "대문자 'M'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "milk"
    },
    {
      "id": "eng_f13",
      "subject": "english",
      "category": "english",
      "unit": "e4",
      "tier": 4,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'monkey(원숭이)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "M",
        "N",
        "O",
        "P"
      ],
      "answer": "M",
      "hint": "입술을 다물었다 떼며 내는 [음] 소리 M으로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "monkey"
    },
    {
      "id": "eng_f14",
      "subject": "english",
      "category": "english",
      "unit": "e4",
      "tier": 4,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "choice",
      "question": "🐷 돼지 그림의 영어 단어 'pig'는 어떤 알파벳으로 시작할까요?",
      "choices": [
        "p",
        "m",
        "n",
        "o"
      ],
      "answer": "p",
      "hint": "[프] 소리가 나는 알파벳 'p'로 시작해요!",
      "ttsKo": "🐷 돼지 그림의 영어 단어 'pig'는 어떤 알파벳으로 시작할까요?",
      "ttsEn": "pig"
    },
    {
      "id": "eng_f15",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "대문자 'Q'의 짝꿍 소문자는 무엇일까요?",
      "choices": [
        "q",
        "p",
        "b",
        "d"
      ],
      "answer": "q",
      "hint": "동그라미 오른쪽 기둥이 아래로 내려가는 'q'가 Q의 소문자예요!",
      "ttsKo": "대문자 'Q'의 짝꿍 소문자는 무엇일까요?",
      "ttsEn": "queen"
    },
    {
      "id": "eng_f16",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "알파벳 순서대로 빈칸에 들어갈 글자는?\nQ → R → ( ? ) → T → U",
      "choices": [
        "S",
        "P",
        "V",
        "W"
      ],
      "answer": "S",
      "hint": "Q, R 다음에는 구불구불 뱀 모양의 S가 와요!",
      "ttsKo": "알파벳 순서대로 빈칸에 들어갈 글자는?\nQ → R → ( ? ) → T → U",
      "ttsEn": "Q, R, S, T, U"
    },
    {
      "id": "eng_f17",
      "subject": "english",
      "category": "english",
      "unit": "e5",
      "tier": 5,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 발음을 듣고 'sun(태양)'의 첫소리 알파벳을 골라 보세요!",
      "choices": [
        "S",
        "R",
        "T",
        "U"
      ],
      "answer": "S",
      "hint": "'선(sun)'은 [스] 소리가 나는 S로 시작해요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "sun"
    },
    {
      "id": "eng_f18",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "알파벳",
      "pokeType": "비행",
      "format": "choice",
      "question": "알파벳 26글자의 맨 마지막 글자는 무엇일까요?\nV → W → X → Y → ( ? )",
      "choices": [
        "Z",
        "A",
        "U",
        "S"
      ],
      "answer": "Z",
      "hint": "알파벳 노래의 맨 마지막 글자는 Z(지/제트)예요!",
      "ttsKo": "알파벳 26글자의 맨 마지막 글자는 무엇일까요?\nV → W → X → Y → ( ? )",
      "ttsEn": "V, W, X, Y, Z"
    },
    {
      "id": "eng_f19",
      "subject": "english",
      "category": "english",
      "unit": "e6",
      "tier": 6,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "choice",
      "question": "🦓 얼룩말 그림의 영어 단어 'zebra'는 어떤 알파벳으로 시작할까요?",
      "choices": [
        "z",
        "v",
        "w",
        "y"
      ],
      "answer": "z",
      "hint": "윙윙거리는 [즈] 소리의 알파벳 'z'로 시작해요!",
      "ttsKo": "🦓 얼룩말 그림의 영어 단어 'zebra'는 어떤 알파벳으로 시작할까요?",
      "ttsEn": "zebra"
    },
    {
      "id": "eng_f20",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 6,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "친구를 처음 만났을 때 반갑게 인사하는 영어 표현은?",
      "choices": [
        "Hello!",
        "Goodbye!",
        "Sorry!",
        "Sleep!"
      ],
      "answer": "Hello!",
      "hint": "만났을 때는 손을 흔들며 'Hello!' 또는 'Hi!'라고 인사해요!",
      "ttsKo": "친구를 처음 만났을 때 반갑게 인사하는 영어 표현은?",
      "ttsEn": "Hello!"
    },
    {
      "id": "eng_f21",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 6,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "친구와 헤어질 때 '안녕히 가!'라고 인사하는 영어 표현은?",
      "choices": [
        "Goodbye!",
        "Hello!",
        "Thank you!",
        "Good morning!"
      ],
      "answer": "Goodbye!",
      "hint": "헤어질 때는 'Goodbye!' 또는 'Bye!'라고 인사해요!",
      "ttsKo": "친구와 헤어질 때 '안녕히 가!'라고 인사하는 영어 표현은?",
      "ttsEn": "Goodbye!"
    },
    {
      "id": "eng_f22",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 7,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "선물을 받았을 때 '고마워요!'라고 말하는 영어 표현은?",
      "choices": [
        "Thank you!",
        "I am sorry.",
        "Goodbye!",
        "Wake up!"
      ],
      "answer": "Thank you!",
      "hint": "고마운 마음을 전할 때는 'Thank you!'라고 말해요!",
      "ttsKo": "선물을 받았을 때 '고마워요!'라고 말하는 영어 표현은?",
      "ttsEn": "Thank you!"
    },
    {
      "id": "eng_f23",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 7,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "아침에 일어나 반갑게 건네는 영어 아침 인사는?",
      "choices": [
        "Good morning!",
        "Good night!",
        "Goodbye!",
        "I'm hungry."
      ],
      "answer": "Good morning!",
      "hint": "아침(morning)에는 'Good morning!'이라고 인사해요!",
      "ttsKo": "아침에 일어나 반갑게 건네는 영어 아침 인사는?",
      "ttsEn": "Good morning!"
    },
    {
      "id": "eng_f24",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 7,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "내 이름을 소개할 때 '내 이름은 민수야'에 알맞은 영어 표현은?",
      "choices": [
        "My name is Minsu.",
        "Goodbye, Minsu.",
        "Thank you, Minsu.",
        "Open the door."
      ],
      "answer": "My name is Minsu.",
      "hint": "'My name is ~'를 쓰면 내 이름을 멋지게 소개할 수 있어요!",
      "ttsKo": "내 이름을 소개할 때 '내 이름은 민수야'에 알맞은 영어 표현은?",
      "ttsEn": "My name is Minsu."
    },
    {
      "id": "eng_f25",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 4,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "🟥 빨간색을 영어로 무엇이라고 할까요?",
      "choices": [
        "red",
        "blue",
        "green",
        "yellow"
      ],
      "answer": "red",
      "hint": "사과와 소방차의 빨간색은 영어로 'red'예요!",
      "ttsKo": "🟥 빨간색을 영어로 무엇이라고 할까요?",
      "ttsEn": "red"
    },
    {
      "id": "eng_f26",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 4,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "🟦 파란색을 영어로 무엇이라고 할까요?",
      "choices": [
        "blue",
        "red",
        "black",
        "pink"
      ],
      "answer": "blue",
      "hint": "맑은 하늘과 바다의 파란색은 영어로 'blue'예요!",
      "ttsKo": "🟦 파란색을 영어로 무엇이라고 할까요?",
      "ttsEn": "blue"
    },
    {
      "id": "eng_f27",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "🟨 노란색을 영어로 무엇이라고 할까요?",
      "choices": [
        "yellow",
        "green",
        "white",
        "orange"
      ],
      "answer": "yellow",
      "hint": "바나나와 병아리의 노란색은 영어로 'yellow'예요!",
      "ttsKo": "🟨 노란색을 영어로 무엇이라고 할까요?",
      "ttsEn": "yellow"
    },
    {
      "id": "eng_f28",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "🟩 초록색을 영어로 무엇이라고 할까요?",
      "choices": [
        "green",
        "blue",
        "red",
        "brown"
      ],
      "answer": "green",
      "hint": "나뭇잎의 초록색은 영어로 'green'이에요!",
      "ttsKo": "🟩 초록색을 영어로 무엇이라고 할까요?",
      "ttsEn": "green"
    },
    {
      "id": "eng_f29",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "숫자 '1(하나)'을 영어로 무엇이라고 할까요?",
      "choices": [
        "one",
        "two",
        "three",
        "four"
      ],
      "answer": "one",
      "hint": "원, 투, 쓰리 할 때 1은 'one'이에요!",
      "ttsKo": "숫자 '1(하나)'을 영어로 무엇이라고 할까요?",
      "ttsEn": "one"
    },
    {
      "id": "eng_f30",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 3,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "숫자 '2(둘)'를 영어로 무엇이라고 할까요?",
      "choices": [
        "two",
        "one",
        "three",
        "five"
      ],
      "answer": "two",
      "hint": "원(one) 다음 숫자 2는 'two'예요!",
      "ttsKo": "숫자 '2(둘)'를 영어로 무엇이라고 할까요?",
      "ttsEn": "two"
    },
    {
      "id": "eng_f31",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 4,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "숫자 '3(셋)'을 영어로 무엇이라고 할까요?",
      "choices": [
        "three",
        "two",
        "four",
        "six"
      ],
      "answer": "three",
      "hint": "원, 투 다음 숫자 3은 'three'예요!",
      "ttsKo": "숫자 '3(셋)'을 영어로 무엇이라고 할까요?",
      "ttsEn": "three"
    },
    {
      "id": "eng_f32",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 5,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "손가락 다섯 개! 숫자 '5'를 영어로 무엇이라고 할까요?",
      "choices": [
        "five",
        "four",
        "six",
        "seven"
      ],
      "answer": "five",
      "hint": "하이파이브(High five) 할 때의 5가 바로 'five'예요!",
      "ttsKo": "손가락 다섯 개! 숫자 '5'를 영어로 무엇이라고 할까요?",
      "ttsEn": "five"
    },
    {
      "id": "eng_f33",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 6,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "무지개 일곱 빛깔! 숫자 '7'을 영어로 무엇이라고 할까요?",
      "choices": [
        "seven",
        "six",
        "eight",
        "nine"
      ],
      "answer": "seven",
      "hint": "식스(six) 다음 숫자 7은 'seven'이에요!",
      "ttsKo": "무지개 일곱 빛깔! 숫자 '7'을 영어로 무엇이라고 할까요?",
      "ttsEn": "seven"
    },
    {
      "id": "eng_f34",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "영어 낱말",
      "pokeType": "독",
      "format": "choice",
      "question": "양손 손가락을 모두 폈어요! 숫자 '10'을 영어로 무엇이라고 할까요?",
      "choices": [
        "ten",
        "eight",
        "nine",
        "two"
      ],
      "answer": "ten",
      "hint": "에잇(8), 나인(9), 텐(10)! 10은 'ten'이에요!",
      "ttsKo": "양손 손가락을 모두 폈어요! 숫자 '10'을 영어로 무엇이라고 할까요?",
      "ttsEn": "ten"
    },
    {
      "id": "eng_f35",
      "subject": "english",
      "category": "english",
      "unit": "e8",
      "tier": 7,
      "domain": "소리·파닉스",
      "pokeType": "얼음",
      "format": "listen_choice",
      "question": "🔊 영어 발음을 듣고 어떤 숫자인지 골라 보세요!",
      "choices": [
        "8 (eight)",
        "3 (three)",
        "5 (five)",
        "1 (one)"
      ],
      "answer": "8 (eight)",
      "hint": "들려준 발음 '에잇(eight)'은 숫자 8이에요!",
      "ttsKo": "발음을 잘 듣고 정답을 골라 보세요.",
      "ttsEn": "eight"
    },
    {
      "id": "eng_f36",
      "subject": "english",
      "category": "english",
      "unit": "e7",
      "tier": 8,
      "domain": "인사·표현",
      "pokeType": "격투",
      "format": "choice",
      "question": "밤에 잠자리에 들기 전 부모님께 하는 영어 인사말은?",
      "choices": [
        "Good night!",
        "Good morning!",
        "Hello!",
        "See you tomorrow!"
      ],
      "answer": "Good night!",
      "hint": "밤(night)에 잘 자라고 인사할 때는 'Good night!'이라고 해요!",
      "ttsKo": "밤에 잠자리에 들기 전 부모님께 하는 영어 인사말은?",
      "ttsEn": "Good night!"
    }
  ],
  "creative": [
    {
      "id": "cre_001",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "깎으면 깎을수록 점점 더 짧아지는 학용품은 무엇일까요?",
      "choices": [
        "필통",
        "책가방",
        "지우개",
        "연필"
      ],
      "answer": "연필",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '연'(으)로 시작해요.",
      "ttsKo": "깎으면 깎을수록 점점 더 짧아지는 학용품은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_002",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "손가락은 다섯 개인데 뼈도 살도 없는 겨울 물건은?",
      "choices": [
        "귀마개",
        "장갑",
        "목도리",
        "양말"
      ],
      "answer": "장갑",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '장'(으)로 시작해요.",
      "ttsKo": "손가락은 다섯 개인데 뼈도 살도 없는 겨울 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_003",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "내가 웃으면 따라 웃고, 내가 윙크하면 따라 하는 것은?",
      "choices": [
        "달력",
        "거울",
        "시계",
        "베개"
      ],
      "answer": "거울",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '거'(으)로 시작해요.",
      "ttsKo": "내가 웃으면 따라 웃고, 내가 윙크하면 따라 하는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_004",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "하늘에서 내리지 않고 방바닥을 깨끗이 쓸 때 쓰는 '비'는?",
      "choices": [
        "소나기",
        "이슬비",
        "우비",
        "빗자루"
      ],
      "answer": "빗자루",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '빗'(으)로 시작해요.",
      "ttsKo": "하늘에서 내리지 않고 방바닥을 깨끗이 쓸 때 쓰는 '비'는?",
      "ttsEn": ""
    },
    {
      "id": "cre_005",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "먹으면 먹을수록 배는 안 부르고 한 살씩 늘어나는 것은?",
      "choices": [
        "떡국",
        "사과",
        "나이",
        "공기"
      ],
      "answer": "나이",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '나'(으)로 시작해요.",
      "ttsKo": "먹으면 먹을수록 배는 안 부르고 한 살씩 늘어나는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_006",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "앞으로 읽어도, 거꾸로 읽어도 똑같은 이름인 채소·과일은?",
      "choices": [
        "딸기",
        "수박",
        "토마토",
        "오렌지"
      ],
      "answer": "토마토",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '토'(으)로 시작해요.",
      "ttsKo": "앞으로 읽어도, 거꾸로 읽어도 똑같은 이름인 채소·과일은?",
      "ttsEn": ""
    },
    {
      "id": "cre_007",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "더운 곳에 있으면 땀을 흘리며 점점 작아져서 물이 되는 것은?",
      "choices": [
        "얼음",
        "돌멩이",
        "나무",
        "유리컵"
      ],
      "answer": "얼음",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '얼'(으)로 시작해요.",
      "ttsKo": "더운 곳에 있으면 땀을 흘리며 점점 작아져서 물이 되는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_008",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "입으로 불면 점점 배가 빵빵해지고 하늘로 두둥실 뜨는 것은?",
      "choices": [
        "비행기",
        "종이배",
        "축구공",
        "풍선"
      ],
      "answer": "풍선",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '풍'(으)로 시작해요.",
      "ttsKo": "입으로 불면 점점 배가 빵빵해지고 하늘로 두둥실 뜨는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_009",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "몸은 네모나고 연필 글씨가 틀렸을 때 쓱싹 지워 주는 친구는?",
      "choices": [
        "딱풀",
        "크레파스",
        "가위",
        "지우개"
      ],
      "answer": "지우개",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '지'(으)로 시작해요.",
      "ttsKo": "몸은 네모나고 연필 글씨가 틀렸을 때 쓱싹 지워 주는 친구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_010",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "비는 비인데 사람이 입어서 비를 막아 주는 옷은 무엇일까요?",
      "choices": [
        "장화",
        "우산",
        "모자",
        "우비"
      ],
      "answer": "우비",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '우'(으)로 시작해요.",
      "ttsKo": "비는 비인데 사람이 입어서 비를 막아 주는 옷은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_011",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다리도 없는데 하늘을 둥실둥실 떠다니며 비나 눈을 내리는 것은?",
      "choices": [
        "번개",
        "구름",
        "무지개",
        "비행기"
      ],
      "answer": "구름",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '구'(으)로 시작해요.",
      "ttsKo": "다리도 없는데 하늘을 둥실둥실 떠다니며 비나 눈을 내리는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_012",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "밤에만 하늘에 나와서 깜깜한 세상을 환하게 비춰 주는 둥근 것은?",
      "choices": [
        "무지개",
        "그림자",
        "해바라기",
        "달"
      ],
      "answer": "달",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '달'(으)로 시작해요.",
      "ttsKo": "밤에만 하늘에 나와서 깜깜한 세상을 환하게 비춰 주는 둥근 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_013",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "햇빛이 비치면 내 발밑을 졸졸 따라다니는 검은 모양은?",
      "choices": [
        "그림자",
        "구름",
        "무지개",
        "바람"
      ],
      "answer": "그림자",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '그'(으)로 시작해요.",
      "ttsKo": "햇빛이 비치면 내 발밑을 졸졸 따라다니는 검은 모양은?",
      "ttsEn": ""
    },
    {
      "id": "cre_014",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "코가 아주 길어서 코로 물도 마시고 먹이도 집어 먹는 동물은?",
      "choices": [
        "코뿔소",
        "기린",
        "코끼리",
        "하마"
      ],
      "answer": "코끼리",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '코'(으)로 시작해요.",
      "ttsKo": "코가 아주 길어서 코로 물도 마시고 먹이도 집어 먹는 동물은?",
      "ttsEn": ""
    },
    {
      "id": "cre_015",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "목이 아주 길어서 높은 나무 위의 잎사귀도 잘 먹는 동물은?",
      "choices": [
        "기린",
        "얼룩말",
        "캥거루",
        "타조"
      ],
      "answer": "기린",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '기'(으)로 시작해요.",
      "ttsKo": "목이 아주 길어서 높은 나무 위의 잎사귀도 잘 먹는 동물은?",
      "ttsEn": ""
    },
    {
      "id": "cre_016",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "배에 주머니가 있어서 아기를 주머니에 넣고 폴짝폴짝 뛰는 동물은?",
      "choices": [
        "캥거루",
        "사자",
        "펭귄",
        "판다"
      ],
      "answer": "캥거루",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '캥'(으)로 시작해요.",
      "ttsKo": "배에 주머니가 있어서 아기를 주머니에 넣고 폴짝폴짝 뛰는 동물은?",
      "ttsEn": ""
    },
    {
      "id": "cre_017",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "등에 단단한 집을 지고 느릿느릿 걸어 다니는 동물은?",
      "choices": [
        "개구리",
        "메뚜기",
        "지렁이",
        "달팽이"
      ],
      "answer": "달팽이",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '달'(으)로 시작해요.",
      "ttsKo": "등에 단단한 집을 지고 느릿느릿 걸어 다니는 동물은?",
      "ttsEn": ""
    },
    {
      "id": "cre_018",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "물에 젖은 내 몸을 뽀송뽀송하게 닦아 주면서 자기는 젖는 것은?",
      "choices": [
        "세숫대야",
        "수건",
        "비누",
        "칫솔"
      ],
      "answer": "수건",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '수'(으)로 시작해요.",
      "ttsKo": "물에 젖은 내 몸을 뽀송뽀송하게 닦아 주면서 자기는 젖는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_019",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "바늘 두 개나 세 개가 쉬지 않고 빙글빙글 돌며 시간을 알려 주는 것은?",
      "choices": [
        "선풍기",
        "팽이",
        "시계",
        "자동차 바퀴"
      ],
      "answer": "시계",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '시'(으)로 시작해요.",
      "ttsKo": "바늘 두 개나 세 개가 쉬지 않고 빙글빙글 돌며 시간을 알려 주는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_020",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "아침에는 네 발, 낮에는 두 발, 밤에는 세 발로 걷는다는 수수께끼의 주인공은?",
      "choices": [
        "거북이",
        "강아지",
        "사람",
        "독수리"
      ],
      "answer": "사람",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '사'(으)로 시작해요.",
      "ttsKo": "아침에는 네 발, 낮에는 두 발, 밤에는 세 발로 걷는다는 수수께끼의 주인공은?",
      "ttsEn": ""
    },
    {
      "id": "cre_021",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "머리 감을 때 거품을 보글보글 내어 머리카락을 깨끗하게 해 주는 것은?",
      "choices": [
        "로션",
        "치약",
        "샴푸",
        "향수"
      ],
      "answer": "샴푸",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '샴'(으)로 시작해요.",
      "ttsKo": "머리 감을 때 거품을 보글보글 내어 머리카락을 깨끗하게 해 주는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_022",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "종이를 오릴 때 두 다리를 벌렸다 오므렸다 하며 자르는 도구는?",
      "choices": [
        "연필",
        "테이프",
        "가위",
        "딱풀"
      ],
      "answer": "가위",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '가'(으)로 시작해요.",
      "ttsKo": "종이를 오릴 때 두 다리를 벌렸다 오므렸다 하며 자르는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_023",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "겉은 초록색 줄무늬이고 속은 빨갛고 까만 씨가 콕콕 박힌 여름 과일은?",
      "choices": [
        "포도",
        "수박",
        "참외",
        "바나나"
      ],
      "answer": "수박",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '수'(으)로 시작해요.",
      "ttsKo": "겉은 초록색 줄무늬이고 속은 빨갛고 까만 씨가 콕콕 박힌 여름 과일은?",
      "ttsEn": ""
    },
    {
      "id": "cre_024",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "옷을 입을 수는 없지만 우리 옷을 구김 없이 걸어 두는 물건은?",
      "choices": [
        "이불",
        "세탁기",
        "신발장",
        "옷걸이"
      ],
      "answer": "옷걸이",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '옷'(으)로 시작해요.",
      "ttsKo": "옷을 입을 수는 없지만 우리 옷을 구김 없이 걸어 두는 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_025",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "눈은 없는데 작은 구멍(귀)에 실을 꿰어 옷을 꿰매는 뾰족한 것은?",
      "choices": [
        "바늘",
        "이쑤시개",
        "젓가락",
        "못"
      ],
      "answer": "바늘",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '바'(으)로 시작해요.",
      "ttsKo": "눈은 없는데 작은 구멍(귀)에 실을 꿰어 옷을 꿰매는 뾰족한 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_026",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "전기가 없어도 철로 된 클립이나 못을 찰칵 달라붙게 하는 신기한 물건은?",
      "choices": [
        "자석",
        "유리구슬",
        "고무줄",
        "나무토막"
      ],
      "answer": "자석",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '자'(으)로 시작해요.",
      "ttsKo": "전기가 없어도 철로 된 클립이나 못을 찰칵 달라붙게 하는 신기한 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_027",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "손잡이를 돌리거나 밀면 방 안과 밖을 오갈 수 있게 열리는 것은?",
      "choices": [
        "벽지",
        "기둥",
        "천장",
        "문"
      ],
      "answer": "문",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '문'(으)로 시작해요.",
      "ttsKo": "손잡이를 돌리거나 밀면 방 안과 밖을 오갈 수 있게 열리는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_028",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "뜨거운 여름날 날개를 쌩쌩 돌려서 시원한 바람을 만들어 주는 가전제품은?",
      "choices": [
        "다리미",
        "토스터",
        "전자레인지",
        "선풍기"
      ],
      "answer": "선풍기",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '선'(으)로 시작해요.",
      "ttsKo": "뜨거운 여름날 날개를 쌩쌩 돌려서 시원한 바람을 만들어 주는 가전제품은?",
      "ttsEn": ""
    },
    {
      "id": "cre_029",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "음식이 상하지 않도록 일 년 내내 안쪽이 차가운 부엌 가전제품은?",
      "choices": [
        "냉장고",
        "밥솥",
        "청소기",
        "세탁기"
      ],
      "answer": "냉장고",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '냉'(으)로 시작해요.",
      "ttsKo": "음식이 상하지 않도록 일 년 내내 안쪽이 차가운 부엌 가전제품은?",
      "ttsEn": ""
    },
    {
      "id": "cre_030",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 3,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "책을 읽다가 어디까지 읽었는지 표시하려고 책장 사이에 끼워 두는 것은?",
      "choices": [
        "물감",
        "필통",
        "책갈피",
        "도화지"
      ],
      "answer": "책갈피",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '책'(으)로 시작해요.",
      "ttsKo": "책을 읽다가 어디까지 읽었는지 표시하려고 책장 사이에 끼워 두는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_031",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 그림을 고르세요!\n🍎 🍌 🍎 🍌 🍎 ( ? )",
      "choices": [
        "🍇",
        "🍎",
        "🍌",
        "🍉"
      ],
      "answer": "🍌",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_032",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 그림을 고르세요!\n⭐ ⭐ 🌙 ⭐ ⭐ 🌙 ⭐ ⭐ ( ? )",
      "choices": [
        "⭐",
        "☁️",
        "☀️",
        "🌙"
      ],
      "answer": "🌙",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_033",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 그림을 고르세요!\n🐶 🐱 🐰 🐶 🐱 🐰 🐶 ( ? )",
      "choices": [
        "🐱",
        "🐶",
        "🐰",
        "🐻"
      ],
      "answer": "🐱",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_034",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n2 → 4 → 6 → 8 → ( ? )",
      "choices": [
        "9",
        "12",
        "10",
        "11"
      ],
      "answer": "10",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_035",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n5 → 10 → 15 → 20 → ( ? )",
      "choices": [
        "24",
        "22",
        "30",
        "25"
      ],
      "answer": "25",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_036",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n10 → 20 → 30 → 40 → ( ? )",
      "choices": [
        "60",
        "50",
        "70",
        "45"
      ],
      "answer": "50",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_037",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n1 → 3 → 5 → 7 → ( ? )",
      "choices": [
        "8",
        "9",
        "10",
        "11"
      ],
      "answer": "9",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_038",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n20 → 18 → 16 → 14 → ( ? )",
      "choices": [
        "13",
        "12",
        "15",
        "10"
      ],
      "answer": "12",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_039",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "계절의 순서에 맞게 빈칸에 들어갈 말은?\n봄 → 여름 → ( ? ) → 겨울",
      "choices": [
        "아침",
        "새벽",
        "가을",
        "장마"
      ],
      "answer": "가을",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "계절의 순서에 맞게 빈칸에 들어갈 말은?\n봄 다음 여름 다음 빈칸 다음 겨울",
      "ttsEn": ""
    },
    {
      "id": "cre_040",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "요일의 순서에 맞게 빈칸에 들어갈 말은?\n월요일 → 화요일 → 수요일 → ( ? ) → 금요일",
      "choices": [
        "토요일",
        "일요일",
        "목요일",
        "공휴일"
      ],
      "answer": "목요일",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "요일의 순서에 맞게 빈칸에 들어갈 말은?\n월요일 다음 화요일 다음 수요일 다음 빈칸 다음 금요일",
      "ttsEn": ""
    },
    {
      "id": "cre_041",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 그림을 고르세요!\n🔴 🔵 🔵 🔴 🔵 🔵 🔴 ( ? )",
      "choices": [
        "🟢",
        "🔵",
        "🔴",
        "🟡"
      ],
      "answer": "🔵",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_042",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 글자를 고르세요!\n가 → 나 → 다 → 라 → ( ? )",
      "choices": [
        "마",
        "아",
        "바",
        "사"
      ],
      "answer": "마",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_043",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n3 → 6 → 9 → 12 → ( ? )",
      "choices": [
        "13",
        "16",
        "14",
        "15"
      ],
      "answer": "15",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_044",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "식물이 자라는 순서로 빈칸에 알맞은 것은?\n씨앗 → 새싹 → 줄기·잎 → ( ? )",
      "choices": [
        "꽃과 열매",
        "모래",
        "구름",
        "돌멩이"
      ],
      "answer": "꽃과 열매",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "식물이 자라는 순서로 빈칸에 알맞은 것은?\n씨앗 다음 새싹 다음 줄기·잎 다음 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_045",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "개구리가 자라는 순서로 빈칸에 알맞은 것은?\n알 → ( ? ) → 뒷다리 → 개구리",
      "choices": [
        "올챙이",
        "병아리",
        "번데기",
        "애벌레"
      ],
      "answer": "올챙이",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "개구리가 자라는 순서로 빈칸에 알맞은 것은?\n알 다음 빈칸 다음 뒷다리 다음 개구리",
      "ttsEn": ""
    },
    {
      "id": "cre_046",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "나비가 자라는 순서로 빈칸에 알맞은 것은?\n알 → 애벌레 → ( ? ) → 나비",
      "choices": [
        "번데기",
        "올챙이",
        "씨앗",
        "소라게"
      ],
      "answer": "번데기",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "나비가 자라는 순서로 빈칸에 알맞은 것은?\n알 다음 애벌레 다음 빈칸 다음 나비",
      "ttsEn": ""
    },
    {
      "id": "cre_047",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 4,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 그림을 고르세요!\n🌞 🌙 🌞 🌙 🌞 ( ? )",
      "choices": [
        "⛄",
        "🌙",
        "🌞",
        "🌈"
      ],
      "answer": "🌙",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_048",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 4,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 수를 고르세요!\n100 → 90 → 80 → 70 → ( ? )",
      "choices": [
        "60",
        "75",
        "65",
        "50"
      ],
      "answer": "60",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_049",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "하루의 시간 순서로 빈칸에 알맞은 말은?\n아침 → 점심 → ( ? ) → 밤",
      "choices": [
        "주말",
        "저녁",
        "어제",
        "내일"
      ],
      "answer": "저녁",
      "hint": "먼저 일어나는 일부터 마지막 모습까지 차례대로 머릿속에 그려 보세요!",
      "ttsKo": "하루의 시간 순서로 빈칸에 알맞은 말은?\n아침 다음 점심 다음 빈칸 다음 밤",
      "ttsEn": ""
    },
    {
      "id": "cre_050",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 4,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 찾아 빈칸에 알맞은 도형을 고르세요!\n▲ ■ ● ▲ ■ ● ▲ ( ? )",
      "choices": [
        "★",
        "▲",
        "●",
        "■"
      ],
      "answer": "■",
      "hint": "앞에서부터 두세 개씩 묶어 어떤 순서로 되풀이되는지 손가락으로 짚어 보세요!",
      "ttsKo": "규칙을 찾아 빈칸에 알맞은 것을 고르세요.",
      "ttsEn": ""
    },
    {
      "id": "cre_051",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 4,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'연필'과 '지우개'처럼, '칫솔'과 가장 잘 어울리는 짝꿍은?",
      "choices": [
        "비누",
        "수건",
        "치약",
        "빗"
      ],
      "answer": "치약",
      "hint": "그 상황에서 가장 안전하고 슬기로운 방법이 무엇일지 상상해 보세요!",
      "ttsKo": "'연필'과 '지우개'처럼, '칫솔'과 가장 잘 어울리는 짝꿍은?",
      "ttsEn": ""
    },
    {
      "id": "cre_052",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 4,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'바늘'과 가장 잘 어울리는 짝꿍은 무엇일까요?",
      "choices": [
        "실",
        "풀",
        "못",
        "자"
      ],
      "answer": "실",
      "hint": "그 상황에서 가장 안전하고 슬기로운 방법이 무엇일지 상상해 보세요!",
      "ttsKo": "'바늘'과 가장 잘 어울리는 짝꿍은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_053",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'망치'로 통통 칠 때 함께 쓰는 단짝 물건은?",
      "choices": [
        "나사못 드라이버",
        "못",
        "종이",
        "가위"
      ],
      "answer": "못",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '못'(으)로 시작해요.",
      "ttsKo": "'망치'로 통통 칠 때 함께 쓰는 단짝 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_054",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'숟가락'과 식탁 위에 나란히 놓이는 단짝 친구는?",
      "choices": [
        "뒤집개",
        "국자",
        "도마",
        "젓가락"
      ],
      "answer": "젓가락",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '젓'(으)로 시작해요.",
      "ttsKo": "'숟가락'과 식탁 위에 나란히 놓이는 단짝 친구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_055",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'구두'는 발에 신고, '모자'는 어디에 쓸까요?",
      "choices": [
        "손목",
        "머리",
        "무릎",
        "어깨"
      ],
      "answer": "머리",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '머'(으)로 시작해요.",
      "ttsKo": "'구두'는 발에 신고, '모자'는 어디에 쓸까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_056",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'장갑'은 손에 끼고, '양말'은 어디에 신을까요?",
      "choices": [
        "귀",
        "목",
        "발",
        "허리"
      ],
      "answer": "발",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '발'(으)로 시작해요.",
      "ttsKo": "'장갑'은 손에 끼고, '양말'은 어디에 신을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_057",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'새'는 하늘을 날고, '물고기'는 어디에서 헤엄칠까요?",
      "choices": [
        "나무 꼭대기",
        "구름 위",
        "물속",
        "모래성"
      ],
      "answer": "물속",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '물'(으)로 시작해요.",
      "ttsKo": "'새'는 하늘을 날고, '물고기'는 어디에서 헤엄칠까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_058",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'기차'는 철길 위를 달리고, '배'는 어디 위를 다닐까요?",
      "choices": [
        "고속도로",
        "숲길",
        "물 위",
        "계단"
      ],
      "answer": "물 위",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '물'(으)로 시작해요.",
      "ttsKo": "'기차'는 철길 위를 달리고, '배'는 어디 위를 다닐까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_059",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'화가'가 붓과 물감을 쓴다면, '요리사'가 가장 많이 쓰는 도구는?",
      "choices": [
        "호루라기",
        "청진기",
        "프라이팬과 칼",
        "망원경"
      ],
      "answer": "프라이팬과 칼",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '프'(으)로 시작해요.",
      "ttsKo": "'화가'가 붓과 물감을 쓴다면, '요리사'가 가장 많이 쓰는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_060",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'의사 선생님'이 진찰할 때 가슴에 대고 소리를 듣는 도구는?",
      "choices": [
        "나침반",
        "줄자",
        "현미경",
        "청진기"
      ],
      "answer": "청진기",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '청'(으)로 시작해요.",
      "ttsKo": "'의사 선생님'이 진찰할 때 가슴에 대고 소리를 듣는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_061",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 4,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "비가 주룩주룩 내리는 날 외출할 때 가장 어울리는 물건은?",
      "choices": [
        "부채",
        "선글라스",
        "우산과 장화",
        "스케이트"
      ],
      "answer": "우산과 장화",
      "hint": "그 상황에서 가장 안전하고 슬기로운 방법이 무엇일지 상상해 보세요!",
      "ttsKo": "비가 주룩주룩 내리는 날 외출할 때 가장 어울리는 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_062",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "눈이 펑펑 내린 겨울날 마당에서 만들 수 있는 것은?",
      "choices": [
        "수박화채",
        "모래성",
        "매미 채집",
        "눈사람"
      ],
      "answer": "눈사람",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '눈'(으)로 시작해요.",
      "ttsKo": "눈이 펑펑 내린 겨울날 마당에서 만들 수 있는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_063",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "깜깜한 동굴 속을 걸어갈 때 가장 필요한 물건은 무엇일까요?",
      "choices": [
        "색종이",
        "손전등",
        "돋보기",
        "부채"
      ],
      "answer": "손전등",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '손'(으)로 시작해요.",
      "ttsKo": "깜깜한 동굴 속을 걸어갈 때 가장 필요한 물건은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_064",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "도화지에 물감으로 그림을 그릴 때 꼭 필요한 도구는?",
      "choices": [
        "가위와 풀",
        "자석",
        "붓과 물통",
        "줄넘기"
      ],
      "answer": "붓과 물통",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '붓'(으)로 시작해요.",
      "ttsKo": "도화지에 물감으로 그림을 그릴 때 꼭 필요한 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_065",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'낮'에 '해'가 떠 있다면, '밤'에는 무엇이 떠 있을까요?",
      "choices": [
        "달과 별",
        "아지랑이",
        "무지개",
        "소나기"
      ],
      "answer": "달과 별",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '달'(으)로 시작해요.",
      "ttsKo": "'낮'에 '해'가 떠 있다면, '밤'에는 무엇이 떠 있을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_066",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "'책'은 눈으로 읽고, '음악'은 무엇으로 들을까요?",
      "choices": [
        "코",
        "발가락",
        "귀",
        "손바닥"
      ],
      "answer": "귀",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '귀'(으)로 시작해요.",
      "ttsKo": "'책'은 눈으로 읽고, '음악'은 무엇으로 들을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_067",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "꽃향기가 향기로운지 맡아 보려면 우리 몸의 어디를 쓸까요?",
      "choices": [
        "귀",
        "무릎",
        "코",
        "손톱"
      ],
      "answer": "코",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '코'(으)로 시작해요.",
      "ttsKo": "꽃향기가 향기로운지 맡아 보려면 우리 몸의 어디를 쓸까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_068",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "종이 두 장을 튼튼하게 붙일 때 사용하는 학용품은?",
      "choices": [
        "지우개",
        "딱풀",
        "자",
        "각도기"
      ],
      "answer": "딱풀",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '딱'(으)로 시작해요.",
      "ttsKo": "종이 두 장을 튼튼하게 붙일 때 사용하는 학용품은?",
      "ttsEn": ""
    },
    {
      "id": "cre_069",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "연필심이 뭉툭해졌을 때 뾰족하게 만들어 주는 도구는?",
      "choices": [
        "스테이플러",
        "연필깎이",
        "책받침",
        "크레파스"
      ],
      "answer": "연필깎이",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '연'(으)로 시작해요.",
      "ttsKo": "연필심이 뭉툭해졌을 때 뾰족하게 만들어 주는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_070",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "수영장에 들어갈 때 눈을 보호하려고 쓰는 물건은?",
      "choices": [
        "물안경(수경)",
        "돋보기",
        "선글라스",
        "귀마개 모자"
      ],
      "answer": "물안경(수경)",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '물'(으)로 시작해요.",
      "ttsKo": "수영장에 들어갈 때 눈을 보호하려고 쓰는 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_071",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 네 동물 중 하늘을 날 수 없는 동물은 누구일까요?",
      "choices": [
        "독수리",
        "제비",
        "참새",
        "거북이"
      ],
      "answer": "거북이",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '거'(으)로 시작해요.",
      "ttsKo": "다음 네 동물 중 하늘을 날 수 없는 동물은 누구일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_072",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 땅속에서 뿌리나 줄기가 통통하게 자라는 먹을거리는?",
      "choices": [
        "포도",
        "고구마",
        "복숭아",
        "사과"
      ],
      "answer": "고구마",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '고'(으)로 시작해요.",
      "ttsKo": "다음 중 땅속에서 뿌리나 줄기가 통통하게 자라는 먹을거리는?",
      "ttsEn": ""
    },
    {
      "id": "cre_073",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 바퀴가 달려 있지 않은 탈것은 무엇일까요?",
      "choices": [
        "자전거",
        "자동차",
        "돛단배",
        "버스"
      ],
      "answer": "돛단배",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '돛'(으)로 시작해요.",
      "ttsKo": "다음 중 바퀴가 달려 있지 않은 탈것은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_074",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 전기를 꽂지 않아도 쓸 수 있는 물건은?",
      "choices": [
        "진공청소기",
        "텔레비전",
        "냉장고",
        "빗자루"
      ],
      "answer": "빗자루",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '빗'(으)로 시작해요.",
      "ttsKo": "다음 중 전기를 꽂지 않아도 쓸 수 있는 물건은?",
      "ttsEn": ""
    },
    {
      "id": "cre_075",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 물에 넣었을 때 둥둥 잘 뜨는 물건은 무엇일까요?",
      "choices": [
        "돌멩이",
        "동전",
        "탁구공",
        "쇠구슬"
      ],
      "answer": "탁구공",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '탁'(으)로 시작해요.",
      "ttsKo": "다음 중 물에 넣었을 때 둥둥 잘 뜨는 물건은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_076",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 2,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 과일이 아닌 채소를 골라 보세요!",
      "choices": [
        "복숭아",
        "포도",
        "사과",
        "당근"
      ],
      "answer": "당근",
      "hint": "보기 네 개 가운데 성질이나 종류가 혼자 다른 하나를 찾아보세요!",
      "ttsKo": "다음 중 과일이 아닌 채소를 골라 보세요!",
      "ttsEn": ""
    },
    {
      "id": "cre_077",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 4,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 곤충(다리 6개)이 아닌 동물은 누구일까요?",
      "choices": [
        "무당벌레",
        "개미",
        "거미(다리 8개)",
        "나비"
      ],
      "answer": "거미(다리 8개)",
      "hint": "보기 네 개 가운데 성질이나 종류가 혼자 다른 하나를 찾아보세요!",
      "ttsKo": "다음 중 곤충(다리 6개)이 아닌 동물은 누구일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_078",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 알을 낳지 않고 새끼를 낳아 기르는 동물은?",
      "choices": [
        "닭",
        "참새",
        "거북이",
        "강아지"
      ],
      "answer": "강아지",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '강'(으)로 시작해요.",
      "ttsKo": "다음 중 알을 낳지 않고 새끼를 낳아 기르는 동물은?",
      "ttsEn": ""
    },
    {
      "id": "cre_079",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 4,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "다음 중 얼음처럼 차가운 음식이 아닌 것은 무엇일까요?",
      "choices": [
        "얼음물",
        "따끈한 어묵국",
        "팥빙수",
        "아이스크림"
      ],
      "answer": "따끈한 어묵국",
      "hint": "보기 네 개 가운데 성질이나 종류가 혼자 다른 하나를 찾아보세요!",
      "ttsKo": "다음 중 얼음처럼 차가운 음식이 아닌 것은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_080",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "설탕물과 소금물이 눈으로는 똑같아 보여요. 가장 안전하게 구별하는 방법은?",
      "choices": [
        "자를 대어 재어 본다",
        "살짝 맛을 본다",
        "자석을 대어 본다",
        "소리를 들어 본다"
      ],
      "answer": "살짝 맛을 본다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '살'(으)로 시작해요.",
      "ttsKo": "설탕물과 소금물이 눈으로는 똑같아 보여요. 가장 안전하게 구별하는 방법은?",
      "ttsEn": ""
    },
    {
      "id": "cre_081",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "컵에 얼음물을 담아 두었더니 컵 바깥쪽에 물방울이 맺혔어요. 왜 그럴까요?",
      "choices": [
        "누군가 분무기를 뿌려서",
        "얼음이 컵 밖으로 점프해서",
        "컵에 구멍이 뚫려서",
        "공기 중 수증기가 차가운 컵에 닿아서"
      ],
      "answer": "공기 중 수증기가 차가운 컵에 닿아서",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '공'(으)로 시작해요.",
      "ttsKo": "컵에 얼음물을 담아 두었더니 컵 바깥쪽에 물방울이 맺혔어요. 왜 그럴까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_082",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "횡단보도를 건널 때 가장 안전하고 올바른 행동은 무엇일까요?",
      "choices": [
        "초록불이 켜지면 좌우를 살피고 손들고 건넌다",
        "공을 차면서 건넌다",
        "빨간불에 빨리 뛰어간다",
        "스마트폰만 보며 걷는다"
      ],
      "answer": "초록불이 켜지면 좌우를 살피고 손들고 건넌다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '초'(으)로 시작해요.",
      "ttsKo": "횡단보도를 건널 때 가장 안전하고 올바른 행동은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_083",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "친구가 넘어져서 무릎을 다쳤을 때 가장 따뜻한 행동은?",
      "choices": [
        "놀리며 웃는다",
        "모른 척 지나간다",
        "내 장난감 자랑을 한다",
        "괜찮은지 물어보고 보건실에 같이 간다"
      ],
      "answer": "괜찮은지 물어보고 보건실에 같이 간다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '괜'(으)로 시작해요.",
      "ttsKo": "친구가 넘어져서 무릎을 다쳤을 때 가장 따뜻한 행동은?",
      "ttsEn": ""
    },
    {
      "id": "cre_084",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "시소가 수평을 이루려면 무거운 형은 중심에서 어떻게 앉아야 할까요?",
      "choices": [
        "맨 끝으로 더 멀리 간다",
        "중심에 더 가까이 앉는다",
        "뒤돌아 앉는다",
        "일어서서 뛴다"
      ],
      "answer": "중심에 더 가까이 앉는다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '중'(으)로 시작해요.",
      "ttsKo": "시소가 수평을 이루려면 무거운 형은 중심에서 어떻게 앉아야 할까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_085",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "모래와 쇠가루가 섞여 있을 때 가장 쉽게 분리하는 도구는?",
      "choices": [
        "가위",
        "온도계",
        "돋보기",
        "자석"
      ],
      "answer": "자석",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '자'(으)로 시작해요.",
      "ttsKo": "모래와 쇠가루가 섞여 있을 때 가장 쉽게 분리하는 도구는?",
      "ttsEn": ""
    },
    {
      "id": "cre_086",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "빈 페트병과 종이상자를 버릴 때 환경을 지키는 바른 방법은?",
      "choices": [
        "강물에 띄워 보낸다",
        "깨끗이 비우고 분리배출한다",
        "길가에 그냥 버린다",
        "땅에 묻는다"
      ],
      "answer": "깨끗이 비우고 분리배출한다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '깨'(으)로 시작해요.",
      "ttsKo": "빈 페트병과 종이상자를 버릴 때 환경을 지키는 바른 방법은?",
      "ttsEn": ""
    },
    {
      "id": "cre_087",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "해가 서쪽으로 지고 있을 때 내 그림자는 어느 쪽으로 길게 생길까요?",
      "choices": [
        "땅속",
        "동쪽",
        "하늘 위",
        "서쪽"
      ],
      "answer": "동쪽",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '동'(으)로 시작해요.",
      "ttsKo": "해가 서쪽으로 지고 있을 때 내 그림자는 어느 쪽으로 길게 생길까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_088",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 5,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "종이비행기를 더 멀리 안정적으로 날리려면 어떻게 접는 것이 좋을까요?",
      "choices": [
        "양쪽 날개를 대칭으로 반듯하게 접는다",
        "공처럼 뭉친다",
        "한쪽 날개만 구겨 놓는다",
        "물에 적셔서 던진다"
      ],
      "answer": "양쪽 날개를 대칭으로 반듯하게 접는다",
      "hint": "문장이 설명하는 모양과 특징을 떠올려 보세요! 정답은 '양'(으)로 시작해요.",
      "ttsKo": "종이비행기를 더 멀리 안정적으로 날리려면 어떻게 접는 것이 좋을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_089",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 6,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "더운 여름날 야외에 나갈 때 시원하게 지내기 좋은 옷차림은?",
      "choices": [
        "두꺼운 털코트",
        "털목도리와 장갑",
        "검은색 패딩 점퍼",
        "밝은 색의 얇고 통풍 잘되는 옷"
      ],
      "answer": "밝은 색의 얇고 통풍 잘되는 옷",
      "hint": "그 상황에서 가장 안전하고 슬기로운 방법이 무엇일지 상상해 보세요!",
      "ttsKo": "더운 여름날 야외에 나갈 때 시원하게 지내기 좋은 옷차림은?",
      "ttsEn": ""
    },
    {
      "id": "cre_090",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 6,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "포켓몬 도감을 모두 채우려면 어떤 마음가짐이 가장 도움이 될까요?",
      "choices": [
        "문제를 안 읽고 아무거나 누른다",
        "틀려도 포기하지 않고 차근차근 문제를 푼다",
        "한 번 틀리면 바로 그만둔다",
        "화부터 낸다"
      ],
      "answer": "틀려도 포기하지 않고 차근차근 문제를 푼다",
      "hint": "그 상황에서 가장 안전하고 슬기로운 방법이 무엇일지 상상해 보세요!",
      "ttsKo": "포켓몬 도감을 모두 채우려면 어떤 마음가짐이 가장 도움이 될까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f01",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "나는 귀가 길고 당근을 좋아하며 깡충깡충 잘 뛰어요. 나는 누구일까요?",
      "choices": [
        "토끼",
        "거북이",
        "문어",
        "팽이버섯"
      ],
      "answer": "토끼",
      "hint": "길쭉한 두 귀로 깡충깡충 뛰는 귀여운 동물은 토끼예요!",
      "ttsKo": "나는 귀가 길고 당근을 좋아하며 깡충깡충 잘 뛰어요. 나는 누구일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f02",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 1,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "낮에는 숨어 있다가 밤이 되면 까만 하늘에서 반짝반짝 빛나는 것은?",
      "choices": [
        "별",
        "눈사람",
        "우산",
        "책상"
      ],
      "answer": "별",
      "hint": "밤하늘에서 반짝반짝 빛나는 것은 별이에요!",
      "ttsKo": "낮에는 숨어 있다가 밤이 되면 까만 하늘에서 반짝반짝 빛나는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f03",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 1,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "규칙을 보고 빈칸에 올 모양을 골라 보세요!\n⭐ 🌙 ⭐ 🌙 ⭐ ( ? )",
      "choices": [
        "🌙",
        "⭐",
        "☀️",
        "☁️"
      ],
      "answer": "🌙",
      "hint": "별과 달이 한 번씩 번갈아 나오니까 별 다음은 달(🌙)이에요!",
      "ttsKo": "규칙을 보고 빈칸에 올 모양을 골라 보세요!\n⭐ 🌙 ⭐ 🌙 ⭐ 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_f04",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 1,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "네 개 중에서 혼자 성질이 다른 하나를 찾아보세요!",
      "choices": [
        "자동차",
        "사과",
        "바나나",
        "딸기"
      ],
      "answer": "자동차",
      "hint": "사과·바나나·딸기는 먹는 과일이고, 자동차는 타는 탈것이에요!",
      "ttsKo": "네 개 중에서 혼자 성질이 다른 하나를 찾아보세요!",
      "ttsEn": ""
    },
    {
      "id": "cre_f05",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 2,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "물속에 살지 않는 동물을 하나 골라 보세요!",
      "choices": [
        "다람쥐",
        "고래",
        "문어",
        "꽃게"
      ],
      "answer": "다람쥐",
      "hint": "다람쥐는 숲속 나무 위를 오르내리며 살아요!",
      "ttsKo": "물속에 살지 않는 동물을 하나 골라 보세요!",
      "ttsEn": ""
    },
    {
      "id": "cre_f06",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 2,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "박수 규칙 놀이! 빈칸에 알맞은 동작은 무엇일까요?\n짝! 짝! 쿵! · 짝! 짝! ( ? )",
      "choices": [
        "쿵!",
        "짝!",
        "만세!",
        "점프!"
      ],
      "answer": "쿵!",
      "hint": "'짝-짝-쿵' 세 박자 마디가 반복되므로 마지막은 '쿵!'이에요!",
      "ttsKo": "박수 규칙 놀이! 빈칸에 알맞은 동작은 무엇일까요?\n짝! 짝! 쿵! · 짝! 짝! 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_f07",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 2,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "먹을수록 배는 안 부르고 오히려 풍선처럼 동그랗게 커지는 것은?",
      "choices": [
        "비눗방울·풍선(공기)",
        "주먹밥",
        "수박",
        "식빵"
      ],
      "answer": "비눗방울·풍선(공기)",
      "hint": "공기를 후후 불어 넣을수록 커지는 것은 풍선과 비눗방울이에요!",
      "ttsKo": "먹을수록 배는 안 부르고 오히려 풍선처럼 동그랗게 커지는 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f08",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 2,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "얼음을 따뜻한 햇볕 아래 오래 놓아두면 어떻게 될까요?",
      "choices": [
        "녹아서 물이 된다",
        "더 딱딱한 돌이 된다",
        "구름으로 바로 변한다",
        "종이가 된다"
      ],
      "answer": "녹아서 물이 된다",
      "hint": "차가운 얼음은 따뜻한 열을 받으면 녹아서 물로 변해요!",
      "ttsKo": "얼음을 따뜻한 햇볕 아래 오래 놓아두면 어떻게 될까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f09",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 3,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "씨앗을 화분에 심고 물을 주며 기르는 바른 순서는?\n씨앗 심기 → ( ? ) → 꽃 피기",
      "choices": [
        "새싹 돋기",
        "낙엽 지기",
        "눈 내리기",
        "과일 깎기"
      ],
      "answer": "새싹 돋기",
      "hint": "씨앗에서 먼저 귀여운 초록 새싹이 돋아난 뒤 자라서 꽃이 피어요!",
      "ttsKo": "씨앗을 화분에 심고 물을 주며 기르는 바른 순서는?\n씨앗 심기 다음 빈칸 다음 꽃 피기",
      "ttsEn": ""
    },
    {
      "id": "cre_f10",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 3,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "개수가 늘어나는 규칙을 찾아 빈칸을 채워 보세요!\n🐣 → 🐣🐣 → 🐣🐣🐣 → ( ? )",
      "choices": [
        "🐣🐣🐣🐣",
        "🐣",
        "🐣🐣",
        "🥚"
      ],
      "answer": "🐣🐣🐣🐣",
      "hint": "병아리가 1마리씩 늘어나고 있으니까 다음은 4마리예요!",
      "ttsKo": "개수가 늘어나는 규칙을 찾아 빈칸을 채워 보세요!\n🐣 다음 🐣🐣 다음 🐣🐣🐣 다음 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_f11",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 3,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "바퀴가 달려 굴러가는 물건이 아닌 것은 무엇일까요?",
      "choices": [
        "베개",
        "자전거",
        "킥보드",
        "소방차"
      ],
      "answer": "베개",
      "hint": "베개는 잠잘 때 머리에 베는 푹신한 물건이라 바퀴가 없어요!",
      "ttsKo": "바퀴가 달려 굴러가는 물건이 아닌 것은 무엇일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f12",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 4,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "키가 닿지 않는 높은 선반 위 공을 안전하게 꺼내는 가장 좋은 방법은?",
      "choices": [
        "어른께 도움을 부탁드린다",
        "바퀴 달린 의자 위에 서서 뛴다",
        "막대기로 세게 휘두른다",
        "선반을 잡아당겨 쓰러뜨린다"
      ],
      "answer": "어른께 도움을 부탁드린다",
      "hint": "높은 곳의 물건을 무리해서 꺼내면 위험하므로 어른께 도움을 청해요!",
      "ttsKo": "키가 닿지 않는 높은 선반 위 공을 안전하게 꺼내는 가장 좋은 방법은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f13",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 4,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "나는 손도 발도 없지만 문을 흔들고 바람개비를 빙글빙글 돌릴 수 있어요. 나는 누구일까요?",
      "choices": [
        "바람",
        "그림자",
        "거울",
        "구두"
      ],
      "answer": "바람",
      "hint": "눈에 보이지 않지만 시원하게 불어 바람개비를 돌리는 것은 바람이에요!",
      "ttsKo": "나는 손도 발도 없지만 문을 흔들고 바람개비를 빙글빙글 돌릴 수 있어요. 나는 누구일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f14",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 4,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "빛이 있을 때만 내 발밑에 따라다니다가, 깜깜한 방에 들어가면 사라지는 단짝은?",
      "choices": [
        "그림자",
        "목도리",
        "운동화",
        "강아지"
      ],
      "answer": "그림자",
      "hint": "빛이 비칠 때 생기고 어두워지면 사라지는 것은 그림자예요!",
      "ttsKo": "빛이 있을 때만 내 발밑에 따라다니다가, 깜깜한 방에 들어가면 사라지는 단짝은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f15",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 5,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "화살표가 시계 방향으로 돌아가요! 빈칸에 올 화살표는?\n⬆️ → ➡️ → ⬇️ → ( ? )",
      "choices": [
        "⬅️",
        "⬆️",
        "➡️",
        "⬇️"
      ],
      "answer": "⬅️",
      "hint": "위 → 오른쪽 → 아래 다음에는 시계 방향인 왼쪽(⬅️)을 가리켜요!",
      "ttsKo": "화살표가 시계 방향으로 돌아가요! 빈칸에 올 화살표는?\n⬆️ 다음 ➡️ 다음 ⬇️ 다음 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_f16",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 5,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "종이컵 전화기로 친구와 비밀 이야기를 나누려 해요. 소리가 잘 들리게 하려면 실을 어떻게 해야 할까요?",
      "choices": [
        "실을 팽팽하게 당긴다",
        "실을 가위로 자른다",
        "실을 물속에 담근다",
        "실을 바닥에 뭉쳐 놓는다"
      ],
      "answer": "실을 팽팽하게 당긴다",
      "hint": "실이 팽팽해야 목소리의 떨림이 실을 타고 친구 컵까지 잘 전달돼요!",
      "ttsKo": "종이컵 전화기로 친구와 비밀 이야기를 나누려 해요. 소리가 잘 들리게 하려면 실을 어떻게 해야 할까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f17",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 5,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "노란 물감과 파란 물감을 팔레트에서 섞으면 어떤 색이 만들어질까요?",
      "choices": [
        "초록색",
        "보라색",
        "검은색",
        "하얀색"
      ],
      "answer": "초록색",
      "hint": "노란색과 파란색을 섞으면 나뭇잎 같은 초록색이 돼요!",
      "ttsKo": "노란 물감과 파란 물감을 팔레트에서 섞으면 어떤 색이 만들어질까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f18",
      "subject": "creative",
      "category": "creative",
      "unit": "c4",
      "tier": 6,
      "domain": "순서·원인결과",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "빨간 물감과 노란 물감을 섞으면 어떤 따뜻한 색이 될까요?",
      "choices": [
        "주황색",
        "파란색",
        "초록색",
        "회색"
      ],
      "answer": "주황색",
      "hint": "빨간색과 노란색이 만나면 귤처럼 상큼한 주황색이 돼요!",
      "ttsKo": "빨간 물감과 노란 물감을 섞으면 어떤 따뜻한 색이 될까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f19",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 6,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "두 가지 규칙이 함께 변해요! 빈칸에 알맞은 짝은?\n🔴1 → 🔵2 → 🔴3 → ( ? )",
      "choices": [
        "🔵4",
        "🔴4",
        "🔵3",
        "🟢5"
      ],
      "answer": "🔵4",
      "hint": "색깔은 빨강·파랑이 번갈아 나오고 숫자는 1씩 커지므로 파랑 4(🔵4)예요!",
      "ttsKo": "두 가지 규칙이 함께 변해요! 빈칸에 알맞은 짝은?\n🔴1 다음 🔵2 다음 🔴3 다음 빈칸",
      "ttsEn": ""
    },
    {
      "id": "cre_f20",
      "subject": "creative",
      "category": "creative",
      "unit": "c3",
      "tier": 6,
      "domain": "분류·다른하나",
      "pokeType": "페어리",
      "format": "choice",
      "question": "거울에 비추어도 왼쪽과 오른쪽 모양이 똑같은 대칭 모양은?",
      "choices": [
        "하트(❤️)",
        "숫자 2",
        "한글 'ㄱ'",
        "알파벳 'F'"
      ],
      "answer": "하트(❤️)",
      "hint": "하트 모양은 반으로 접으면 왼쪽과 오른쪽이 꼭 포개어지는 대칭 모양이에요!",
      "ttsKo": "거울에 비추어도 왼쪽과 오른쪽 모양이 똑같은 대칭 모양은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f21",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 7,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "소풍에서 빈 페트병이 생겼어요. 환경을 지키는 창의적인 재활용 방법으로 알맞은 것은?",
      "choices": [
        "깨끗이 씻어 라벨을 떼고 분리배출하거나 화분으로 꾸민다",
        "숲속 땅에 묻는다",
        "시냇물에 띄워 보낸다",
        "과자 봉지를 안에 가득 채워 일반 쓰레기로 버린다"
      ],
      "answer": "깨끗이 씻어 라벨을 떼고 분리배출하거나 화분으로 꾸민다",
      "hint": "투명 페트병은 라벨을 떼어 분리배출하거나 멋진 재활용 화분으로 만들 수 있어요!",
      "ttsKo": "소풍에서 빈 페트병이 생겼어요. 환경을 지키는 창의적인 재활용 방법으로 알맞은 것은?",
      "ttsEn": ""
    },
    {
      "id": "cre_f22",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 7,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "세 친구의 달리기 결과예요: '민수는 지영이보다 빠르고, 지영이는 준호보다 빨라요.' 1등은 누구일까요?",
      "choices": [
        "민수",
        "지영",
        "준호",
        "모두 공동 1등"
      ],
      "answer": "민수",
      "hint": "민수 > 지영 > 준호 순서이므로 가장 빠른 1등은 민수예요!",
      "ttsKo": "세 친구의 달리기 결과예요: '민수는 지영이보다 빠르고, 지영이는 준호보다 빨라요.' 1등은 누구일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f23",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 7,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "세 상자 중 사탕은 빨간 상자에 없고, 파란 상자도 비어 있어요. 사탕은 어디에 있을까요? (상자는 빨강·파랑·노랑 3개)",
      "choices": [
        "노란 상자",
        "빨간 상자",
        "파란 상자",
        "상자가 없다"
      ],
      "answer": "노란 상자",
      "hint": "빨간 상자와 파란 상자에 모두 없으니 남은 노란 상자에 들어 있어요!",
      "ttsKo": "세 상자 중 사탕은 빨간 상자에 없고, 파란 상자도 비어 있어요. 사탕은 어디에 있을까요? (상자는 빨강·파랑·노랑 3개)",
      "ttsEn": ""
    },
    {
      "id": "cre_f24",
      "subject": "creative",
      "category": "creative",
      "unit": "c1",
      "tier": 8,
      "domain": "상상·수수께끼",
      "pokeType": "페어리",
      "format": "choice",
      "question": "두 가지 단서를 모두 만족하는 포켓몬 도구는? [단서 1: 둥근 공 모양이다 / 단서 2: 전설·희귀 포켓몬이 나오며 문제가 4개다]",
      "choices": [
        "황금 몬스터볼",
        "출석 도장",
        "네모 도감 카드",
        "하트 배지"
      ],
      "answer": "황금 몬스터볼",
      "hint": "둥근 모양이면서 전설 포켓몬과 4문제가 나오는 것은 황금 몬스터볼이에요!",
      "ttsKo": "두 가지 단서를 모두 만족하는 포켓몬 도구는? [단서 1: 둥근 공 모양이다 / 단서 2: 전설·희귀 포켓몬이 나오며 문제가 4개다]",
      "ttsEn": ""
    },
    {
      "id": "cre_f25",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 8,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "비 오는 날 우산을 쓰고 걸어도 가방 뒤쪽이 자꾸 젖어요. 어떻게 발명 아이디어를 더하면 좋을까요?",
      "choices": [
        "뒤쪽이 조금 더 길게 펼쳐지는 우산이나 방수 가방 덮개를 만든다",
        "우산에 구멍을 뚫는다",
        "우산을 접고 뛴다",
        "가방을 머리에 이고 간다"
      ],
      "answer": "뒤쪽이 조금 더 길게 펼쳐지는 우산이나 방수 가방 덮개를 만든다",
      "hint": "불편한 점을 관찰해 뒤쪽을 넓히거나 덮개를 씌우는 것이 멋진 발명 아이디어예요!",
      "ttsKo": "비 오는 날 우산을 쓰고 걸어도 가방 뒤쪽이 자꾸 젖어요. 어떻게 발명 아이디어를 더하면 좋을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f26",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 8,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "종이를 반으로 한 번 접고 가운데에 구멍을 1개 뚫은 뒤 다시 펼치면 구멍은 몇 개일까요?",
      "choices": [
        "2개",
        "1개",
        "3개",
        "4개"
      ],
      "answer": "2개",
      "hint": "두 겹으로 겹쳐진 상태에서 구멍을 1번 뚫었으므로 펼치면 2개가 돼요!",
      "ttsKo": "종이를 반으로 한 번 접고 가운데에 구멍을 1개 뚫은 뒤 다시 펼치면 구멍은 몇 개일까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f27",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 9,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "개구리가 낮에 3칸 올라가고 밤에 1칸 미끄러져요. 첫날 밤이 지나면 처음보다 몇 칸 올라가 있을까요?",
      "choices": [
        "2칸",
        "3칸",
        "4칸",
        "1칸"
      ],
      "answer": "2칸",
      "hint": "낮에 3칸 올라갔다가 밤에 1칸 내려왔으므로 3 - 1 = 2칸 올라가 있어요!",
      "ttsKo": "개구리가 낮에 3칸 올라가고 밤에 1칸 미끄러져요. 첫날 밤이 지나면 처음보다 몇 칸 올라가 있을까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f28",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 9,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "나무 막대기 1개를 가위질하듯 2번 자르면 막대기는 모두 몇 조각이 될까요?",
      "choices": [
        "3조각",
        "2조각",
        "4조각",
        "1조각"
      ],
      "answer": "3조각",
      "hint": "1번 자르면 2조각, 한 번 더 잘라 총 2번 자르면 3조각으로 나뉘어요!",
      "ttsKo": "나무 막대기 1개를 가위질하듯 2번 자르면 막대기는 모두 몇 조각이 될까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f29",
      "subject": "creative",
      "category": "creative",
      "unit": "c5",
      "tier": 10,
      "domain": "창의해결·상황판단",
      "pokeType": "페어리",
      "format": "choice",
      "question": "컵에 물이 반쯤 담겨 있을 때 '물이 반이나 남았네!'와 '반밖에 없네!'처럼 같은 모습을 다르게 바라보는 힘을 무엇이라 할까요?",
      "choices": [
        "관점 바꾸기(다양하게 생각하기)",
        "무조건 우기기",
        "기억 지우기",
        "빨리 외우기"
      ],
      "answer": "관점 바꾸기(다양하게 생각하기)",
      "hint": "하나의 상황을 여러 방향에서 새롭게 바라보는 힘이 바로 창의력의 핵심이에요!",
      "ttsKo": "컵에 물이 반쯤 담겨 있을 때 '물이 반이나 남았네!'와 '반밖에 없네!'처럼 같은 모습을 다르게 바라보는 힘을 무엇이라 할까요?",
      "ttsEn": ""
    },
    {
      "id": "cre_f30",
      "subject": "creative",
      "category": "creative",
      "unit": "c2",
      "tier": 10,
      "domain": "규칙·논리추론",
      "pokeType": "에스퍼",
      "format": "choice",
      "question": "강아지 2마리와 오리 1마리가 마당에 있어요. 다리는 모두 몇 개일까요?",
      "choices": [
        "10개",
        "8개",
        "6개",
        "12개"
      ],
      "answer": "10개",
      "hint": "강아지 한 마리는 다리 4개(4+4=8), 오리는 다리 2개이므로 합하면 10개예요!",
      "ttsKo": "강아지 2마리와 오리 1마리가 마당에 있어요. 다리는 모두 몇 개일까요?",
      "ttsEn": ""
    }
  ],
  "hanja": [
    {
      "id": "han_001",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 1,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "가로로 선을 한 번 그은 한자 '一'의 뜻과 음은?",
      "choices": [
        "한 일",
        "두 이",
        "석 삼",
        "열 십"
      ],
      "answer": "한 일",
      "hint": "손가락 하나처럼 가로선이 1개라서 '한 일(一)'이에요!",
      "ttsKo": "가로로 선을 한 번 그은 한자 '一'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "一"
      ]
    },
    {
      "id": "han_002",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 1,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "가로선이 두 개 나란히 있는 한자 '二'의 뜻과 음은?",
      "choices": [
        "두 이",
        "한 일",
        "석 삼",
        "넉 사"
      ],
      "answer": "두 이",
      "hint": "선이 2개 그려져 있어서 '두 이(二)'예요!",
      "ttsKo": "가로선이 두 개 나란히 있는 한자 '二'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "二"
      ]
    },
    {
      "id": "han_003",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 1,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "가로선이 세 개 있는 한자 '三'의 뜻과 음은?",
      "choices": [
        "석 삼",
        "두 이",
        "다섯 오",
        "일곱 칠"
      ],
      "answer": "석 삼",
      "hint": "선이 3개 나란히 있어서 '석 삼(三)'이에요!",
      "ttsKo": "가로선이 세 개 있는 한자 '三'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "三"
      ]
    },
    {
      "id": "han_004",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 2,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "가로와 세로가 반듯하게 만나는 숫자 10 한자 '十'의 뜻과 음은?",
      "choices": [
        "열 십",
        "다섯 오",
        "여덟 팔",
        "아홉 구"
      ],
      "answer": "열 십",
      "hint": "더하기 모양처럼 생긴 '十'은 숫자 10을 뜻하는 '열 십'이에요!",
      "ttsKo": "가로와 세로가 반듯하게 만나는 숫자 10 한자 '十'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "十"
      ]
    },
    {
      "id": "han_005",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 2,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "'다섯 오'에 알맞은 숫자 한자는 무엇일까요?",
      "choices": [
        "五",
        "四",
        "六",
        "七"
      ],
      "answer": "五",
      "hint": "'五'가 숫자 5를 나타내는 '다섯 오'예요!",
      "ttsKo": "'다섯 오'에 알맞은 숫자 한자는 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "五"
      ]
    },
    {
      "id": "han_006",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 2,
      "domain": "획수·필순",
      "pokeType": "고스트",
      "question": "한자 '三(석 삼)'은 모두 몇 번에 나누어 쓸까요(총 획수)?",
      "choices": [
        "3획",
        "1획",
        "2획",
        "4획"
      ],
      "answer": "3획",
      "hint": "위에서부터 차례대로 한 줄씩 그어 모두 3획으로 써요!",
      "ttsKo": "한자 '三(석 삼)'은 모두 몇 번에 나누어 쓸까요(총 획수)?",
      "ttsEn": "",
      "hanjaChars": [
        "三"
      ]
    },
    {
      "id": "han_007",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h1",
      "tier": 2,
      "domain": "획수·필순",
      "pokeType": "고스트",
      "question": "한자 '十(열 십)'을 바른 순서로 쓰는 방법은?",
      "choices": [
        "가로획(一)을 먼저 긋고 세로획(丨)을 나중에 긋는다",
        "세로획을 먼저 긋고 가로획을 나중에 긋는다",
        "아래에서 위로 거꾸로 긋는다",
        "동그라미를 먼저 그린다"
      ],
      "answer": "가로획(一)을 먼저 긋고 세로획(丨)을 나중에 긋는다",
      "hint": "한자는 가로획을 먼저 긋고 세로획을 나중에 긋는 것이 기본 순서예요!",
      "ttsKo": "한자 '十(열 십)'을 바른 순서로 쓰는 방법은?",
      "ttsEn": "",
      "hanjaChars": [
        "十",
        "一",
        "丨"
      ]
    },
    {
      "id": "han_008",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 3,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "하늘에 밝게 떠 있는 해의 모양을 본뜬 한자 '日'의 뜻과 음은?",
      "choices": [
        "날 일(해 일)",
        "달 월",
        "불 화",
        "물 수"
      ],
      "answer": "날 일(해 일)",
      "hint": "둥근 해를 네모나게 본뜬 글자로 '날 일'이에요!",
      "ttsKo": "하늘에 밝게 떠 있는 해의 모양을 본뜬 한자 '日'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "日"
      ]
    },
    {
      "id": "han_009",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 3,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "초승달 모양을 본뜬 한자 '月'의 뜻과 음은?",
      "choices": [
        "달 월",
        "날 일",
        "나무 목",
        "쇠 금"
      ],
      "answer": "달 월",
      "hint": "밤하늘에 뜬 반달·초승달 모양을 본뜬 '달 월(月)'이에요!",
      "ttsKo": "초승달 모양을 본뜬 한자 '月'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "月"
      ]
    },
    {
      "id": "han_010",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 3,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "세 개의 봉우리가 솟아 있는 산 모양 한자 '山'의 뜻과 음은?",
      "choices": [
        "메 산",
        "내 천",
        "물 수",
        "흙 토"
      ],
      "answer": "메 산",
      "hint": "우뚝 솟은 산봉우리 세 개를 그린 글자가 '메 산(山)'이에요!",
      "ttsKo": "세 개의 봉우리가 솟아 있는 산 모양 한자 '山'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "山"
      ]
    },
    {
      "id": "han_011",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 3,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "시냇물이 졸졸 흐르는 모습을 본뜬 한자 '川'의 뜻과 음은?",
      "choices": [
        "내 천",
        "메 산",
        "불 화",
        "나무 목"
      ],
      "answer": "내 천",
      "hint": "물줄기 세 줄이 나란히 흐르는 모양인 '내 천(川)'이에요!",
      "ttsKo": "시냇물이 졸졸 흐르는 모습을 본뜬 한자 '川'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "川"
      ]
    },
    {
      "id": "han_012",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "타오르는 불꽃 모양을 본뜬 한자 '火'의 뜻과 음은?",
      "choices": [
        "불 화",
        "물 수",
        "나무 목",
        "흙 토"
      ],
      "answer": "불 화",
      "hint": "장작불 위로 불똥이 튀며 타오르는 '불 화(火)'예요!",
      "ttsKo": "타오르는 불꽃 모양을 본뜬 한자 '火'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "火"
      ]
    },
    {
      "id": "han_013",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "흐르는 물줄기 모양을 본뜬 한자 '水'의 뜻과 음은?",
      "choices": [
        "물 수",
        "불 화",
        "쇠 금",
        "날 일"
      ],
      "answer": "물 수",
      "hint": "수요일 할 때 쓰는 시원한 '물 수(水)'예요!",
      "ttsKo": "흐르는 물줄기 모양을 본뜬 한자 '水'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "水"
      ]
    },
    {
      "id": "han_014",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "뿌리와 가지를 뻗은 나무 모양 한자 '木'의 뜻과 음은?",
      "choices": [
        "나무 목",
        "흙 토",
        "쇠 금",
        "메 산"
      ],
      "answer": "나무 목",
      "hint": "줄기와 가지, 뿌리 모양을 그대로 본뜬 '나무 목(木)'이에요!",
      "ttsKo": "뿌리와 가지를 뻗은 나무 모양 한자 '木'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "木"
      ]
    },
    {
      "id": "han_015",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h2",
      "tier": 4,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "산과 물을 아울러 부르는 두 글자 한자어 '山水'는 어떻게 읽을까요?",
      "choices": [
        "산수",
        "화수",
        "일월",
        "산천"
      ],
      "answer": "산수",
      "hint": "메 산(山)과 물 수(水)가 만나 '산수'라고 읽어요!",
      "ttsKo": "산과 물을 아울러 부르는 두 글자 한자어 '山水'는 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "山",
        "水"
      ]
    },
    {
      "id": "han_016",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h3",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "두 다리로 당당히 서 있는 사람의 모습을 본뜬 한자 '人'의 뜻과 음은?",
      "choices": [
        "사람 인",
        "큰 대",
        "작을 소",
        "임금 왕"
      ],
      "answer": "사람 인",
      "hint": "사람이 걸어가는 옆모습을 본뜬 '사람 인(人)'이에요!",
      "ttsKo": "두 다리로 당당히 서 있는 사람의 모습을 본뜬 한자 '人'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "人"
      ]
    },
    {
      "id": "han_017",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h3",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "아버지를 뜻하는 한자 '父'의 뜻과 음은?",
      "choices": [
        "아비 부",
        "어미 모",
        "형 형",
        "아우 제"
      ],
      "answer": "아비 부",
      "hint": "부모님(父母)의 앞 글자인 '아비 부(父)'예요!",
      "ttsKo": "아버지를 뜻하는 한자 '父'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "父"
      ]
    },
    {
      "id": "han_018",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h3",
      "tier": 4,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "아기를 따뜻하게 품어 기르는 어머니 한자 '母'의 뜻과 음은?",
      "choices": [
        "어미 모",
        "아비 부",
        "계집 녀",
        "아들 자"
      ],
      "answer": "어미 모",
      "hint": "부모님(父母)의 뒤 글자인 '어미 모(母)'예요!",
      "ttsKo": "아기를 따뜻하게 품어 기르는 어머니 한자 '母'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "母"
      ]
    },
    {
      "id": "han_019",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "아버지와 어머니를 함께 부르는 한자어 '父母'의 바른 독음은?",
      "choices": [
        "부모",
        "형제",
        "남녀",
        "부자"
      ],
      "answer": "부모",
      "hint": "아비 부(父) + 어미 모(母) = '부모'예요!",
      "ttsKo": "아버지와 어머니를 함께 부르는 한자어 '父母'의 바른 독음은?",
      "ttsEn": "",
      "hanjaChars": [
        "父",
        "母"
      ]
    },
    {
      "id": "han_020",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h3",
      "tier": 5,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "임금님을 뜻하는 한자 '王'의 뜻과 음은?",
      "choices": [
        "임금 왕",
        "구슬 옥",
        "주인 주",
        "흙 토"
      ],
      "answer": "임금 왕",
      "hint": "하늘·땅·사람을 잇는 '임금 왕(王)'이에요!",
      "ttsKo": "임금님을 뜻하는 한자 '王'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "王"
      ]
    },
    {
      "id": "han_021",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h3",
      "tier": 5,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'형 형(兄)'과 짝을 이루는 동생(아우) 한자는 무엇일까요?",
      "choices": [
        "아우 제(弟)",
        "아비 부(父)",
        "어미 모(母)",
        "백성 민(民)"
      ],
      "answer": "아우 제(弟)",
      "hint": "형과 아우를 합쳐 '형제(兄弟)'라고 불러요!",
      "ttsKo": "'형 형(兄)'과 짝을 이루는 동생(아우) 한자는 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "兄",
        "弟"
      ]
    },
    {
      "id": "han_022",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h4",
      "tier": 5,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "사람이 양팔과 다리를 크게 벌리고 선 모양 한자 '大'의 뜻과 음은?",
      "choices": [
        "큰 대",
        "작을 소",
        "가운데 중",
        "위 상"
      ],
      "answer": "큰 대",
      "hint": "몸을 활짝 크게 벌린 모습이라 '큰 대(大)'예요!",
      "ttsKo": "사람이 양팔과 다리를 크게 벌리고 선 모양 한자 '大'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "大"
      ]
    },
    {
      "id": "han_023",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h4",
      "tier": 5,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "작은 알갱이 세 개로 작음을 나타낸 한자 '小'의 뜻과 음은?",
      "choices": [
        "작을 소",
        "큰 대",
        "많을 다",
        "적을 소"
      ],
      "answer": "작을 소",
      "hint": "'큰 대(大)'의 반대 뜻을 가진 '작을 소(小)'예요!",
      "ttsKo": "작은 알갱이 세 개로 작음을 나타낸 한자 '小'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "小"
      ]
    },
    {
      "id": "han_024",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'큰 대(大)'와 뜻이 서로 반대되는 상대 한자 짝꿍은?",
      "choices": [
        "작을 소(小)",
        "가운데 중(中)",
        "길 장(長)",
        "높을 고(高)"
      ],
      "answer": "작을 소(小)",
      "hint": "크고 작음을 합쳐 '대소(大小)'라고 해요!",
      "ttsKo": "'큰 대(大)'와 뜻이 서로 반대되는 상대 한자 짝꿍은?",
      "ttsEn": "",
      "hanjaChars": [
        "大",
        "小"
      ]
    },
    {
      "id": "han_025",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'물 수(水)'와 뜻이 서로 맞서는 상대 한자 짝꿍은?",
      "choices": [
        "불 화(火)",
        "나무 목(木)",
        "메 산(山)",
        "흙 토(土)"
      ],
      "answer": "불 화(火)",
      "hint": "물과 불을 나란히 묶어 '수화(水火)'라고 해요!",
      "ttsKo": "'물 수(水)'와 뜻이 서로 맞서는 상대 한자 짝꿍은?",
      "ttsEn": "",
      "hanjaChars": [
        "水",
        "火"
      ]
    },
    {
      "id": "han_026",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h4",
      "tier": 6,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "해가 떠오르는 쪽인 동쪽을 나타내는 한자 '東'의 뜻과 음은?",
      "choices": [
        "동녘 동",
        "서녘 서",
        "남녘 남",
        "북녘 북"
      ],
      "answer": "동녘 동",
      "hint": "나무(木) 뒤로 해(日)가 떠오르는 모습을 합친 '동녘 동(東)'이에요!",
      "ttsKo": "해가 떠오르는 쪽인 동쪽을 나타내는 한자 '東'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "東"
      ]
    },
    {
      "id": "han_027",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'동녘 동(東)'과 마주 보는 반대쪽 방향 한자는?",
      "choices": [
        "서녘 서(西)",
        "남녘 남(南)",
        "가운데 중(中)",
        "바깥 외(外)"
      ],
      "answer": "서녘 서(西)",
      "hint": "동쪽과 서쪽을 합쳐 '동서(東西)'라고 불러요!",
      "ttsKo": "'동녘 동(東)'과 마주 보는 반대쪽 방향 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "東",
        "西"
      ]
    },
    {
      "id": "han_028",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'남녘 남(南)'과 반대 방향을 나타내는 짝꿍 한자는?",
      "choices": [
        "북녘 북(北)",
        "동녘 동(東)",
        "안 내(內)",
        "위 상(上)"
      ],
      "answer": "북녘 북(北)",
      "hint": "남쪽과 북쪽을 합쳐 '남북(南北)'이라고 해요!",
      "ttsKo": "'남녘 남(南)'과 반대 방향을 나타내는 짝꿍 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "南",
        "北"
      ]
    },
    {
      "id": "han_029",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h4",
      "tier": 6,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "한가운데를 세로줄이 꿰뚫고 있는 한자 '中'의 뜻과 음은?",
      "choices": [
        "가운데 중",
        "바깥 외",
        "입 구",
        "날 일"
      ],
      "answer": "가운데 중",
      "hint": "네모의 정가운데를 가리키는 '가운데 중(中)'이에요!",
      "ttsKo": "한가운데를 세로줄이 꿰뚫고 있는 한자 '中'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "中"
      ]
    },
    {
      "id": "han_030",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h4",
      "tier": 6,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "집이나 교실의 바깥을 뜻하는 한자 '外'의 뜻과 음은?",
      "choices": [
        "바깥 외",
        "가운데 중",
        "안 내",
        "문 문"
      ],
      "answer": "바깥 외",
      "hint": "외출(外出), 야외 할 때 쓰는 '바깥 외(外)'예요!",
      "ttsKo": "집이나 교실의 바깥을 뜻하는 한자 '外'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "外"
      ]
    },
    {
      "id": "han_031",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h5",
      "tier": 6,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "배우고 익힌다는 뜻의 한자 '學'의 뜻과 음은?",
      "choices": [
        "배울 학",
        "학교 교",
        "가르칠 교",
        "글월 문"
      ],
      "answer": "배울 학",
      "hint": "학생(學生), 학교(學校)에 들어가는 '배울 학(學)'이에요!",
      "ttsKo": "배우고 익힌다는 뜻의 한자 '學'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "學"
      ]
    },
    {
      "id": "han_032",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h5",
      "tier": 6,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "한국 표준 자형 '敎(가르칠 교)'가 들어간 '교실(敎室)'은 무슨 뜻일까요?",
      "choices": [
        "선생님과 함께 배우고 공부하는 방",
        "운동을 하는 넓은 운동장",
        "버스를 기다리는 정류장",
        "과일을 파는 가게"
      ],
      "answer": "선생님과 함께 배우고 공부하는 방",
      "hint": "가르칠 교(敎) + 집 실(室)이 만나 공부하는 교실을 뜻해요!",
      "ttsKo": "한국 표준 자형 '敎(가르칠 교)'가 들어간 '교실(敎室)'은 무슨 뜻일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "敎",
        "室"
      ]
    },
    {
      "id": "han_033",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h5",
      "tier": 7,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "우리가 매일 즐겁게 다니는 배움터 '學校'는 어떻게 읽을까요?",
      "choices": [
        "학교",
        "교실",
        "학원",
        "학생"
      ],
      "answer": "학교",
      "hint": "배울 학(學) + 학교 교(校)가 만나 '학교'라고 읽어요!",
      "ttsKo": "우리가 매일 즐겁게 다니는 배움터 '學校'는 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "學",
        "校"
      ]
    },
    {
      "id": "han_034",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h5",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "양쪽으로 여닫는 문 모양을 그대로 본뜬 한자 '門'의 뜻과 음은?",
      "choices": [
        "문 문",
        "집 실",
        "학교 교",
        "입 구"
      ],
      "answer": "문 문",
      "hint": "대문이나 교문처럼 양쪽 문짝을 그린 '문 문(門)'이에요!",
      "ttsKo": "양쪽으로 여닫는 문 모양을 그대로 본뜬 한자 '門'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "門"
      ]
    },
    {
      "id": "han_035",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h5",
      "tier": 7,
      "domain": "획수·필순",
      "pokeType": "고스트",
      "question": "한자 '大(큰 대)'는 모두 몇 획으로 쓸까요?",
      "choices": [
        "3획",
        "2획",
        "4획",
        "5획"
      ],
      "answer": "3획",
      "hint": "가로획(一) → 왼쪽 삐침(丿) → 오른쪽 파임(乀) 순서로 모두 3획이에요!",
      "ttsKo": "한자 '大(큰 대)'는 모두 몇 획으로 쓸까요?",
      "ttsEn": "",
      "hanjaChars": [
        "大"
      ]
    },
    {
      "id": "han_036",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h6",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "우리나라 이름을 나타내는 한자 '韓'의 뜻과 음은?",
      "choices": [
        "한국 한(나라 한)",
        "나라 국",
        "군사 군",
        "백성 민"
      ],
      "answer": "한국 한(나라 한)",
      "hint": "대한민국(大韓民國)에 들어가는 자랑스러운 '한국 한(韓)'이에요!",
      "ttsKo": "우리나라 이름을 나타내는 한자 '韓'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "韓"
      ]
    },
    {
      "id": "han_037",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h6",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "성벽으로 둘러싸인 나라를 뜻하는 한자 '國'의 뜻과 음은?",
      "choices": [
        "나라 국",
        "한국 한",
        "임금 왕",
        "가운데 중"
      ],
      "answer": "나라 국",
      "hint": "국기, 애국가 할 때 쓰는 '나라 국(國)'이에요!",
      "ttsKo": "성벽으로 둘러싸인 나라를 뜻하는 한자 '國'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "國"
      ]
    },
    {
      "id": "han_038",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "우리나라를 두 글자 한자어로 쓴 '韓國'의 바른 독음은?",
      "choices": [
        "한국",
        "민국",
        "대한",
        "외국"
      ],
      "answer": "한국",
      "hint": "한국 한(韓) + 나라 국(國) = '한국'이에요!",
      "ttsKo": "우리나라를 두 글자 한자어로 쓴 '韓國'의 바른 독음은?",
      "ttsEn": "",
      "hanjaChars": [
        "韓",
        "國"
      ]
    },
    {
      "id": "han_039",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h6",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "한국 표준 자형으로 쓴 푸른 하늘빛 한자 '靑'의 뜻과 음은?",
      "choices": [
        "푸를 청",
        "흰 백",
        "붉을 적",
        "검을 흑"
      ],
      "answer": "푸를 청",
      "hint": "맑고 푸른 색을 뜻하는 '푸를 청(靑)'이에요!",
      "ttsKo": "한국 표준 자형으로 쓴 푸른 하늘빛 한자 '靑'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "靑"
      ]
    },
    {
      "id": "han_040",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h6",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "하얀 눈이나 흰 구름의 색을 뜻하는 한자 '白'의 뜻과 음은?",
      "choices": [
        "흰 백",
        "푸를 청",
        "날 일",
        "일백 백"
      ],
      "answer": "흰 백",
      "hint": "백구(하얀 강아지), 백지 할 때 쓰는 '흰 백(白)'이에요!",
      "ttsKo": "하얀 눈이나 흰 구름의 색을 뜻하는 한자 '白'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "白"
      ]
    },
    {
      "id": "han_041",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "푸른색과 흰색을 나란히 일컫는 한자어 '靑白'에 들어간 두 색깔은?",
      "choices": [
        "파란색(푸른색)과 하얀색",
        "빨간색과 노란색",
        "검은색과 보라색",
        "주황색과 분홍색"
      ],
      "answer": "파란색(푸른색)과 하얀색",
      "hint": "푸를 청(靑)과 흰 백(白)이 합쳐진 말이에요!",
      "ttsKo": "푸른색과 흰색을 나란히 일컫는 한자어 '靑白'에 들어간 두 색깔은?",
      "ttsEn": "",
      "hanjaChars": [
        "靑",
        "白"
      ]
    },
    {
      "id": "han_042",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h7",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "'大韓民國' 네 글자를 소리 내어 바르게 읽은 것은?",
      "choices": [
        "대한민국",
        "한국민대",
        "대한제국",
        "우리나라"
      ],
      "answer": "대한민국",
      "hint": "큰 대(大) · 한국 한(韓) · 백성 민(民) · 나라 국(國) = 대한민국!",
      "ttsKo": "'大韓民國' 네 글자를 소리 내어 바르게 읽은 것은?",
      "ttsEn": "",
      "hanjaChars": [
        "大",
        "韓",
        "民",
        "國"
      ]
    },
    {
      "id": "han_043",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '家'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "집 가",
        "학교 교",
        "나라 국",
        "문 문"
      ],
      "answer": "집 가",
      "hint": "지붕 아래 가족이 모여 사는 '집 가(家)'예요!",
      "ttsKo": "[준7급] 한자 '家'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "家"
      ]
    },
    {
      "id": "han_044",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '男'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "사내 남",
        "계집 녀",
        "아들 자",
        "사람 인"
      ],
      "answer": "사내 남",
      "hint": "밭(田)에서 힘(力)을 쓰는 '사내 남(男)'이에요!",
      "ttsKo": "[준7급] 한자 '男'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "男"
      ]
    },
    {
      "id": "han_045",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '子'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "아들 자",
        "어미 모",
        "아우 제",
        "임금 왕"
      ],
      "answer": "아들 자",
      "hint": "두 팔을 벌린 어린아이 모양인 '아들 자(子)'예요!",
      "ttsKo": "[준7급] 한자 '子'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "子"
      ]
    },
    {
      "id": "han_046",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '手'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "손 수",
        "발 족",
        "입 구",
        "마음 심"
      ],
      "answer": "손 수",
      "hint": "다섯 손가락 모양을 본뜬 '손 수(手)'예요!",
      "ttsKo": "[준7급] 한자 '手'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "手"
      ]
    },
    {
      "id": "han_047",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '足'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "발 족",
        "손 수",
        "무릎 각",
        "설 립"
      ],
      "answer": "발 족",
      "hint": "무릎과 발바닥 모양을 합친 '발 족(足)'이에요!",
      "ttsKo": "[준7급] 한자 '足'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "足"
      ]
    },
    {
      "id": "han_048",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '上'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "윗 상",
        "아래 하",
        "가운데 중",
        "왼 좌"
      ],
      "answer": "윗 상",
      "hint": "기준선보다 위쪽을 가리키는 '윗 상(上)'이에요!",
      "ttsKo": "[준7급] 한자 '上'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "上"
      ]
    },
    {
      "id": "han_049",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '下'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "아래 하",
        "윗 상",
        "바깥 외",
        "안 내"
      ],
      "answer": "아래 하",
      "hint": "기준선보다 아래쪽을 가리키는 '아래 하(下)'예요!",
      "ttsKo": "[준7급] 한자 '下'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "下"
      ]
    },
    {
      "id": "han_050",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '左'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "왼 좌",
        "오른 우",
        "앞 전",
        "뒤 후"
      ],
      "answer": "왼 좌",
      "hint": "왼손에 공구(工)를 쥔 모습에서 온 '왼 좌(左)'예요!",
      "ttsKo": "[준7급] 한자 '左'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "左"
      ]
    },
    {
      "id": "han_051",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '右'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "오른 우",
        "왼 좌",
        "윗 상",
        "아래 하"
      ],
      "answer": "오른 우",
      "hint": "오른손과 입(口)이 합쳐진 '오른 우(右)'예요!",
      "ttsKo": "[준7급] 한자 '右'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "右"
      ]
    },
    {
      "id": "han_052",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '立'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "설 립",
        "날 생",
        "살 활",
        "움직일 동"
      ],
      "answer": "설 립",
      "hint": "땅 위에 두 다리로 반듯하게 선 모습인 '설 립(立)'이에요!",
      "ttsKo": "[준7급] 한자 '立'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "立"
      ]
    },
    {
      "id": "han_053",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '孝'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "효도 효",
        "배울 학",
        "가르칠 교",
        "편안 안"
      ],
      "answer": "효도 효",
      "hint": "어른(老)을 아들(子)이 잘 모시는 '효도 효(孝)'예요!",
      "ttsKo": "[준7급] 한자 '孝'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "孝"
      ]
    },
    {
      "id": "han_054",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "위와 아래를 뜻할 때, '윗 상(上)'의 반대 뜻을 가진 한자는?",
      "choices": [
        "下 (아래 하)",
        "中 (가운데 중)",
        "左 (왼 좌)",
        "外 (바깥 외)"
      ],
      "answer": "下 (아래 하)",
      "hint": "'위(上)'의 반대는 '아래 하(下)'예요! 합치면 상하(上下)가 돼요.",
      "ttsKo": "위와 아래를 뜻할 때, '윗 상(上)'의 반대 뜻을 가진 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "上",
        "下"
      ]
    },
    {
      "id": "han_055",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "왼쪽과 오른쪽을 뜻할 때, '왼 좌(左)'와 짝을 이루는 반대 한자는?",
      "choices": [
        "右 (오른 우)",
        "前 (앞 전)",
        "後 (뒤 후)",
        "內 (안 내)"
      ],
      "answer": "右 (오른 우)",
      "hint": "'왼쪽(左)'의 반대는 '오른쪽(右)'! 합쳐서 좌우(左右)라고 해요.",
      "ttsKo": "왼쪽과 오른쪽을 뜻할 때, '왼 좌(左)'와 짝을 이루는 반대 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "左",
        "右"
      ]
    },
    {
      "id": "han_056",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'앞 전(前)'의 반대 뜻을 가진 '뒤 후' 한자는 무엇일까요?",
      "choices": [
        "後",
        "先",
        "內",
        "下"
      ],
      "answer": "後",
      "hint": "앞(前)과 뒤(後)를 합쳐 전후(前後)라고 읽어요!",
      "ttsKo": "'앞 전(前)'의 반대 뜻을 가진 '뒤 후' 한자는 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "前",
        "後"
      ]
    },
    {
      "id": "han_057",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'바깥 외(外)'와 반대되는 '안 내' 한자는 무엇일까요?",
      "choices": [
        "內",
        "間",
        "家",
        "門"
      ],
      "answer": "內",
      "hint": "안(內)과 밖(外)을 합치면 내외(內外)·실내외가 돼요!",
      "ttsKo": "'바깥 외(外)'와 반대되는 '안 내' 한자는 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "內",
        "外"
      ]
    },
    {
      "id": "han_058",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "손과 발을 함께 부르는 한자어 '手足'은 어떻게 읽을까요?",
      "choices": [
        "수족",
        "족수",
        "수구",
        "남녀"
      ],
      "answer": "수족",
      "hint": "손 수(手) + 발 족(足) = 수족(手足)이에요!",
      "ttsKo": "손과 발을 함께 부르는 한자어 '手足'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "手",
        "足"
      ]
    },
    {
      "id": "han_059",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "우리 집 식구를 뜻하는 '家口'나 '家族'에 들어가는 '家'의 뜻은?",
      "choices": [
        "집",
        "학교",
        "바다",
        "하늘"
      ],
      "answer": "집",
      "hint": "'집 가(家)'는 가족이 함께 사는 집을 뜻해요!",
      "ttsKo": "우리 집 식구를 뜻하는 '家口'나 '家族'에 들어가는 '家'의 뜻은?",
      "ttsEn": "",
      "hanjaChars": [
        "家"
      ]
    },
    {
      "id": "han_060",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "스스로의 힘으로 해낸다는 뜻의 '自立(자립)'에서 '自'의 뜻과 음은?",
      "choices": [
        "스스로 자",
        "아들 자",
        "글자 자",
        "마당 장"
      ],
      "answer": "스스로 자",
      "hint": "'스스로 자(自)' + '설 립(立)' = 스스로 서는 자립이에요!",
      "ttsKo": "스스로의 힘으로 해낸다는 뜻의 '自立(자립)'에서 '自'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "自",
        "立"
      ]
    },
    {
      "id": "han_061",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h8",
      "tier": 7,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "방과 방의 사이나 시간의 틈을 뜻하는 '時間(시간)'의 '間' 뜻과 음은?",
      "choices": [
        "사이 간",
        "문 문",
        "안 내",
        "성 성"
      ],
      "answer": "사이 간",
      "hint": "문(門) 틈으로 해(日)가 비치는 '사이 간(間)'이에요!",
      "ttsKo": "방과 방의 사이나 시간의 틈을 뜻하는 '時間(시간)'의 '間' 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "間"
      ]
    },
    {
      "id": "han_062",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '江'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "강 강",
        "바다 해",
        "물 수",
        "내 천"
      ],
      "answer": "강 강",
      "hint": "물(氵)이 넓게 흐르는 큰 '강 강(江)'이에요!",
      "ttsKo": "[준7급] 한자 '江'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "江"
      ]
    },
    {
      "id": "han_063",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '海'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "바다 해",
        "강 강",
        "메 산",
        "빌 공"
      ],
      "answer": "바다 해",
      "hint": "물(氵)이 늘(每) 가득 모여 있는 넓은 '바다 해(海)'예요!",
      "ttsKo": "[준7급] 한자 '海'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "海"
      ]
    },
    {
      "id": "han_064",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '空'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "빌 공",
        "장인 공",
        "기운 기",
        "하늘 천"
      ],
      "answer": "빌 공",
      "hint": "텅 비어 있는 공간과 하늘을 뜻하는 '빌 공(空)'이에요!",
      "ttsKo": "[준7급] 한자 '空'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "空"
      ]
    },
    {
      "id": "han_065",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '電'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "번개 전",
        "비 우",
        "불 화",
        "기운 기"
      ],
      "answer": "번개 전",
      "hint": "구름 속에서 번쩍 치는 '번개 전(電)'! 전기·전화에 쓰여요.",
      "ttsKo": "[준7급] 한자 '電'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "電"
      ]
    },
    {
      "id": "han_066",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '時'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "때 시",
        "날 일",
        "낮 오",
        "해 년"
      ],
      "answer": "때 시",
      "hint": "해(日)의 움직임으로 시간을 재는 '때 시(時)'예요!",
      "ttsKo": "[준7급] 한자 '時'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "時"
      ]
    },
    {
      "id": "han_067",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '午'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "낮 오",
        "때 시",
        "저녁 석",
        "아침 조"
      ],
      "answer": "낮 오",
      "hint": "해가 가장 높이 뜬 정오(正午)를 뜻하는 '낮 오(午)'예요!",
      "ttsKo": "[준7급] 한자 '午'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "午"
      ]
    },
    {
      "id": "han_068",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '食'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "밥 식",
        "물 수",
        "물건 물",
        "집 가"
      ],
      "answer": "밥 식",
      "hint": "맛있는 밥과 음식을 먹는 '밥 식(食)·먹을 식'이에요!",
      "ttsKo": "[준7급] 한자 '食'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "食"
      ]
    },
    {
      "id": "han_069",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '車'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "수레 차",
        "길 도",
        "장인 공",
        "마당 장"
      ],
      "answer": "수레 차",
      "hint": "바퀴 달린 수레와 자동차를 본뜬 '수레 차(車)'예요!",
      "ttsKo": "[준7급] 한자 '車'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "車"
      ]
    },
    {
      "id": "han_070",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '道'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "길 도",
        "저자 시",
        "마당 장",
        "강 강"
      ],
      "answer": "길 도",
      "hint": "사람과 차가 다니는 '길 도(道)'! 도로·인도에 쓰여요.",
      "ttsKo": "[준7급] 한자 '道'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "道"
      ]
    },
    {
      "id": "han_071",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '農'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "농사 농",
        "장인 공",
        "백성 민",
        "마을 촌"
      ],
      "answer": "농사 농",
      "hint": "논밭에서 곡식을 가꾸는 '농사 농(農)'이에요!",
      "ttsKo": "[준7급] 한자 '農'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "農"
      ]
    },
    {
      "id": "han_072",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "우리가 숨 쉬는 '空氣'는 어떻게 읽을까요?",
      "choices": [
        "공기",
        "전기",
        "일기",
        "국기"
      ],
      "answer": "공기",
      "hint": "빌 공(空) + 기운 기(氣) = 숨 쉬는 '공기'예요!",
      "ttsKo": "우리가 숨 쉬는 '空氣'는 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "空",
        "氣"
      ]
    },
    {
      "id": "han_073",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "낮 12시보다 앞선 아침 시간을 뜻하는 '午前(오전)'은 무슨 뜻일까요?",
      "choices": [
        "낮 12시 이전",
        "낮 12시 이후",
        "한밤중",
        "어제 저녁"
      ],
      "answer": "낮 12시 이전",
      "hint": "낮 오(午) + 앞 전(前) = 정오보다 앞선 아침 시간이에요!",
      "ttsKo": "낮 12시보다 앞선 아침 시간을 뜻하는 '午前(오전)'은 무슨 뜻일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "午",
        "前"
      ]
    },
    {
      "id": "han_074",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "날마다 빠짐없이라는 뜻의 한자어 '每日'은 어떻게 읽을까요?",
      "choices": [
        "매일",
        "매월",
        "금일",
        "내일"
      ],
      "answer": "매일",
      "hint": "매양 매(每) + 날 일(日) = 날마다 '매일'이에요!",
      "ttsKo": "날마다 빠짐없이라는 뜻의 한자어 '每日'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "每",
        "日"
      ]
    },
    {
      "id": "han_075",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "물건을 사고파는 장터인 '市場(시장)'에 들어가는 두 한자의 뜻은?",
      "choices": [
        "저자 시 · 마당 장",
        "길 도 · 마당 장",
        "수레 차 · 길 도",
        "장인 공 · 마당 장"
      ],
      "answer": "저자 시 · 마당 장",
      "hint": "사람이 모이는 저자(市)와 넓은 마당(場)이 합쳐진 말이에요!",
      "ttsKo": "물건을 사고파는 장터인 '市場(시장)'에 들어가는 두 한자의 뜻은?",
      "ttsEn": "",
      "hanjaChars": [
        "市",
        "場"
      ]
    },
    {
      "id": "han_076",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h9",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "스스로 움직이는 차를 뜻하는 '自動車(자동차)'에서 '物'이 아닌 바퀴 달린 한자는?",
      "choices": [
        "車 (수레 차)",
        "物 (물건 물)",
        "工 (장인 공)",
        "電 (번개 전)"
      ],
      "answer": "車 (수레 차)",
      "hint": "스스로 자(自) + 움직일 동(動) + 수레 차(車) = 자동차예요!",
      "ttsKo": "스스로 움직이는 차를 뜻하는 '自動車(자동차)'에서 '物'이 아닌 바퀴 달린 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "自",
        "動",
        "車"
      ]
    },
    {
      "id": "han_077",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '記'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "기록할 기",
        "이름 명",
        "말씀 화",
        "대답 답"
      ],
      "answer": "기록할 기",
      "hint": "말씀(言)을 잊지 않게 적어 두는 '기록할 기(記)'예요!",
      "ttsKo": "[준7급] 한자 '記'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "記"
      ]
    },
    {
      "id": "han_078",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '名'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "이름 명",
        "성 성",
        "사람 인",
        "일 사"
      ],
      "answer": "이름 명",
      "hint": "저녁(夕)에 입(口)으로 불러 확인하던 '이름 명(名)'이에요!",
      "ttsKo": "[준7급] 한자 '名'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "名"
      ]
    },
    {
      "id": "han_079",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '話'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "말씀 화",
        "대답 답",
        "기록할 기",
        "배울 학"
      ],
      "answer": "말씀 화",
      "hint": "정답게 이야기를 나누는 '말씀 화(話)'! 대화·동화에 쓰여요.",
      "ttsKo": "[준7급] 한자 '話'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "話"
      ]
    },
    {
      "id": "han_080",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '答'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "대답 답",
        "물을 문",
        "말씀 화",
        "일 사"
      ],
      "answer": "대답 답",
      "hint": "물음에 알맞게 답하는 '대답 답(答)'! 정답(正答)에 쓰여요.",
      "ttsKo": "[준7급] 한자 '答'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "答"
      ]
    },
    {
      "id": "han_081",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '動'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "움직일 동",
        "힘 력",
        "설 립",
        "살 활"
      ],
      "answer": "움직일 동",
      "hint": "무거운 것(重)을 힘(力)주어 옮기는 '움직일 동(動)'이에요!",
      "ttsKo": "[준7급] 한자 '動'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "動"
      ]
    },
    {
      "id": "han_082",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '力'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "힘 력",
        "장인 공",
        "사내 남",
        "일 사"
      ],
      "answer": "힘 력",
      "hint": "팔의 불끈 솟은 근육 모양을 본뜬 '힘 력(力)'이에요!",
      "ttsKo": "[준7급] 한자 '力'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "力"
      ]
    },
    {
      "id": "han_083",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '活'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "살 활",
        "날 생",
        "편안 안",
        "움직일 동"
      ],
      "answer": "살 활",
      "hint": "물(氵)이 흘러 생기가 도는 '살 활(活)'! 생활·활동에 쓰여요.",
      "ttsKo": "[준7급] 한자 '活'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "活"
      ]
    },
    {
      "id": "han_084",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '安'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "편안 안",
        "평평할 평",
        "바를 정",
        "온전 전"
      ],
      "answer": "편안 안",
      "hint": "집(宀) 안에 있어 마음이 놓이는 '편안 안(安)'이에요!",
      "ttsKo": "[준7급] 한자 '安'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "安"
      ]
    },
    {
      "id": "han_085",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '正'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "바를 정",
        "곧을 직",
        "평평할 평",
        "모 방"
      ],
      "answer": "바를 정",
      "hint": "비뚤어지지 않고 옳은 '바를 정(正)'! 정직·정답에 쓰여요.",
      "ttsKo": "[준7급] 한자 '正'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "正"
      ]
    },
    {
      "id": "han_086",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[준7급] 한자 '不'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "아닐 불",
        "온전 전",
        "인간 세",
        "먼저 선"
      ],
      "answer": "아닐 불",
      "hint": "'그것이 아니다'라고 부정할 때 쓰는 '아닐 불(不/부)'이에요!",
      "ttsKo": "[준7급] 한자 '不'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "不"
      ]
    },
    {
      "id": "han_087",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "문제의 바른 답을 뜻하는 한자어 '正答'은 어떻게 읽을까요?",
      "choices": [
        "정답",
        "오답",
        "문답",
        "대화"
      ],
      "answer": "정답",
      "hint": "바를 정(正) + 대답 답(答) = 바른 답 '정답'이에요!",
      "ttsKo": "문제의 바른 답을 뜻하는 한자어 '正答'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "正",
        "答"
      ]
    },
    {
      "id": "han_088",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "위험하지 않고 편안하며 온전하다는 뜻의 '安全'은 어떻게 읽을까요?",
      "choices": [
        "안전",
        "안심",
        "평안",
        "전력"
      ],
      "answer": "안전",
      "hint": "편안 안(安) + 온전 전(全) = '안전(安全)'이에요!",
      "ttsKo": "위험하지 않고 편안하며 온전하다는 뜻의 '安全'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "安",
        "全"
      ]
    },
    {
      "id": "han_089",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "거짓이 없이 마음이 바르고 곧다는 뜻의 '正直'은 어떻게 읽을까요?",
      "choices": [
        "정직",
        "평화",
        "성명",
        "활동"
      ],
      "answer": "정직",
      "hint": "바를 정(正) + 곧을 직(直) = 바르고 곧은 '정직'이에요!",
      "ttsKo": "거짓이 없이 마음이 바르고 곧다는 뜻의 '正直'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "正",
        "直"
      ]
    },
    {
      "id": "han_090",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "서울을 가로지르는 큰 강이자 한자(漢字)에도 쓰이는 '漢江'의 독음은?",
      "choices": [
        "한강",
        "청강",
        "대강",
        "해강"
      ],
      "answer": "한강",
      "hint": "한수 한(漢) + 강 강(江) = '한강'이에요!",
      "ttsKo": "서울을 가로지르는 큰 강이자 한자(漢字)에도 쓰이는 '漢江'의 독음은?",
      "ttsEn": "",
      "hanjaChars": [
        "漢",
        "江"
      ]
    },
    {
      "id": "han_091",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "하루에 있었던 일을 적어 두는 공책인 '日記(일기)'에 쓰인 '記'의 뜻은?",
      "choices": [
        "기록할 기",
        "기운 기",
        "기 기",
        "일어날 기"
      ],
      "answer": "기록할 기",
      "hint": "날 일(日) + 기록할 기(記) = 날마다 기록하는 일기예요!",
      "ttsKo": "하루에 있었던 일을 적어 두는 공책인 '日記(일기)'에 쓰인 '記'의 뜻은?",
      "ttsEn": "",
      "hanjaChars": [
        "日",
        "記"
      ]
    },
    {
      "id": "han_092",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h10",
      "tier": 8,
      "domain": "획수·필순",
      "pokeType": "고스트",
      "question": "'바를 정(正)' 한자는 모두 몇 획으로 쓸까요? (一 · 丨 · 一 · 丨 · 一)",
      "choices": [
        "5획",
        "4획",
        "6획",
        "3획"
      ],
      "answer": "5획",
      "hint": "위 가로획(1) → 가운데 세로(2) → 짧은 가로(3) → 왼쪽 세로(4) → 아래 긴 가로(5)로 총 5획이에요!",
      "ttsKo": "'바를 정(正)' 한자는 모두 몇 획으로 쓸까요? (一 · 丨 · 一 · 丨 · 一)",
      "ttsEn": "",
      "hanjaChars": [
        "正"
      ]
    },
    {
      "id": "han_093",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '春'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "봄 춘",
        "여름 하",
        "가을 추",
        "겨울 동"
      ],
      "answer": "봄 춘",
      "hint": "따뜻한 해(日) 아래 새싹이 돋아나는 '봄 춘(春)'이에요!",
      "ttsKo": "[7급] 한자 '春'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "春"
      ]
    },
    {
      "id": "han_094",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '夏'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "여름 하",
        "봄 춘",
        "가을 추",
        "겨울 동"
      ],
      "answer": "여름 하",
      "hint": "해가 뜨겁게 내리쬐는 계절인 '여름 하(夏)'예요!",
      "ttsKo": "[7급] 한자 '夏'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "夏"
      ]
    },
    {
      "id": "han_095",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '秋'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "가을 추",
        "봄 춘",
        "여름 하",
        "겨울 동"
      ],
      "answer": "가을 추",
      "hint": "벼(禾)가 불빛(火)처럼 노랗게 익는 '가을 추(秋)'예요!",
      "ttsKo": "[7급] 한자 '秋'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "秋"
      ]
    },
    {
      "id": "han_096",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '冬'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "겨울 동",
        "봄 춘",
        "여름 하",
        "가을 추"
      ],
      "answer": "겨울 동",
      "hint": "아래에 얼음(冫) 두 점이 얼어붙은 추운 '겨울 동(冬)'이에요!",
      "ttsKo": "[7급] 한자 '冬'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "冬"
      ]
    },
    {
      "id": "han_097",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '天'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "하늘 천",
        "땅 지",
        "사람 인",
        "큰 대"
      ],
      "answer": "하늘 천",
      "hint": "큰 사람(大) 머리 위 가장 높은 곳을 뜻하는 '하늘 천(天)'이에요!",
      "ttsKo": "[7급] 한자 '天'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "天"
      ]
    },
    {
      "id": "han_098",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '地'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "땅 지",
        "하늘 천",
        "흙 토",
        "바다 해"
      ],
      "answer": "땅 지",
      "hint": "흙(土)이 넓게 펼쳐진 대지를 뜻하는 '땅 지(地)'예요!",
      "ttsKo": "[7급] 한자 '地'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "地"
      ]
    },
    {
      "id": "han_099",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '川'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "내 천",
        "메 산",
        "물 수",
        "강 강"
      ],
      "answer": "내 천",
      "hint": "시냇물이 세 줄기로 졸졸 흐르는 모양인 '내 천(川)'이에요!",
      "ttsKo": "[7급] 한자 '川'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "川"
      ]
    },
    {
      "id": "han_100",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '林'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "수풀 림",
        "나무 목",
        "풀 초",
        "꽃 화"
      ],
      "answer": "수풀 림",
      "hint": "나무 목(木) 두 그루가 나란히 서서 우거진 '수풀 림(林)'이에요!",
      "ttsKo": "[7급] 한자 '林'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "林"
      ]
    },
    {
      "id": "han_101",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '草'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "풀 초",
        "꽃 화",
        "나무 목",
        "심을 식"
      ],
      "answer": "풀 초",
      "hint": "새싹(艹)이 일찍(早) 돋아나는 초록 '풀 초(草)'예요!",
      "ttsKo": "[7급] 한자 '草'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "草"
      ]
    },
    {
      "id": "han_102",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '花'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "꽃 화",
        "풀 초",
        "빛 색",
        "수풀 림"
      ],
      "answer": "꽃 화",
      "hint": "풀(艹)이 아름답게 변하여(化) 피어난 '꽃 화(花)'예요!",
      "ttsKo": "[7급] 한자 '花'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "花"
      ]
    },
    {
      "id": "han_103",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '百'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "일백 백",
        "일천 천",
        "일만 만",
        "열 십"
      ],
      "answer": "일백 백",
      "hint": "열(十)이 열 번 모인 숫자 100, '일백 백(百)'이에요!",
      "ttsKo": "[7급] 한자 '百'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "百"
      ]
    },
    {
      "id": "han_104",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '千'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "일천 천",
        "일백 백",
        "일만 만",
        "열 십"
      ],
      "answer": "일천 천",
      "hint": "백(百)이 열 번 모인 숫자 1,000, '일천 천(千)'이에요!",
      "ttsKo": "[7급] 한자 '千'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "千"
      ]
    },
    {
      "id": "han_105",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "봄·여름·가을·겨울 사계절을 순서대로 적은 한자어는 무엇일까요?",
      "choices": [
        "春夏秋冬 (춘하추동)",
        "春冬夏秋 (춘동하추)",
        "東西南北 (동서남북)",
        "天地山川 (천지산천)"
      ],
      "answer": "春夏秋冬 (춘하추동)",
      "hint": "봄 춘(春) → 여름 하(夏) → 가을 추(秋) → 겨울 동(冬) 순서예요!",
      "ttsKo": "봄·여름·가을·겨울 사계절을 순서대로 적은 한자어는 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "春",
        "夏",
        "秋",
        "冬"
      ]
    },
    {
      "id": "han_106",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "'하늘 천(天)'과 짝을 이루며 반대되는 '땅'을 뜻하는 7급 한자는?",
      "choices": [
        "地 (땅 지)",
        "山 (메 산)",
        "川 (내 천)",
        "海 (바다 해)"
      ],
      "answer": "地 (땅 지)",
      "hint": "하늘(天)과 땅(地)을 합쳐 '천지(天地)'라고 해요!",
      "ttsKo": "'하늘 천(天)'과 짝을 이루며 반대되는 '땅'을 뜻하는 7급 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "天",
        "地"
      ]
    },
    {
      "id": "han_107",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "나무와 풀을 심고 가꾸는 생물을 뜻하는 '植物'은 어떻게 읽을까요?",
      "choices": [
        "식물",
        "동물",
        "생물",
        "화초"
      ],
      "answer": "식물",
      "hint": "심을 식(植) + 물건 물(物) = '식물(植物)'이에요!",
      "ttsKo": "나무와 풀을 심고 가꾸는 생물을 뜻하는 '植物'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "植",
        "物"
      ]
    },
    {
      "id": "han_108",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h11",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "해가 지는 저녁 무렵을 뜻하는 '夕'의 뜻과 음은 무엇일까요?",
      "choices": [
        "저녁 석",
        "달 월",
        "낮 오",
        "빛 색"
      ],
      "answer": "저녁 석",
      "hint": "달(月)이 막 떠오르기 시작하는 '저녁 석(夕)'! 추석(秋夕)에 쓰여요.",
      "ttsKo": "해가 지는 저녁 무렵을 뜻하는 '夕'의 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "夕"
      ]
    },
    {
      "id": "han_109",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '口'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "입 구",
        "낯 면",
        "마음 심",
        "손 수"
      ],
      "answer": "입 구",
      "hint": "말하고 밥을 먹는 입 모양을 그대로 본뜬 '입 구(口)'예요!",
      "ttsKo": "[7급] 한자 '口'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "口"
      ]
    },
    {
      "id": "han_110",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '心'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "마음 심",
        "목숨 명",
        "몸 신",
        "힘 력"
      ],
      "answer": "마음 심",
      "hint": "가슴속에서 콩닥콩닥 뛰는 심장과 생각을 본뜬 '마음 심(心)'이에요!",
      "ttsKo": "[7급] 한자 '心'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "心"
      ]
    },
    {
      "id": "han_111",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '祖'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "할아비 조",
        "아비 부",
        "늙을 로",
        "주인 주"
      ],
      "answer": "할아비 조",
      "hint": "할아버지와 조상님을 뜻하는 '할아비 조(祖)'! 조부모에 쓰여요.",
      "ttsKo": "[7급] 한자 '祖'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "祖"
      ]
    },
    {
      "id": "han_112",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '老'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "늙을 로",
        "적을 소",
        "클 대",
        "긴 장"
      ],
      "answer": "늙을 로",
      "hint": "지팡이를 짚은 어르신의 모습인 '늙을 로(老)'! 노인·경로에 쓰여요.",
      "ttsKo": "[7급] 한자 '老'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "老"
      ]
    },
    {
      "id": "han_113",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '主'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "주인 주",
        "살 주",
        "임금 왕",
        "마을 리"
      ],
      "answer": "주인 주",
      "hint": "촛대 위 불꽃처럼 중심이 되는 '주인 주(主)'예요!",
      "ttsKo": "[7급] 한자 '主'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "主"
      ]
    },
    {
      "id": "han_114",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '村'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "마을 촌",
        "고을 읍",
        "골 동",
        "집 가"
      ],
      "answer": "마을 촌",
      "hint": "나무(木)가 모여 있는 정겨운 시골 '마을 촌(村)'이에요!",
      "ttsKo": "[7급] 한자 '村'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "村"
      ]
    },
    {
      "id": "han_115",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '入'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "들 입",
        "날 출",
        "올 래",
        "오를 등"
      ],
      "answer": "들 입",
      "hint": "안으로 쏙 들어가는 모양의 '들 입(入)'! 입구·입학에 쓰여요.",
      "ttsKo": "[7급] 한자 '入'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "入"
      ]
    },
    {
      "id": "han_116",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '出'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "날 출",
        "들 입",
        "설 립",
        "메 산"
      ],
      "answer": "날 출",
      "hint": "새싹이 땅 밖으로 솟아 나오는 '날 출(出)'! 출구·출발에 쓰여요.",
      "ttsKo": "[7급] 한자 '出'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "出"
      ]
    },
    {
      "id": "han_117",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '來'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "올 래",
        "날 출",
        "들 입",
        "쉴 휴"
      ],
      "answer": "올 래",
      "hint": "이쪽으로 다가오는 '올 래(來/내)'! 미래·내일(來日)에 쓰여요.",
      "ttsKo": "[7급] 한자 '來'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "來"
      ]
    },
    {
      "id": "han_118",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '登'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "오를 등",
        "날 출",
        "설 립",
        "움직일 동"
      ],
      "answer": "오를 등",
      "hint": "두 발로 높은 곳에 올라가는 '오를 등(登)'! 등산(登山)에 쓰여요.",
      "ttsKo": "[7급] 한자 '登'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "登"
      ]
    },
    {
      "id": "han_119",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '休'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "쉴 휴",
        "수풀 림",
        "나무 목",
        "살 주"
      ],
      "answer": "쉴 휴",
      "hint": "사람(亻)이 나무(木) 그늘에 기대어 편히 쉬는 '쉴 휴(休)'예요!",
      "ttsKo": "[7급] 한자 '休'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "休"
      ]
    },
    {
      "id": "han_120",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "건물의 들어가는 문과 나가는 문인 '出入(출입)'에서 '들 입(入)'의 반대 한자는?",
      "choices": [
        "出 (날 출)",
        "來 (올 래)",
        "登 (오를 등)",
        "住 (살 주)"
      ],
      "answer": "出 (날 출)",
      "hint": "들어가다(入) ↔ 나가다(出)! 출구(出口)와 입구(入口)를 떠올려 보세요.",
      "ttsKo": "건물의 들어가는 문과 나가는 문인 '出入(출입)'에서 '들 입(入)'의 반대 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "出",
        "入"
      ]
    },
    {
      "id": "han_121",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "산에 오르는 운동을 뜻하는 한자어 '登山'은 어떻게 읽을까요?",
      "choices": [
        "등산",
        "하산",
        "강산",
        "산천"
      ],
      "answer": "등산",
      "hint": "오를 등(登) + 메 산(山) = 산에 오르는 '등산'이에요!",
      "ttsKo": "산에 오르는 운동을 뜻하는 한자어 '登山'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "登",
        "山"
      ]
    },
    {
      "id": "han_122",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "학교나 일을 쉬는 날을 뜻하는 '休日'은 어떻게 읽을까요?",
      "choices": [
        "휴일",
        "평일",
        "매일",
        "생일"
      ],
      "answer": "휴일",
      "hint": "쉴 휴(休) + 날 일(日) = 편히 쉬는 날 '휴일'이에요!",
      "ttsKo": "학교나 일을 쉬는 날을 뜻하는 '休日'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "休",
        "日"
      ]
    },
    {
      "id": "han_123",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "사람이 살고 있는 집의 위치를 적은 '住所(주소)'에서 '住'의 뜻과 음은?",
      "choices": [
        "살 주",
        "주인 주",
        "낮 주",
        "고을 읍"
      ],
      "answer": "살 주",
      "hint": "사람(亻)이 머물러 사는 '살 주(住)' + '바 소(所)' = 주소예요!",
      "ttsKo": "사람이 살고 있는 집의 위치를 적은 '住所(주소)'에서 '住'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "住",
        "所"
      ]
    },
    {
      "id": "han_124",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "우리 동네 '○○동·○○읍·○○리'에 쓰이는 마을 단위 한자가 아닌 것은?",
      "choices": [
        "色 (빛 색)",
        "洞 (골 동)",
        "邑 (고을 읍)",
        "里 (마을 리)"
      ],
      "answer": "色 (빛 색)",
      "hint": "동(洞)·읍(邑)·리(里)·촌(村)은 모두 마을과 고을을 나타내는 7급 한자예요!",
      "ttsKo": "우리 동네 '○○동·○○읍·○○리'에 쓰이는 마을 단위 한자가 아닌 것은?",
      "ttsEn": "",
      "hanjaChars": [
        "洞",
        "邑",
        "里"
      ]
    },
    {
      "id": "han_125",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h12",
      "tier": 9,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "소중한 목숨과 생명을 뜻하는 '生命(생명)'에서 '命'의 뜻과 음은?",
      "choices": [
        "목숨 명",
        "이름 명",
        "낯 면",
        "지아비 부"
      ],
      "answer": "목숨 명",
      "hint": "날 생(生) + 목숨 명(命) = 소중한 '생명'이에요!",
      "ttsKo": "소중한 목숨과 생명을 뜻하는 '生命(생명)'에서 '命'의 뜻과 음은?",
      "ttsEn": "",
      "hanjaChars": [
        "生",
        "命"
      ]
    },
    {
      "id": "han_126",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '歌'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "노래 가",
        "말씀 어",
        "물을 문",
        "글월 문"
      ],
      "answer": "노래 가",
      "hint": "입을 크게 벌려 신나게 부르는 '노래 가(歌)'! 동요·국가(國歌)에 쓰여요.",
      "ttsKo": "[7급] 한자 '歌'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "歌"
      ]
    },
    {
      "id": "han_127",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '文'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "글월 문",
        "글자 자",
        "말씀 어",
        "종이 지"
      ],
      "answer": "글월 문",
      "hint": "무늬와 글을 뜻하는 '글월 문(文)'! 문자·국문에 쓰여요.",
      "ttsKo": "[7급] 한자 '文'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "文"
      ]
    },
    {
      "id": "han_128",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '字'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "글자 자",
        "아들 자",
        "스스로 자",
        "글월 문"
      ],
      "answer": "글자 자",
      "hint": "집(宀) 안에서 아이(子)에게 가르치는 '글자 자(字)'예요!",
      "ttsKo": "[7급] 한자 '字'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "字"
      ]
    },
    {
      "id": "han_129",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '語'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "말씀 어",
        "말씀 화",
        "물을 문",
        "노래 가"
      ],
      "answer": "말씀 어",
      "hint": "우리가 쓰는 국어(國語)·영어·언어에 들어가는 '말씀 어(語)'예요!",
      "ttsKo": "[7급] 한자 '語'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "語"
      ]
    },
    {
      "id": "han_130",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '問'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "물을 문",
        "대답 답",
        "문 문",
        "들을 문"
      ],
      "answer": "물을 문",
      "hint": "문(門) 입구(口)에서 길을 물어보는 '물을 문(問)'! 질문·문제에 쓰여요.",
      "ttsKo": "[7급] 한자 '問'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "問"
      ]
    },
    {
      "id": "han_131",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '數'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "셈 수",
        "물 수",
        "손 수",
        "셈 산"
      ],
      "answer": "셈 수",
      "hint": "숫자를 세고 계산하는 수학(數學)의 '셈 수(數)'예요!",
      "ttsKo": "[7급] 한자 '數'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "數"
      ]
    },
    {
      "id": "han_132",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '紙'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "종이 지",
        "땅 지",
        "글자 자",
        "기 기"
      ],
      "answer": "종이 지",
      "hint": "글씨를 쓰고 색종이를 접는 '종이 지(紙)'! 편지·도화지에 쓰여요.",
      "ttsKo": "[7급] 한자 '紙'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "紙"
      ]
    },
    {
      "id": "han_133",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '旗'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "기 기",
        "기운 기",
        "기록할 기",
        "모 방"
      ],
      "answer": "기 기",
      "hint": "바람에 펄럭이는 태극기·국기(國旗)의 '기 기(旗)'예요!",
      "ttsKo": "[7급] 한자 '旗'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "旗"
      ]
    },
    {
      "id": "han_134",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '同'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "한가지 동",
        "골 동",
        "움직일 동",
        "겨울 동"
      ],
      "answer": "한가지 동",
      "hint": "모두가 하나처럼 같다는 뜻의 '한가지 동(同)'! 동시·협동에 쓰여요.",
      "ttsKo": "[7급] 한자 '同'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "同"
      ]
    },
    {
      "id": "han_135",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '重'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "무거울 중",
        "가운데 중",
        "적을 소",
        "긴 장"
      ],
      "answer": "무거울 중",
      "hint": "짐이 묵직하고 소중하다는 뜻의 '무거울 중(重)'! 체중·중요에 쓰여요.",
      "ttsKo": "[7급] 한자 '重'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "重"
      ]
    },
    {
      "id": "han_136",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "뜻과 음",
      "pokeType": "불꽃",
      "question": "[7급] 한자 '便'의 알맞은 뜻과 음은 무엇일까요?",
      "choices": [
        "편할 편",
        "편안 안",
        "평평할 평",
        "바 소"
      ],
      "answer": "편할 편",
      "hint": "쓰기 쉽고 편리하다는 뜻의 '편할 편(便)'! 편리·우편에 쓰여요.",
      "ttsKo": "[7급] 한자 '便'의 알맞은 뜻과 음은 무엇일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "便"
      ]
    },
    {
      "id": "han_137",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "상대 한자",
      "pokeType": "악",
      "question": "묻고 답한다는 뜻의 '問答(문답)'에서 '물을 문(問)'과 짝을 이루는 반대 한자는?",
      "choices": [
        "答 (대답 답)",
        "話 (말씀 화)",
        "語 (말씀 어)",
        "記 (기록할 기)"
      ],
      "answer": "答 (대답 답)",
      "hint": "물음(問)과 대답(答)이 만나 '문답(問答)'이 돼요!",
      "ttsKo": "묻고 답한다는 뜻의 '問答(문답)'에서 '물을 문(問)'과 짝을 이루는 반대 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "問",
        "答"
      ]
    },
    {
      "id": "han_138",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "대한민국의 말인 '國語'는 어떤 두 한자가 합쳐진 말일까요?",
      "choices": [
        "나라 국(國) + 말씀 어(語)",
        "나라 국(國) + 노래 가(歌)",
        "한국 한(韓) + 글자 자(字)",
        "글월 문(文) + 글자 자(字)"
      ],
      "answer": "나라 국(國) + 말씀 어(語)",
      "hint": "나라(國)의 말씀(語)이라서 '국어(國語)'예요!",
      "ttsKo": "대한민국의 말인 '國語'는 어떤 두 한자가 합쳐진 말일까요?",
      "ttsEn": "",
      "hanjaChars": [
        "國",
        "語"
      ]
    },
    {
      "id": "han_139",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "수를 세고 계산하는 공부를 뜻하는 '算數(산수)'와 '數學(수학)'에 공통으로 들어가는 뜻은?",
      "choices": [
        "셈 (계산)",
        "노래",
        "계절",
        "방향"
      ],
      "answer": "셈 (계산)",
      "hint": "셈 산(算)과 셈 수(數)는 모두 수를 세고 계산한다는 뜻이에요!",
      "ttsKo": "수를 세고 계산하는 공부를 뜻하는 '算數(산수)'와 '數學(수학)'에 공통으로 들어가는 뜻은?",
      "ttsEn": "",
      "hanjaChars": [
        "算",
        "數"
      ]
    },
    {
      "id": "han_140",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "어린이를 바르게 가르치고 기른다는 뜻의 '敎育'은 어떻게 읽을까요?",
      "choices": [
        "교육",
        "교실",
        "체육",
        "양육"
      ],
      "answer": "교육",
      "hint": "가르칠 교(敎) + 기를 육(育) = 가르치고 기르는 '교육'이에요!",
      "ttsKo": "어린이를 바르게 가르치고 기른다는 뜻의 '敎育'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "敎",
        "育"
      ]
    },
    {
      "id": "han_141",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "사람이 꾸미지 않은 그대로의 산과 바다·숲을 뜻하는 '自然'은 어떻게 읽을까요?",
      "choices": [
        "자연",
        "자유",
        "당연",
        "자립"
      ],
      "answer": "자연",
      "hint": "스스로 자(自) + 그럴 연(然) = 스스로 그러한 '자연'이에요!",
      "ttsKo": "사람이 꾸미지 않은 그대로의 산과 바다·숲을 뜻하는 '自然'은 어떻게 읽을까요?",
      "ttsEn": "",
      "hanjaChars": [
        "自",
        "然"
      ]
    },
    {
      "id": "han_142",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "한자 낱말",
      "pokeType": "드래곤",
      "question": "양이 적다는 뜻의 7급 한자 '적을 소(少)'와 소리는 같지만 '크기가 작다'를 뜻하는 8급 한자는?",
      "choices": [
        "小 (작을 소)",
        "所 (바 소)",
        "大 (큰 대)",
        "有 (있을 유)"
      ],
      "answer": "小 (작을 소)",
      "hint": "'작을 소(小)'는 크기가 작은 것, '적을 소(少)'는 수량이 적은 것을 뜻해요!",
      "ttsKo": "양이 적다는 뜻의 7급 한자 '적을 소(少)'와 소리는 같지만 '크기가 작다'를 뜻하는 8급 한자는?",
      "ttsEn": "",
      "hanjaChars": [
        "少",
        "小"
      ]
    },
    {
      "id": "han_143",
      "subject": "hanja",
      "category": "hanja",
      "unit": "h13",
      "tier": 10,
      "domain": "획수·필순",
      "pokeType": "고스트",
      "question": "'글월 문(文)' 한자는 모두 몇 획으로 쓸까요? (점 · 가로 · 왼쪽 삐침 · 오른쪽 파임)",
      "choices": [
        "4획",
        "3획",
        "5획",
        "6획"
      ],
      "answer": "4획",
      "hint": "위 점(1) → 가로획(2) → 왼쪽 아래 삐침(3) → 오른쪽 아래 파임(4)으로 총 4획이에요!",
      "ttsKo": "'글월 문(文)' 한자는 모두 몇 획으로 쓸까요? (점 · 가로 · 왼쪽 삐침 · 오른쪽 파임)",
      "ttsEn": "",
      "hanjaChars": [
        "文"
      ]
    }
  ]
};

// mulberry32 결정론적 시드 난수 생성기 (오답 간격 복습 시 동일한 수식·보기 100% 재현)
window.createSeededRng = function (seed) {
  var a = (Number(seed) >>> 0) || 123456789;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// 단원 티어(Tier 1~10)와 시드(seed)에 맞춰 생성되는 초1-1 맞춤형 동적 수학 문항 생성기
// Tier 1~8에서는 50을 초과하는 수가 절대 생성되지 않으며, Tier 9~10에서만 100 이하 심화 연산이 열립니다.
window.generateDynamicMathQuestion = function (maxTier, explicitSeed) {
  var tier = Number(maxTier);
  if (!tier || tier < 1) tier = 4;
  var seed = (explicitSeed !== undefined && explicitSeed !== null)
    ? (Number(explicitSeed) >>> 0)
    : ((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0);
  if (seed === 0) seed = 20270302;
  var rng = window.createSeededRng(seed);

  var a, b, ans, op, unit, qText, hint, ttsKo, maxBound;

  if (tier <= 2) {
    // Tier 1~2: 9 이하의 모으기·가르기 기초 덧셈·뺄셈
    maxBound = 9;
    if (rng() < 0.6) {
      a = Math.floor(rng() * 7) + 1; // 1..7
      b = Math.floor(rng() * (9 - a)) + 1; // a+b <= 9
      ans = a + b;
      op = "+";
      hint = "손가락 " + a + "개에 " + b + "개를 더 펴서 모두 몇 개인지 세어 보세요!";
    } else {
      a = Math.floor(rng() * 7) + 3; // 3..9
      b = Math.floor(rng() * (a - 1)) + 1;
      ans = a - b;
      op = "-";
      hint = "구슬 " + a + "개 중에서 " + b + "개를 덜어 내면 몇 개가 남을까요?";
    }
    unit = "m1";
    qText = a + " " + op + " " + b + " = ?";
  } else if (tier <= 5) {
    // Tier 3~5: 19 이하의 기초 덧셈·뺄셈
    maxBound = 19;
    if (rng() < 0.55) {
      a = Math.floor(rng() * 12) + 2; // 2..13
      b = Math.floor(rng() * (19 - a)) + 1;
      ans = a + b;
      op = "+";
      hint = "10을 먼저 채운 다음 남은 수를 더하면 훨씬 쉽게 계산할 수 있어요!";
    } else {
      a = Math.floor(rng() * 12) + 8; // 8..19
      b = Math.floor(rng() * (a - 2)) + 1;
      ans = a - b;
      op = "-";
      hint = a + "에서 거꾸로 " + b + "칸 내려가 보세요!";
    }
    unit = "m3";
    qText = a + " " + op + " " + b + " = ?";
  } else if (tier <= 8) {
    // Tier 6~8: 50 이하의 받아올림·받아내림 없는 두 자리 수 연산 (초1-1 상한 50 엄수!)
    maxBound = 50;
    if (rng() < 0.55) {
      var tensA = Math.floor(rng() * 4) + 1; // 1..4 (10..40)
      var onesA = Math.floor(rng() * 8); // 0..7
      var maxTensB = 4 - tensA;
      var tensB = maxTensB > 0 ? Math.floor(rng() * (maxTensB + 1)) : 0;
      var onesB = Math.floor(rng() * (9 - onesA)) + 1;
      a = tensA * 10 + onesA;
      b = tensB * 10 + onesB;
      if (a + b > 50) {
        b = 50 - a;
      }
      ans = a + b;
      op = "+";
      hint = "10개씩 묶음끼리 더하고 낱개끼리 더하면 금방 풀 수 있어요!";
    } else {
      var tA = Math.floor(rng() * 4) + 1; // 1..4
      var oA = Math.floor(rng() * 7) + 2; // 2..8
      var tB = Math.floor(rng() * tA); // 0..tA-1
      var oB = Math.floor(rng() * oA) + 1; // 1..oA (받아내림 없음!)
      a = tA * 10 + oA;
      b = tB * 10 + oB;
      ans = a - b;
      op = "-";
      hint = "낱개(" + oA + "-" + oB + ")를 먼저 빼고 10개씩 묶음을 빼 보세요!";
    }
    unit = "m5";
    qText = a + " " + op + " " + b + " = ?";
  } else {
    // Tier 9~10: 100 이하 심화 연산
    maxBound = 100;
    if (rng() < 0.55) {
      a = Math.floor(rng() * 75) + 12;
      b = Math.floor(rng() * (100 - a)) + 1;
      ans = a + b;
      op = "+";
    } else {
      a = Math.floor(rng() * 80) + 20;
      b = Math.floor(rng() * (a - 5)) + 3;
      ans = a - b;
      op = "-";
    }
    unit = "m_adv";
    qText = a + " " + op + " " + b + " = ?";
    hint = "일의 자리부터 차근차근 계산하고 10이 넘으면 십의 자리로 올려 주세요!";
  }

  ttsKo = a + (op === "+" ? " 더하기 " : " 빼기 ") + b + "는 얼마일까요?";

  var set = [String(ans)];
  var offsets = maxBound <= 9
    ? [-3, -2, -1, 1, 2, 3, 4, -4]
    : [-10, -4, -3, -2, -1, 1, 2, 3, 4, 10];

  var guard = 0;
  while (set.length < 4 && guard < 80) {
    guard += 1;
    var d = offsets[Math.floor(rng() * offsets.length)];
    var cand = ans + d;
    if (cand >= 0 && cand <= maxBound && cand !== ans && set.indexOf(String(cand)) === -1) {
      set.push(String(cand));
    }
  }
  var fallbackVal = 0;
  while (set.length < 4) {
    if (fallbackVal <= maxBound && set.indexOf(String(fallbackVal)) === -1) {
      set.push(String(fallbackVal));
    }
    fallbackVal += 1;
  }

  for (var i = set.length - 1; i > 0; i--) {
    var j = Math.floor(rng() * (i + 1));
    var tmp = set[i];
    set[i] = set[j];
    set[j] = tmp;
  }

  return {
    id: "math_dyn_" + tier + "_" + seed,
    seed: seed,
    tier: tier,
    subject: "math",
    category: "math",
    unit: unit,
    domain: "계산력",
    pokeType: "전기",
    question: qText,
    choices: set,
    answer: String(ans),
    hint: hint,
    ttsKo: ttsKo,
    ttsEn: ""
  };
};


// ===================== 미취학 ~ 6학년 단계 뼈대 =====================
// 학기 단위 단계 14개. 단원(SUBJECT_UNITS)마다 stage 를 붙여 어느 단계의 내용인지 표시한다.
window.GRADE_STAGES = [
  { id: "p1", label: "미취학 1", short: "미취학1", band: "미취학" },
  { id: "p2", label: "미취학 2", short: "미취학2", band: "미취학" },
  { id: "g1a", label: "1학년 1학기", short: "1-1", band: "1~2학년군" },
  { id: "g1b", label: "1학년 2학기", short: "1-2", band: "1~2학년군" },
  { id: "g2a", label: "2학년 1학기", short: "2-1", band: "1~2학년군" },
  { id: "g2b", label: "2학년 2학기", short: "2-2", band: "1~2학년군" },
  { id: "g3a", label: "3학년 1학기", short: "3-1", band: "3~4학년군" },
  { id: "g3b", label: "3학년 2학기", short: "3-2", band: "3~4학년군" },
  { id: "g4a", label: "4학년 1학기", short: "4-1", band: "3~4학년군" },
  { id: "g4b", label: "4학년 2학기", short: "4-2", band: "3~4학년군" },
  { id: "g5a", label: "5학년 1학기", short: "5-1", band: "5~6학년군" },
  { id: "g5b", label: "5학년 2학기", short: "5-2", band: "5~6학년군" },
  { id: "g6a", label: "6학년 1학기", short: "6-1", band: "5~6학년군" },
  { id: "g6b", label: "6학년 2학기", short: "6-2", band: "5~6학년군" }
];

// 과목 목록. from: 이 단계부터 배우는 과목. graded: false 는 학년이 아니라 급수·수준으로 나아가는 과목.
window.SUBJECT_LIST = [
  { key: "korean", name: "국어", badge: "📝 국어", from: "p1", graded: true },
  { key: "math", name: "수학", badge: "🔢 수학", from: "p1", graded: true },
  { key: "social", name: "사회", badge: "🌏 사회", from: "g3a", graded: true },
  { key: "science", name: "과학", badge: "🔬 과학", from: "g3a", graded: true },
  { key: "english", name: "영어", badge: "🔤 영어", from: "p2", graded: true },
  { key: "hanja", name: "한자", badge: "漢 한자", from: "p2", graded: false },
  { key: "creative", name: "창의력", badge: "💡 창의력", from: "p1", graded: false }
];

// 단원별 성취기준 코드 (2022 개정). 확인된 것만 적는다.
window.UNIT_STANDARDS = {
  k0: ["2국01-03", "2국02-05", "2국04-01"], k1: ["2국02-01", "2국03-01", "2국04-01"], k2: ["2국01-04", "2국03-01", "2국04-01"],
  k3: ["2국01-04", "2국03-01", "2국04-01"], k4: ["2국05-01", "2국06-01"], k5: ["2국01-02", "2국01-05", "2국02-05", "2국04-02"],
  k6: ["2국01-05", "2국02-01", "2국02-05", "2국04-02"], k7: ["2국02-05", "2국03-01", "2국03-02"],
  m1: ["2수01-01", "2수01-03"], m2: ["2수03-01"], m3: ["2수01-05", "2수01-06"], m4: ["2수03-06"], m5: ["2수01-01", "2수01-03"],
  e1: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"], e2: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"], e3: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"],
  e4: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"], e5: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"], e6: ["4영01-01", "4영01-02", "4영02-02", "4영02-03"],
  e7: ["4영01-04", "4영01-05", "4영02-05"], e8: ["4영01-05", "4영01-06", "4영02-05"]
};

// 지금 있는 단원은 모두 1학년 1학기 내용이다. (한자는 학년 대신 급수로 나아가므로 단계는 표시만 한다)
(function () {
  var U = window.SUBJECT_UNITS || {};
  Object.keys(U).forEach(function (sk) {
    U[sk].forEach(function (u) {
      if (!u.stage) u.stage = "g1a";
      if (!u.standards) u.standards = window.UNIT_STANDARDS[u.id] || [];
    });
  });
})();

window.getGradeStage = function (id) {
  for (var i = 0; i < window.GRADE_STAGES.length; i++) if (window.GRADE_STAGES[i].id === id) return window.GRADE_STAGES[i];
  return null;
};
// 그 단계에 단원이 하나라도 준비되어 있는지 (과목을 주면 그 과목만 본다)
window.stageHasContent = function (stageId, subjectKey) {
  var U = window.SUBJECT_UNITS || {}, keys = subjectKey ? [subjectKey] : Object.keys(U);
  for (var i = 0; i < keys.length; i++) {
    var list = U[keys[i]] || [];
    for (var j = 0; j < list.length; j++) if (list[j].stage === stageId) return true;
  }
  return false;
};
