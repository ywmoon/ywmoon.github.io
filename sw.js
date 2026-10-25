// Service Worker for DataCenter InfraOps Trends & Notes (PWA)
const CACHE_NAME = 'dc-infraops-v20261010_01';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/assets/avatar.jpg',
  '/data/posts.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Cache on-demand messages from app.js (e.g., bookmarks and recent 10 articles)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_OFFLINE_POSTS' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(async (cache) => {
        for (const url of event.data.urls) {
          try {
            const cleanUrl = url.split('?')[0];
            const cachedRes = await cache.match(cleanUrl);
            if (!cachedRes) {
              const res = await fetch(cleanUrl);
              if (res && res.status === 200) {
                await cache.put(cleanUrl, res);
              }
            }
          } catch (e) {
            // Ignore offline fetch errors during background sync
          }
        }
      })
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const reqUrl = new URL(event.request.url);

  // Ignore 3rd-party origins (Google AdSense, GA4, Firebase DB)
  if (reqUrl.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network succeeded and returned 200, update cache
        if (response && response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Store with full URL and clean URL (without query params)
            cache.put(event.request, resClone);
            const cleanUrl = event.request.url.split('?')[0];
            if (cleanUrl !== event.request.url) {
              cache.put(cleanUrl, response.clone());
            }
          });
        }
        return response;
      })
      .catch(async () => {
        // Network failed (Offline / Airplane mode / Subway) -> Fallback to Cache
        const match = await caches.match(event.request, { ignoreSearch: true });
        if (match) return match;

        const cleanUrl = event.request.url.split('?')[0];
        const cleanMatch = await caches.match(cleanUrl);
        if (cleanMatch) return cleanMatch;

        // If navigation request fails, return cached index.html
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }

        return new Response('Offline: Resource not cached.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' }
        });
      })
  );
});
