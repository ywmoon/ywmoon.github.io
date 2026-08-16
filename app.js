/**
 * DC InfraOps Intelligence - GitHub Pages Application Engine
 * Author: James Moon (ywmoon1202@gmail.com)
 */

let allPosts = [];
let filteredPosts = [];
let currentCategory = 'ALL';
let currentTag = null;
let currentArchive = null;
let searchQuery = '';
let currentView = 'home'; // 'home' | 'table' | 'article'

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadPosts();
  window.addEventListener('hashchange', handleHashRoute);
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem('dc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('dc_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}

// 2. Data Loading & Initialization
async function loadPosts() {
  try {
    const res = await fetch('data/posts.json?_t=' + Date.now());
    if (!res.ok) throw new Error('Failed to load posts');
    allPosts = await res.json();
    
    // Sort descending by date
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filteredPosts = [...allPosts];
    populateNavDropdowns();
    handleHashRoute();
  } catch (err) {
    console.error('Error loading posts:', err);
    document.getElementById('posts-grid-container').innerHTML = `
      <div style="padding: 40px; text-align: center; color: var(--text-muted);">
        아티클 데이터를 불러오는 중 오류가 발생했습니다. 새로고침해 주세요.
      </div>
    `;
  }
}

// 3. Dynamic Navigation Dropdowns (Archives & Tags)
function populateNavDropdowns() {
  // Archive Months
  const archiveCounts = {};
  const tagCounts = {};

  allPosts.forEach(post => {
    if (post.date) {
      const ym = post.date.substring(0, 7);
      archiveCounts[ym] = (archiveCounts[ym] || 0) + 1;
    }
    if (Array.isArray(post.labels)) {
      post.labels.forEach(t => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    }
  });

  // Render Archive Dropdown
  const archiveMenu = document.getElementById('archive-dropdown-menu');
  if (archiveMenu) {
    const sortedYm = Object.keys(archiveCounts).sort().reverse();
    archiveMenu.innerHTML = sortedYm.map(ym => `
      <div class="dc-dropdown-item" onclick="filterArchive('${ym}')">
        <span>📅 ${ym.replace('-', '년 ')}월</span>
        <span class="dc-dropdown-count">${archiveCounts[ym]}</span>
      </div>
    `).join('');
  }

  // Render Tag Dropdown
  const tagMenu = document.getElementById('tag-dropdown-menu');
  if (tagMenu) {
    const sortedTags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
    tagMenu.innerHTML = sortedTags.map(([tag, cnt]) => `
      <div class="dc-dropdown-item" onclick="filterTag('${tag}')">
        <span>🏷️ ${tag}</span>
        <span class="dc-dropdown-count">${cnt}</span>
      </div>
    `).join('');
  }
}

// 4. Routing & View Management
function handleHashRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#article/')) {
    const articleId = hash.replace('#article/', '');
    openArticleView(articleId);
  } else if (hash === '#table') {
    openTableView();
  } else {
    openHomeView();
  }
}

function navigateHome() {
  window.location.hash = '';
  openHomeView();
}

function navigateToDirectory() {
  window.location.hash = '#table';
  openTableView();
}

function navigateBack() {
  if (currentView === 'table') {
    window.location.hash = '#table';
  } else {
    window.location.hash = '';
  }
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
  currentView = 'table';
  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('posts-grid-section').style.display = 'none';
  document.getElementById('table-section').style.display = 'block';
  document.getElementById('article-reader-section').style.display = 'none';
  
  updateNavActiveState('nav-table-btn');
  renderDirectoryTable();
}

function openArticleView(articleId) {
  currentView = 'article';
  const post = allPosts.find(p => p.id === articleId);
  if (!post) {
    alert('해당 아티클을 찾을 수 없습니다.');
    navigateHome();
    return;
  }

  document.getElementById('hero-section').style.display = 'none';
  document.getElementById('posts-grid-section').style.display = 'none';
  document.getElementById('table-section').style.display = 'none';
  document.getElementById('article-reader-section').style.display = 'block';

  document.getElementById('reader-meta-date').textContent = post.date || '';
  document.getElementById('reader-title').textContent = post.title || '';
  
  const badgesWrap = document.getElementById('reader-badges');
  badgesWrap.innerHTML = `
    <span class="dc-card-cat">${post.category || '인프라'}</span>
    ${(post.labels || []).map(l => `<span class="dc-tag-pill">#${l}</span>`).join(' ')}
  `;

  document.getElementById('reader-body-content').innerHTML = post.content || `<p>${post.summary || ''}</p>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavActiveState(activeId) {
  document.querySelectorAll('.dc-nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(activeId);
  if (activeBtn) activeBtn.classList.add('active');
}

// 5. Filtering & Searching Engine
function applyFilters() {
  filteredPosts = allPosts.filter(post => {
    // 1. Category Filter
    if (currentCategory !== 'ALL' && post.category !== currentCategory) {
      return false;
    }
    // 2. Tag Filter
    if (currentTag && (!post.labels || !post.labels.includes(currentTag))) {
      return false;
    }
    // 3. Archive Month Filter
    if (currentArchive && (!post.date || !post.date.startsWith(currentArchive))) {
      return false;
    }
    // 4. Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (post.title || '').toLowerCase().includes(q);
      const matchSummary = (post.summary || '').toLowerCase().includes(q);
      const matchLabels = (post.labels || []).some(l => l.toLowerCase().includes(q));
      if (!matchTitle && !matchSummary && !matchLabels) return false;
    }
    return true;
  });

  updateFilterStatusBar();

  if (currentView === 'table') {
    renderDirectoryTable();
  } else {
    renderPostCards();
  }
}

function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.dc-cat-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-cat') === cat);
  });
  applyFilters();
}

