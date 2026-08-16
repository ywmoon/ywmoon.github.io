/**
 * DC InfraOps Intelligence - GitHub Pages Application Engine
 * Data: Markdown posts with YAML frontmatter + lightweight JSON index
 */

let allPosts = [];
let filteredPosts = [];
let currentCategory = 'ALL';
let currentTag = null;
let currentArchive = null;
let searchQuery = '';
let currentView = 'home';
let previousView = 'home';

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  loadPosts();
  window.addEventListener('hashchange', handleHashRoute);
});

function initDropdowns() {
  document.querySelectorAll('.dc-dropdown-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.dc-dropdown-wrap');
      const wasOpen = wrap.classList.contains('open');
      document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
      if (!wasOpen) wrap.classList.add('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dc-dropdown-wrap')) {
      document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
    }
  });
}

// ─── Load Posts (lightweight index) ──────────────────────────────
async function loadPosts() {
  try {
    const res = await fetch('data/posts.json?_t=' + Date.now());
    if (!res.ok) throw new Error('Failed to load posts');
    allPosts = await res.json();
    const CAT_PRIORITY = {
      '데일리 브리핑': 1,
      '테크 딥다이브': 2,
      '용어사전': 3,
      '팟캐스트': 4,
      '뉴스레터': 5,
      '데일리 뉴스레터': 5
    };
    allPosts.sort((a, b) => {
      if (a.date !== b.date) return new Date(b.date) - new Date(a.date);
      const pA = CAT_PRIORITY[a.category] || 99;
      const pB = CAT_PRIORITY[b.category] || 99;
      if (pA !== pB) return pA - pB;
      return (b.time || '').localeCompare(a.time || '');
    });
    filteredPosts = [...allPosts];
    updateCategoryTabCounts();
    populateNavDropdowns();
    handleHashRoute();
  } catch (err) {
    console.error(err);
    document.getElementById('posts-grid-container').innerHTML = `
      <div style="padding:40px;text-align:center;color:var(--text-muted);">
        데이터를 불러오지 못했습니다. 새로고침해 주세요.
      </div>`;
  }
}

// ─── Markdown / Frontmatter Parser ───────────────────────────────
function parseMd(raw) {
  // Split YAML frontmatter from body
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const yamlStr = match[1];
  const body = match[2].trim();

  // Simple YAML key-value parser (handles strings, arrays)
  const meta = {};
  let currentKey = null;
  let inArray = false;

  for (const line of yamlStr.split('\n')) {
    const arrayItem = line.match(/^  - (.+)$/);
    const keyValue  = line.match(/^(\w+):\s*(.*)$/);

    if (arrayItem && inArray && currentKey) {
      meta[currentKey].push(arrayItem[1].trim());
    } else if (keyValue) {
      currentKey = keyValue[1];
      const val = keyValue[2].trim().replace(/^["']|["']$/g, '');
      if (val === '') {
        meta[currentKey] = [];
        inArray = true;
      } else {
        meta[currentKey] = val;
        inArray = false;
      }
    }
  }

  return { meta, body };
}

// ─── Load individual article content (.md file) ───────────────────
async function loadArticleContent(post) {
  if (!post.content_file) return post.summary || '';
  try {
    const res = await fetch(post.content_file + '?_t=' + Date.now());
    if (!res.ok) throw new Error('Not found');
    const raw = await res.text();
    const { body } = parseMd(raw);
    return body;
  } catch (e) {
    return `<p style="color:var(--text-muted)">콘텐츠를 불러오지 못했습니다: ${e.message}</p>`;
  }
}

// ─── Navigation Dropdowns ─────────────────────────────────────────
function populateNavDropdowns() {
  const archiveCounts = {};
  const tagCounts = {};
  allPosts.forEach(post => {
    if (post.date) {
      const ym = post.date.substring(0, 7);
      archiveCounts[ym] = (archiveCounts[ym] || 0) + 1;
    }
    (post.labels || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; });
  });

  const archiveMenu = document.getElementById('archive-dropdown-menu');
  if (archiveMenu) {
    archiveMenu.innerHTML = Object.keys(archiveCounts).sort().reverse().map(ym => `
      <div class="dc-dropdown-item" onclick="filterArchive('${ym}')">
        <span>📅 ${ym.replace('-', '년 ')}월</span>
        <span class="dc-dropdown-count">${archiveCounts[ym]}</span>
      </div>`).join('');
  }
  const tagMenu = document.getElementById('tag-dropdown-menu');
  if (tagMenu) {
    tagMenu.innerHTML = Object.entries(tagCounts).sort((a,b)=>b[1]-a[1]).map(([tag, cnt]) => `
      <div class="dc-dropdown-item" onclick="filterTag('${tag}')">
        <span>🏷️ ${tag}</span>
        <span class="dc-dropdown-count">${cnt}</span>
      </div>`).join('');
  }
}

// ─── Routing ──────────────────────────────────────────────────────
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#article/')) {
    openArticleView(hash.replace('#article/', ''));
  } else if (hash === '#table') {
    openTableView();
  } else {
    openHomeView();
  }
}

