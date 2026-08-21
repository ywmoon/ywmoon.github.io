
// ═══════════════════════════════════════════════════════════════
// CONFIG & CONSTANTS
// ═══════════════════════════════════════════════════════════════
const OWNER = 'ywmoon';
const REPO  = 'ywmoon.github.io';
const BRANCH = 'main';

const CAT_PRIORITY = {
  'Daily Briefing': 1,
  'Tech Deep Dive': 2,
  'Terminology': 3,
  'Podcast': 4,
  'Newsletter': 5,
  '데일리 브리핑': 1,
  '테크 딥다이브': 2,
  '용어사전': 3,
  '팟캐스트': 4,
  '뉴스레터': 5,
  '데일리 뉴스레터': 5
};

const CAT_NORMALIZE = {
  '데일리 브리핑': 'Daily Briefing',
  '테크 딥다이브': 'Tech Deep Dive',
  '용어사전': 'Terminology',
  'IT 용어사전': 'Terminology',
  '팟캐스트': 'Podcast',
  '10분 팟캐스트': 'Podcast',
  '뉴스레터': 'Newsletter',
  '데일리 뉴스레터': 'Newsletter',
  '2-Column 리포트': 'Newsletter'
};

const CAT_ALIAS = {
  'Newsletter': ['Newsletter', '뉴스레터', '2-Column 리포트', '데일리 뉴스레터'],
  '뉴스레터': ['Newsletter', '뉴스레터', '2-Column 리포트', '데일리 뉴스레터'],
  'Terminology': ['Terminology', '용어사전', 'IT 용어사전', '용어 사전'],
  '용어사전': ['Terminology', '용어사전', 'IT 용어사전', '용어 사전'],
  'Podcast': ['Podcast', '팟캐스트', '10분 팟캐스트', '테크 팟캐스트'],
  '팟캐스트': ['Podcast', '팟캐스트', '10분 팟캐스트', '테크 팟캐스트'],
  'Daily Briefing': ['Daily Briefing', '데일리 브리핑', '브리핑'],
  '데일리 브리핑': ['Daily Briefing', '데일리 브리핑', '브리핑'],
  'Tech Deep Dive': ['Tech Deep Dive', '테크 딥다이브', '딥다이브'],
  '테크 딥다이브': ['Tech Deep Dive', '테크 딥다이브', '딥다이브']
};

// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let token = '';
let allPosts = [];
let selectedPostIds = new Set();
let currentFilter = 'ALL';
let editingPostId = null;
let deletingPostId = null;
let editorPostId = null;
let editorFileSha = null;

// ─── Firebase Realtime Database View Counter ─────────────────────
const FIREBASE_DB_URL = 'https://ywmoon-blog-default-rtdb.firebaseio.com';
let allViewCounts = {};

function formatViewCount(num) {
  if (!num || isNaN(num)) return '0';
  if (num >= 10000) return (num / 10000).toFixed(1) + '만';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return Number(num).toLocaleString();
}

function getSafePostKey(postId) {
  return (postId || '').replace(/[^a-zA-Z0-9_-]/g, '_');
}

async function fetchAllViewCounts() {
  try {
    const res = await fetch(`${FIREBASE_DB_URL}/views.json`);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        allViewCounts = data;
        updateTotalViewsStat();
        renderTable();
      }
    }
  } catch (e) {
    console.warn('View count fetch error:', e);
  }
}

function updateTotalViewsStat() {
  const total = Object.values(allViewCounts).reduce((acc, cur) => acc + (typeof cur === 'number' ? cur : 0), 0);
  const el = document.getElementById('stat-views');
  if (el) el.textContent = total.toLocaleString();
}

// ═══════════════════════════════════════════════════════════════
// LOGIN & AUTH
// ═══════════════════════════════════════════════════════════════
async function handleLogin() {
  const input = document.getElementById('token-input');
  const t = input.value.trim();
  if (!t) return showLoginError('토큰을 입력해 주세요.');

  const btn = document.getElementById('login-btn');
  btn.innerHTML = '<span class="loading-spinner"></span> 인증 중...';
  btn.disabled = true;

  try {
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}`, {
      headers: { 'Authorization': `Bearer ${t}`, 'Accept': 'application/vnd.github.v3+json' }
    });

    if (res.status === 200) {
      token = t;
      sessionStorage.setItem('admin_token', t);
      showAdminPanel();
    } else if (res.status === 401) {
      showLoginError('❌ 토큰이 올바르지 않습니다. 다시 확인해 주세요.');
    } else if (res.status === 403) {
      showLoginError('❌ 토큰 권한이 부족합니다. Contents Read & Write 권한을 확인하세요.');
    } else {
      showLoginError(`❌ 오류: ${res.status} ${res.statusText}`);
    }
  } catch (err) {
    showLoginError('❌ 통신 오류: ' + err.message);
  } finally {
    btn.innerHTML = '입장하기';
    btn.disabled = false;
  }
}

function showLoginError(msg) {
  const el = document.getElementById('login-error');
  el.style.display = 'block';
  el.textContent = msg;
}

document.getElementById('token-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = sessionStorage.getItem('admin_token');
  if (saved) {
    token = saved;
    showAdminPanel();
  }
});

function handleLogout() {
  sessionStorage.removeItem('admin_token');
  token = '';
  allPosts = [];
  selectedPostIds.clear();
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('token-input').value = '';
}

function showAdminPanel() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('admin-panel').style.display = 'block';
  document.getElementById('token-display').textContent = `🔑 ghp_...${token.slice(-6)}`;
  loadPosts();
}

// ═══════════════════════════════════════════════════════════════
// GITHUB API HELPERS
// ═══════════════════════════════════════════════════════════════
function ghHeaders() {
  return {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };
}

async function ghGet(path) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`, { headers: ghHeaders() });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
}

async function ghPut(path, content, message, sha = null) {
  const b64 = btoa(unescape(encodeURIComponent(content)));
  const body = { message, content: b64, branch: BRANCH };
  if (sha) body.sha = sha;
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: 'PUT', headers: ghHeaders(), body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || `PUT ${path} failed: ${res.status}`);
  }
  return res.json();
}

async function ghDelete(path, message, sha) {
  const body = { message, sha, branch: BRANCH };
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: 'DELETE', headers: ghHeaders(), body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.json();
}

function generateArticleStubHtml(post) {
  const title = (post.title || post.id || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const summary = (post.summary || post.title || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const canonicalUrl = `https://ywmoon.github.io/article/${post.id}/`;
  const spaUrl = `https://ywmoon.github.io/#article/${post.id}`;
  const fullTitle = title;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullTitle}</title>
  <meta name="description" content="${summary}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />
  <!-- OpenGraph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${summary}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="https://ywmoon.github.io/assets/avatar.jpg" />
  <meta property="og:site_name" content="Datacenter InfraOps &amp; Cloud Industry Notes" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${summary}" />
  <meta name="twitter:image" content="https://ywmoon.github.io/assets/avatar.jpg" />
  <!-- Instant redirect for real users -->
  <meta http-equiv="refresh" content="0; url=${spaUrl}" />
  <script>window.location.replace('${spaUrl}');<\/script>
</head>
<body></body>
</html>
`;
}

async function ghSyncArticleStub(post) {
  if (!post || (post.status && post.status !== 'published')) return;
  const stubPath = `article/${post.id}/index.html`;
  const content = generateArticleStubHtml(post);
  try {
    let sha = null;
    try {
      const existing = await ghGet(stubPath);
      sha = existing.sha;
    } catch (_) {}
    await ghPut(stubPath, content, `Sync OG stub: ${post.id}`, sha);
  } catch (e) {
    console.warn(`OG stub sync failed for ${post.id}:`, e);
  }
}

async function ghDeleteArticleStub(id) {
  const stubPath = `article/${id}/index.html`;
  try {
    const existing = await ghGet(stubPath);
    await ghDelete(stubPath, `Delete OG stub: ${id}`, existing.sha);
  } catch (_) {}
}

// ═══════════════════════════════════════════════════════════════
// LOAD POSTS & STATS
// ═══════════════════════════════════════════════════════════════
async function loadPosts() {
  try {
    const file = await ghGet('data/posts.json');
    const raw = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));
    const json = JSON.parse(raw);
    
    allPosts = json.sort((a, b) => {
      if (a.date !== b.date) return new Date(b.date) - new Date(a.date);
      const pA = CAT_PRIORITY[a.category] || 99;
      const pB = CAT_PRIORITY[b.category] || 99;
      if (pA !== pB) return pA - pB;
      return (b.time || '').localeCompare(a.time || '');
    });
    
    selectedPostIds.clear();
    populateTagDropdown();
    updateStats();
    renderTable();
    fetchAllViewCounts();
  } catch (e) {
    showToast('❌ posts.json 로드 실패: ' + e.message, 'error');
  }
}

async function savePostsJson(commitMsg) {
  const file = await ghGet('data/posts.json');
  const content = JSON.stringify(allPosts, null, 2);
  await ghPut('data/posts.json', content, commitMsg, file.sha);
  populateTagDropdown();
}

function updateStats() {
  const total = allPosts.length;
  const published = allPosts.filter(p => (p.status || 'published') === 'published').length;
  const hidden = allPosts.filter(p => p.status === 'hidden').length;
  const cats = new Set(allPosts.map(p => CAT_NORMALIZE[p.category] || p.category)).size;
  
  // Calculate SEO Health (% of articles with summary >= 60 chars and labels >= 2)
  let healthy = 0;
  allPosts.forEach(p => {
    const sumLen = (p.summary || '').length;
    const tagCount = (p.labels || []).length;
    if (sumLen >= 60 && tagCount >= 2) healthy++;
  });
  const seoScore = total > 0 ? Math.round((healthy / total) * 100) : 100;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-published').textContent = published;
  document.getElementById('stat-hidden').textContent = hidden;
  document.getElementById('stat-cats').textContent = cats;
  document.getElementById('stat-seo').textContent = seoScore + '%';
  updateTotalViewsStat();

  // Update filter badge counts
  document.getElementById('fcount-all').textContent = total;
  document.getElementById('fcount-pub').textContent = published;
  document.getElementById('fcount-hid').textContent = hidden;
}

// ═══════════════════════════════════════════════════════════════
// FILTERING & TABLE RENDERING
// ═══════════════════════════════════════════════════════════════
let selectedTag = 'ALL';

function filterByTagChip(tag) {
  if (selectedTag === tag) {
    selectedTag = 'ALL';
  } else {
    selectedTag = tag;
  }
  updateTagFilterUI();
  renderTable();
}

function filterByTagSelect(val) {
  selectedTag = val;
  updateTagFilterUI();
  renderTable();
}

function clearTagFilter() {
  selectedTag = 'ALL';
  updateTagFilterUI();
  renderTable();
}

function updateTagFilterUI() {
  const sel = document.getElementById('tag-filter-select');
  if (sel) sel.value = selectedTag;

  const indicator = document.getElementById('active-tag-indicator');
  const textSpan = document.getElementById('active-tag-text');
  if (indicator && textSpan) {
    if (selectedTag && selectedTag !== 'ALL') {
      indicator.style.display = 'inline-flex';
      textSpan.textContent = `#${selectedTag}`;
    } else {
      indicator.style.display = 'none';
    }
  }
}

