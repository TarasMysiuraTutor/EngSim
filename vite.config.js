import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EngSim/",

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2015", // Знижуємо для кращої сумісності
    cssCodeSplit: false,

    rollupOptions: {
      output: {
        // ВАЖЛИВО: Для GitHub Pages краще один bundle
        manualChunks: undefined,

        // Додаємо хеші
        entryFileNames: "assets/index-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",

        // Формат для сумісності
        format: "es",
        inlineDynamicImports: true,
      },
    },
  },

  esbuild: {
    legalComments: "none",
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },

   server: {
    port: 3000,
    open: true,
    // headers: {
    //   'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://res.cloudinary.com; font-src 'self' data:; connect-src 'self' https://formspree.io https://api.formspree.io https://res.cloudinary.com;"
    // }
  },  
  
  preview: {
    port: 4173,
    strictPort: false,
  },

  // Оптимізація залежностей
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    esbuildOptions: {
      target: "es2015",
    },
  },
});