function navigateHome() { window.location.hash = ''; openHomeView(); }
function navigateToDirectory() { window.location.hash = '#table'; openTableView(); }
function navigateBack() {
  if (previousView === 'table') { window.location.hash = '#table'; }
  else { window.location.hash = ''; }
}

function trackPageView(pagePath, pageTitle) {
  if (typeof gtag === 'function') {
    gtag('event', 'page_view', {
      page_path: pagePath || window.location.hash || '/',
      page_title: pageTitle || document.title,
      page_location: window.location.href
    });
  }
}

function openHomeView() {
  currentView = 'home';
  document.getElementById('hero-section').style.display = 'block';
  document.getElementById('posts-grid-section').style.display = 'block';
  document.getElementById('table-section').style.display = 'none';
  document.getElementById('article-reader-section').style.display = 'none';
  updateNavActiveState('nav-home-btn');
  applyFilters();
  trackPageView('/', 'DC InfraOps Intelligence | Home');
}

function openTableView() {
  previousView = 'table';
  currentView = 'table';
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('posts-grid-section').style.display = 'none';
  document.getElementById('table-section').style.display = 'block';
  document.getElementById('article-reader-section').style.display = 'none';
  updateNavActiveState('nav-table-btn');
  renderDirectoryTable();
  trackPageView('#table', 'DC InfraOps Intelligence | Directory Table');
}

async function openArticleView(articleId) {
  previousView = currentView;
  currentView = 'article';
  const decodedId = decodeURIComponent(articleId);
  const post = allPosts.find(p => p.id === decodedId || p.id === articleId || decodeURIComponent(p.id) === decodedId);
  if (!post) {
    console.warn('Post not found for id:', articleId, 'decoded:', decodedId);
    alert('해당 아티클을 찾을 수 없습니다.');
    navigateHome();
    return;
  }

  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('posts-grid-section').style.display = 'none';
  document.getElementById('table-section').style.display = 'none';
  const reader = document.getElementById('article-reader-section');
  reader.style.display = 'block';

  const timeBadge = post.time ? ` ${post.time} KST` : '';
  document.getElementById('reader-meta-date').textContent = `${post.date || ''}${timeBadge}`;
  document.getElementById('reader-title').textContent = post.title || '';
  document.getElementById('reader-badges').innerHTML = `
    <span class="dc-card-cat">${post.category || '인프라'}</span>
    ${(post.labels || []).map(l => `<span class="dc-tag-pill">#${l}</span>`).join(' ')}`;

  // Show loading spinner while fetching .md content
  const bodyEl = document.getElementById('reader-body-content');
  bodyEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted);">⏳ 콘텐츠 로딩 중...</div>';

  const content = await loadArticleContent(post);
  bodyEl.innerHTML = content;

  // 1. Calculate reading time & character count
  try {
    const plainText = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const charCount = plainText.length;
    const readMin = Math.max(1, Math.ceil(charCount / 500));
    document.getElementById('reader-read-time').textContent = `⏱️ 약 ${readMin}분 (${charCount.toLocaleString()}자)`;
  } catch (e) {
    document.getElementById('reader-read-time').textContent = '⏱️ 3분 분량';
  }

  // 2. Build Table of Contents (TOC)
  buildTableOfContents(bodyEl);

  // 3. Render Previous / Next Navigation Footer
  renderPostNavigation(post);

  // 4. Request AdSense Display Unit Fill
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}

  // 5. Track GA4 PageView with Article Title
  trackPageView(`#article/${post.id}`, post.title);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildTableOfContents(bodyEl) {
  const tocBox = document.getElementById('reader-toc-box');
  const tocList = document.getElementById('reader-toc-list');
  if (!tocBox || !tocList) return;

  const headings = bodyEl.querySelectorAll('h2, h3');
  if (headings.length < 2) {
    tocBox.style.display = 'none';
    tocList.innerHTML = '';
    return;
  }

  tocList.innerHTML = Array.from(headings).map((h, idx) => {
    const headingId = `heading-sec-${idx}`;
    h.id = headingId;
    const levelClass = h.tagName.toLowerCase() === 'h3' ? 'h3' : 'h2';
    const text = h.textContent.trim();
    return `<li class="dc-toc-item ${levelClass}"><a href="#${headingId}" onclick="event.preventDefault(); document.getElementById('${headingId}').scrollIntoView({behavior:'smooth'});">${text}</a></li>`;
  }).join('');

  tocBox.style.display = 'block';
}

