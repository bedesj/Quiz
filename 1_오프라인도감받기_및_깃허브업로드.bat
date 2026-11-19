@echo off
chcp 65001 >nul
title 포켓몬 퀴즈 대모험 - 오프라인 도감 1,025마리 미리받기 및 GitHub 자동 업로드
cd /d "%~dp0"

echo ============================================================================
echo  [1/2] 전국도감 1,025마리 실물 이미지를 미리 다운로드하여 오프라인 내장 중...
echo ============================================================================
python download_pokedex_offline.py --hd
if %errorlevel% neq 0 (
  echo [안내] python 명령 대신 py 런처로 다시 시도합니다...
  py -3 download_pokedex_offline.py --hd
)

echo.
echo ============================================================================
echo  [2/2] GitHub 저장소 (https://github.com/bedesj/Quiz.git) 자동 푸시 진행...
echo ============================================================================
where git >nul 2>nul
if %errorlevel% neq 0 (
  echo [완료] 오프라인 도감 내장이 완료되었습니다!
  echo Git이 설치되어 있지 않으므로 이 폴더의 파일들을 https://github.com/bedesj/Quiz 에 업로드해 주세요.
  pause
  exit /b 0
)

if not exist ".git" (
  git init
  git branch -M main
  git remote add origin https://github.com/bedesj/Quiz.git
) else (
  git remote set-url origin https://github.com/bedesj/Quiz.git 2>nul || git remote add origin https://github.com/bedesj/Quiz.git
)

git add -A
git commit -m "feat: 완전 오프라인 1025 도감 내장, 도감등록/보유포켓몬 분리, 한자 7급(150자), GO 이로치, 성취도 저장/삭제"
git push -u origin main --force

echo.
echo ============================================================================
echo  모든 오프라인 도감 내장 및 GitHub(bedesj/Quiz) 업로드가 완료되었습니다!
echo ============================================================================
pause
