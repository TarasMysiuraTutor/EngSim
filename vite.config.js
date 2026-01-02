import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp-guard";

export default defineConfig({
  plugins: [
    react(),
    csp({
      dev: {
        run: true,
        // Якщо використовуєте Tailwind або препроцесори
        outlierSupport: ["css"],
      },
      policy: {
        "default-src": ["'self'"],
        "script-src": ["'self'"],
        "style-src": ["'self'", "'unsafe-inline'"], // Потрібно для динамічних стилів
        "img-src": ["'self'", "data:", "https:"],
        "font-src": ["'self'", "data:", "https://fonts.gstatic.com"],
        "connect-src": ["'self'", "https://formspree.io", "https://api.formspree.io"],
      },
      build: {
        sri: true, // Subresource Integrity для додаткової безпеки
      },
    }),
  ],
  base: "/EngSim/",
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  esbuild: {
    legalComments: "none",
    drop: ["console", "debugger"],
  },
});