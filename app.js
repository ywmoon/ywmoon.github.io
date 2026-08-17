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
  initShortcuts();
  initFontSize();
  loadPosts();
  window.addEventListener('hashchange', handleHashRoute);
  window.addEventListener('popstate', handleHashRoute);
  
  // Register Service Worker for PWA (Feature 4)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // Reading Progress Bar & Back to Top Scroll Listener
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.getElementById('reading-progress-bar');
    if (bar) bar.style.width = scrolled + '%';

    const backTopBtn = document.getElementById('back-to-top-btn');
    if (backTopBtn) {
      if (winScroll > 320) backTopBtn.classList.add('visible');
      else backTopBtn.classList.remove('visible');
    }
  });
});

// ─── Bookmark Management (Feature 2) ──────────────────────────────
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('dc_bookmarks') || '[]');
  } catch (e) {
    return [];
  }
}

function isBookmarked(id) {
  return getBookmarks().includes(id);
}

function toggleBookmark(id, e) {
  if (e) e.stopPropagation();
  let bookmarks = getBookmarks();
  let added = false;
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
  } else {
    bookmarks.push(id);
    added = true;
  }
  localStorage.setItem('dc_bookmarks', JSON.stringify(bookmarks));
  updateCategoryTabCounts();
  updateBookmarkButtons();
  showToast(added ? '⭐ 북마크에 저장되었습니다!' : '⭐ 북마크가 해제되었습니다.');
  if (currentCategory === 'BOOKMARKS') {
    applyFilters();
  }
}

function toggleCurrentArticleBookmark() {
  const hash = window.location.hash;
  if (hash.startsWith('#article/')) {
    const id = hash.replace('#article/', '');
    toggleBookmark(id);
    updateReaderBookmarkButton(id);
  }
}

function updateReaderBookmarkButton(id) {
  const btn = document.getElementById('reader-bookmark-btn');
  const icon = document.getElementById('reader-bookmark-icon');
  const text = document.getElementById('reader-bookmark-text');
  if (!btn || !icon || !text) return;
  const bookmarked = isBookmarked(id);
  if (bookmarked) {
    btn.classList.add('bookmarked');
    icon.textContent = '★';
    text.textContent = '저장됨';
  } else {
    btn.classList.remove('bookmarked');
    icon.textContent = '⭐';
    text.textContent = '북마크';
  }
}

function updateBookmarkButtons() {
  document.querySelectorAll('.dc-card-bookmark-btn').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const active = isBookmarked(id);
    btn.classList.toggle('active', active);
    btn.textContent = active ? '★' : '☆';
  });
}

// ─── Power User Keyboard Shortcuts (Feature C) ────────────────────
function initShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Press '/' to focus global search box (if not already focused on an input)
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const deskSearch = document.getElementById('global-search-input');
      const mobSearch = document.getElementById('mobile-search-input');
      if (window.innerWidth <= 992 && mobSearch) {
        toggleMobileMenu();
        mobSearch.focus();
      } else if (deskSearch) {
        deskSearch.focus();
        deskSearch.select();
      }
    }
    // Press 'Escape' to close modal, drawer, or clear search focus
    if (e.key === 'Escape') {
      closeProfileModal();
      closeMobileMenu();
      const deskSearch = document.getElementById('global-search-input');
      if (deskSearch) deskSearch.blur();
      const mobSearch = document.getElementById('mobile-search-input');
      if (mobSearch) mobSearch.blur();
    }
  });
}

// ─── Article Reader Font Size Adjuster (Feature B) ────────────────
const FONT_SIZES = ['13px', '15.5px', '18.5px', '22px', '26px'];
const FONT_LABELS = ['작게 (13px)', '기본 (15.5px)', '크게 (18.5px)', '매우 크게 (22px)', '최대 (26px)'];
let currentFontIdx = 1;

function initFontSize() {
  const saved = localStorage.getItem('dc_font_size_idx');
  if (saved !== null) {
    currentFontIdx = Math.max(0, Math.min(FONT_SIZES.length - 1, parseInt(saved, 10)));
  }
  applyReaderFontSize();
}

function adjustFontSize(delta) {
  currentFontIdx = Math.max(0, Math.min(FONT_SIZES.length - 1, currentFontIdx + delta));
  localStorage.setItem('dc_font_size_idx', currentFontIdx);
  applyReaderFontSize();
  showToast(`🔤 본문 글자 크기: ${FONT_LABELS[currentFontIdx] || FONT_SIZES[currentFontIdx]}`);
}