function renderPostNavigation(currentPost) {
  const navEl = document.getElementById('reader-post-nav');
  if (!navEl) return;

  const published = allPosts.filter(p => (p.status || 'published') === 'published');
  const idx = published.findIndex(p => p.id === currentPost.id);
  if (idx === -1) {
    navEl.innerHTML = '';
    return;
  }

  const prevPost = idx < published.length - 1 ? published[idx + 1] : null;
  const nextPost = idx > 0 ? published[idx - 1] : null;

  let html = '';
  if (prevPost) {
    html += `
      <div class="dc-post-nav-item prev" onclick="window.location.hash='#article/${prevPost.id}'">
        <span class="dc-post-nav-label">← 이전 아티클</span>
        <span class="dc-post-nav-title">${prevPost.title}</span>
      </div>`;
  } else {
    html += `<div></div>`;
  }

  if (nextPost) {
    html += `
      <div class="dc-post-nav-item next" onclick="window.location.hash='#article/${nextPost.id}'">
        <span class="dc-post-nav-label">다음 아티클 →</span>
        <span class="dc-post-nav-title">${nextPost.title}</span>
      </div>`;
  }

  navEl.innerHTML = html;
}

// ─── Article Utility Actions ─────────────────────────────────────
function copyArticleUrl() {
  const url = window.location.href;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('🔗 아티클 링크가 클립보드에 복사되었습니다!');
    });
  } else {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('🔗 아티클 링크가 클립보드에 복사되었습니다!');
  }
}

function shareLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('reader-title').textContent);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=650,height=650,scrollbars=yes');
}

function printArticle() {
  window.print();
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('dc-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function updateNavActiveState(activeId) {
  document.querySelectorAll('.dc-nav-btn').forEach(btn => btn.classList.remove('active'));
  const el = document.getElementById(activeId);
  if (el) el.classList.add('active');
}

const CAT_ALIAS = {
  '뉴스레터': ['뉴스레터', '2-Column 리포트', '데일리 뉴스레터'],
  '2-Column 리포트': ['뉴스레터', '2-Column 리포트', '데일리 뉴스레터'],
  '데일리 뉴스레터': ['뉴스레터', '2-Column 리포트', '데일리 뉴스레터'],
  'IT 용어사전': ['IT 용어사전', '용어사전', '용어 사전'],
  '용어사전': ['IT 용어사전', '용어사전', '용어 사전'],
  '팟캐스트': ['팟캐스트', '10분 팟캐스트', '테크 팟캐스트'],
  '데일리 브리핑': ['데일리 브리핑', '브리핑'],
  '테크 딥다이브': ['테크 딥다이브', '딥다이브']
};

function matchCategory(postCat, filterCat) {
  if (!filterCat || filterCat === 'ALL') return true;
  if (postCat === filterCat) return true;
  const aliases = CAT_ALIAS[filterCat];
  if (aliases && aliases.includes(postCat)) return true;
  return false;
}

function updateCategoryTabCounts() {
  const published = allPosts.filter(p => (p.status || 'published') === 'published');
  const counts = {
    all: published.length,
    briefing: published.filter(p => matchCategory(p.category, '데일리 브리핑')).length,
    deepdive: published.filter(p => matchCategory(p.category, '테크 딥다이브')).length,
    glossary: published.filter(p => matchCategory(p.category, '용어사전')).length,
    podcast: published.filter(p => matchCategory(p.category, '팟캐스트')).length,
    newsletter: published.filter(p => matchCategory(p.category, '뉴스레터')).length
  };
  
  const elAll = document.getElementById('count-all');
  if (elAll) elAll.textContent = counts.all;
  const elBriefing = document.getElementById('count-briefing');
  if (elBriefing) elBriefing.textContent = counts.briefing;
  const elDeepdive = document.getElementById('count-deepdive');
  if (elDeepdive) elDeepdive.textContent = counts.deepdive;
  const elGlossary = document.getElementById('count-glossary');
  if (elGlossary) elGlossary.textContent = counts.glossary;
  const elPodcast = document.getElementById('count-podcast');
  if (elPodcast) elPodcast.textContent = counts.podcast;
  const elNewsletter = document.getElementById('count-newsletter');
  if (elNewsletter) elNewsletter.textContent = counts.newsletter;
}

// ─── Filtering ────────────────────────────────────────────────────
function applyFilters() {
  filteredPosts = allPosts.filter(post => {
    if ((post.status || 'published') !== 'published') return false;
    if (!matchCategory(post.category, currentCategory)) return false;
    if (currentTag && !(post.labels || []).includes(currentTag)) return false;
    if (currentArchive && !(post.date || '').startsWith(currentArchive)) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        (post.title || '').toLowerCase().includes(q) ||
        (post.summary || '').toLowerCase().includes(q) ||
        (post.labels || []).some(l => l.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });
  updateFilterStatusBar();
  if (currentView === 'table') renderDirectoryTable();
  else renderPostCards();
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.dc-cat-tab').forEach(t => {
    const tabCat = t.getAttribute('data-cat');
    t.classList.toggle('active', tabCat === cat || (cat === 'ALL' && tabCat === 'ALL'));
  });
  if (currentView === 'article') navigateHome();
  else applyFilters();
}
function filterTag(tag) {
  currentTag = tag;
  document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
  if (currentView === 'article') navigateHome();
  else applyFilters();
}
function filterArchive(ym) {
  currentArchive = ym;
  document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
  if (currentView === 'article') navigateHome();
  else applyFilters();
}
function handleSearchInput(val) {
  searchQuery = val.trim();
  document.getElementById('search-clear-btn').style.display = searchQuery ? 'inline-block' : 'none';
  applyFilters();
}
function clearSearch() {
  document.getElementById('global-search-input').value = '';
  searchQuery = '';
  document.getElementById('search-clear-btn').style.display = 'none';
  applyFilters();
}
function resetAllFilters() {
  currentCategory = 'ALL'; currentTag = null; currentArchive = null;
  clearSearch();
  document.querySelectorAll('.dc-cat-tab').forEach(t =>
    t.classList.toggle('active', t.getAttribute('data-cat') === 'ALL'));
  applyFilters();
}

