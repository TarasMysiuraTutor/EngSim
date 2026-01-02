import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // Важливо для GitHub Pages
      jsxRuntime: 'automatic',
      babel: {
        compact: true
      }
    })
  ],
  base: "/EngSim/",
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: 'es2020', // ← Змінено з es2015
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        // Важливо: строга мінімізація без eval
        format: 'es',
        compact: true
      }
    }
  },
  esbuild: {
    // Строга мінімізація без eval
    legalComments: 'none',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    // Вимкнути всі console.*
    drop: ['console', 'debugger'],
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    __DEV__: false,
    __PROD__: true
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    }
  }
});