function applyReaderFontSize() {
  const size = FONT_SIZES[currentFontIdx];
  document.documentElement.style.setProperty('--reader-font-size', size);
  const bodyEl = document.getElementById('reader-body-content');
  if (bodyEl) {
    bodyEl.style.setProperty('--reader-font-size', size);
    bodyEl.style.fontSize = size;
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

function getAbsoluteUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return '/' + path.replace(/^\//, '');
}

// ─── Load Posts (lightweight index) ──────────────────────────────
async function loadPosts() {
  try {
    const res = await fetch(getAbsoluteUrl('data/posts.json') + '?_t=' + Date.now());
    if (!res.ok) throw new Error('Failed to load posts');
    allPosts = await res.json();
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
    const fileUrl = getAbsoluteUrl(post.content_file) + '?_t=' + Date.now();
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error('Not found');
    const raw = await res.text();
    const { body } = parseMd(raw);
    
    // Parse markdown if marked library is available
    if (typeof marked !== 'undefined') {
      marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: true,
        mangle: false
      });
      return marked.parse(body);
    }
    return body;
  } catch (e) {
    return `<p style="color:var(--text-muted)">콘텐츠를 불러오지 못했습니다: ${e.message}</p>`;
  }
}

// ─── Mobile Menu & Drawer Controls ────────────────────────────────
function toggleMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer || !btn) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    drawer.classList.add('open');
    btn.classList.add('active');
    btn.setAttribute('aria-label', '메뉴 닫기');
  }
}

function closeMobileMenu() {
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.remove('open');
  if (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-label', '메뉴 열기');
  }
}