function filterTag(tag) {
  currentTag = tag;
  applyFilters();
}

function filterArchive(ym) {
  currentArchive = ym;
  applyFilters();
}

function handleSearchInput(val) {
  searchQuery = val.trim();
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) {
    clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
  }
  applyFilters();
}

function clearSearch() {
  const input = document.getElementById('global-search-input');
  if (input) input.value = '';
  searchQuery = '';
  document.getElementById('search-clear-btn').style.display = 'none';
  applyFilters();
}

function resetAllFilters() {
  currentCategory = 'ALL';
  currentTag = null;
  currentArchive = null;
  clearSearch();
  document.querySelectorAll('.dc-cat-tab').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-cat') === 'ALL');
  });
  applyFilters();
}

function updateFilterStatusBar() {
  const bar = document.getElementById('filter-status-bar');
  const text = document.getElementById('filter-status-text');
  
  const activeConditions = [];
  if (currentCategory !== 'ALL') activeConditions.push(`카테고리: ${currentCategory}`);
  if (currentTag) activeConditions.push(`태그: #${currentTag}`);
  if (currentArchive) activeConditions.push(`기간: ${currentArchive.replace('-', '년 ')}월`);
  if (searchQuery) activeConditions.push(`검색어: "${searchQuery}"`);

  if (activeConditions.length > 0) {
    bar.style.display = 'flex';
    text.textContent = `🎯 필터 적용 중: ${activeConditions.join(' | ')} (총 ${filteredPosts.length}건)`;
  } else {
    bar.style.display = 'none';
  }
}

// 6. View Renderers
function renderPostCards() {
  const container = document.getElementById('posts-grid-container');
  if (!container) return;

  if (filteredPosts.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; color: var(--text-muted);">
        🔍 조건에 일치하는 아티클이 없습니다.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredPosts.map(post => `
    <div class="dc-post-card" onclick="window.location.hash='#article/${post.id}'">
      <div class="dc-card-top">
        <span class="dc-card-cat">${post.category || '인프라'}</span>
        <span class="dc-card-date">${post.date}</span>
      </div>
      <h3 class="dc-card-title">${post.title}</h3>
      <p class="dc-card-summary">${post.summary || ''}</p>
      <div class="dc-card-tags">
        ${(post.labels || []).slice(0, 4).map(l => `<span class="dc-tag-pill">#${l}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderDirectoryTable() {
  const tbody = document.getElementById('directory-table-body');
  const counter = document.getElementById('table-counter-text');
  if (!tbody) return;

  if (counter) counter.textContent = `총 ${filteredPosts.length}건`;

  if (filteredPosts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 30px; color: var(--text-muted);">
          조건에 일치하는 데이터가 없습니다.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filteredPosts.map((post, idx) => `
    <tr>
      <td style="font-weight: 700; color: var(--text-muted);">${filteredPosts.length - idx}</td>
      <td style="font-family: var(--font-mono); font-size: 12.5px;">${post.date}</td>
      <td><span class="dc-card-cat">${post.category}</span></td>
      <td>
        <strong style="cursor: pointer;" onclick="window.location.hash='#article/${post.id}'">
          ${post.title}
        </strong>
      </td>
      <td>
        <div style="display: flex; flex-wrap: wrap; gap: 4px;">
          ${(post.labels || []).slice(0, 3).map(l => `<span class="dc-tag-pill">#${l}</span>`).join('')}
        </div>
      </td>
      <td>
        <button class="dc-table-open-btn" onclick="window.location.hash='#article/${post.id}'">보기</button>
      </td>
    </tr>
  `).join('');
}

// 7. Profile Modal Handlers
function openProfileModal() {
  document.getElementById('profile-modal').classList.add('open');
}

function closeProfileModal() {
  document.getElementById('profile-modal').classList.remove('open');
}

function handleBackdropClick(e) {
  if (e.target.id === 'profile-modal') {
    closeProfileModal();
  }
}
