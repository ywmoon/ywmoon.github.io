#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
DC InfraOps Blog - Automatic Index & Sitemap Rebuilder
Scans all data/posts/*.md files and rebuilds data/posts.json and sitemap.xml
"""

import os
import re
import json
from datetime import datetime
from collections import Counter

def parse_frontmatter(content: str):
    match = re.match(r'^---\n(.*?)\n---\n?(.*)$', content, re.DOTALL)
    if not match:
        return {}, content
    
    yaml_text = match.group(1)
    body = match.group(2).strip()
    
    meta = {}
    current_key = None
    in_array = False
    
    for line in yaml_text.splitlines():
        line = line.rstrip()
        array_match = re.match(r'^\s*-\s*(.+)$', line)
        kv_match = re.match(r'^(\w+):\s*(.*)$', line)
        
        if array_match and in_array and current_key:
            meta[current_key].append(array_match.group(1).strip().strip('"\''))
        elif kv_match:
            current_key = kv_match.group(1)
            val = kv_match.group(2).strip().strip('"\'')
            if val == '':
                meta[current_key] = []
                in_array = True
            else:
                meta[current_key] = val
                in_array = False
                
    return meta, body

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    posts_dir = os.path.join(base_dir, 'data', 'posts')
    index_file = os.path.join(base_dir, 'data', 'posts.json')
    sitemap_file = os.path.join(base_dir, 'sitemap.xml')
    
    if not os.path.exists(posts_dir):
        os.makedirs(posts_dir, exist_ok=True)
        
    posts = []
    
    CATEGORY_ORDER = {
        'Daily Briefing': 1,
        'Tech Deep Dive': 2,
        'Terminology': 3,
        'Podcast': 4,
        'Newsletter': 5,
        '데일리 브리핑': 1,
        '테크 딥다이브': 2,
        '용어사전': 3,
        '팟캐스트': 4,
        '뉴스레터': 5
    }

    CAT_EMOJI = {
        'Daily Briefing': '📋',
        'Tech Deep Dive': '🔬',
        'Terminology': '💡',
        'Podcast': '🎧',
        'Newsletter': '📧'
    }

    CAT_NORMALIZE = {
        '데일리 브리핑': 'Daily Briefing',
        '테크 딥다이브': 'Tech Deep Dive',
        '용어사전': 'Terminology',
        'IT 용어사전': 'Terminology',
        '팟캐스트': 'Podcast',
        '10분 팟캐스트': 'Podcast',
        '뉴스레터': 'Newsletter',
        '데일리 뉴스레터': 'Newsletter',
        '2-Column 리포트': 'Newsletter'
    }

    for fname in os.listdir(posts_dir):
        if not fname.endswith('.md'):
            continue
            
        fpath = os.path.join(posts_dir, fname)
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            meta, _ = parse_frontmatter(content)
            pid = meta.get('id') or fname[:-3]
            raw_cat = meta.get('category') or 'Daily Briefing'
            cat = CAT_NORMALIZE.get(raw_cat, raw_cat)
            
            # 시간 필드 파싱 (없을 경우 카테고리 기준 기본 시간 부여)
            time_val = meta.get('time')
            if not time_val:
                default_times = {
                    'Daily Briefing': '07:30',
                    'Tech Deep Dive': '07:32',
                    'Terminology': '07:35',
                    'Podcast': '07:38',
                    'Newsletter': '07:40'
                }
                time_val = default_times.get(cat, '07:30')

            # 최종 수정/커밋 시각 파싱
            updated_val = meta.get('updated') or meta.get('last_modified')
            if not updated_val:
                try:
                    mtime = os.path.getmtime(fpath)
                    updated_val = datetime.fromtimestamp(mtime).strftime('%Y-%m-%d %H:%M')
                except Exception:
                    updated_val = None
            
            posts.append({
                'id': pid,
                'title': meta.get('title') or pid,
                'date': meta.get('date') or '2026-08-16',
                'time': time_val,
                'updated': updated_val,
                'category': cat,
                'labels': meta.get('labels') if isinstance(meta.get('labels'), list) else [],
                'summary': meta.get('summary') or '',
                'status': meta.get('status') or 'published',
                'content_file': f'data/posts/{fname}'
            })
        except Exception as e:
            print(f"   ⚠️ 파일 읽기 오류 ({fname}): {e}")
            
    # 정렬: 1순위 날짜 최신순(내림차순) -> 2순위 카테고리 황금 순서(오름차순) -> 3순위 시간(내림차순)
    posts.sort(key=lambda x: (
        x.get('date', ''),
        -CATEGORY_ORDER.get(x.get('category', ''), 99),
        x.get('time', '')
    ), reverse=True)
    
    # 1. Write posts.json
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    
    # 카테고리별 집계
    cat_counts = Counter(p.get('category', 'Unknown') for p in posts)
    cat_summary = " | ".join(f"{CAT_EMOJI.get(c, '📁')} {c}: {n}건" for c, n in sorted(cat_counts.items(), key=lambda x: CATEGORY_ORDER.get(x[0], 99)))
    
    pub_count = sum(1 for p in posts if p.get('status') == 'published')
    hidden_count = len(posts) - pub_count
    
    print(f"   📋 [인덱스 생성] data/posts.json ➔ 총 {len(posts)}개 아티클 (🟢 공개 {pub_count}건 | 🟡 숨김 {hidden_count}건)")
    print(f"      • 카테고리 분포: {cat_summary}")
    if posts:
        latest = posts[0]
        print(f"      • ✨ 최신 발행글: [{latest.get('date')}] {latest.get('title')}")
    
    # 2. Rebuild sitemap.xml
    today_str = datetime.now().strftime('%Y-%m-%d')
    url_entries = [
        f"  <url>\n    <loc>https://ywmoon.github.io/</loc>\n    <lastmod>{today_str}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>"
    ]
    
    for p in posts:
        if p.get('status') == 'published':
            pdate = p.get('date', today_str)
            url_entries.append(
                f"  <url>\n    <loc>https://ywmoon.github.io/article/{p['id']}/</loc>\n    <lastmod>{pdate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>"
            )
            
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(url_entries) + '\n</urlset>\n'
    
    with open(sitemap_file, 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)
    print(f"   🗺️ [SEO 사이트맵] sitemap.xml ➔ 홈 1개 + 아티클 {pub_count}개 = 총 {len(url_entries)}개 URL 최신화")

    # 3. Generate OG Stub HTML files (article/[id]/index.html)
    article_dir = os.path.join(base_dir, 'article')
    os.makedirs(article_dir, exist_ok=True)

    # 현재 .md 기준 유효한 ID 집합 (고아 스텁 정리용)
    valid_ids = {p['id'] for p in posts if p.get('status') == 'published'}

    # 기존 스텁 중 .md 없는 고아 디렉토리 정리
    orphan_count = 0
    if os.path.isdir(article_dir):
        for entry in os.listdir(article_dir):
            entry_path = os.path.join(article_dir, entry)
            if os.path.isdir(entry_path) and entry not in valid_ids:
                stub_path = os.path.join(entry_path, 'index.html')
                if os.path.exists(stub_path):
                    os.remove(stub_path)
                try:
                    os.rmdir(entry_path)
                except OSError:
                    pass
                orphan_count += 1

    # 유효한 아티클 스텁 HTML 생성/갱신
    stub_count = 0
    for p in posts:
        if p.get('status') != 'published':
            continue
        pid = p['id']
        title = p.get('title', pid)
        summary = p.get('summary', title)
        # HTML 특수문자 이스케이프
        title_esc = title.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt;')
        summary_esc = summary.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;').replace('>', '&gt;')
        canonical_url = f'https://ywmoon.github.io/article/{pid}/'
        spa_url = f'https://ywmoon.github.io/#article/{pid}'
        full_title = title_esc

        stub_html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{full_title}</title>
  <meta name="description" content="{summary_esc}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="{canonical_url}" />
  <!-- OpenGraph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="{full_title}" />
  <meta property="og:description" content="{summary_esc}" />
  <meta property="og:url" content="{canonical_url}" />
  <meta property="og:image" content="https://ywmoon.github.io/assets/avatar.jpg" />
  <meta property="og:site_name" content="Datacenter InfraOps &amp; Cloud Industry Notes" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="{full_title}" />
  <meta name="twitter:description" content="{summary_esc}" />
  <meta name="twitter:image" content="https://ywmoon.github.io/assets/avatar.jpg" />
  <!-- Instant redirect for real users -->
  <meta http-equiv="refresh" content="0; url={spa_url}" />
  <script>window.location.replace('{spa_url}');</script>
</head>
<body></body>
</html>
"""
        stub_dir = os.path.join(article_dir, pid)
        os.makedirs(stub_dir, exist_ok=True)
        stub_file = os.path.join(stub_dir, 'index.html')
        with open(stub_file, 'w', encoding='utf-8') as f:
            f.write(stub_html)
        stub_count += 1

    orphan_msg = f" (고아 스텁 {orphan_count}개 정리)" if orphan_count > 0 else ""
    print(f"   🔗 [OG 스텁 생성] article/[id]/index.html ➔ {stub_count}개 생성/갱신{orphan_msg}")

    # 4. Generate feed.xml (RSS 2.0 Feed)
    import email.utils
    feed_file = os.path.join(base_dir, 'feed.xml')
    feed_posts = [p for p in posts if p.get('status') == 'published'][:150]
    
    def _xml_escape(s):
        return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

    items_xml = ""
    for p in feed_posts:
        pub_date_str = p.get('date', today_str)
        try:
            p_dt = datetime.strptime(pub_date_str, "%Y-%m-%d")
            p_rfc = email.utils.format_datetime(p_dt)
        except Exception:
            p_rfc = ""
        
        p_link = f"https://ywmoon.github.io/article/{p['id']}/"
        items_xml += f"""    <item>
      <title>{_xml_escape(p.get('title', p['id']))}</title>
      <link>{p_link}</link>
      <guid isPermaLink="true">{p_link}</guid>
      <pubDate>{p_rfc}</pubDate>
      <category>{_xml_escape(p.get('category', 'InfraOps'))}</category>
      <description>{_xml_escape(p.get('summary', ''))}</description>
    </item>\n"""

    last_build = email.utils.format_datetime(datetime.now())
    feed_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DC InfraOps Intelligence</title>
    <link>https://ywmoon.github.io</link>
    <description>글로벌 AI 데이터센터 전력망, 냉각, 클라우드 인프라 엔지니어링 데일리 트렌드</description>
    <language>ko</language>
    <lastBuildDate>{last_build}</lastBuildDate>
    <atom:link href="https://ywmoon.github.io/feed.xml" rel="self" type="application/rss+xml"/>
{items_xml}  </channel>
</rss>"""

    with open(feed_file, 'w', encoding='utf-8') as f:
        f.write(feed_xml)
    print(f"   📡 [RSS 피드] feed.xml ➔ 총 {len(feed_posts)}개 최신 아티클 포함 최신화")

if __name__ == '__main__':
    main()