function toggleMobileAccordion(contentId, triggerBtn) {
  const accordion = triggerBtn.closest('.dc-mobile-accordion');
  if (accordion) {
    accordion.classList.toggle('open');
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

  // Desktop Dropdowns
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

  // Mobile Accordion Contents
  const mobArchiveMenu = document.getElementById('mob-archive-content');
  if (mobArchiveMenu) {
    mobArchiveMenu.innerHTML = Object.keys(archiveCounts).sort().reverse().map(ym => `
      <div class="dc-dropdown-item" onclick="filterArchive('${ym}'); closeMobileMenu();">
        <span>📅 ${ym.replace('-', '년 ')}월</span>
        <span class="dc-dropdown-count">${archiveCounts[ym]}</span>
      </div>`).join('');
  }
  const mobTagMenu = document.getElementById('mob-tag-content');
  if (mobTagMenu) {
    mobTagMenu.innerHTML = Object.entries(tagCounts).sort((a,b)=>b[1]-a[1]).map(([tag, cnt]) => `
      <div class="dc-dropdown-item" onclick="filterTag('${tag}'); closeMobileMenu();">
        <span>🏷️ ${tag}</span>
        <span class="dc-dropdown-count">${cnt}</span>
      </div>`).join('');
  }
}

// ─── Routing ──────────────────────────────────────────────────────
function handleHashRoute() {
  const hash = window.location.hash;
  const path = window.location.pathname;

  if (hash.startsWith('#article/')) {
    openArticleView(hash.replace('#article/', ''));
  } else if (path.startsWith('/article/')) {
    const parts = path.split('/').filter(Boolean);
    if (parts.length >= 2) {
      openArticleView(parts[1]);
    } else {
      openHomeView();
    }
  } else if (hash === '#table') {
    openTableView();
  } else if (hash.startsWith('#category=')) {
    const cat = decodeURIComponent(hash.replace('#category=', ''));
    currentCategory = cat;
    document.querySelectorAll('.dc-cat-tab').forEach(t => {
      const tabCat = t.getAttribute('data-cat');
      t.classList.toggle('active', tabCat === cat || (cat === 'ALL' && tabCat === 'ALL'));
    });
    openHomeView();
  } else if (hash.startsWith('#tag=')) {
    const tag = decodeURIComponent(hash.replace('#tag=', ''));
    currentTag = tag;
    openHomeView();
  } else if (hash.startsWith('#archive=')) {
    const arch = decodeURIComponent(hash.replace('#archive=', ''));
    currentArchive = arch;
    openHomeView();
  } else {
    currentCategory = 'ALL';
    currentTag = null;
    currentArchive = null;
    document.querySelectorAll('.dc-cat-tab').forEach(t =>
      t.classList.toggle('active', t.getAttribute('data-cat') === 'ALL'));
    openHomeView();
  }
}

function navigateHome() {
  currentCategory = 'ALL';
  currentTag = null;
  currentArchive = null;
  document.querySelectorAll('.dc-cat-tab').forEach(t =>
    t.classList.toggle('active', t.getAttribute('data-cat') === 'ALL'));
  if (window.location.pathname !== '/' && window.location.pathname !== '') {
    history.pushState({ view: 'home' }, 'Home', '/');
  } else if (window.location.hash) {
    history.pushState(null, '', '/');
  }
  openHomeView();
}
function navigateToDirectory() {
  if (window.location.pathname !== '/' && window.location.pathname !== '') {
    history.pushState({ view: 'table' }, 'Directory', '/#table');
  } else {
    window.location.hash = '#table';
  }
  openTableView();
}
function navigateBack() {
  if (previousView === 'table') { navigateToDirectory(); }
  else { navigateHome(); }
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

function updatePageMeta(title, description, url) {
  let fullTitle;
  if (!title || title === 'Home') {
    fullTitle = 'Datacenter InfraOps & Cloud Industry Notes';
  } else {
    fullTitle = title;
  }
  document.title = fullTitle;

  const desc = description || '글로벌 하이퍼스케일 AI 데이터센터 전력망(SMR/BESS), 직류(DC) 배전, 고밀도 액체냉각, 그리고 클라우드 인프라 엔지니어링 데일리 트렌드 & 노트';
  const pageUrl = url || window.location.href;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', fullTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', pageUrl);
}

function highlightText(text, query) {
  if (!text) return '';
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark class="dc-highlight">$1</mark>');
}

function openHomeView() {
  currentView = 'home';
  document.getElementById('hero-section').style.display = 'block';
  document.getElementById('posts-grid-section').style.display = 'block';
  document.getElementById('table-section').style.display = 'none';
  document.getElementById('article-reader-section').style.display = 'none';
  updateNavActiveState('nav-home-btn');
  updatePageMeta('Home', '글로벌 하이퍼스케일 AI 데이터센터, 전력망(SMR), 액체냉각, 클라우드 인프라 엔지니어링 데일리 트렌드 & 노트');
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
  updatePageMeta('All Articles Directory', 'Datacenter InfraOps & Cloud Industry Notes 전체 발행 아티클 데이터베이스 디렉토리');
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

  // 주소창 URL을 /article/[id]/ 로 동기화 (새로고침/직접 복사 시 OG 태그 완벽 지원)
  const targetUrl = `/article/${post.id}/`;
  if (window.location.pathname !== targetUrl) {
    history.replaceState({ view: 'article', id: post.id }, post.title, targetUrl);
  }

  // Dynamic SEO & OpenGraph Meta Update
  updatePageMeta(post.title, post.summary || post.title, `https://ywmoon.github.io/article/${post.id}/`);

  const timeBadge = post.time ? ` ${post.time} KST` : '';
  document.getElementById('reader-meta-date').textContent = `${post.date || ''}${timeBadge}`;
  document.getElementById('reader-title').textContent = post.title || '';
  document.getElementById('reader-badges').innerHTML = `
    <span class="dc-card-cat">${post.category || 'Daily Briefing'}</span>
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

  // 2. Apply reader font size
  applyReaderFontSize();

  // 3. Update Reader Bookmark State (Feature 2)
  updateReaderBookmarkButton(post.id);

  // 4. Build Table of Contents (TOC)
  buildTableOfContents(bodyEl);

  // 4-1. Render Mermaid Diagrams if present
  if (typeof mermaid !== 'undefined') {
    const mermaidBlocks = bodyEl.querySelectorAll('.language-mermaid, pre code.language-mermaid');
    if (mermaidBlocks.length > 0) {
      mermaidBlocks.forEach((block) => {
        const parent = block.closest('pre') || block;
        const code = block.textContent;
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = code;
        parent.parentNode.replaceChild(div, parent);
      });
      try {
        mermaid.run({ nodes: bodyEl.querySelectorAll('.mermaid') });
      } catch (err) {
        console.warn('Mermaid rendering error:', err);
      }
    }
  }

  // 4-2. Setup 1-Click Code Block Copy Buttons (Feature D)
  setupCodeBlockCopyButtons(bodyEl);

  // 5. Enhance Podcast Audio Player (Feature E)
  enhanceAudioPlayers(bodyEl);

  // 6. Render Related Posts Recommendations (Feature A)
  renderRelatedPosts(post);

  // 7. Render Previous / Next Navigation Footer
  renderPostNavigation(post);

  // 8. Request AdSense Display Unit Fill
  try {
    const adWrapper = document.getElementById('dc-ad-bottom-wrapper');
    if (adWrapper) {
      adWrapper.innerHTML = `
        <div class="dc-ad-label">SPONSORED</div>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-6383413671515974"
             data-ad-slot="4973174354"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>`;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  } catch (e) {}

  // 9. Track GA4 PageView with Article Title
  trackPageView(`#article/${post.id}`, post.title);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Code Block Copy Button Setup (Feature D) ─────────────────────
function setupCodeBlockCopyButtons(container) {
  const preElements = container.querySelectorAll('pre');
  preElements.forEach((pre) => {
    // Avoid duplicate buttons
    if (pre.parentElement && pre.parentElement.classList.contains('dc-code-wrap')) return;

    const wrap = document.createElement('div');
    wrap.className = 'dc-code-wrap';
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);

    const btn = document.createElement('button');
    btn.className = 'dc-code-copy-btn';
    btn.innerHTML = '📋 복사';
    btn.setAttribute('title', '코드 복사');
    btn.addEventListener('click', () => copyCodeBlock(btn, pre));
    wrap.appendChild(btn);
  });
}

function copyCodeBlock(btn, pre) {
  const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code).then(() => {
      btn.innerHTML = '✅ 복사됨!';
      setTimeout(() => { btn.innerHTML = '📋 복사'; }, 2000);
    });
  } else {
    const input = document.createElement('textarea');
    input.value = code;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    btn.innerHTML = '✅ 복사됨!';
    setTimeout(() => { btn.innerHTML = '📋 복사'; }, 2000);
  }
}

