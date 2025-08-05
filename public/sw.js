const CACHE_NAME = 'iic-cache-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/images/heroSection/image.png',
  '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.42_0253870e.jpg',
  '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.42_15bd2c62.jpg',
  '/images/heroSection/WhatsApp Image 2025-07-28 at 11.43.41_dc67afd3.jpg',
  '/images/events/1.png',
  '/images/events/2.png',
  '/images/events/3.png',
  '/images/events/4.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 