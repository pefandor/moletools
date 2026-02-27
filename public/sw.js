var CACHE_NAME = 'moletools-v1';
var STATIC_ASSETS = [
  '/',
  '/images/mole/logo.png',
  '/images/mole/hero.png',
  '/images/mole/Formatter.png',
  '/images/mole/Encoder.png',
  '/images/mole/Generator.png',
  '/images/mole/Converter.png',
  '/scripts/i18n.js'
];

// Install: cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', function(event) {
  // Skip non-GET and external requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Skip API calls
  if (event.request.url.includes('/api/') || event.request.url.includes('api.moletools')) return;

  event.respondWith(
    fetch(event.request).then(function(response) {
      // Cache successful responses
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
      }
      return response;
    }).catch(function() {
      return caches.match(event.request);
    })
  );
});