// ─── Podcast Audio Player Enhancer (Feature E) ────────────────────
function enhanceAudioPlayers(container) {
  const audioElements = container.querySelectorAll('audio');
  audioElements.forEach((audio) => {
    if (audio.parentElement && audio.parentElement.querySelector('.dc-podcast-player-ctrls')) return;

    const ctrls = document.createElement('div');
    ctrls.className = 'dc-podcast-player-ctrls';

    // 10s Backward
    const backBtn = document.createElement('button');
    backBtn.className = 'dc-audio-ctrl-btn';
    backBtn.innerHTML = '⏪ 10초';
    backBtn.addEventListener('click', () => { audio.currentTime = Math.max(0, audio.currentTime - 10); });

    // Speed Toggle Button
    const speeds = [1.0, 1.25, 1.5, 2.0];
    let speedIdx = 0;
    const speedBtn = document.createElement('button');
    speedBtn.className = 'dc-audio-ctrl-btn';
    speedBtn.innerHTML = '⚡ 1.0x';
    speedBtn.addEventListener('click', () => {
      speedIdx = (speedIdx + 1) % speeds.length;
      audio.playbackRate = speeds[speedIdx];
      speedBtn.innerHTML = `⚡ ${speeds[speedIdx]}x`;
    });

    // 10s Forward
    const fwdBtn = document.createElement('button');
    fwdBtn.className = 'dc-audio-ctrl-btn';
    fwdBtn.innerHTML = '10초 ⏩';
    fwdBtn.addEventListener('click', () => { audio.currentTime = Math.min(audio.duration || Infinity, audio.currentTime + 10); });

    ctrls.appendChild(backBtn);
    ctrls.appendChild(speedBtn);
    ctrls.appendChild(fwdBtn);

    audio.parentNode.insertBefore(ctrls, audio.nextSibling);
  });
}

