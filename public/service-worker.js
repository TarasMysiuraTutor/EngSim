// Service Worker для EngSim
const CACHE_NAME = 'engsim-v1';
const BASE_PATH = '/EngSim';
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`
];

// Встановлення Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Активація Service Worker
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
  self.clients.claim();
});

// Обробка запитів
self.addEventListener('fetch', (event) => {
  // Пропускаємо запити до Formspree
  if (event.request.url.includes('formspree.io')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Повертаємо з кешу або завантажуємо з мережі
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          // Перевіряємо чи валідна відповідь
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Клонуємо відповідь
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Можна повернути offline сторінку
        return new Response('Offline');
      })
  );
});