function populateTagDropdown() {
  const tagCounts = {};
  allPosts.forEach(p => {
    (p.labels || []).forEach(t => {
      if (t) tagCounts[t] = (tagCounts[t] || 0) + 1;
    });
  });

  const sel = document.getElementById('tag-filter-select');
  if (!sel) return;

  const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  sel.innerHTML = `<option value="ALL">🏷️ 전체 태그 (${sortedTags.length}종)</option>` +
    sortedTags.map(([tag, count]) => `<option value="${tag}" ${selectedTag === tag ? 'selected' : ''}>#${tag} (${count})</option>`).join('');
}

function matchCategory(postCat, filterCat) {
  if (!filterCat || filterCat === 'ALL') return true;
  if (postCat === filterCat) return true;
  const aliases = CAT_ALIAS[filterCat];
  if (aliases && aliases.includes(postCat)) return true;
  return false;
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTable();
}

function getCategoryBadgeHtml(cat) {
  const norm = CAT_NORMALIZE[cat] || cat || 'Daily Briefing';
  const icons = {
    'Daily Briefing': '📋',
    'Tech Deep Dive': '🔬',
    'Terminology': '💡',
    'Podcast': '🎧',
    'Newsletter': '📧'
  };
  const icon = icons[norm] || '🏷️';
  const catSlug = norm.toLowerCase().replace(/\s+/g, '-');
  return `<span class="cat-badge cat-${catSlug}">${icon} ${norm}</span>`;
}

function getSeoHealthBadgeHtml(post) {
  const sumLen = (post.summary || '').length;
  const tagCount = (post.labels || []).length;
  if (sumLen < 50 || tagCount < 2) {
    const reason = tagCount < 2 ? '태그 2개 미만' : '요약문 50자 미만';
    return `<span class="health-badge health-warn" title="${reason}">⚠️ 점검 권장</span>`;
  }
  return `<span class="health-badge health-good" title="요약문 및 태그 충족">✅ 양호</span>`;
}

let currentMainView = 'table';
let calYear = new Date().getFullYear();
let calMonth = new Date().getMonth(); // 0-indexed

function switchMainView(viewType) {
  currentMainView = viewType;
  const btnTable = document.getElementById('view-table-btn');
  const btnCal = document.getElementById('view-calendar-btn');
  const wrapTable = document.getElementById('admin-table-wrap');
  const wrapCal = document.getElementById('admin-calendar-wrap');

  if (viewType === 'table') {
    btnTable.style.background = 'var(--blue)';
    btnTable.style.color = '#000';
    btnCal.style.background = 'transparent';
    btnCal.style.color = 'var(--text-muted)';
    wrapTable.style.display = 'block';
    wrapCal.style.display = 'none';
    renderTable();
  } else {
    btnCal.style.background = 'var(--blue)';
    btnCal.style.color = '#000';
    btnTable.style.background = 'transparent';
    btnTable.style.color = 'var(--text-muted)';
    wrapTable.style.display = 'none';
    wrapCal.style.display = 'block';
    renderCalendar();
  }
}

function renderCurrentView() {
  if (currentMainView === 'calendar') {
    renderCalendar();
  } else {
    renderTable();
  }
}

function navCalendarMonth(delta) {
  calMonth += delta;
  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  } else if (calMonth > 11) {
    calMonth = 0;
    calYear++;
  }
  renderCalendar();
}

function navCalendarToday() {
  calYear = new Date().getFullYear();
  calMonth = new Date().getMonth();
  renderCalendar();
}

function renderCalendar() {
  const searchQ = (document.getElementById('admin-search-input')?.value || '').toLowerCase();
  const monthLabel = document.getElementById('calendar-month-label');
  const monthCount = document.getElementById('calendar-month-count');
  const gridCells = document.getElementById('calendar-grid-cells');
  if (!gridCells) return;

  monthLabel.textContent = `${calYear}년 ${calMonth + 1}월`;

  const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
  const lastDate = new Date(calYear, calMonth + 1, 0).getDate();
  const prevLastDate = new Date(calYear, calMonth, 0).getDate();

  const todayStr = new Date().toISOString().split('T')[0];

  // Map posts for current month
  let monthlyPostCount = 0;
  const postsByDate = {};
  allPosts.forEach(p => {
    if (!p.date) return;
    const [py, pm, pd] = p.date.split('-').map(Number);
    if (py === calYear && pm === (calMonth + 1)) {
      if (searchQ) {
        const inTitle = (p.title || '').toLowerCase().includes(searchQ);
        const inSummary = (p.summary || '').toLowerCase().includes(searchQ);
        const inTags = (p.labels || []).some(t => t.toLowerCase().includes(searchQ));
        if (!inTitle && !inSummary && !inTags) return;
      }
      if (!postsByDate[p.date]) postsByDate[p.date] = [];
      postsByDate[p.date].push(p);
      monthlyPostCount++;
    }
  });

  monthCount.textContent = monthlyPostCount;

  let html = `
    <div class="calendar-day-head sun">일 (Sun)</div>
    <div class="calendar-day-head">월 (Mon)</div>
    <div class="calendar-day-head">화 (Tue)</div>
    <div class="calendar-day-head">수 (Wed)</div>
    <div class="calendar-day-head">목 (Thu)</div>
    <div class="calendar-day-head">금 (Fri)</div>
    <div class="calendar-day-head sat">토 (Sat)</div>
  `;

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevLastDate - i;
    html += `<div class="calendar-cell other-month"><div class="calendar-cell-date">${d}</div></div>`;
  }

  // Current month days
  for (let d = 1; d <= lastDate; d++) {
    const dStr = String(d).padStart(2, '0');
    const mStr = String(calMonth + 1).padStart(2, '0');
    const fullDate = `${calYear}-${mStr}-${dStr}`;
    const isToday = fullDate === todayStr;
    const dayPosts = postsByDate[fullDate] || [];

    const postsHtml = dayPosts.map(p => {
      const catNorm = CAT_NORMALIZE[p.category] || p.category || 'Daily Briefing';
      const catEmoji = { 'Daily Briefing':'📋', 'Tech Deep Dive':'🔬', 'Terminology':'💡', 'Podcast':'🎧', 'Newsletter':'📧' }[catNorm] || '📄';
      const safeKey = getSafePostKey(p.id);
      const views = allViewCounts[safeKey] || 0;
      return `
        <div class="calendar-post-chip" onclick="openMarkdownEditor('${p.id}')" title="[${catNorm}] ${p.title} (실시간 조회수: ${views}회)">
          <div style="font-size: 10px; color: var(--blue); display: flex; justify-content: space-between; align-items: center;">
            <span>${catEmoji} ${catNorm}</span>
            <span style="color: var(--orange); font-weight: 700;">👀 ${formatViewCount(views)}</span>
          </div>
          <div class="calendar-chip-title">${p.title}</div>
        </div>
      `;
    }).join('');

    html += `
      <div class="calendar-cell ${isToday ? 'today' : ''}">
        <div class="calendar-cell-date" style="${isToday ? 'color:var(--orange);font-weight:800;' : ''}">${d} ${isToday ? '오늘' : ''}</div>
        ${postsHtml}
      </div>
    `;
  }

  // Next month leading days to complete grid
  const totalCells = firstDay + lastDate;
  const remaining = (7 - (totalCells % 7)) % 7;
  for (let d = 1; d <= remaining; d++) {
    html += `<div class="calendar-cell other-month"><div class="calendar-cell-date">${d}</div></div>`;
  }

  gridCells.innerHTML = html;
}

