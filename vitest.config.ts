/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    pool: "forks",
    setupFiles: ["./src/utils/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  //   https://stackoverflow.com/questions/75798479/how-can-i-solve-the-issue-of-failed-to-resolve-import-in-vitest  ????
  // to handle error "failed to resolve import in '@/...' vitest"??????????
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
});
