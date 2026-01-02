import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EngSim/",
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    }
  },
  // ← ДОДАЙТЕ ЦЕ:
  esbuild: {
    // Вимкнути eval для продакшену
    pure: ['console.log', 'console.error', 'console.warn'],
    legalComments: 'none'
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
});