function renderTable() {
  const searchQ = (document.getElementById('admin-search-input')?.value || '').toLowerCase();

  let posts = allPosts.filter(p => {
    const status = p.status || 'published';
    if (currentFilter === 'published' && status !== 'published') return false;
    if (currentFilter === 'hidden' && status !== 'hidden') return false;
    if (currentFilter === 'SEO_WARN') {
      const sumLen = (p.summary || '').length;
      const tagCount = (p.labels || []).length;
      if (sumLen >= 50 && tagCount >= 2) return false;
    } else if (!['ALL', 'published', 'hidden'].includes(currentFilter)) {
      if (!matchCategory(p.category, currentFilter)) return false;
    }
    
    // Tag filter
    if (selectedTag && selectedTag !== 'ALL') {
      if (!(p.labels || []).includes(selectedTag)) return false;
    }

    // Search filter
    if (searchQ) {
      const inTitle = (p.title || '').toLowerCase().includes(searchQ);
      const inSummary = (p.summary || '').toLowerCase().includes(searchQ);
      const inTags = (p.labels || []).some(t => t.toLowerCase().includes(searchQ));
      if (!inTitle && !inSummary && !inTags) return false;
    }
    return true;
  });

  const tbody = document.getElementById('admin-table-body');

  if (posts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9">
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <p>조건에 일치하는 아티클이 없습니다.</p>
      </div>
    </td></tr>`;
    updateBulkBar();
    return;
  }

  tbody.innerHTML = posts.map((p, i) => {
    const status = p.status || 'published';
    const statusHtml = status === 'published'
      ? `<span class="status-badge status-published">● 공개</span>`
      : `<span class="status-badge status-hidden">● 숨김</span>`;

    const toggleIcon = status === 'published' ? '🙈' : '👁️';
    const toggleTitle = status === 'published' ? '숨김 처리' : '공개 전환';
    const isChecked = selectedPostIds.has(p.id);
    const safeKey = getSafePostKey(p.id);
    const views = allViewCounts[safeKey] || 0;

    return `<tr>
      <td style="text-align:center;">
        <input type="checkbox" class="row-checkbox" value="${p.id}" ${isChecked ? 'checked' : ''} onchange="toggleRowCheck('${p.id}', this.checked)" />
      </td>
      <td style="font-weight:700;color:var(--text-muted);font-family:var(--mono)">${posts.length - i}</td>
      <td style="font-family:var(--mono);font-size:12px;color:var(--text-muted);line-height:1.4;">
        <div style="font-weight:700;color:var(--text);" title="최초 등록 일자">📅 ${p.date}</div>
        ${p.updated ? `<div style="font-size:11px;color:var(--blue);margin-top:3px;" title="최종 커밋/업데이트 시각: ${p.updated}">🔄 ${p.updated.replace(/^\d{4}-/, '')}</div>` : `<div style="font-size:10.5px;color:var(--text-muted);margin-top:2px;">최초본</div>`}
      </td>
      <td>${getCategoryBadgeHtml(p.category)}</td>
      <td>
        <div style="font-weight:700;line-height:1.4;margin-bottom:3px;">
          <a href="javascript:void(0)" class="table-title-link" onclick="openMarkdownEditor('${p.id}')" title="클릭하여 마크다운 본문 에디터 열기">${p.title}</a>
        </div>
        <div style="font-size:12px;color:var(--text-muted);line-height:1.4;max-width:550px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:6px;">${p.summary || '요약문 없음'}</div>
        <div class="tag-chips-wrap">
          ${(p.labels && p.labels.length > 0)
            ? p.labels.map(l => `<span class="tag-chip ${selectedTag === l ? 'active-tag' : ''}" onclick="filterByTagChip('${l.replace(/'/g, "\\'")}')" title="'${l}' 태그로 필터링">#${l}</span>`).join('')
            : '<span style="font-size:11px;color:var(--text-muted);font-style:italic;">🏷️ 태그 없음</span>'}
        </div>
      </td>
      <td style="text-align:center;font-family:var(--mono);font-size:12.5px;font-weight:700;color:var(--orange);" title="실시간 누적 조회수: ${Number(views).toLocaleString()}회">
        👀 ${formatViewCount(views)}
      </td>
      <td>${getSeoHealthBadgeHtml(p)}</td>
      <td>${statusHtml}</td>
      <td style="text-align:right;">
        <button class="action-btn edit-md" title="마크다운 본문 에디터 열기" onclick="openMarkdownEditor('${p.id}')">📝</button>
        <button class="action-btn edit" title="메타데이터 수정" onclick="openEditModal('${p.id}')">✏️</button>
        <button class="action-btn clone" title="오늘 날짜로 아티클 템플릿/본문 복제" onclick="clonePost('${p.id}')">📋</button>
        <button class="action-btn linkedin" title="LinkedIn 맞춤형 포스팅 서식 복사" onclick="openLinkedInModal('${p.id}')">💼</button>
        <a class="action-btn" href="https://ywmoon.github.io/#article/${p.id}" target="_blank" title="블로그에서 실제 글 새 탭으로 보기" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">🌐</a>
        <button class="action-btn toggle" title="${toggleTitle}" onclick="toggleStatus('${p.id}')">${toggleIcon}</button>
        <button class="action-btn delete" title="삭제" onclick="openDeleteModal('${p.id}')">🗑️</button>
      </td>
    </tr>`;
  }).join('');

  updateBulkBar();
}

  updateBulkBar();
}

async function clonePost(sourceId) {
  const post = allPosts.find(p => p.id === sourceId);
  if (!post) return;

  const today = new Date().toISOString().split('T')[0];
  const sourceSlug = sourceId.replace(/^\d{4}-\d{2}-\d{2}-?/, '');
  const newId = `${today}-${sourceSlug}-copy`;

  showToast(`⏳ 아티클 복제 준비 중... (${sourceId})`, '');
  try {
    const mdPath = post.content_file || `data/posts/${sourceId}.md`;
    const file = await ghGet(mdPath);
    const raw = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));

    // Update ID & Date in frontmatter
    let newContent = raw
      .replace(/^id:\s*.+$/m, `id: ${newId}`)
      .replace(/^date:\s*.+$/m, `date: ${today}`)
      .replace(/^title:\s*["']?(.*?)["']?$/m, `title: "[복제] $1"`);

    const newMdPath = `data/posts/${newId}.md`;
    await ghPut(newMdPath, newContent, `Clone post from ${sourceId} to ${newId}`);

    // Add to allPosts
    const clonedPost = {
      ...post,
      id: newId,
      title: `[복제] ${post.title}`,
      date: today,
      content_file: newMdPath
    };
    allPosts.unshift(clonedPost);
    await savePostsJson(`Add cloned article: ${newId}`);

    updateStats();
    renderCurrentView();
    showToast(`🎉 아티클이 복제되었습니다! 에디터를 엽니다.`, 'success');
    openMarkdownEditor(newId);
  } catch (err) {
    showToast('❌ 아티클 복제 실패: ' + err.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// BULK / BATCH ACTIONS
// ═══════════════════════════════════════════════════════════════
function toggleCheckAll(checked) {
  document.querySelectorAll('.row-checkbox').forEach(cb => {
    cb.checked = checked;
    if (checked) selectedPostIds.add(cb.value);
    else selectedPostIds.delete(cb.value);
  });
  updateBulkBar();
}

function toggleRowCheck(id, checked) {
  if (checked) selectedPostIds.add(id);
  else selectedPostIds.delete(id);
  updateBulkBar();
}

function deselectAllRows() {
  selectedPostIds.clear();
  const checkAllEl = document.getElementById('check-all');
  if (checkAllEl) checkAllEl.checked = false;
  renderTable();
}

function updateBulkBar() {
  const bulkBar = document.getElementById('bulk-bar');
  const countSpan = document.getElementById('bulk-count');
  const count = selectedPostIds.size;
  if (count > 0) {
    bulkBar.style.display = 'flex';
    countSpan.textContent = count;
  } else {
    bulkBar.style.display = 'none';
  }
}

async function bulkToggleStatus(targetStatus) {
  const ids = Array.from(selectedPostIds);
  if (ids.length === 0) return;

  showToast(`⏳ ${ids.length}개 아티클 상태 일괄 변경 중...`, '');
  try {
    allPosts.forEach(p => {
      if (ids.includes(p.id)) p.status = targetStatus;
    });

    await savePostsJson(`Bulk update status to ${targetStatus}: ${ids.length} articles`);
    deselectAllRows();
    updateStats();
    renderTable();
    showToast(`✅ ${ids.length}개 아티클이 ${targetStatus === 'published' ? '공개' : '숨김'} 처리되었습니다!`, 'success');
  } catch (err) {
    showToast('❌ 일괄 변경 실패: ' + err.message, 'error');
  }
}

function openBulkCategoryModal() {
  openModal('bulk-category-modal');
}

async function confirmBulkCategoryChange() {
  const targetCat = document.getElementById('bulk-target-category').value;
  const ids = Array.from(selectedPostIds);
  if (ids.length === 0) return closeModal('bulk-category-modal');

  showToast(`⏳ ${ids.length}개 아티클 카테고리 변경 중...`, '');
  try {
    allPosts.forEach(p => {
      if (ids.includes(p.id)) p.category = targetCat;
    });

    await savePostsJson(`Bulk change category to ${targetCat}: ${ids.length} articles`);
    closeModal('bulk-category-modal');
    deselectAllRows();
    updateStats();
    renderTable();
    showToast(`✅ ${ids.length}개 아티클의 카테고리가 ${targetCat}(으)로 변경되었습니다!`, 'success');
  } catch (err) {
    showToast('❌ 카테고리 일괄 변경 실패: ' + err.message, 'error');
  }
}

function openBulkDeleteModal() {
  const count = selectedPostIds.size;
  document.getElementById('bulk-delete-count').textContent = count;
  openModal('bulk-delete-modal');
}

async function confirmBulkDelete() {
  const ids = Array.from(selectedPostIds);
  closeModal('bulk-delete-modal');
  if (ids.length === 0) return;

  showToast(`🗑️ ${ids.length}개 아티클 영구 삭제 진행 중...`, '');
  try {
    // 1. Delete files from GitHub (.md and stub index.html)
    for (const pid of ids) {
      const mdPath = `data/posts/${pid}.md`;
      try {
        const file = await ghGet(mdPath);
        await ghDelete(mdPath, `Bulk Delete .md: ${pid}`, file.sha);
      } catch (_) { /* skip if missing */ }
      await ghDeleteArticleStub(pid);
    }

    // 2. Remove from posts.json
    allPosts = allPosts.filter(p => !ids.includes(p.id));
    await savePostsJson(`Bulk Delete ${ids.length} articles`);

    // 3. Rebuild sitemap
    await rebuildSitemap();

    deselectAllRows();
    updateStats();
    renderTable();
    showToast(`🗑️ ${ids.length}개 아티클이 완전히 삭제되었습니다!`, 'success');
  } catch (err) {
    showToast('❌ 일괄 삭제 실패: ' + err.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: MARKDOWN LIVE EDITOR (CodeMirror 태그 접기/펴기 & 실시간 뷰어)
// ═══════════════════════════════════════════════════════════════
let editorOriginalContent = '';
let editorHistory = [];
let editorHistoryIdx = -1;
let editorHistoryDebounce = null;
let editModalOriginal = {};
let cmEditor = null;

function initCodeMirror() {
  if (cmEditor) return;
  const textarea = document.getElementById('editor-content-textarea');
  if (!textarea || typeof CodeMirror === 'undefined') return;

  cmEditor = CodeMirror.fromTextArea(textarea, {
    mode: 'htmlmixed',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    theme: 'default',
    extraKeys: {
      "Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()); },
      "Cmd-Q": function(cm) { cm.foldCode(cm.getCursor()); },
      "Cmd-Z": function(cm) { undoEditor(); },
      "Ctrl-Z": function(cm) { undoEditor(); },
      "Cmd-Shift-Z": function(cm) { redoEditor(); },
      "Ctrl-Shift-Z": function(cm) { redoEditor(); },
      "Cmd-Y": function(cm) { redoEditor(); },
      "Ctrl-Y": function(cm) { redoEditor(); }
    }
  });

  cmEditor.on('change', () => {
    handleEditorInput(true);
  });
}

async function openMarkdownEditor(id) {
  const post = allPosts.find(p => p.id === id);
  if (!post) return;

  editorPostId = id;
  document.getElementById('editor-article-id').textContent = id;
  document.getElementById('editor-preview-pane').innerHTML = '<p style="color:#64748B;">렌더링 준비 중...</p>';
  
  const liveLink = document.getElementById('editor-view-live-link');
  if (liveLink) liveLink.href = `https://ywmoon.github.io/#article/${id}`;

  // Reset undo/redo history
  editorHistory = [];
  editorHistoryIdx = -1;
  editorOriginalContent = '';

  openModal('markdown-editor-modal');

  // Initialize CodeMirror if not already
  initCodeMirror();

  const mdPath = post.content_file || `data/posts/${id}.md`;
  try {
    const file = await ghGet(mdPath);
    editorFileSha = file.sha;
    const raw = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));
    
    editorOriginalContent = raw;
    if (cmEditor) {
      cmEditor.setValue(raw);
      cmEditor.clearHistory();
      setTimeout(() => cmEditor.refresh(), 100);
    } else {
      document.getElementById('editor-content-textarea').value = raw;
    }
    pushEditorHistory(raw);
    handleEditorInput(false);
  } catch (e) {
    showToast('❌ 마크다운 파일 로드 실패: ' + e.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: TECH TERM STANDARDIZER (기술 전문 용어 표기법 일괄 교정)
// ═══════════════════════════════════════════════════════════════
function standardizeTechTerms() {
  if (!cmEditor) return;
  const raw = cmEditor.getValue();

  const termRules = [
    { pattern: /\baws\b/gi, target: 'AWS' },
    { pattern: /\bgcp\b/gi, target: 'GCP' },
    { pattern: /\bms\s*azure\b/gi, target: 'Microsoft Azure' },
    { pattern: /\bsmr\b/gi, target: 'SMR' },
    { pattern: /\bbess\b/gi, target: 'BESS' },
    { pattern: /\bpue\b/gi, target: 'PUE' },
    { pattern: /\btco\b/gi, target: 'TCO' },
    { pattern: /\bhbm\b/gi, target: 'HBM' },
    { pattern: /\bgpus?\b/gi, target: 'GPU' },
    { pattern: /\bllms?\b/gi, target: 'LLM' },
    { pattern: /\bk8s\b/gi, target: 'Kubernetes' },
    { pattern: /\bidc\b/gi, target: 'IDC' },
    { pattern: /\bvmware\b/gi, target: 'VMware' },
    { pattern: /\bdatacenter\b/gi, target: '데이터센터' },
    { pattern: /\bdata\s*center\b/gi, target: '데이터센터' }
  ];

  let modified = raw;
  let replaceCount = 0;

  termRules.forEach(rule => {
    const matches = modified.match(rule.pattern);
    if (matches) {
      matches.forEach(m => {
        if (m !== rule.target) {
          replaceCount++;
        }
      });
      modified = modified.replace(rule.pattern, rule.target);
    }
  });

  if (replaceCount > 0) {
    cmEditor.setValue(modified);
    handleEditorInput(true);
    showToast(`🔤 총 ${replaceCount}건의 기술 약어/용어를 표준 표기법으로 교정했습니다!`, 'success');
  } else {
    showToast('✨ 모든 주요 기술 용어 표기가 이미 표준화되어 있습니다.', 'success');
  }
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: SMART AUTO SUMMARY & TAG EXTRACTOR
// ═══════════════════════════════════════════════════════════════
function openAutoExtractModal() {
  const raw = cmEditor ? cmEditor.getValue() : (document.getElementById('editor-content-textarea')?.value || '');
  if (!raw || raw.trim().length === 0) {
    showToast('⚠️ 분석할 본문 내용이 없습니다.', 'warn');
    return;
  }

  // Parse body
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const body = match ? match[2] : raw;

  // Clean HTML/Markdown to plain text
  const plainText = body
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*`_\[\]()>-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // DC / Cloud Domain Vocabulary Dictionary
  const domainDict = [
    'AWS', 'Azure', 'GCP', '클라우드', '데이터센터', 'SMR', 'BESS', '액침냉각', 'AI인프라',
    '전력망', 'HBM', '하이퍼스케일', '원자력', 'PUE', 'TCO', '엔비디아', 'GPU', 'LLM',
    '냉각시스템', '인프라', 'IDC', '서버', '인공지능', '신재생에너지', '전력', '인프라옵스',
    '기저부하', '친환경에너지', '메모리', '네트워크', '스토리지', '가상화', '쿠버네티스'
  ];

  // Frequency analysis
  const foundKeywords = [];
  domainDict.forEach(kw => {
    const reg = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    const cnt = (plainText.match(reg) || []).length;
    if (cnt > 0) {
      foundKeywords.push({ keyword: kw, count: cnt });
    }
  });

  foundKeywords.sort((a, b) => b.count - a.count);
  const topTags = foundKeywords.slice(0, 5).map(k => k.keyword);

  // Extract Summary (100~150 chars from high-density lead sentences)
  const sentences = plainText
    .split(/(?<=[.?!])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 25 && !s.startsWith('http'));

  let summaryCand = '';
  for (let s of sentences) {
    if ((summaryCand + ' ' + s).length <= 150) {
      summaryCand += (summaryCand ? ' ' : '') + s;
    } else {
      if (!summaryCand) summaryCand = s.substring(0, 140) + '...';
      break;
    }
  }

  if (!summaryCand && plainText.length > 0) {
    summaryCand = plainText.substring(0, 140) + '...';
  }

  document.getElementById('auto-extracted-tags').value = topTags.join(', ');
  document.getElementById('auto-extracted-summary').value = summaryCand;
  updateAutoExtractSummaryCount();

  openModal('auto-extract-modal');
}

function updateAutoExtractSummaryCount() {
  const txt = document.getElementById('auto-extracted-summary')?.value || '';
  const lenEl = document.getElementById('auto-extract-summary-len');
  if (lenEl) lenEl.textContent = `${txt.length}자 ${txt.length >= 50 && txt.length <= 160 ? '✅ (SEO 적정 분량)' : ''}`;
}

function applyAutoExtractedMetadata() {
  const newTags = (document.getElementById('auto-extracted-tags')?.value || '')
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);
  const newSummary = (document.getElementById('auto-extracted-summary')?.value || '').trim();

  if (!cmEditor) return;
  const raw = cmEditor.getValue();
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    showToast('⚠️ Frontmatter 형식을 찾을 수 없습니다.', 'error');
    return;
  }

  let fm = match[1];
  const body = match[2];

  // Update summary in frontmatter
  if (/^summary:\s*.*$/m.test(fm)) {
    fm = fm.replace(/^summary:\s*.*$/m, `summary: "${newSummary.replace(/"/g, '\\"')}"`);
  } else {
    fm += `\nsummary: "${newSummary.replace(/"/g, '\\"')}"`;
  }

  // Update labels in frontmatter
  const labelsYaml = newTags.length > 0 ? `labels:\n` + newTags.map(t => `  - ${t}`).join('\n') : `labels: []`;
  if (/^labels:[\s\S]*?(?=\n[a-z_]+:|$)/m.test(fm)) {
    fm = fm.replace(/^labels:[\s\S]*?(?=\n[a-z_]+:|$)/m, labelsYaml);
  } else {
    fm += `\n` + labelsYaml;
  }

  const updatedContent = `---\n${fm.trim()}\n---\n\n${body.trim()}\n`;
  cmEditor.setValue(updatedContent);
  handleEditorInput(true);
  closeModal('auto-extract-modal');

  showToast('✨ 추천 태그와 SEO 요약문이 본문 Frontmatter에 성공적으로 주입되었습니다!', 'success');
}

