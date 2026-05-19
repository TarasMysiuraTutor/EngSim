/**
 * prerender.mjs — SSG скрипт для EngSim
 *
 * Генерує статичний HTML для кожного маршруту.
 * Запуск: node prerender.mjs (після npm run build && npm run build:ssr)
 *
 * Google Crawler отримає повний HTML замість порожнього <div id="root">.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.join(__dirname, 'dist');
const serverDir = path.join(distDir, 'server');
const indexPath = path.join(distDir, 'index.html');

// Всі статичні маршрути для prerender
const ROUTES = [
  '/',
  '/services',
  '/about',
  '/projects',
  '/testimonials',
  '/faq',
  '/contact',
  '/calculators',
  '/videos',
  '/library',
  '/reference',
  '/reference/math',
  '/reference/strength',
  '/reference/hydraulic',
  '/reference/hydromechanics',
  '/reference/thermal',
  '/reference/mass',
  '/reference/waterProperties',
];

// --- Перевірки ---
if (!fs.existsSync(distDir)) {
  console.error('❌  dist/ не знайдено. Запусти спочатку: npm run build');
  process.exit(1);
}
if (!fs.existsSync(indexPath)) {
  console.error('❌  dist/index.html не знайдено.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');

// --- SSR бандл ---
const ssrEntry = fs.existsSync(serverDir)
  ? fs.readdirSync(serverDir).find(f => f.endsWith('.js'))
  : null;

if (!ssrEntry) {
  console.log('⚠️  SSR бандл не знайдено у dist/server/');
  console.log('   Вставляємо тільки статичний fallback HTML для головної сторінки.\n');
  injectFallback();
  process.exit(0);
}

// --- Повноцінний SSR для кожного маршруту ---
let render;
try {
  const mod = await import(path.join(serverDir, ssrEntry));
  render = mod.render;
} catch (err) {
  console.error('❌  Помилка завантаження SSR бандлу:', err.message);
  injectFallback();
  process.exit(0);
}

let success = 0;
let failed  = 0;

for (const route of ROUTES) {
  try {
    const { html: appHtml } = render(route);

    // Визначаємо шлях для файлу
    const isRoot = route === '/';
    const routeDir = isRoot
      ? distDir
      : path.join(distDir, route.slice(1)); // прибираємо початковий /

    if (!isRoot) fs.mkdirSync(routeDir, { recursive: true });

    const outPath = isRoot
      ? indexPath
      : path.join(routeDir, 'index.html');

    const result = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(outPath, result);
    const kb = (Buffer.byteLength(result, 'utf8') / 1024).toFixed(1);
    console.log(`✅  ${route.padEnd(40)} → ${outPath.replace(distDir, 'dist')} (${kb} KB)`);
    success++;
  } catch (err) {
    console.warn(`⚠️  ${route.padEnd(40)} → помилка: ${err.message}`);
    failed++;
  }
}

console.log(`\nPrerender завершено: ${success} успішно, ${failed} з помилками.`);
if (failed > 0) {
  console.log('   Сторінки з помилками будуть відображатись через React CSR (клієнтський рендер).');
}

/**
 * Fallback: вставляємо статичний HTML у головну сторінку без SSR бандлу
 */
function injectFallback() {
  const staticHtml = `
<div id="root">
  <div style="min-height:100vh;background:#0a0e27;color:#e2e8f0;display:flex;flex-direction:column;">
    <header style="padding:1.5rem 2rem;border-bottom:1px solid #1e3a5f;">
      <span style="font-size:1.5rem;font-weight:700;color:#3b82f6;">Eng</span>
      <span style="font-size:1.5rem;font-weight:300;color:#94a3b8;">Sim</span>
    </header>
    <main style="flex:1;max-width:800px;margin:4rem auto;padding:0 2rem;">
      <h1 style="font-size:2.5rem;font-weight:700;margin-bottom:1rem;">
        Engineering Simulation Calculators
      </h1>
      <p style="color:#94a3b8;font-size:1.1rem;line-height:1.7;margin-bottom:2rem;">
        Professional engineering calculators for strength of materials, hydraulics,
        thermodynamics, heat transfer, and mass transfer.
        Інженерні калькулятори: опір матеріалів, гідравліка, термодинаміка.
      </p>
      <nav style="display:flex;gap:1rem;flex-wrap:wrap;">
        <a href="/calculators" style="color:#3b82f6;">Calculators</a>
        <a href="/reference" style="color:#3b82f6;">Reference</a>
        <a href="/library" style="color:#3b82f6;">Library</a>
        <a href="/videos" style="color:#3b82f6;">Videos</a>
        <a href="/about" style="color:#3b82f6;">About</a>
      </nav>
    </main>
  </div>
</div>`;

  const result = template.replace('<div id="root"></div>', staticHtml);
  fs.writeFileSync(indexPath, result);
  console.log(`✅  Fallback HTML вставлено у dist/index.html`);
}
