import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // You can add aliases for your project structure
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    minify: "esbuild", // You can customize the minification method
  },
});
