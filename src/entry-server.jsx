/**
 * entry-server.jsx — SSR entry point для prerender.mjs
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;
import { StrictMode } from 'react';
import AppRoutes from './AppRoutes.jsx';

export function render(url = '/') {
  const helmetContext = {};
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes currentLang="en" />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );
  return { html, helmet: helmetContext.helmet };
}