function foldAllTags() {
  if (!cmEditor) return;
  cmEditor.operation(() => {
    for (let i = 0; i < cmEditor.lineCount(); i++) {
      cmEditor.foldCode(CodeMirror.Pos(i, 0), null, "fold");
    }
  });
  cmEditor.refresh();
  showToast('📦 모든 HTML 태그 및 마크다운 섹션을 접었습니다.', 'success');
}

function unfoldAllTags() {
  if (!cmEditor) return;
  cmEditor.operation(() => {
    for (let i = 0; i < cmEditor.lineCount(); i++) {
      cmEditor.foldCode(CodeMirror.Pos(i, 0), null, "unfold");
    }
  });
  cmEditor.refresh();
  showToast('📂 모든 태그 및 섹션을 펼쳤습니다.', 'success');
}

function pushEditorHistory(content) {
  if (editorHistoryIdx >= 0 && editorHistory[editorHistoryIdx] === content) return;
  editorHistory = editorHistory.slice(0, editorHistoryIdx + 1);
  editorHistory.push(content);
  if (editorHistory.length > 60) editorHistory.shift();
  editorHistoryIdx = editorHistory.length - 1;
}

function undoEditor() {
  if (cmEditor) {
    cmEditor.undo();
    showToast('↩️ 이전 작업 상태로 되돌렸습니다 (Undo)', '');
  } else if (editorHistoryIdx > 0) {
    editorHistoryIdx--;
    const content = editorHistory[editorHistoryIdx];
    document.getElementById('editor-content-textarea').value = content;
    handleEditorInput(false);
    showToast('↩️ 이전 작업 상태로 되돌렸습니다 (Undo)', '');
  } else {
    showToast('ℹ️ 더 이상 되돌릴 이전 기록이 없습니다.', '');
  }
}

