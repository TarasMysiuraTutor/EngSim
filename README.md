# EngSim — Engineering Simulation Calculators

Платформа професійних інженерних калькуляторів для технічних розрахунків у ключових напрямках: опір матеріалів, гідравліка, термодинаміка, енергетика, масопередача.

Поточна версія: **1.3.0**

Живий сайт: https://eng-sim.vercel.app/

---

## Можливості

- Калькулятори з категорій: опір матеріалів, гідравліка, термодинаміка, енергетика, масопередача.
- Довідник формул: гідравліка, гідромеханіка, тепломасообмін, міцність, математика.
- Бібліотека технічної літератури.
- Відео-туторіали.
- Проекти та послуги.
- Багатомовний інтерфейс: 🇩🇪 Deutsch · 🇬🇧 English · 🇺🇦 Українська · 🇷🇺 Русский.
- PWA — встановлюється на телефон як додаток.

---

## Стек технологій

- React 19 + Vite 7
- React Router DOM 7 (SPA з маршрутизацією)
- Tailwind CSS 4
- KaTeX — рендеринг математичних формул
- MathJax — додаткові формули
- jsPDF + jsPDF AutoTable — PDF-експорт
- react-helmet-async — SEO мета-теги на кожній сторінці
- Sanity CMS (окрема папка `engsim-sanity/`)

---

## Структура проекту

```
├── public/
│   ├── favicon.ico / favicon.svg
│   ├── favicon/                   ← PWA іконки (192, 512px)
│   ├── og-image.png               ← превью для соцмереж 1200×630
│   ├── manifest.json              ← PWA маніфест
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── service-worker.js
│   ├── diagrams/                  ← SVG/PNG схеми для калькуляторів
│   └── documents/                 ← PDF документи (DSTU, EN1993)
├── src/
│   ├── assets/                    ← зображення, логотипи
│   ├── calculators/               ← модулі калькуляторів (beam, pipe, massTransfer...)
│   ├── components/                ← загальні компоненти UI
│   ├── config/                    ← конфігурація додатку, маршрутів, функцій
│   ├── css/                       ← додаткові стилі (formula-styles.css)
│   ├── data/                      ← дані: переклади, довідники, JSON
│   │   ├── reference/             ← довідники (hydraulic, thermal, strength, math...)
│   │   └── json/                  ← статичні дані (books, projects, services...)
│   ├── hooks/                     ← власні React хуки
│   ├── pages/                     ← сторінки застосунку
│   ├── utils/                     ← утиліти (PDF-export, structured data)
│   ├── admin/                     ← адмін-панель
│   ├── App.jsx                    ← кореневий компонент, маршрути
│   ├── main.jsx                   ← entry point, PWA service worker
│   └── index.css
├── engsim-sanity/                 ← Sanity CMS конфігурація
├── vercel.json                    ← деплой конфіг (rewrites, headers)
├── vite.config.js
└── package.json
```

---

## Запуск

Встановити залежності:

```bash
npm install
```

