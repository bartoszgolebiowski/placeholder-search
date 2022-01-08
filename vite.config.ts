/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.resolve(__dirname, "src") + "/",
      },
    ],
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
