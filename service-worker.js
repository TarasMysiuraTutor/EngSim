// Service Worker для EngSim
const CACHE_NAME = 'engsim-v1';
const BASE_PATH = '/EngSim';
const urlsToCache = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`
];

// Встановлення Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache addAll error:', err);
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

// Функція перевірки чи можна кешувати запит
function isValidRequest(request) {
  const url = new URL(request.url);
  
  // Ігноруємо розширення браузера
  if (url.protocol === 'chrome-extension:' || 
      url.protocol === 'moz-extension:' || 
      url.protocol === 'safari-extension:') {
    return false;
  }
  
  // Ігноруємо Formspree
  if (url.hostname.includes('formspree.io')) {
    return false;
  }
  
  // Ігноруємо source maps
  if (url.pathname.endsWith('.map')) {
    return false;
  }
  
  // Тільки HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return false;
  }
  
  return true;
}

// Обробка запитів
self.addEventListener('fetch', (event) => {
  // Перевіряємо чи валідний запит
  if (!isValidRequest(event.request)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Повертаємо з кешу якщо є
        if (response) {
          return response;
        }

        // Клонуємо запит
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Перевіряємо чи валідна відповідь
          if (!response || 
              response.status !== 200 || 
              response.type === 'error' ||
              !response.ok) {
            return response;
          }

          // Перевіряємо тип відповіді
          const contentType = response.headers.get('content-type');
          if (!contentType || 
              (!contentType.includes('text/html') && 
               !contentType.includes('text/css') && 
               !contentType.includes('application/javascript') &&
               !contentType.includes('image/'))) {
            return response;
          }

          // Клонуємо відповідь для кешування
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              // Додаткова перевірка перед кешуванням
              if (isValidRequest(event.request)) {
                cache.put(event.request, responseToCache).catch(err => {
                  console.log('Cache put error:', err);
                });
              }
            });

          return response;
        }).catch((error) => {
          console.log('Fetch failed:', error);
          // Можна повернути offline сторінку
          return new Response('Offline - Please check your connection', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});