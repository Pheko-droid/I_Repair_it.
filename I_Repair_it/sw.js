// service-worker.js
// This is a basic service worker that caches essential files for offline use and faster load times. It listens for install, activate, and fetch events to manage the cache effectively.
const CACHE_NAME = 'i-repair-it-cache-v1';
// List of files to cache for offline access
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/ui.js',
  '/data.js',
  '/filter.js',
  '/manifest.json',
  '/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',

  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png',
  '/images/carpenters/fixing-the-roof.jpg',
  '/images/carpenters/making-a-table.jpg',
  '/images/carpenters/working.jpg',
  '/images/carpenters/working2.jpg',
  '/images/carpenters/working3.jpg',
  '/images/carpenters/working4.jpg',
  '/images/carpenters/working5.jpg',

  '/images/electricians/house-electrical-wiring.jpg',
  '/images/electricians/installing-of-solar-panels.jpg',
  '/images/electricians/installing-of-light.jpg',
  '/images/electricians/installing-of-solarsystem-controlpanel.jpg',
  '/images/electricians/repairing-an-iron.jpg',
  '/images/electricians/repairing-an-electrical-box.jpg',

  '/images/builders/builder2.jpg',
  '/images/builders/builders3.jpg',
  '/images/builders/builder4taking_measurements.jpg',
  '/images/builders/builder5.jpg',
  '/images/builders/builders1.jpg',
  
  '/images/mechanics/fixing-a-bike.jpg',
  '/images/mechanics/fixing-a-car.jpg',
  '/images/mechanics/mechanic1.jpg',
  '/images/mechanics/mechanic2.jpg',
  '/images/mechanics/mechanic3.jpg',

  '/images/plumbers/fixing a pipe.jpg',
  '/images/plumbers/fixing-the-sink.jpg',
  '/images/plumbers/broken-tap.jpg',
  '/images/plumbers/geyser-fix.jpg',
  '/images/plumbers/leaking-pipe.jpg',
  '/images/plumbers/plumbing-tool.jpg',

  '/images/painters/painter1.jpg',
  '/images/painters/painter2.jpg',
  '/images/painters/painter3.jpg',
  '/images/painters/painting-tools.jpg',
  '/images/painters/painting-tools2.jpg',

];
// Install event - caching essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
// Fetch event: serve catched files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return catched version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
  