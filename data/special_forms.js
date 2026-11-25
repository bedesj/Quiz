// 메가진화 · 원시회귀 · 합체진화(울트라버스트 포함) PokéAPI v2 연동 폼 레지스트리
// 기존 1~1025 POKEMON_DATA 및 POKEMON_EVOLUTIONS 무결성을 유지하기 위해 일시 변신/특수 폼을 별도 관리
(function (global) {
  "use strict";

  var SPECIAL_FORM_CACHE_KEY = "poke_quiz_special_pokeapi_v1";

  var TYPE_EN_TO_KO = {
    normal: "노말", grass: "풀", ground: "땅", rock: "바위", bug: "벌레", fairy: "페어리",
    electric: "전기", water: "물", psychic: "에스퍼", steel: "강철",
    flying: "비행", ice: "얼음", poison: "독", fighting: "격투",
    fire: "불꽃", dragon: "드래곤", dark: "악", ghost: "고스트"
  };

  var FORMS = [
    // ==================== 1. 메가진화 (Mega Evolution) ====================
    { key: "venusaur-mega",    kind: "mega", baseId: 3,   pokeapiId: 10033, slug: "venusaur-mega",    name: "메가이상해꽃",   types: ["풀", "독"],     item: "이상해꽃나이트",   ability: "두꺼운지방" },
    { key: "charizard-mega-x", kind: "mega", baseId: 6,   pokeapiId: 10034, slug: "charizard-mega-x", name: "메가리자몽X",    types: ["불꽃", "드래곤"], item: "리자몽나이트X",    ability: "단단한발톱" },
    { key: "charizard-mega-y", kind: "mega", baseId: 6,   pokeapiId: 10035, slug: "charizard-mega-y", name: "메가리자몽Y",    types: ["불꽃", "비행"],   item: "리자몽나이트Y",    ability: "가뭄" },
    { key: "blastoise-mega",   kind: "mega", baseId: 9,   pokeapiId: 10036, slug: "blastoise-mega",   name: "메가거북왕",     types: ["물"],           item: "거북왕나이트",     ability: "메가런처" },
    { key: "beedrill-mega",    kind: "mega", baseId: 15,  pokeapiId: 10090, slug: "beedrill-mega",    name: "메가독침붕",     types: ["벌레", "독"],   item: "독침붕나이트",     ability: "적응력" },
    { key: "pidgeot-mega",     kind: "mega", baseId: 18,  pokeapiId: 10073, slug: "pidgeot-mega",     name: "메가피죤투",     types: ["노말", "비행"], item: "피죤투나이트",     ability: "노가드" },
    { key: "alakazam-mega",    kind: "mega", baseId: 65,  pokeapiId: 10037, slug: "alakazam-mega",    name: "메가후딘",       types: ["에스퍼"],       item: "후딘나이트",       ability: "트레이스" },
    { key: "slowbro-mega",     kind: "mega", baseId: 80,  pokeapiId: 10071, slug: "slowbro-mega",     name: "메가야도란",     types: ["물", "에스퍼"], item: "야도란나이트",     ability: "조가비갑옷" },
    { key: "gengar-mega",      kind: "mega", baseId: 94,  pokeapiId: 10038, slug: "gengar-mega",      name: "메가팬텀",       types: ["고스트", "독"], item: "팬텀나이트",       ability: "그림자밟기" },
    { key: "kangaskhan-mega",  kind: "mega", baseId: 115, pokeapiId: 10039, slug: "kangaskhan-mega",  name: "메가캥카",       types: ["노말"],         item: "캥카나이트",       ability: "부자유친" },
    { key: "pinsir-mega",      kind: "mega", baseId: 127, pokeapiId: 10040, slug: "pinsir-mega",      name: "메가쁘사이저",   types: ["벌레", "비행"], item: "쁘사이저나이트",   ability: "스카이스킨" },
    { key: "gyarados-mega",    kind: "mega", baseId: 130, pokeapiId: 10041, slug: "gyarados-mega",    name: "메가갸라도스",   types: ["물", "악"],     item: "갸라도스나이트",   ability: "틀깨기" },
    { key: "aerodactyl-mega",  kind: "mega", baseId: 142, pokeapiId: 10042, slug: "aerodactyl-mega",  name: "메가프테라",     types: ["바위", "비행"], item: "프테라나이트",     ability: "단단한발톱" },
    { key: "mewtwo-mega-x",    kind: "mega", baseId: 150, pokeapiId: 10043, slug: "mewtwo-mega-x",    name: "메가뮤츠X",      types: ["에스퍼", "격투"], item: "뮤츠나이트X",      ability: "불굴의마음" },
    { key: "mewtwo-mega-y",    kind: "mega", baseId: 150, pokeapiId: 10044, slug: "mewtwo-mega-y",    name: "메가뮤츠Y",      types: ["에스퍼"],       item: "뮤츠나이트Y",      ability: "불면" },
    { key: "ampharos-mega",    kind: "mega", baseId: 181, pokeapiId: 10045, slug: "ampharos-mega",    name: "메가전룡",       types: ["전기", "드래곤"], item: "전룡나이트",       ability: "틀깨기" },
    { key: "steelix-mega",     kind: "mega", baseId: 208, pokeapiId: 10072, slug: "steelix-mega",     name: "메가강철톤",     types: ["강철", "땅"],   item: "강철톤나이트",     ability: "모래의힘" },
    { key: "scizor-mega",      kind: "mega", baseId: 212, pokeapiId: 10046, slug: "scizor-mega",      name: "메가핫삼",       types: ["벌레", "강철"], item: "핫삼나이트",       ability: "테크니션" },
    { key: "heracross-mega",   kind: "mega", baseId: 214, pokeapiId: 10047, slug: "heracross-mega",   name: "메가헤라크로스", types: ["벌레", "격투"], item: "헤라크로스나이트", ability: "스킬링크" },
    { key: "houndoom-mega",    kind: "mega", baseId: 229, pokeapiId: 10048, slug: "houndoom-mega",    name: "메가헬가",       types: ["악", "불꽃"],   item: "헬가나이트",       ability: "선파워" },
    { key: "tyranitar-mega",   kind: "mega", baseId: 248, pokeapiId: 10049, slug: "tyranitar-mega",   name: "메가마기라스",   types: ["바위", "악"],   item: "마기라스나이트",   ability: "모래날림" },
    { key: "sceptile-mega",    kind: "mega", baseId: 254, pokeapiId: 10065, slug: "sceptile-mega",    name: "메가나무킹",     types: ["풀", "드래곤"], item: "나무킹나이트",     ability: "피뢰침" },
    { key: "blaziken-mega",    kind: "mega", baseId: 257, pokeapiId: 10050, slug: "blaziken-mega",    name: "메가번치코",     types: ["불꽃", "격투"], item: "번치코나이트",     ability: "가속" },
    { key: "swampert-mega",    kind: "mega", baseId: 260, pokeapiId: 10064, slug: "swampert-mega",    name: "메가대짱이",     types: ["물", "땅"],     item: "대짱이나이트",     ability: "쓱쓱" },
    { key: "gardevoir-mega",   kind: "mega", baseId: 282, pokeapiId: 10051, slug: "gardevoir-mega",   name: "메가가디안",     types: ["에스퍼", "페어리"], item: "가디안나이트",   ability: "페어리스킨" },
    { key: "sableye-mega",     kind: "mega", baseId: 302, pokeapiId: 10066, slug: "sableye-mega",     name: "메가깜까미",     types: ["악", "고스트"], item: "깜까미나이트",     ability: "매직미러" },
    { key: "mawile-mega",      kind: "mega", baseId: 303, pokeapiId: 10052, slug: "mawile-mega",      name: "메가입치트",     types: ["강철", "페어리"], item: "입치트나이트",   ability: "천하장사" },
    { key: "aggron-mega",      kind: "mega", baseId: 306, pokeapiId: 10053, slug: "aggron-mega",      name: "메가보스로라",   types: ["강철"],         item: "보스로라나이트",   ability: "필터" },
    { key: "medicham-mega",    kind: "mega", baseId: 308, pokeapiId: 10054, slug: "medicham-mega",    name: "메가요가램",     types: ["격투", "에스퍼"], item: "요가램나이트",   ability: "순수한힘" },
    { key: "manectric-mega",   kind: "mega", baseId: 310, pokeapiId: 10055, slug: "manectric-mega",   name: "메가썬더볼트",   types: ["전기"],         item: "썬더볼트나이트",   ability: "위협" },
    { key: "sharpedo-mega",    kind: "mega", baseId: 319, pokeapiId: 10070, slug: "sharpedo-mega",    name: "메가샤크니아",   types: ["물", "악"],     item: "샤크니아나이트",   ability: "옹골찬턱" },
    { key: "camerupt-mega",    kind: "mega", baseId: 323, pokeapiId: 10087, slug: "camerupt-mega",    name: "메가폭타",       types: ["불꽃", "땅"],   item: "폭타나이트",       ability: "우격다짐" },
    { key: "altaria-mega",     kind: "mega", baseId: 334, pokeapiId: 10067, slug: "altaria-mega",     name: "메가파비코리",   types: ["드래곤", "페어리"], item: "파비코리나이트", ability: "페어리스킨" },
    { key: "banette-mega",     kind: "mega", baseId: 354, pokeapiId: 10056, slug: "banette-mega",     name: "메가다크펫",     types: ["고스트"],       item: "다크펫나이트",     ability: "짓궂은마음" },
    { key: "absol-mega",       kind: "mega", baseId: 359, pokeapiId: 10057, slug: "absol-mega",       name: "메가앱솔",       types: ["악"],           item: "앱솔나이트",       ability: "매직미러" },
    { key: "glalie-mega",      kind: "mega", baseId: 362, pokeapiId: 10074, slug: "glalie-mega",      name: "메가얼음귀신",   types: ["얼음"],         item: "얼음귀신나이트",   ability: "프리즈스킨" },
    { key: "salamence-mega",   kind: "mega", baseId: 373, pokeapiId: 10089, slug: "salamence-mega",   name: "메가보만다",     types: ["드래곤", "비행"], item: "보만다나이트",   ability: "스카이스킨" },
    { key: "metagross-mega",   kind: "mega", baseId: 376, pokeapiId: 10076, slug: "metagross-mega",   name: "메가메타그로스", types: ["강철", "에스퍼"], item: "메타그로스나이트", ability: "단단한발톱" },
    { key: "latias-mega",      kind: "mega", baseId: 380, pokeapiId: 10062, slug: "latias-mega",      name: "메가라티아스",   types: ["드래곤", "에스퍼"], item: "라티아스나이트", ability: "부유" },
    { key: "latios-mega",      kind: "mega", baseId: 381, pokeapiId: 10063, slug: "latios-mega",      name: "메가라티오스",   types: ["드래곤", "에스퍼"], item: "라티오스나이트", ability: "부유" },
    { key: "rayquaza-mega",    kind: "mega", baseId: 384, pokeapiId: 10079, slug: "rayquaza-mega",    name: "메가레쿠쟈",     types: ["드래곤", "비행"], item: "화룡점정(무스톤)", noStoneNeeded: true, ability: "델타스트림" },
    { key: "lopunny-mega",     kind: "mega", baseId: 428, pokeapiId: 10088, slug: "lopunny-mega",     name: "메가이어롭",     types: ["노말", "격투"], item: "이어롭나이트",     ability: "배짱" },
    { key: "garchomp-mega",    kind: "mega", baseId: 445, pokeapiId: 10058, slug: "garchomp-mega",    name: "메가한카리아스", types: ["드래곤", "땅"], item: "한카리아스나이트", ability: "모래의힘" },
    { key: "lucario-mega",     kind: "mega", baseId: 448, pokeapiId: 10059, slug: "lucario-mega",     name: "메가루카리오",   types: ["격투", "강철"], item: "루카리오나이트",   ability: "적응력" },
    { key: "abomasnow-mega",   kind: "mega", baseId: 460, pokeapiId: 10060, slug: "abomasnow-mega",   name: "메가눈설왕",     types: ["풀", "얼음"],   item: "눈설왕나이트",     ability: "눈퍼뜨리기" },
    { key: "gallade-mega",     kind: "mega", baseId: 475, pokeapiId: 10068, slug: "gallade-mega",     name: "메가엘레이드",   types: ["에스퍼", "격투"], item: "엘레이드나이트", ability: "정신력" },
    { key: "audino-mega",      kind: "mega", baseId: 531, pokeapiId: 10069, slug: "audino-mega",      name: "메가다부니",     types: ["노말", "페어리"], item: "다부니나이트",   ability: "치유의마음" },
    { key: "diancie-mega",     kind: "mega", baseId: 719, pokeapiId: 10075, slug: "diancie-mega",     name: "메가디안시",     types: ["바위", "페어리"], item: "디안시나이트",   ability: "매직미러" },

    // ==================== 2. 원시회귀 (Primal Reversion) ====================
    { key: "kyogre-primal",    kind: "primal", baseId: 382, pokeapiId: 10077, slug: "kyogre-primal",  name: "원시가이오가",   types: ["물"],           item: "쪽빛구슬", ability: "시작의바다" },
    { key: "groudon-primal",   kind: "primal", baseId: 383, pokeapiId: 10078, slug: "groudon-primal", name: "원시그란돈",     types: ["땅", "불꽃"],   item: "주홍구슬", ability: "끝의대지" },

    // ==================== 3. 합체진화 (Pokémon Fusion) + 울트라버스트 ====================
    { key: "kyurem-black",     kind: "fusion", baseId: 646, partnerId: 644, pokeapiId: 10022, slug: "kyurem-black",  name: "블랙큐레무",           types: ["드래곤", "얼음"], item: "유전자쐐기",     ability: "테라볼티지" },
    { key: "kyurem-white",     kind: "fusion", baseId: 646, partnerId: 643, pokeapiId: 10023, slug: "kyurem-white",  name: "화이트큐레무",         types: ["드래곤", "얼음"], item: "유전자쐐기",     ability: "터보블레이즈" },
    { key: "necrozma-dusk",    kind: "fusion", baseId: 800, partnerId: 791, pokeapiId: 10155, slug: "necrozma-dusk", name: "네크로즈마(황혼의갈기)", types: ["에스퍼", "강철"], item: "네크로플러스솔", ability: "프리즘아머", canUltraBurst: true },
    { key: "necrozma-dawn",    kind: "fusion", baseId: 800, partnerId: 792, pokeapiId: 10156, slug: "necrozma-dawn", name: "네크로즈마(새벽의날개)", types: ["에스퍼", "고스트"], item: "네크로플러스루나", ability: "프리즘아머", canUltraBurst: true },
    { key: "necrozma-ultra",   kind: "ultra_burst", baseId: 800, pokeapiId: 10157, slug: "necrozma-ultra", name: "울트라네크로즈마",     types: ["에스퍼", "드래곤"], item: "울트라네크로Z",  ability: "브레인포스" },
    { key: "calyrex-ice",      kind: "fusion", baseId: 898, partnerId: 896, pokeapiId: 10193, slug: "calyrex-ice",   name: "버드렉스(백마탄모습)", types: ["에스퍼", "얼음"], item: "유대의고삐",     ability: "인마일체(백의울음)" },
    { key: "calyrex-shadow",   kind: "fusion", baseId: 898, partnerId: 897, pokeapiId: 10194, slug: "calyrex-shadow",name: "버드렉스(흑마탄모습)", types: ["에스퍼", "고스트"], item: "유대의고삐",   ability: "인마일체(흑의울음)" },

    // ==================== 4. 폼 체인지 (검의 왕 · 방패의 왕) ====================
    { key: "zacian-crowned",    kind: "crowned", baseId: 888, pokeapiId: 10188, slug: "zacian-crowned",    name: "자시안(검의 왕)",     types: ["페어리", "강철"], item: "녹슨검",   ability: "불요의검" },
    { key: "zamazenta-crowned", kind: "crowned", baseId: 889, pokeapiId: 10189, slug: "zamazenta-crowned", name: "자마젠타(방패의 왕)", types: ["격투", "강철"],   item: "녹슨방패", ability: "불굴의방패" },

    // ==================== 5. 공식 폼 체인지 (Form Change) ====================
    // 테오키스 (운석 폼 체인지)
    { key: "deoxys-attack",           kind: "form_change", baseId: 386,  pokeapiId: 10001, slug: "deoxys-attack",           name: "테오키스(어택폼)",         types: ["에스퍼"],         item: "운석(공격)",     ability: "프레셔" },
    { key: "deoxys-defense",          kind: "form_change", baseId: 386,  pokeapiId: 10002, slug: "deoxys-defense",          name: "테오키스(디펜스폼)",       types: ["에스퍼"],         item: "운석(방어)",     ability: "프레셔" },
    { key: "deoxys-speed",            kind: "form_change", baseId: 386,  pokeapiId: 10003, slug: "deoxys-speed",            name: "테오키스(스피드폼)",       types: ["에스퍼"],         item: "운석(속도)",     ability: "프레셔" },
    // 로토무 (가전제품 폼 체인지)
    { key: "rotom-heat",              kind: "form_change", baseId: 479,  pokeapiId: 10008, slug: "rotom-heat",              name: "히트로토무",               types: ["전기", "불꽃"],   item: "전자레인지",     ability: "부유" },
    { key: "rotom-wash",              kind: "form_change", baseId: 479,  pokeapiId: 10009, slug: "rotom-wash",              name: "워시로토무",               types: ["전기", "물"],     item: "세탁기",         ability: "부유" },
    { key: "rotom-frost",             kind: "form_change", baseId: 479,  pokeapiId: 10010, slug: "rotom-frost",             name: "프로스트로토무",           types: ["전기", "얼음"],   item: "냉장고",         ability: "부유" },
    { key: "rotom-fan",               kind: "form_change", baseId: 479,  pokeapiId: 10011, slug: "rotom-fan",               name: "스핀로토무",               types: ["전기", "비행"],   item: "선풍기",         ability: "부유" },
    { key: "rotom-mow",               kind: "form_change", baseId: 479,  pokeapiId: 10012, slug: "rotom-mow",               name: "커트로토무",               types: ["전기", "풀"],     item: "잔디깎이",       ability: "부유" },
    // 신오 전설 오리진폼
    { key: "dialga-origin",           kind: "form_change", baseId: 483,  pokeapiId: 10245, slug: "dialga-origin",           name: "디아루가(오리진폼)",       types: ["강철", "드래곤"], item: "큰금강옥",       ability: "프레셔" },
    { key: "palkia-origin",           kind: "form_change", baseId: 484,  pokeapiId: 10246, slug: "palkia-origin",           name: "펄기아(오리진폼)",         types: ["물", "드래곤"],   item: "큰백옥",         ability: "프레셔" },
    { key: "giratina-origin",         kind: "form_change", baseId: 487,  pokeapiId: 10007, slug: "giratina-origin",         name: "기라티나(오리진폼)",       types: ["고스트", "드래곤"], item: "백금옥",       ability: "부유" },
    // 쉐이미
    { key: "shaymin-sky",             kind: "form_change", baseId: 492,  pokeapiId: 10006, slug: "shaymin-sky",             name: "쉐이미(스카이폼)",         types: ["풀", "비행"],     item: "그라시데아의꽃", ability: "하늘의은총" },
    // 영물폼 (비추는거울)
    { key: "tornadus-therian",        kind: "form_change", baseId: 641,  pokeapiId: 10019, slug: "tornadus-therian",        name: "토네로스(영물폼)",         types: ["비행"],           item: "비추는거울",     ability: "재생력" },
    { key: "thundurus-therian",       kind: "form_change", baseId: 642,  pokeapiId: 10020, slug: "thundurus-therian",       name: "볼트로스(영물폼)",         types: ["전기", "비행"],   item: "비추는거울",     ability: "축전" },
    { key: "landorus-therian",        kind: "form_change", baseId: 645,  pokeapiId: 10021, slug: "landorus-therian",        name: "랜드로스(영물폼)",         types: ["땅", "비행"],     item: "비추는거울",     ability: "위협" },
    { key: "enamorus-therian",        kind: "form_change", baseId: 905,  pokeapiId: 10249, slug: "enamorus-therian",        name: "러브로스(영물폼)",         types: ["페어리", "비행"], item: "비추는거울",     ability: "방진" },
    // 킬가르도 · 후파 · 돌핀맨
    { key: "aegislash-blade",         kind: "form_change", baseId: 681,  pokeapiId: 10026, slug: "aegislash-blade",         name: "킬가르도(블레이드폼)",     types: ["강철", "고스트"], item: "배틀스위치",     ability: "배틀스위치" },
    { key: "hoopa-unbound",           kind: "form_change", baseId: 720,  pokeapiId: 10086, slug: "hoopa-unbound",           name: "굴레를 벗어난 후파",       types: ["에스퍼", "악"],   item: "굴레의항아리",   ability: "매지션" },
    { key: "palafin-hero",            kind: "form_change", baseId: 964,  pokeapiId: 10256, slug: "palafin-hero",            name: "돌핀맨(마이티폼)",         types: ["물"],             item: "마이티체인지",   ability: "마이티체인지" },
    // 오거폰 (가면 폼 체인지)
    { key: "ogerpon-wellspring-mask", kind: "form_change", baseId: 1017, pokeapiId: 10273, slug: "ogerpon-wellspring-mask", name: "오거폰(우물의 가면)",      types: ["풀", "물"],       item: "우물의가면",     ability: "저수" },
    { key: "ogerpon-hearthflame-mask",kind: "form_change", baseId: 1017, pokeapiId: 10274, slug: "ogerpon-hearthflame-mask",name: "오거폰(화덕의 가면)",      types: ["풀", "불꽃"],     item: "화덕의가면",     ability: "틀깨기" },
    { key: "ogerpon-cornerstone-mask",kind: "form_change", baseId: 1017, pokeapiId: 10275, slug: "ogerpon-cornerstone-mask",name: "오거폰(주춧돌의 가면)",    types: ["풀", "바위"],     item: "주춧돌의가면",   ability: "옹골참" },
    // 테라파고스 (테라스탈 · 스텔라 폼)
    { key: "terapagos-terastal",      kind: "form_change", baseId: 1024, pokeapiId: 10276, slug: "terapagos-terastal",      name: "테라파고스(테라스탈폼)",   types: ["노말"],           item: "테라셸",         ability: "테라셸" },
    { key: "terapagos-stellar",       kind: "form_change", baseId: 1024, pokeapiId: 10277, slug: "terapagos-stellar",       name: "테라파고스(스텔라폼)",     types: ["노말"],           item: "테라스탈",       ability: "제로포밍" }
  ];

  var BY_KEY = {};
  var BY_BASE_ID = {};
  for (var i = 0; i < FORMS.length; i++) {
    var f = FORMS[i];
    BY_KEY[f.key] = f;
    if (!BY_BASE_ID[f.baseId]) BY_BASE_ID[f.baseId] = [];
    BY_BASE_ID[f.baseId].push(f);
  }

  var POKEAPI_CACHE = {};
  try {
    var rawCache = global.localStorage && global.localStorage.getItem(SPECIAL_FORM_CACHE_KEY);
    if (rawCache) {
      var parsed = JSON.parse(rawCache);
      if (parsed && typeof parsed === "object") POKEAPI_CACHE = parsed;
    }
  } catch (e) {}

  function saveSpecialCache() {
    try {
      if (global.localStorage) {
        global.localStorage.setItem(SPECIAL_FORM_CACHE_KEY, JSON.stringify(POKEAPI_CACHE));
      }
    } catch (e) {}
  }

  var INFLIGHT = {};

  function buildSpecialFormSpriteCandidates(formObj, useShiny, isBack) {
    if (!formObj) return [];
    var pid = formObj.pokeapiId;
    var pfx = useShiny ? "shiny/" : "";
    var urls = [];
    var cached = POKEAPI_CACHE[formObj.key];
    if (cached) {
      var list = isBack ? (useShiny ? cached.backShiny : cached.back) : (useShiny ? cached.frontShiny : cached.front);
      if (Array.isArray(list)) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] && urls.indexOf(list[i]) === -1) urls.push(list[i]);
        }
      }
    }
    if (!isBack) {
      urls.push("https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/home/" + pfx + pid + ".png");
      urls.push("https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/official-artwork/" + pfx + pid + ".png");
      urls.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pfx + pid + ".png");
      urls.push("https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/" + pfx + pid + ".png");
    } else {
      urls.push("https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/back/" + pfx + pid + ".png");
      urls.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + pfx + pid + ".png");
    }
    return urls;
  }

  function fetchSpecialFormFromPokeApi(formKey, callback) {
    var formObj = BY_KEY[formKey];
    if (!formObj) {
      if (callback) callback(null);
      return;
    }
    if (POKEAPI_CACHE[formKey] && POKEAPI_CACHE[formKey].hydrated) {
      if (callback) callback(POKEAPI_CACHE[formKey]);
      return;
    }
    if (typeof global.fetch !== "function" || (typeof navigator !== "undefined" && navigator.onLine === false)) {
      if (callback) callback(null);
      return;
    }
    if (INFLIGHT[formKey]) {
      if (callback) INFLIGHT[formKey].push(callback);
      return;
    }
    INFLIGHT[formKey] = callback ? [callback] : [];

    var done = function (res) {
      var cbs = INFLIGHT[formKey] || [];
      delete INFLIGHT[formKey];
      for (var j = 0; j < cbs.length; j++) {
        try { cbs[j](res); } catch (e) {}
      }
    };

    var controller = typeof global.AbortController === "function" ? new global.AbortController() : null;
    var timer = setTimeout(function () {
      if (controller) { try { controller.abort(); } catch (e) {} }
      done(null);
    }, 3000);

    var opts = controller ? { signal: controller.signal } : {};
    global.fetch("https://pokeapi.co/api/v2/pokemon/" + formObj.pokeapiId, opts)
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        clearTimeout(timer);
        var sp = (data && data.sprites) || {};
        var other = sp.other || {};
        var home = other.home || {};
        var art = other["official-artwork"] || {};
        var showdown = other.showdown || {};

        var front = [];
        var frontShiny = [];
        var back = [];
        var backShiny = [];

        [home.front_default, art.front_default, showdown.front_default, sp.front_default].forEach(function (u) {
          if (u && front.indexOf(u) === -1) front.push(u);
        });
        [home.front_shiny, art.front_shiny, showdown.front_shiny, sp.front_shiny].forEach(function (u) {
          if (u && frontShiny.indexOf(u) === -1) frontShiny.push(u);
        });
        [showdown.back_default, sp.back_default].forEach(function (u) {
          if (u && back.indexOf(u) === -1) back.push(u);
        });
        [showdown.back_shiny, sp.back_shiny].forEach(function (u) {
          if (u && backShiny.indexOf(u) === -1) backShiny.push(u);
        });

        var apiTypes = [];
        if (Array.isArray(data.types)) {
          data.types.forEach(function (t) {
            var ko = t && t.type && TYPE_EN_TO_KO[t.type.name];
            if (ko && apiTypes.indexOf(ko) === -1) apiTypes.push(ko);
          });
        }

        var bst = 0;
        if (Array.isArray(data.stats)) {
          data.stats.forEach(function (s) { bst += Number(s.base_stat || 0); });
        }

        var entry = {
          hydrated: true,
          pokeapiId: data.id || formObj.pokeapiId,
          types: apiTypes.length ? apiTypes : formObj.types,
          heightM: typeof data.height === "number" ? Number((data.height / 10).toFixed(1)) : null,
          weightKg: typeof data.weight === "number" ? Number((data.weight / 10).toFixed(1)) : null,
          baseStatTotal: bst || null,
          front: front,
          frontShiny: frontShiny,
          back: back,
          backShiny: backShiny
        };
        POKEAPI_CACHE[formKey] = entry;
        saveSpecialCache();
        done(entry);
      })
      .catch(function () {
        clearTimeout(timer);
        done(null);
      });
  }

  // 메가진화·원시회귀는 일시 각성(기본 180초=3분 제한), 합체진화·울트라버스트는 수동 해제 전까지 유지
  var SPECIAL_FORM_DURATION_SEC = {
    mega: 180,
    primal: 180,
    fusion: null,
    ultra_burst: null,
    crowned: null,
    form_change: null
  };

  function resolveFormObj(formOrKey) {
    if (!formOrKey) return null;
    if (typeof formOrKey === "string") return BY_KEY[formOrKey] || null;
    if (typeof formOrKey === "object" && formOrKey.key) return BY_KEY[formOrKey.key] || formOrKey;
    return null;
  }

  function getSpecialFormDurationMs(formOrKey) {
    var f = resolveFormObj(formOrKey);
    if (!f) return null;
    var sec = SPECIAL_FORM_DURATION_SEC[f.kind];
    return (typeof sec === "number" && sec > 0) ? (sec * 1000) : null;
  }

  function isSpecialFormTimed(formOrKey) {
    return getSpecialFormDurationMs(formOrKey) !== null;
  }

  global.POKEMON_SPECIAL_FORMS = FORMS;
  global.POKEMON_SPECIAL_FORM_BY_KEY = BY_KEY;
  global.SPECIAL_FORM_DURATION_SEC = SPECIAL_FORM_DURATION_SEC;
  global.getSpecialFormDurationMs = getSpecialFormDurationMs;
  global.isSpecialFormTimed = isSpecialFormTimed;
  global.getSpecialFormsForBaseId = function (baseId) {
    return (BY_BASE_ID[Number(baseId)] || []).slice();
  };
  global.getSpecialFormByKey = function (key) {
    return key ? (BY_KEY[key] || null) : null;
  };
  global.getSpecialFormCachedMeta = function (key) {
    return key ? (POKEAPI_CACHE[key] || null) : null;
  };
  global.buildSpecialFormSpriteCandidates = buildSpecialFormSpriteCandidates;
  global.fetchSpecialFormFromPokeApi = fetchSpecialFormFromPokeApi;
})(typeof window !== "undefined" ? window : globalThis);
