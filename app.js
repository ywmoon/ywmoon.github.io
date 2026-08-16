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
  initTheme();
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

// ─── Theme ───────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('dc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('dc_theme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// ─── Load Posts (lightweight index) ──────────────────────────────
async function loadPosts() {
  try {
    const res = await fetch('data/posts.json?_t=' + Date.now());
    if (!res.ok) throw new Error('Failed to load posts');
    allPosts = await res.json();
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    filteredPosts = [...allPosts];
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

function openHomeView() {
  currentView = 'home';
  document.getElementById('hero-section').style.display = 'block';
  document.getElementById('posts-grid-section').style.display = 'block';
  document.getElementById('table-section').style.display = 'none';
  document.getElementById('article-reader-section').style.display = 'none';
  updateNavActiveState('nav-home-btn');
  renderPostCards();
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

  document.getElementById('reader-meta-date').textContent = post.date || '';
  document.getElementById('reader-title').textContent = post.title || '';
  document.getElementById('reader-badges').innerHTML = `
    <span class="dc-card-cat">${post.category || '인프라'}</span>
    ${(post.labels || []).map(l => `<span class="dc-tag-pill">#${l}</span>`).join(' ')}`;

  // Show loading spinner while fetching .md content
  const bodyEl = document.getElementById('reader-body-content');
  bodyEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted);">⏳ 콘텐츠 로딩 중...</div>';

  const content = await loadArticleContent(post);
  bodyEl.innerHTML = content;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavActiveState(activeId) {
  document.querySelectorAll('.dc-nav-btn').forEach(btn => btn.classList.remove('active'));
  const el = document.getElementById(activeId);
  if (el) el.classList.add('active');
}

// ─── Filtering ────────────────────────────────────────────────────
function applyFilters() {
  filteredPosts = allPosts.filter(post => {
    if ((post.status || 'published') !== 'published') return false;
    if (currentCategory !== 'ALL' && post.category !== currentCategory) return false;
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
  document.querySelectorAll('.dc-cat-tab').forEach(t =>
    t.classList.toggle('active', t.getAttribute('data-cat') === cat));
  applyFilters();
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
        <span class="dc-card-date">${post.date}</span>
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
      <td style="font-family:var(--font-mono);font-size:12.5px;">${post.date}</td>
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
