#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
download_pokedex_offline.py
전국도감 1~1,025번 포켓몬 도감 이미지를 미리 내려받아 아예 인터넷이 없는 완전 오프라인 환경(USB·비행기 모드·file://)에서도
처음 켜는 순간부터 100% 실물 포켓몬으로 구동되도록 패키징하는 원클릭 도구입니다. (외부 라이브러리 설치 불필요)

사용법:
  python download_pokedex_offline.py          # 기본 1,025마리 + 이로치 1,025마리 다운로드 및 data/offline_sprites_bundle.js 생성
  python download_pokedex_offline.py --hd     # 고화질 HOME 3D 1,025마리(./sprites/home/)까지 추가 다운로드
"""

import argparse
import base64
import concurrent.futures
import json
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SPRITES_DIR = ROOT / "sprites"
BUNDLE_JS = ROOT / "data" / "offline_sprites_bundle.js"

COMPACT_BASE = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/"
HOME_BASE = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/other/home/"


def fetch_bytes(url: str, timeout: int = 15):
    req = urllib.request.Request(url, headers={"User-Agent": "PokemonQuizOfflineBundler/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        if resp.status == 200:
            return resp.read()
    return None


def download_one(task):
    pid, kind, primary_url, fallback_url, dest_path = task
    if dest_path.is_file() and dest_path.stat().st_size > 64:
        return pid, kind, dest_path.read_bytes(), True
    for u in (primary_url, fallback_url):
        if not u:
            continue
        try:
            data = fetch_bytes(u)
            if data and len(data) > 64:
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                dest_path.write_bytes(data)
                return pid, kind, data, True
        except Exception:
            pass
    return pid, kind, None, False


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--hd", action="store_true", help="고화질 HOME 3D 1,025마리(./sprites/home/)도 함께 다운로드")
    parser.add_argument("--no-shiny", action="store_true", help="이로치 이미지 생략")
    parser.add_argument("--skip-js-bundle", action="store_true", help="data/offline_sprites_bundle.js Base64 내장 생략(./sprites/ 폴더만 생성)")
    args = parser.parse_args()

    tasks = []
    for pid in range(1, 1026):
        tasks.append((
            pid, "n",
            f"{COMPACT_BASE}{pid}.png",
            f"{HOME_BASE}{pid}.png",
            SPRITES_DIR / f"{pid}.png",
        ))
        if not args.no_shiny:
            tasks.append((
                pid, "s",
                f"{COMPACT_BASE}shiny/{pid}.png",
                f"{HOME_BASE}shiny/{pid}.png",
                SPRITES_DIR / "shiny" / f"{pid}.png",
            ))
        if args.hd:
            tasks.append((
                pid, "hd",
                f"{HOME_BASE}{pid}.png",
                f"{COMPACT_BASE}{pid}.png",
                SPRITES_DIR / "home" / f"{pid}.png",
            ))

    print(f"📦 전국도감 오프라인 이미지 사전 다운로드 시작 (총 {len(tasks):,}개 파일)...")
    uri_map = {}
    done_cnt = 0
    ok_cnt = 0

    with concurrent.futures.ThreadPoolExecutor(max_workers=24) as pool:
        for pid, kind, raw, ok in pool.map(download_one, tasks):
            done_cnt += 1
            if ok:
                ok_cnt += 1
                if not args.skip_js_bundle and kind in ("n", "s") and raw:
                    key = f"{pid}_{kind}"
                    uri_map[key] = "data:image/png;base64," + base64.b64encode(raw).decode("ascii")
            if done_cnt % 100 == 0 or done_cnt == len(tasks):
                pct = (done_cnt / len(tasks)) * 100
                print(f"  진행률: {done_cnt:,} / {len(tasks):,} ({pct:.1f}%) — 성공 {ok_cnt:,}개")

    js_lines = [
        "// 자동 생성된 전국도감 1,025종 오프라인 내장 스프라이트 데이터",
        f"window.HAS_LOCAL_SPRITES_FOLDER = true;",
        f"window.HAS_LOCAL_HD_SPRITES = {'true' if args.hd else 'false'};",
    ]
    if not args.skip_js_bundle and uri_map:
        js_lines.append("window.OFFLINE_SPRITE_DATA_URIS = " + json.dumps(uri_map, separators=(",", ":")) + ";")
    else:
        js_lines.append("window.OFFLINE_SPRITE_DATA_URIS = window.OFFLINE_SPRITE_DATA_URIS || {};")

    BUNDLE_JS.write_text("\n".join(js_lines) + "\n", encoding="utf-8")
    print(f"\n✅ 완료! ./sprites/ 폴더 및 {BUNDLE_JS.name} 생성 완료 ({ok_cnt:,}개 실물 포켓몬 내장).")
    print("이제 인터넷을 완전히 끈 상태(비행기 모드 · file:// 더블클릭 · 오프라인 앱)에서도 처음부터 1,025마리가 실물로 작동합니다!")


if __name__ == "__main__":
    sys.exit(main() or 0)
