// service-worker.js

const { cache } = require("react");

// This is a basic service worker that caches essential files for offline use and faster load times. It listens for install, activate, and fetch events to manage the cache effectively.
const CACHE_NAME = 'I-Repair-it-cache-v1';
// List of files to cache for offline access
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/data.js',
  '/ui.js',
  '/filter.js',
  '/manifest.json',
  '/https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
];
// Install event: cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Cache opened successfully');
      return cache.addAll(urlsToCache); 
    })
  );
});
// Fetch event: serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});
// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log(`Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

//Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
        .map(name => caches.delete(name))
      );
    })
  );
});