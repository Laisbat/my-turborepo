import storybookConfig from "@repo/eslint-config/storybook.js";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  ...storybookConfig,
  {
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    ignores: ["dist", "node_modules"],
  },
];