function redoEditor() {
  if (cmEditor) {
    cmEditor.redo();
    showToast('↪️ 다시 실행했습니다 (Redo)', '');
  } else if (editorHistoryIdx < editorHistory.length - 1) {
    editorHistoryIdx++;
    const content = editorHistory[editorHistoryIdx];
    document.getElementById('editor-content-textarea').value = content;
    handleEditorInput(false);
    showToast('↪️ 다시 실행했습니다 (Redo)', '');
  } else {
    showToast('ℹ️ 다시 실행할 최신 기록이 없습니다.', '');
  }
}

async function refreshEditorFromRemote() {
  if (!editorPostId) return;

  const currentVal = cmEditor ? cmEditor.getValue() : (document.getElementById('editor-content-textarea')?.value || '');
  if (currentVal !== editorOriginalContent) {
    const ok = confirm("⚠️ [GitHub 원격 최신본 새로고침]\n\nGitHub 원격 저장소의 최신 커밋 상태로 에디터 본문을 다시 불러옵니다.\n현재 작성 중인 저장되지 않은 수정 내용은 덮어씌워집니다.\n\n계속 진행하시겠습니까?");
    if (!ok) return;
  }

  showToast('🔍 GitHub 원격 저장소에서 최신 본문 조회 중...', '');
  try {
    const mdPath = `data/posts/${editorPostId}.md`;
    const file = await ghGet(mdPath);
    editorFileSha = file.sha;
    const raw = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));
    
    editorOriginalContent = raw;
    if (cmEditor) {
      cmEditor.setValue(raw);
      cmEditor.clearHistory();
      cmEditor.refresh();
    } else {
      document.getElementById('editor-content-textarea').value = raw;
    }
    pushEditorHistory(raw);
    handleEditorInput(false);
    showToast('🔄 GitHub 원격 저장소의 최신 버전으로 새로고침되었습니다!', 'success');
  } catch (err) {
    showToast('❌ 원격 최신본 조회 실패: ' + err.message, 'error');
  }
}

function resetEditorToOriginal() {
  if (!editorOriginalContent) return;
  const ok = confirm("⚠️ [수정 전 원본 복원 확인]\n\n현재 편집 중인 모든 변경사항이 취소되고,\n모달을 처음 열었을 때의 원본 본문 상태로 되돌아갑니다.\n\n정말 원본으로 복구하시겠습니까?");
  if (!ok) return;

  if (cmEditor) {
    cmEditor.setValue(editorOriginalContent);
    cmEditor.refresh();
  } else {
    document.getElementById('editor-content-textarea').value = editorOriginalContent;
  }
  pushEditorHistory(editorOriginalContent);
  handleEditorInput(false);
  showToast('↩️ 모달을 열었을 때의 [수정 전 원본 본문]으로 원상 복귀되었습니다.', 'success');
}

function handleEditorInput(recordHistory = true) {
  const raw = cmEditor ? cmEditor.getValue() : (document.getElementById('editor-content-textarea')?.value || '');

  if (recordHistory) {
    if (editorHistoryDebounce) clearTimeout(editorHistoryDebounce);
    editorHistoryDebounce = setTimeout(() => {
      pushEditorHistory(raw);
    }, 400);
  }

  // Parse frontmatter
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const body = match ? match[2] : raw;

  // Live render
  const previewPane = document.getElementById('editor-preview-pane');

  // Check if content is HTML (e.g. <!DOCTYPE, <html>, <table>, <div etc.)
  const isHtml = /^\s*<!DOCTYPE/i.test(body) || /^\s*<html/i.test(body) || /^\s*<div/i.test(body) || /^\s*<table/i.test(body) || /<table[\s\S]*<\/table>/i.test(body);

  if (isHtml) {
    // If it's a full HTML template (e.g. Newsletter email format), extract body or render directly
    const bodyMatch = body.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let htmlContent = bodyMatch ? bodyMatch[1] : body;
    
    // Extract any <style> tags from <head> to preserve table/email layout
    const styleMatches = body.match(/<style[^>]*>[\s\S]*?<\/style>/gi);
    const styles = styleMatches ? styleMatches.join('\n') : '';

    previewPane.innerHTML = styles + htmlContent;
  } else if (typeof marked !== 'undefined') {
    marked.setOptions({
      gfm: true,
      breaks: true,
      pedantic: false
    });
    previewPane.innerHTML = marked.parse(body);
  } else {
    previewPane.textContent = body;
  }

  // Update word & reading time stats
  const plainText = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const charCount = plainText.length;
  const readMins = Math.max(1, Math.ceil(charCount / 500));
  const post = allPosts.find(p => p.id === editorPostId);
  const dateInfo = post ? `📅 등록: ${post.date} ${post.time || ''}` : '';
  const updatedInfo = (post && post.updated) ? ` | 🔄 최종 커밋: ${post.updated}` : ' | 🔄 최초 등록본';
  document.getElementById('editor-stats-badge').textContent = `⏱️ ${charCount.toLocaleString()}자 (약 ${readMins}분) | ${dateInfo}${updatedInfo}`;
}

