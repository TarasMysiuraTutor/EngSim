// Service Worker для EngSim — Vercel деплой
const CACHE_NAME = "engsim-v2";
const BASE_PATH = "/"; // Vercel — корінь, не /EngSim/

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
];

// Встановлення — кешуємо статичні ресурси
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Активація — видаляємо старі кеші
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Fetch — стратегія: Network First для HTML, Cache First для статики
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Пропускаємо не-GET і cross-origin запити
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // HTML сторінки — завжди з мережі (щоб SSG контент був актуальним)
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  // Статичні ресурси (JS, CSS, images) — Cache First
  event.respondWith(
    caches.match(request).then(
      (cached) => cached || fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
    )
  );
});