Dev-сервер (http://localhost:3000):

```bash
npm run dev
```

Production збірка:

```bash
npm run build
```

---

## Деплой на Vercel

Проект автоматично деплоїться через GitHub при пуші в `main`.

`vercel.json` налаштований:
- `buildCommand: npm run build`
- `outputDirectory: dist`
- Явні rewrites: `sitemap.xml` і `robots.txt` віддаються напряму, решта → `index.html`
- Content-Type заголовки для `sitemap.xml` і `robots.txt`

---

## SEO та індексація Google

- Мета-теги в `index.html`: title, description, keywords, og:, twitter:, canonical, hreflang
- JSON-LD schema.org `WebApplication` з описом мов і функцій
- `SEO.jsx` компонент на кожній сторінці через react-helmet-async
- `robots.txt` з посиланням на sitemap
- `sitemap.xml` з усіма сторінками та hreflang alternate links
- `og-image.png` (1200×630) — превью для соцмереж
- PWA іконки 192×512 для встановлення на телефон
- Підтвердження Google Search Console: `googleaf9b2dd63f25457e.html`

Після деплою підтвердити сайт у Google Search Console та надіслати sitemap:
```
https://eng-sim.vercel.app/sitemap.xml
```

---

## Адмін-панель

Доступна за адресою `/admin`. Захищена паролем (сесія в `sessionStorage`).

Пароль за замовчуванням: **`engsim-admin-2026`**

Щоб змінити пароль — відкрий `src/admin/AdminPage.jsx` і замість `ADMIN_HASH` постав:
```js
const ADMIN_HASH = btoa(encodeURIComponent("твій-новий-пароль"));
```

---

## Змінні середовища

Файл `.env` містить публічні змінні (не секрети):

```
VITE_PUBLIC_SITE_URL=https://eng-sim.vercel.app
VITE_PUBLIC_APP_NAME=EngSim
```

`.env` доданий у `.gitignore` — не потрапляє у репозиторій.

---

## Журнал змін

### v1.3.0 — 2026-05-20

- **Виправлення збірки**:
  - `About.jsx` — PNG fallback фото замінено з 827KB на JPG (54KB), прибрано два закоментовані блоки.
  - `pdfExport.jsx` — логотип у PDF замінено з `logo.png` (439KB) на `opt/logo.png` (97KB), −78%.
- **Tailwind**:
  - `Contact.jsx` — динамічні класи `from-${color}-500` замінено на статичні (Tailwind не генерує динамічні класи під час збірки — вони зникали у production).
- **Чистота коду**:
  - `VideoCard.jsx` — `console.error` у `onError` замінено на тихий `setImageError(true)`.
  - `useCalculationHistory.js` — `console.error` у `catch` блоках замінено на `// ignore`.
  - `Navbar.jsx` — прибрано великий закоментований JSX блок `<picture>`.
  - `useCalculationHistory.js` — прибрано закоментовану стару версію `addCalculation`.
- **Файли**:
  - Видалено ~2.5MB невикористаних зображень: `my-photo.png` (827KB + 883KB), `logo1.*` (419KB+...), `logo2.*`, дублі favicon, порожні SVG діаграми, зайві іконки у корені.

### v1.2.2 — 2026-05-18

- `Footer.jsx` — версія переміщена всередину рядка копірайту, тепер завжди видима. Стиль: синій бейдж з рамкою у моноширинному шрифті.

### v1.2.1 — 2026-05-18

- `Footer.jsx` — версія тепер видима: колір змінено з `text-gray-600` (майже невидимий на темному фоні) на `text-blue-400/60` з hover ефектом.

### v1.2.0 — 2026-05-18

- **Безпека**: додано захист адмін-панелі (`/admin`).
  - `AdminPage.jsx` — login screen з паролем перед відображенням панелі.
  - Сесія зберігається у `sessionStorage` (автоматично очищається при закритті вкладки).
  - Кнопка "Вийти" у хедері адмін-панелі.
  - Пароль за замовчуванням: `engsim-admin-2026` (змінити у змінній `ADMIN_HASH`).
- **Виправлення помилок**:
  - `SEO.jsx` — виправлено синтаксичну помилку наприкінці файлу (зайвий \`\`\`;\`), `Array()` → `Array.isArray()`, `image` тепер вказує на `/og-image.png` (а не `/preview.png` якого немає).
  - `SEO.jsx` — прибрано закоментований блок jsonld.
  - `SEO.jsx` — додано `og:image:width/height`, `og:url`, `og:type`.
- **Чистота коду**:
  - `src/pages/adm.jsx` — видалено старий невикористаний файл адмін-панелі.
  - Всі зайві коментарі у нових файлах прибрано.

### v1.1.0 — 2026-05-18

- **Оптимізація продуктивності**: головний JS бандл зменшено з 1086 KB → 300 KB (−72%).
  - `App.jsx` — всі сторінки переведено на `React.lazy()` + `Suspense`. Кожна сторінка тепер завантажується окремим chunk-ом тільки при першому відвідуванні.
  - Додано `PageLoader` — мінімальний спінер під час завантаження lazy-сторінки.
  - `vite.config.js` — додано `manualChunks` для `katex` і `pdf` (jsPDF), очищено від закоментованого коду.
- **Виправлення помилок**:
  - `Footer.jsx` — виправлено критичну помилку: `<Link to={\`/$contact}\`}>` замінено на `<a href={contact.href}>`. Попередній код рендерив невалідний JSX.
  - `App.jsx` — додано SSR guard для `localStorage` (`try/catch`). 404 сторінка виведена з дублюючого об'єкта `NOT_FOUND_MESSAGES`.
  - `main.jsx` — `console.log` Service Worker замінено на `console.error`.
- **Чистота коду**:
  - `App.jsx` — прибрано 15+ закоментованих рядків і зайві коментарі-заголовки.
  - `Navbar.jsx` — прибрано 4 невикористані імпорти (`logo`, `logoAvif`, `logoWebp`, `logoPng`).
  - `VideoCard.jsx` — прибрано 4 закоментованих `console.log`.
  - `ScrollToTopOnNavigate.jsx` — прибрано закоментований рядок.
- **Файли**:
  - `public/manifest.json` — виправлено шляхи іконок (прибрано `/EngSim/` prefix), оновлено структуру.
  - `public/manifest_old.json` — видалено.
  - `public/favicon/site.webmanifest` — видалено дубль (використовується тільки `manifest.json`).
  - `netlify.toml` — видалено (проект деплоїться на Vercel, не Netlify).

### v1.0.0 — 2026-05-18

- Перша офіційна версія. Проект переведений з версії `0.0.0`.
- Виправлено конфігурацію `vercel.json`:
  - Додано явні `rewrites` для `sitemap.xml` і `robots.txt` — файли більше не перенаправляються через SPA.
  - Додано `Content-Type: application/xml` для `sitemap.xml`.
  - Зафіксовано `buildCommand` і `outputDirectory`.
- `public/sitemap.xml` — повністю переписано: прибрано GitHub Pages URL, залишено тільки Vercel-адреси, додано всі реальні сторінки, прибрано неіснуючі PDF-книги, оновлено дати.
- `public/robots.txt` — прибрано дублюючий GitHub Pages sitemap, залишено тільки Vercel.
- `public/og-image.png` — створено превью 1200×630 для соцмереж (темно-синій стиль, картки σ, Re, M, η, λ, Δp).
- `index.html` — виправлено шлях `apple-touch-icon` (`/favicon/apple-touch-icon.png`), MathJax завантажується з `defer`, прибрано дублюючі `preconnect`/`dns-prefetch` теги.
- `package.json` — версія встановлена `1.0.0`.
- `.gitignore` — додано `.env`, `.env.production`, `.env.local`.
- `Footer.jsx` — додано відображення версії застосунку у нижньому рядку.