function insertEditorText(prefix, suffix) {
  if (cmEditor) {
    const sel = cmEditor.getSelection();
    cmEditor.replaceSelection(prefix + sel + suffix);
    cmEditor.focus();
  } else {
    const textarea = document.getElementById('editor-content-textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selText = textarea.value.substring(start, end);
    const repText = prefix + (selText || '') + suffix;
    textarea.value = textarea.value.substring(0, start) + repText + textarea.value.substring(end);
    textarea.focus();
    handleEditorInput(true);
  }
}

function insertImageTag() {
  insertEditorText('<img src="https://" alt="이미지 설명" style="max-width: 100%; border-radius: 8px;" />\n', '');
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: VERSION HISTORY & ROLLBACK (이전 커밋 버전 복원)
// ═══════════════════════════════════════════════════════════════
async function openVersionHistoryModal() {
  if (!editorPostId) return;
  openModal('version-history-modal');
  const listEl = document.getElementById('version-history-list');
  listEl.innerHTML = '<div style="text-align: center; padding: 30px; color: var(--text-muted);"><span class="loading-spinner"></span> GitHub 커밋 히스토리 조회 중...</div>';

  try {
    const mdPath = `data/posts/${editorPostId}.md`;
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${mdPath}&per_page=15`, { headers: ghHeaders() });
    if (!res.ok) throw new Error('커밋 히스토리 조회 실패');
    const commits = await res.json();

    if (commits.length === 0) {
      listEl.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--text-muted);">이전 커밋 기록이 없습니다.</div>';
      return;
    }

    listEl.innerHTML = commits.map((c, i) => {
      const shaShort = c.sha.substring(0, 7);
      const dateStr = new Date(c.commit.author.date).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
      const msg = c.commit.message || 'No commit message';
      const isLatest = i === 0;

      return `
        <div style="background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
          <div style="flex: 1; overflow: hidden;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <span style="font-family: var(--mono); font-size: 11px; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: var(--blue);">${shaShort}</span>
              <span style="font-size: 11.5px; color: var(--text-muted);">${dateStr}</span>
              ${isLatest ? '<span style="font-size: 10.5px; font-weight: 700; background: rgba(34,197,94,0.15); color: var(--green); padding: 2px 6px; border-radius: 4px;">현재 최신 버전</span>' : ''}
            </div>
            <div style="font-size: 13px; font-weight: 600; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${msg}</div>
          </div>
          <button class="btn-sm" onclick="rollbackToCommit('${c.sha}', '${dateStr}')" style="white-space: nowrap;">이 버전으로 복원</button>
        </div>
      `;
    }).join('');
  } catch (err) {
    listEl.innerHTML = `<div style="color: var(--red); padding: 20px; text-align: center;">❌ 기록 조회 실패: ${err.message}</div>`;
  }
}

async function rollbackToCommit(commitSha, dateStr) {
  const ok = confirm(`⚠️ [과거 커밋 버전 롤백 확인]\n\n선택한 과거 커밋 [${dateStr} (${commitSha.substring(0, 7)})] 버전으로 본문을 불러옵니다.\n\n현재 작성 중인 미저장 내용은 덮어씌워집니다. 진행하시겠습니까?`);
  if (!ok) return;

  showToast(`⏳ ${commitSha.substring(0, 7)} 버전 내용 불러오는 중...`, '');
  try {
    const mdPath = `data/posts/${editorPostId}.md`;
    const res = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${mdPath}?ref=${commitSha}`, { headers: ghHeaders() });
    if (!res.ok) throw new Error('과거 커밋 파일 조회 실패');
    const file = await res.json();
    const raw = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));

    if (cmEditor) {
      cmEditor.setValue(raw);
      cmEditor.refresh();
    } else {
      document.getElementById('editor-content-textarea').value = raw;
    }
    pushEditorHistory(raw);
    handleEditorInput(false);
    closeModal('version-history-modal');

    showToast(`🕒 [${dateStr} (${commitSha.substring(0, 7)})] 버전으로 불러왔습니다. 확인 후 [저장 & 배포]를 누르면 원격 저장소에 적용됩니다!`, 'success');
  } catch (err) {
    showToast('❌ 버전 복원 실패: ' + err.message, 'error');
  }
}

