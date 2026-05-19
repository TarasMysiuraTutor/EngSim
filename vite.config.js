import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: isSsrBuild ? {} : {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2015",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/index-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        format: "es",
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          katex: ["katex"],
          pdf: ["jspdf", "jspdf-autotable"],
        },
      },
    },
  },

  esbuild: {
    legalComments: "none",
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },

  server: { port: 3000, open: true },
  preview: { port: 4173 },
  optimizeDeps: { include: ["react", "react-dom", "react-router-dom"] },
}));