function updateFilterStatusBar() {
  const bar = document.getElementById('filter-status-bar');
  const text = document.getElementById('filter-status-text');
  const conds = [];
  if (currentCategory !== 'ALL') conds.push(`카테고리: ${currentCategory}`);
  if (currentTag) conds.push(`태그: #${currentTag}`);
  if (currentArchive) conds.push(`기간: ${currentArchive.replace('-','년 ')}월`);
  if (searchQuery) conds.push(`검색어: "${searchQuery}"`);
  if (conds.length > 0) {
    bar.style.display = 'flex';
    text.textContent = `🎯 필터 적용 중: ${conds.join(' | ')} (총 ${filteredPosts.length}건)`;
  } else {
    bar.style.display = 'none';
  }
}

// ─── Renderers ────────────────────────────────────────────────────
function renderPostCards() {
  const container = document.getElementById('posts-grid-container');
  if (!container) return;
  const visible = filteredPosts.filter(p => (p.status || 'published') === 'published');
  if (visible.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;padding:60px 20px;text-align:center;color:var(--text-muted);">🔍 조건에 일치하는 아티클이 없습니다.</div>`;
    return;
  }
  container.innerHTML = visible.map(post => `
    <div class="dc-post-card" onclick="window.location.hash='#article/${post.id}'">
      <div class="dc-card-top">
        <span class="dc-card-cat">${post.category || '인프라'}</span>
        <span class="dc-card-date">${post.date}${post.time ? ' ' + post.time : ''}</span>
      </div>
      <h3 class="dc-card-title">${post.title}</h3>
      <p class="dc-card-summary">${post.summary || ''}</p>
      <div class="dc-card-tags">
        ${(post.labels || []).slice(0,4).map(l=>`<span class="dc-tag-pill">#${l}</span>`).join('')}
      </div>
    </div>`).join('');
}

function renderDirectoryTable() {
  const tbody = document.getElementById('directory-table-body');
  const counter = document.getElementById('table-counter-text');
  if (!tbody) return;
  const visible = filteredPosts.filter(p => (p.status || 'published') === 'published');
  if (counter) counter.textContent = `총 ${visible.length}건`;
  if (visible.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-muted);">데이터가 없습니다.</td></tr>`;
    return;
  }
  tbody.innerHTML = visible.map((post, idx) => `
    <tr>
      <td style="font-weight:700;color:var(--text-muted);">${visible.length - idx}</td>
      <td style="font-family:var(--font-mono);font-size:12px;white-space:nowrap;">
        <div>${post.date}</div>
        ${post.time ? `<div style="color:var(--text-muted);font-size:11px;">${post.time}</div>` : ''}
      </td>
      <td><span class="dc-card-cat">${post.category}</span></td>
      <td><strong style="cursor:pointer;" onclick="window.location.hash='#article/${post.id}'">${post.title}</strong></td>
      <td><div style="display:flex;flex-wrap:wrap;gap:4px;">${(post.labels||[]).slice(0,3).map(l=>`<span class="dc-tag-pill">#${l}</span>`).join('')}</div></td>
      <td><button class="dc-table-open-btn" onclick="window.location.hash='#article/${post.id}'">보기</button></td>
    </tr>`).join('');
}

// ─── Profile Modal ────────────────────────────────────────────────
function openProfileModal() { document.getElementById('profile-modal').classList.add('open'); }
function closeProfileModal() { document.getElementById('profile-modal').classList.remove('open'); }
function handleBackdropClick(e) { if (e.target.id === 'profile-modal') closeProfileModal(); }
