import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://hyeok-gu.github.io/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // 1000 KB로 경고 한도 증가
  },
});
