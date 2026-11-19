#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "=== [1/2] 전국도감 1,025마리 실물 이미지 오프라인 사전 다운로드 및 내장 중... ==="
python3 download_pokedex_offline.py --hd

echo "=== [2/2] GitHub 저장소 (https://github.com/bedesj/Quiz.git) 푸시 중... ==="
if command -v git >/dev/null 2>&1; then
  if [ ! -d ".git" ]; then
    git init
    git branch -M main
    git remote add origin https://github.com/bedesj/Quiz.git
  else
    git remote set-url origin https://github.com/bedesj/Quiz.git || git remote add origin https://github.com/bedesj/Quiz.git
  fi
  git add -A
  git commit -m "feat: 완전 오프라인 1025 도감 내장, 도감등록/보유포켓몬 분리, 한자 7급(150자), GO 이로치, 성취도 저장/삭제" || true
  git push -u origin main --force
  echo "✅ GitHub (https://github.com/bedesj/Quiz) 푸시 완료!"
else
  echo "✅ 오프라인 도감 내장 완료! (git 명령이 없어 수동 업로드를 이용해 주세요.)"
fi