// ─── Related Posts Recommendation (Feature A) ────────────────────
function renderRelatedPosts(currentPost) {
  const section = document.getElementById('reader-related-section');
  const grid = document.getElementById('reader-related-grid');
  if (!section || !grid) return;

  const currentLabels = new Set(currentPost.labels || []);
  const published = allPosts.filter(p => (p.status || 'published') === 'published' && p.id !== currentPost.id);

  // Score posts based on matching tags (weight 2) + matching category (weight 1)
  const scored = published.map(p => {
    let score = 0;
    if (p.category === currentPost.category) score += 1;
    (p.labels || []).forEach(l => {
      if (currentLabels.has(l)) score += 2;
    });
    return { post: p, score };
  });

  scored.sort((a, b) => b.score - a.score || new Date(b.post.date) - new Date(a.post.date));
  const related = scored.slice(0, 3).map(s => s.post);

  if (related.length === 0) {
    section.style.display = 'none';
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = related.map(p => `
    <div class="dc-related-card" onclick="window.location.hash='#article/${p.id}'">
      <div class="dc-related-card-top">
        <span class="dc-related-card-cat">${p.category || 'Daily Briefing'}</span>
        <span class="dc-related-card-date">${p.date}</span>
      </div>
      <div class="dc-related-card-title">${p.title}</div>
    </div>`).join('');

  section.style.display = 'block';
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
  // OG 태그가 있는 스텁 URL 형식 (/article/[id]/) 로 복사 — SNS 미리보기 정상 동작
  const hash = window.location.hash; // e.g. #article/2026-08-17-xxx
  const match = hash.match(/^#article\/(.+)$/);
  const url = match
    ? `https://ywmoon.github.io/article/${match[1]}/`
    : window.location.href;
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
  const hash = window.location.hash;
  const match = hash.match(/^#article\/(.+)$/);
  const url = encodeURIComponent(
    match ? `https://ywmoon.github.io/article/${match[1]}/` : window.location.href
  );
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
  document.querySelectorAll('.dc-nav-btn, .dc-mobile-nav-item').forEach(btn => btn.classList.remove('active'));
  const el = document.getElementById(activeId);
  if (el) el.classList.add('active');
  if (activeId === 'nav-home-btn') {
    const mobHome = document.getElementById('mob-nav-home');
    if (mobHome) mobHome.classList.add('active');
  } else if (activeId === 'nav-table-btn') {
    const mobTable = document.getElementById('mob-nav-table');
    if (mobTable) mobTable.classList.add('active');
  }
}

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

function matchCategory(postCat, filterCat) {
  if (!filterCat || filterCat === 'ALL') return true;
  if (postCat === filterCat) return true;
  const aliases = CAT_ALIAS[filterCat];
  if (aliases && aliases.includes(postCat)) return true;
  return false;
}

function updateCategoryTabCounts() {
  const published = allPosts.filter(p => (p.status || 'published') === 'published');
  const bookmarks = getBookmarks();
  const counts = {
    all: published.length,
    briefing: published.filter(p => matchCategory(p.category, 'Daily Briefing')).length,
    deepdive: published.filter(p => matchCategory(p.category, 'Tech Deep Dive')).length,
    glossary: published.filter(p => matchCategory(p.category, 'Terminology')).length,
    podcast: published.filter(p => matchCategory(p.category, 'Podcast')).length,
    newsletter: published.filter(p => matchCategory(p.category, 'Newsletter')).length,
    bookmarks: published.filter(p => bookmarks.includes(p.id)).length
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
  const elBookmarks = document.getElementById('count-bookmarks');
  if (elBookmarks) elBookmarks.textContent = counts.bookmarks;
}

// ─── Filtering ────────────────────────────────────────────────────
function applyFilters() {
  const bookmarks = getBookmarks();
  filteredPosts = allPosts.filter(post => {
    if ((post.status || 'published') !== 'published') return false;
    if (currentCategory === 'BOOKMARKS') {
      if (!bookmarks.includes(post.id)) return false;
    } else {
      if (!matchCategory(post.category, currentCategory)) return false;
    }
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
  currentCategory = cat || 'ALL';
  if (currentCategory === 'ALL') {
    if (window.location.hash.startsWith('#category=')) {
      history.pushState(null, '', window.location.pathname);
    }
  } else {
    window.location.hash = '#category=' + encodeURIComponent(currentCategory);
  }
  document.querySelectorAll('.dc-cat-tab').forEach(t => {
    const tabCat = t.getAttribute('data-cat');
    t.classList.toggle('active', tabCat === cat || (cat === 'ALL' && tabCat === 'ALL'));
  });
  if (currentView === 'article') openHomeView();
  else applyFilters();
}

function filterTag(tag) {
  currentTag = tag;
  if (tag) window.location.hash = '#tag=' + encodeURIComponent(tag);
  document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
  if (currentView === 'article') openHomeView();
  else applyFilters();
}

function filterArchive(ym) {
  currentArchive = ym;
  if (ym) window.location.hash = '#archive=' + encodeURIComponent(ym);
  document.querySelectorAll('.dc-dropdown-wrap').forEach(w => w.classList.remove('open'));
  if (currentView === 'article') openHomeView();
  else applyFilters();
}

function handleSearchInput(val) {
  searchQuery = val.trim();
  const mobInput = document.getElementById('mobile-search-input');
  if (mobInput && mobInput.value !== val) mobInput.value = val;
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
  const mobClearBtn = document.getElementById('mobile-search-clear-btn');
  if (mobClearBtn) mobClearBtn.style.display = searchQuery ? 'inline-block' : 'none';
  applyFilters();
}

function handleMobileSearchInput(val) {
  searchQuery = val.trim();
  const deskInput = document.getElementById('global-search-input');
  if (deskInput && deskInput.value !== val) deskInput.value = val;
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.style.display = searchQuery ? 'inline-block' : 'none';
  const mobClearBtn = document.getElementById('mobile-search-clear-btn');
  if (mobClearBtn) mobClearBtn.style.display = searchQuery ? 'inline-block' : 'none';
  applyFilters();
}

function clearSearch() {
  const deskInput = document.getElementById('global-search-input');
  if (deskInput) deskInput.value = '';
  const mobInput = document.getElementById('mobile-search-input');
  if (mobInput) mobInput.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.style.display = 'none';
  const mobClearBtn = document.getElementById('mobile-search-clear-btn');
  if (mobClearBtn) mobClearBtn.style.display = 'none';
  applyFilters();
}

function clearMobileSearch() {
  clearSearch();
}

function resetAllFilters() {
  currentCategory = 'ALL';
  currentTag = null;
  currentArchive = null;
  clearSearch();
  if (window.location.hash.startsWith('#category=') || window.location.hash.startsWith('#tag=') || window.location.hash.startsWith('#archive=')) {
    history.pushState(null, '', window.location.pathname);
  }
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
  container.innerHTML = visible.map(post => {
    const displayTitle = highlightText(post.title, searchQuery);
    const displaySummary = highlightText(post.summary || '', searchQuery);
    const bookmarked = isBookmarked(post.id);
    return `
    <div class="dc-post-card" onclick="window.location.hash='#article/${post.id}'">
      <div class="dc-card-top">
        <span class="dc-card-cat">${post.category || 'Daily Briefing'}</span>
        <div class="dc-card-top-right">
          <span class="dc-card-date">${post.date}${post.time ? ' ' + post.time : ''}</span>
          <button class="dc-card-bookmark-btn ${bookmarked ? 'active' : ''}" data-id="${post.id}" onclick="toggleBookmark('${post.id}', event)" title="북마크 저장/해제">${bookmarked ? '★' : '☆'}</button>
        </div>
      </div>
      <h3 class="dc-card-title">${displayTitle}</h3>
      <p class="dc-card-summary">${displaySummary}</p>
      <div class="dc-card-tags">
        ${(post.labels || []).slice(0,4).map(l=>`<span class="dc-tag-pill">#${highlightText(l, searchQuery)}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
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
  tbody.innerHTML = visible.map((post, idx) => {
    const displayTitle = highlightText(post.title, searchQuery);
    return `
    <tr class="dc-table-row" onclick="window.location.hash='#article/${post.id}'" title="아티클 열기: ${post.title.replace(/"/g, '&quot;')}">
      <td style="font-weight:700;color:var(--text-muted);">${visible.length - idx}</td>
      <td style="font-family:var(--font-mono);font-size:12px;white-space:nowrap;">
        <div>${post.date}</div>
        ${post.time ? `<div style="color:var(--text-muted);font-size:11px;">${post.time}</div>` : ''}
      </td>
      <td><span class="dc-card-cat">${post.category}</span></td>
      <td><strong class="dc-table-title">${displayTitle}</strong></td>
      <td><div style="display:flex;flex-wrap:wrap;gap:4px;">${(post.labels||[]).slice(0,3).map(l=>`<span class="dc-tag-pill">#${highlightText(l, searchQuery)}</span>`).join('')}</div></td>
      <td><button class="dc-table-open-btn" onclick="event.stopPropagation(); window.location.hash='#article/${post.id}'">보기</button></td>
    </tr>`;
  }).join('');
}

// ─── Profile Modal ────────────────────────────────────────────────
function openProfileModal() { document.getElementById('profile-modal').classList.add('open'); }
function closeProfileModal() { document.getElementById('profile-modal').classList.remove('open'); }
function handleBackdropClick(e) { if (e.target.id === 'profile-modal') closeProfileModal(); }
