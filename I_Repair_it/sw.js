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
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png',
  '/images/carpenters/fixing-the-roof.jpg',
  '/images/carpenters/making-a-table.jpg',
  '/images/carpenters/working.jpg',
  '/images/carpenters/working2.jpg',
  '/images/electricians/wiring.jpg',
  '/images/electricians/repairing-socket.jpg',
  '/images/electricians/installing-light.jpg',
]