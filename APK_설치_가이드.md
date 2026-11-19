# 스마트폰 앱 설치 & PWABuilder `.apk` 파일 만드는 법 (`APK_설치_가이드.md`)

이 폴더(`pokemon-quiz-pwa`)에는 스마트폰 바탕화면 전체 화면 설치([Chrome PWA 설치 안내](https://developer.chrome.com/blog/getting-started-pwa?hl=ko))와 **[PWABuilder](https://www.pwabuilder.com/) 안드로이드 `.apk` 패키지 변환**([PWABuilder 공식 문서](https://docs.pwabuilder.com/))에 필요한 모든 파일(`manifest.json`, `sw.js` 오프라인 서비스 워커, [MDN 앱 아이콘 규격](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Define_app_icons)을 준수한 일반·마스커블 아이콘 12종, [Chrome Richer Install UI 규격](https://web.dev/articles/web-apps/richer-install-ui) 스크린샷 3종)이 완비되어 있습니다.

## 방법 1 · 1분 만에 무료 웹 주소 만들고 `.apk` 파일 내려받기 (개발 도구 설치 불필요)

1. **폴더 압축 풀기**: 내려받은 `pokemon-quiz-pwa.zip` 파일의 압축을 풉니다.
2. **무료 HTTPS 주소에 올리기 (드래그 앤 드롭 10초)**:
   - [Netlify Drop](https://app.netlify.com/drop) 또는 [GitHub Pages](https://pages.github.com/)에 접속해 압축을 푼 **`pokemon-quiz-pwa` 폴더 통째로** 끌어다 놓으면 `https://...` 전용 보안 웹 주소가 즉시 만들어집니다.
3. **PWABuilder에서 `.apk` 파일 받기**:
   - [PWABuilder](https://www.pwabuilder.com/)에 접속해 방금 만들어진 `https://...` 주소를 입력하고 **Start**를 누릅니다.
   - **Package for stores** 버튼 → **Android** 항목의 **Download Package**를 누르면 서명된 **`.apk` 설치 파일**(스마트폰에 직접 설치하는 APK 및 스토어 배포용 AAB 포함)이 압축 파일로 즉시 내려받아집니다.
   - 내려받은 압축 파일 속 `.apk` 파일을 카카오톡 나와의 채팅이나 USB로 안드로이드 스마트폰·태블릿에 보내 눌러 주면 정식 앱으로 설치됩니다.

## 방법 2 · `.apk` 없이 스마트폰 브라우저에서 바로 앱으로 설치하기 (가장 간편·보안 경고 없음)

1. 위 2번에서 만든 `https://...` 주소를 아이의 스마트폰이나 태블릿 **Chrome(또는 삼성 인터넷)**으로 엽니다.
2. 게임 시작 화면 왼쪽 위의 **`📲 앱 설치`** 버튼을 누르거나(브라우저 메뉴 `⋮` → **`앱 설치`** / **`홈 화면에 추가`** 선택), 아이폰·아이패드 Safari에서는 공유 버튼(`□↑`) → **`홈 화면에 추가`**를 누릅니다.
3. 바탕화면에 전용 피카츄·몬스터볼 아이콘이 생기며, 실행하면 주소창 없이 **전체 화면 앱**으로 열리고 한 번 실행한 뒤에는 **비행기 모드(오프라인)**에서도 5과목 문제, 한글·한자 조작 교구, 도감·진화가 그대로 작동합니다.
