import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/EngSim/",
  build: {
    sourcemap: false, // Вимкнути source maps
    minify: "terser", // Використовувати terser замість esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Видалити console.log
        drop_debugger: true,
      },
    },
  },
});
