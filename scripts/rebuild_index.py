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
        print(f"Directory {posts_dir} does not exist. Creating...")
        os.makedirs(posts_dir, exist_ok=True)
        
    posts = []
    
    for fname in os.listdir(posts_dir):
        if not fname.endswith('.md'):
            continue
            
        fpath = os.path.join(posts_dir, fname)
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            meta, _ = parse_frontmatter(content)
            pid = meta.get('id') or fname[:-3]
            
            posts.append({
                'id': pid,
                'title': meta.get('title') or pid,
                'date': meta.get('date') or '2026-08-16',
                'category': meta.get('category') or '인프라',
                'labels': meta.get('labels') if isinstance(meta.get('labels'), list) else [],
                'summary': meta.get('summary') or '',
                'status': meta.get('status') or 'published',
                'content_file': f'data/posts/{fname}'
            })
        except Exception as e:
            print(f"⚠️ Error reading {fname}: {e}")
            
    # Sort descending by date
    posts.sort(key=lambda x: x.get('date', ''), reverse=True)
    
    # 1. Write posts.json
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)
    print(f"✅ Rebuilt data/posts.json with {len(posts)} articles.")
    
    # 2. Rebuild sitemap.xml
    today_str = datetime.now().strftime('%Y-%m-%d')
    url_entries = [
        f"  <url>\n    <loc>https://ywmoon.github.io/</loc>\n    <lastmod>{today_str}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>"
    ]
    
    for p in posts:
        if p.get('status') == 'published':
            pdate = p.get('date', today_str)
            url_entries.append(
                f"  <url>\n    <loc>https://ywmoon.github.io/#article/{p['id']}</loc>\n    <lastmod>{pdate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>"
            )
            
    sitemap_xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(url_entries) + '\n</urlset>\n'
    
    with open(sitemap_file, 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)
    print(f"✅ Rebuilt sitemap.xml with {len(url_entries)} URLs.")

if __name__ == '__main__':
    main()
