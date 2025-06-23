/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "UIComponents",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Evita incluir essas libs no bundle
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
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
        "**/*.types.ts",
        "**/assets/**",
      ],
    },
  },
});