async function saveMarkdownContent() {
  const btn = document.getElementById('editor-save-btn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="loading-spinner"></span> 저장 중...';
  btn.disabled = true;

  let content = cmEditor ? cmEditor.getValue() : document.getElementById('editor-content-textarea').value;
  const mdPath = `data/posts/${editorPostId}.md`;

  const now = new Date();
  const nowStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  // Stamp updated timestamp in Frontmatter
  if (/^updated:\s*.*$/m.test(content)) {
    content = content.replace(/^updated:\s*.*$/m, `updated: "${nowStr}"`);
  } else if (/^---\n([\s\S]*?)\n---/m.test(content)) {
    content = content.replace(/^---\n([\s\S]*?)\n---/m, (m, g1) => `---\n${g1.trim()}\nupdated: "${nowStr}"\n---`);
  }
  if (cmEditor) cmEditor.setValue(content);

  try {
    // 1. Commit new content to GitHub
    const res = await ghPut(mdPath, content, `Update content & frontmatter: ${editorPostId}`, editorFileSha);
    editorFileSha = res.content.sha;

    // 2. Parse frontmatter to update lightweight index
    const { meta } = parseFrontmatter(content);
    const post = allPosts.find(p => p.id === editorPostId);
    if (post) {
      if (meta.title) post.title = meta.title;
      if (meta.summary) post.summary = meta.summary;
      if (meta.category) post.category = CAT_NORMALIZE[meta.category] || meta.category;
      if (Array.isArray(meta.labels)) post.labels = meta.labels;
      if (meta.status) post.status = meta.status;
      post.updated = nowStr;
      await savePostsJson(`Update index for: ${editorPostId}`);
      await ghSyncArticleStub(post);
    }

    updateStats();
    renderCurrentView();
    showToast('✅ 본문 마크다운이 GitHub에 저장 및 배포되었습니다!', 'success');
  } catch (err) {
    showToast('❌ 본문 저장 실패: ' + err.message, 'error');
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: LINKEDIN SHARE GENERATOR (링크드인 공유 서식)
// ═══════════════════════════════════════════════════════════════
function openLinkedInModal(id) {
  const post = allPosts.find(p => p.id === id);
  if (!post) return;

  const hashtags = (post.labels || ['AWS', '데이터센터', 'AI인프라', '클라우드'])
    .map(l => '#' + l.replace(/\s+/g, ''))
    .join(' ');

  const url = `https://ywmoon.github.io/#article/${post.id}`;
  
  const text = `🚀 [${post.date}] ${post.title}

📌 Executive Briefing:
${post.summary || '글로벌 데이터센터 및 클라우드 인프라 핵심 동향 분석 리포트입니다.'}

🔗 전체 아티클 및 리포트 읽기:
${url}

${hashtags} #DataCenter #InfraOps #Cloud #AWS`;

  document.getElementById('linkedin-text-preview').value = text;
  document.getElementById('linkedin-open-link').href = `https://www.linkedin.com/feed/`;
  openModal('linkedin-modal');
}

function copyLinkedInText() {
  const text = document.getElementById('linkedin-text-preview').value;
  navigator.clipboard.writeText(text).then(() => {
    showToast('💼 LinkedIn 포스팅 서식이 클립보드에 복사되었습니다!', 'success');
    closeModal('linkedin-modal');
  }).catch(e => {
    showToast('❌ 복사 실패: ' + e.message, 'error');
  });
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: QUICK POST COMPOSER (새 글 작성)
// ═══════════════════════════════════════════════════════════════
function openNewPostModal() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('new-date').value = today;
  document.getElementById('new-time').value = '07:30';
  document.getElementById('new-title').value = '';
  document.getElementById('new-id').value = '';
  document.getElementById('new-summary').value = '';
  document.getElementById('new-labels').value = 'AWS, 데이터센터, AI인프라';
  openModal('new-post-modal');
}

function autoGenerateSlug(title) {
  const date = document.getElementById('new-date').value || '2026-08-17';
  const clean = title.toLowerCase()
    .replace(/[^\w\s\uAC00-\uD7A3-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 40);
  document.getElementById('new-id').value = `${date}-${clean || 'new-article'}`;
}

const TEMPLATES = {
  'Daily Briefing': `---
id: {{ID}}
title: "{{TITLE}}"
date: {{DATE}}
time: "{{TIME}}"
category: Daily Briefing
status: published
summary: "{{SUMMARY}}"
labels:
{{LABELS}}
---

# 📌 Daily InfraOps Digest

## 1. 🏗️ 오늘의 핵심 인프라 이슈
본문 내용을 작성하세요.

## 2. ⚡ 전력 및 쿨링 아키텍처
본문 내용을 작성하세요.
`,
  'Tech Deep Dive': `---
id: {{ID}}
title: "{{TITLE}}"
date: {{DATE}}
time: "{{TIME}}"
category: Tech Deep Dive
status: published
summary: "{{SUMMARY}}"
labels:
{{LABELS}}
---

# 🔬 [테크 딥다이브] {{TITLE}}

## 📌 Executive Summary
핵심 내용을 입력하세요.

## 1. 🏗️ 아키텍처 심층 분석
분석 내용을 입력하세요.
`,
  'Terminology': `---
id: {{ID}}
title: "{{TITLE}}"
date: {{DATE}}
time: "{{TIME}}"
category: Terminology
status: published
summary: "{{SUMMARY}}"
labels:
{{LABELS}}
---

# 💡 [인프라 용어사전] {{TITLE}}

## 📌 1. 30초 핵심 요약 & 개념 정의
용어 개념을 입력하세요.

## 2. 🔍 인프라 관점에서의 실전 적용
실전 적용 사례를 입력하세요.
`,
  'Podcast': `---
id: {{ID}}
title: "{{TITLE}}"
date: {{DATE}}
time: "{{TIME}}"
category: Podcast
status: published
summary: "{{SUMMARY}}"
labels:
{{LABELS}}
---

# 🎧 10-MIN TECH ENGLISH PODCAST

## 📌 Episode Overview
{{SUMMARY}}

## 📝 Key Vocabulary & Expressions
1. **Baseload Power**: 기저 부하 전력
`,
  'Newsletter': `---
id: {{ID}}
title: "{{TITLE}}"
date: {{DATE}}
time: "{{TIME}}"
category: Newsletter
status: published
summary: "{{SUMMARY}}"
labels:
{{LABELS}}
---

# 📧 DC InfraOps Trends Report

## 📌 금일 종합 하이라이트
내용을 입력하세요.
`
};

function applyNewPostTemplate(cat) {
  // Can be customized if needed
}

async function createAndOpenNewPost() {
  const cat = document.getElementById('new-category').value;
  const date = document.getElementById('new-date').value || new Date().toISOString().split('T')[0];
  const timeVal = document.getElementById('new-time').value || '07:30';
  const title = document.getElementById('new-title').value.trim();
  const id = document.getElementById('new-id').value.trim() || `${date}-new-post`;
  const summary = document.getElementById('new-summary').value.trim();
  const labels = document.getElementById('new-labels').value.split(',').map(s => s.trim()).filter(Boolean);

  if (!title) return showToast('❌ 제목을 입력해 주세요.', 'error');

  const labelsYaml = labels.map(l => `  - ${l}`).join('\n');
  const tmpl = TEMPLATES[cat] || TEMPLATES['Daily Briefing'];
  const content = tmpl
    .replace(/{{ID}}/g, id)
    .replace(/{{TITLE}}/g, title)
    .replace(/{{DATE}}/g, date)
    .replace(/{{TIME}}/g, timeVal)
    .replace(/{{SUMMARY}}/g, summary)
    .replace(/{{LABELS}}/g, labelsYaml);

  closeModal('new-post-modal');
  showToast('⏳ 새 아티클 생성 중...', '');

  try {
    const mdPath = `data/posts/${id}.md`;
    await ghPut(mdPath, content, `Create new post: ${id}`);

    // Add to allPosts
    allPosts.unshift({
      id: id,
      title: title,
      date: date,
      time: timeVal,
      category: cat,
      labels: labels,
      summary: summary,
      status: 'published',
      content_file: mdPath
    });

    await savePostsJson(`Add new article index: ${id}`);
    await ghSyncArticleStub(allPosts[0]);
    await rebuildSitemap();

    updateStats();
    renderTable();
    showToast('🎉 새 아티클이 생성되었습니다! 본문 에디터를 엽니다.', 'success');
    openMarkdownEditor(id);
  } catch (err) {
    showToast('❌ 아티클 생성 실패: ' + err.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// FEATURE: 1-CLICK FULL BACKUP ZIP (전체 백업 다운로드)
// ═══════════════════════════════════════════════════════════════
async function downloadFullBackupZip() {
  if (typeof JSZip === 'undefined') {
    return showToast('❌ JSZip 라이브러리를 불러오지 못했습니다.', 'error');
  }

  showToast('⏳ 전체 아티클 파일 수집 및 압축 준비 중...', '');
  const zip = new JSZip();

  try {
    // 1. Add posts.json & sitemap.xml
    const postsJsonFile = await ghGet('data/posts.json');
    zip.file('data/posts.json', atob(postsJsonFile.content.replace(/\n/g, '')));

    try {
      const sitemapFile = await ghGet('sitemap.xml');
      zip.file('sitemap.xml', atob(sitemapFile.content.replace(/\n/g, '')));
    } catch (_) {}

    // 2. Fetch all .md files
    const dirRes = await ghGet('data/posts');
    const mdFiles = dirRes.filter(item => item.name.endsWith('.md'));

    let fetched = 0;
    for (const item of mdFiles) {
      showToast(`📦 다운로드 중... (${++fetched}/${mdFiles.length}) ${item.name}`, '');
      const fileData = await ghGet(item.path);
      const raw = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ''))));
      zip.file(`data/posts/${item.name}`, raw);
    }

    // 3. Generate ZIP & Trigger browser download
    showToast('📦 ZIP 압축 파일 생성 중...', '');
    const blob = await zip.generateAsync({ type: 'blob' });
    const today = new Date().toISOString().split('T')[0];
    const fileName = `DC_InfraOps_Blog_Backup_${today}.zip`;

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    showToast(`✅ ${mdFiles.length}개 아티클 전체 백업 다운로드 완료!`, 'success');
  } catch (err) {
    showToast('❌ 백업 생성 실패: ' + err.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// METADATA EDIT & DELETE
// ═══════════════════════════════════════════════════════════════
function openEditModal(id) {
  const post = allPosts.find(p => p.id === id);
  if (!post) return;
  editingPostId = id;
  const normCat = CAT_NORMALIZE[post.category] || post.category || 'Daily Briefing';
  
  // Record original values for 1-click restore
  editModalOriginal = {
    category: normCat,
    title: post.title || '',
    summary: post.summary || '',
    labels: [...(post.labels || [])]
  };

  document.getElementById('edit-audit-created').textContent = `${post.date} (${post.time || '07:30'})`;
  document.getElementById('edit-audit-updated').textContent = post.updated || '최초 발행본 (수정 이력 없음)';

  document.getElementById('edit-category').value = normCat;
  document.getElementById('edit-title').value = post.title || '';
  document.getElementById('edit-summary').value = post.summary || '';
  document.getElementById('edit-labels').value = (post.labels || []).join(', ');
  openModal('edit-modal');
}

function resetEditModalToOriginal() {
  if (!editModalOriginal) return;
  const ok = confirm("⚠️ [메타데이터 원상 복귀 확인]\n\n입력 중이던 제목, 카테고리, 요약문, 태그가 수정 전 원래 값으로 초기화됩니다.\n\n정말 복구하시겠습니까?");
  if (!ok) return;

  document.getElementById('edit-category').value = editModalOriginal.category || 'Daily Briefing';
  document.getElementById('edit-title').value = editModalOriginal.title || '';
  document.getElementById('edit-summary').value = editModalOriginal.summary || '';
  document.getElementById('edit-labels').value = (editModalOriginal.labels || []).join(', ');
  showToast('↩️ 수정 전 [원래 메타데이터] 입력값으로 원상 복귀되었습니다.', 'success');
}

async function saveEdit() {
  const post = allPosts.find(p => p.id === editingPostId);
  if (!post) return;

  const now = new Date();
  const nowStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  post.category = document.getElementById('edit-category').value;
  post.title    = document.getElementById('edit-title').value.trim();
  post.summary  = document.getElementById('edit-summary').value.trim();
  post.labels   = document.getElementById('edit-labels').value.split(',').map(s => s.trim()).filter(Boolean);
  post.updated  = nowStr;

  try {
    await savePostsJson(`Edit article metadata: ${editingPostId}`);

    if (post.content_file) {
      const mdPath = post.content_file;
      const mdFile = await ghGet(mdPath);
      const raw = decodeURIComponent(escape(atob(mdFile.content.replace(/\n/g, ''))));
      const labelsYaml = post.labels.map(l => `  - ${l}`).join('\n');
      const timeLine = post.time ? `time: "${post.time}"\n` : '';
      const newFrontmatter = `---\nid: ${post.id}\ntitle: "${post.title.replace(/"/g,'\\"')}"\ndate: ${post.date}\n${timeLine}updated: "${nowStr}"\ncategory: ${post.category}\nstatus: ${post.status || 'published'}\nsummary: "${post.summary.replace(/"/g,'\\"')}"\nlabels:\n${labelsYaml}\n---`;
      const newContent = raw.replace(/^---[\s\S]*?---/, newFrontmatter);
      await ghPut(mdPath, newContent, `Edit frontmatter: ${editingPostId}`, mdFile.sha);
      await ghSyncArticleStub(post);
    }

    closeModal('edit-modal');
    updateStats();
    renderCurrentView();
    showToast('✅ 수정사항이 GitHub에 반영됐습니다!', 'success');
  } catch(e) {
    showToast('❌ 저장 실패: ' + e.message, 'error');
  }
}

async function toggleStatus(id) {
  const post = allPosts.find(p => p.id === id);
  if (!post) return;
  const current = post.status || 'published';
  post.status = current === 'published' ? 'hidden' : 'published';

  try {
    await savePostsJson(`${post.status === 'hidden' ? 'Hide' : 'Show'} article: ${id}`);
    updateStats();
    renderTable();
    const msg = post.status === 'hidden' ? '🙈 아티클을 숨김 처리했습니다.' : '👁️ 아티클을 공개로 전환했습니다.';
    showToast(msg, 'success');
  } catch(e) {
    showToast('❌ 변경 실패: ' + e.message, 'error');
  }
}

function openDeleteModal(id) {
  const post = allPosts.find(p => p.id === id);
  if (!post) return;
  deletingPostId = id;
  document.getElementById('delete-target-title').textContent = post.title;
  openModal('delete-modal');
}

async function confirmDelete() {
  const post = allPosts.find(p => p.id === deletingPostId);
  if (!post) return;

  closeModal('delete-modal');

  try {
    allPosts = allPosts.filter(p => p.id !== deletingPostId);
    await savePostsJson(`Delete article: ${deletingPostId}`);

    const mdPath = `data/posts/${deletingPostId}.md`;
    try {
      const mdFile = await ghGet(mdPath);
      await ghDelete(mdPath, `Delete .md: ${deletingPostId}`, mdFile.sha);
    } catch(_) {}

    await ghDeleteArticleStub(deletingPostId);

    await rebuildSitemap();
    selectedPostIds.delete(deletingPostId);
    updateStats();
    renderTable();
    showToast('🗑️ 아티클이 완전히 삭제됐습니다.', 'success');
  } catch(e) {
    showToast('❌ 삭제 실패: ' + e.message, 'error');
  }
}

// ═══════════════════════════════════════════════════════════════
// SYNC & REBUILD INDEX
// ═══════════════════════════════════════════════════════════════
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const yamlStr = match[1];
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
  return { meta, body: match[2].trim() };
}

async function syncAndRebuildIndex() {
  const btn = event?.target;
  const originalText = btn ? btn.textContent : '';
  if (btn) {
    btn.innerHTML = '<span class="loading-spinner"></span> 동기화 중...';
    btn.disabled = true;
  }

  try {
    showToast('🔍 data/posts/ 파일 목록 스캔 중...', '');
    const dirRes = await ghGet('data/posts');
    if (!Array.isArray(dirRes)) throw new Error('data/posts 디렉토리를 찾을 수 없습니다.');

    const mdFiles = dirRes.filter(item => item.name.endsWith('.md'));
    const rebuiltPosts = [];

    for (const item of mdFiles) {
      const fileData = await ghGet(item.path);
      const raw = decodeURIComponent(escape(atob(fileData.content.replace(/\n/g, ''))));
      const { meta } = parseFrontmatter(raw);
      const id = meta.id || item.name.replace(/\.md$/, '');

      const rawCat = meta.category || 'Daily Briefing';
      const cat = CAT_NORMALIZE[rawCat] || rawCat;

      const defaultTimes = {
        'Daily Briefing': '07:30',
        'Tech Deep Dive': '07:32',
        'Terminology': '07:35',
        'Podcast': '07:38',
        'Newsletter': '07:40'
      };
      const timeVal = meta.time || defaultTimes[cat] || '07:30';

      rebuiltPosts.push({
        id: id,
        title: meta.title || id,
        date: meta.date || '2026-08-16',
        time: timeVal,
        category: cat,
        labels: Array.isArray(meta.labels) ? meta.labels : [],
        summary: meta.summary || '',
        status: meta.status || 'published',
        content_file: item.path
      });
    }

    rebuiltPosts.sort((a, b) => {
      if (a.date !== b.date) return new Date(b.date) - new Date(a.date);
      const pA = CAT_PRIORITY[a.category] || 99;
      const pB = CAT_PRIORITY[b.category] || 99;
      if (pA !== pB) return pA - pB;
      return (b.time || '').localeCompare(a.time || '');
    });
    allPosts = rebuiltPosts;

    await savePostsJson(`Sync index from ${mdFiles.length} markdown files`);
    await rebuildSitemap();

    updateStats();
    renderTable();
    showToast(`⚡ ${mdFiles.length}개 아티클 기준으로 인덱스 & 사이트맵 동기화 완료!`, 'success');
  } catch (err) {
    showToast('❌ 동기화 실패: ' + err.message, 'error');
  } finally {
    if (btn) {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
  }
}

async function rebuildSitemap() {
  const publishedPosts = allPosts.filter(p => (p.status || 'published') === 'published');
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = [
    `  <url>\n    <loc>https://ywmoon.github.io/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`,
    ...publishedPosts.map(p => `  <url>\n    <loc>https://ywmoon.github.io/article/${p.id}/</loc>\n    <lastmod>${p.date}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;

  try {
    const existing = await ghGet('sitemap.xml');
    await ghPut('sitemap.xml', sitemap, `Rebuild sitemap: ${publishedPosts.length} URLs`, existing.sha);
    await rebuildFeedXml();
    showToast('🔄 Sitemap 및 RSS 피드(feed.xml)가 최신화되었습니다!', 'success');
  } catch(e) {
    showToast('❌ sitemap 재생성 실패: ' + e.message, 'error');
  }
}

function xmlEscape(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function rebuildFeedXml() {
  const publishedPosts = allPosts.filter(p => (p.status || 'published') === 'published').slice(0, 150);
  const now = new Date().toUTCString();

  const items = publishedPosts.map(p => {
    let pubDate = '';
    try {
      pubDate = new Date(p.date + 'T12:00:00Z').toUTCString();
    } catch (_) {
      pubDate = now;
    }
    const link = `https://ywmoon.github.io/article/${p.id}/`;
    return `    <item>
      <title>${xmlEscape(p.title || p.id)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${xmlEscape(p.category || 'InfraOps')}</category>
      <description>${xmlEscape(p.summary || '')}</description>
    </item>`;
  }).join('\n');

  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DC InfraOps Intelligence</title>
    <link>https://ywmoon.github.io</link>
    <description>글로벌 AI 데이터센터 전력망, 냉각, 클라우드 인프라 엔지니어링 데일리 트렌드</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://ywmoon.github.io/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  try {
    let sha = null;
    try {
      const existing = await ghGet('feed.xml');
      sha = existing.sha;
    } catch (_) {}
    await ghPut('feed.xml', feedXml, `Rebuild feed.xml: ${publishedPosts.length} items`, sha);
  } catch (e) {
    console.warn('feed.xml 재생성 실패:', e);
  }
}

// ═══════════════════════════════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// Global keyboard shortcuts: ESC to close modals, Cmd+Z/Shift+Z for undo/redo, / or Cmd+K for search
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const openModalEl = document.querySelector('.modal-backdrop.open');
    if (openModalEl) {
      closeModal(openModalEl.id);
    }
  }

  // Search shortcut (/ or Cmd+K) when not typing inside an input
  if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    const openModalEl = document.querySelector('.modal-backdrop.open');
    if (!openModalEl) {
      e.preventDefault();
      const searchInput = document.getElementById('admin-search-input');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  }

  // Check if editor modal is open and textarea is focused or active
  const editorModal = document.getElementById('markdown-editor-modal');
  if (editorModal && editorModal.classList.contains('open')) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

    if (isCmdOrCtrl && e.key.toLowerCase() === 'z') {
      if (e.shiftKey) {
        e.preventDefault();
        redoEditor();
      } else {
        e.preventDefault();
        undoEditor();
      }
    } else if (isCmdOrCtrl && e.key.toLowerCase() === 'y') {
      e.preventDefault();
      redoEditor();
    }
  }
});

// ═══════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════
let toastTimer = null;
function showToast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `show ${type}`;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.className = '', 3500);
}
