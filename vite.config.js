import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EngSim/",
  build: {
    sourcemap: false, // Вимкнути source maps
    minify: "esbuild", // ← ВИПРАВЛЕНО: змінено з terser на esbuild
    // Видалив terserOptions, бо використовуємо esbuild
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    }
  },
});