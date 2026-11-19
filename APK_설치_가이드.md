# 스마트폰 앱 설치 · 완전 오프라인 도감 내장 · GitHub 자동 업로드 안내 (`APK_설치_가이드.md`)

이 패키지는 **전국도감 1,025마리 오프라인 사전 내장**, **도감 등록과 보유 포켓몬 분리(진화 시 1마리 소모)**, **포획 성공률 차등(`100% → 80% → 50%`)**, **포켓몬 GO 급 이로치 확률(`1/64` · 황금볼 `1/20`)**, **한자능력검정시험 7급(8급·준7급·7급 총 150자)**([배정한자 기준](https://namu.wiki/w/%EC%A0%84%EA%B5%AD%ED%95%9C%EC%9E%90%EB%8A%A5%EB%A0%A5%EA%B2%80%EC%A0%95%EC%8B%9C%ED%97%98/%EB%B0%B0%EC%A0%95%ED%95%9C%EC%9E%90)), 그리고 **진행·성취도 저장·백업·삭제** 기능을 모두 갖추고 있습니다.

## 방법 A · PC에서 더블클릭 1번으로 1,025마리 미리 다운로드 + GitHub(`bedesj/Quiz`) 자동 업로드 (가장 추천!)

1. 내려받은 `pokemon-quiz-pwa.zip`의 압축을 풉니다.
2. 폴더 안의 **`1_오프라인도감받기_및_깃허브업로드.bat`**(맥·리눅스는 `offline_setup_and_push.sh`)을 더블클릭해 실행합니다.
   - `download_pokedex_offline.py`가 실행되어 전국도감 `1~1,025번` 일반·이로치·고화질 HOME 3D 이미지를 `./sprites/` 폴더와 `data/offline_sprites_bundle.js`에 미리 다 받아 내장합니다(이제 인터넷이 아예 없는 PC나 태블릿에서도 처음 켜는 순간부터 100% 실물로 작동합니다!).
   - 이어서 자동으로 `https://github.com/bedesj/Quiz.git` 저장소에 커밋·푸시합니다.

## 방법 B · 웹 브라우저로 GitHub(`https://github.com/bedesj/Quiz`)에 올릴 때 (GitHub Actions 자동 다운로드!)

1. 압축 푼 파일 전체(`.github/workflows/offline-pokedex.yml` 포함)를 [GitHub 저장소](https://github.com/bedesj/Quiz)에 업로드하고 **Commit changes**를 누릅니다([GitHub Pages](https://pages.github.com/)).
2. 저장소에 올라가는 즉시 내장된 **GitHub Actions(`Bundle 1025 Offline Pokedex Sprites`)**가 GitHub 서버에서 자동으로 `1,025마리` 도감 이미지를 모두 내려받아 저장소 `./sprites/`에 커밋하고 100% 오프라인용 ZIP 아티팩트까지 생성합니다!

## 스마트폰 홈 화면 설치 및 `.apk` 변환

- **스마트폰 전체 화면 앱 설치**: 배포된 주소를 Chrome·삼성 인터넷으로 열고 시작 화면의 **`📲 앱 설치`** 버튼을 누릅니다([Chrome PWA 설치 안내](https://developer.chrome.com/blog/getting-started-pwa?hl=ko), 아이폰·아이패드 Safari는 공유 `□↑` → **`홈 화면에 추가`**).
- **`.apk` 설치 파일 변환**: [PWABuilder](https://www.pwabuilder.com/)([공식 문서](https://docs.pwabuilder.com/))에 배포 주소를 입력하고 **Package for stores → Android**를 누르면([MDN 아이콘 규격](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons), [Chrome Richer Install UI](https://web.dev/articles/web-apps/richer-install-ui)) 서명된 `.apk` 파일을 내려받을 수 있습니다.
