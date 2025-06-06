/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json-summary", "lcov"],
      exclude: [
        "**/node_modules/**",
        "**/*.d.ts",
        "**/dist/**",
        "**/.eslintrc.js",
        "**/*.stories.*",
        "**/*.config.{ts,js}",
        "**/.storybook/**",
        "**/theme/**",
        "**/tests/**",
        "*/index.ts",
      ],
    },
  },
});
