import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Автоматично: "/" для dev, "/EngSim/" для production
  base: process.env.NODE_ENV === 'production' ? '/EngSim/' : '/',
  
  build: {
    sourcemap: false,
    minify: "esbuild",
    target: 'es2020',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    }
  },
  
  esbuild: {
    legalComments: 'none',
    drop: ['console', 'debugger'],
  },
  
  // Для dev сервера
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://formspree.io https://api.formspree.io;"
    }
  },
  
  // Для preview
  preview: {
    port: 4173,
    strictPort: false,
  }
});