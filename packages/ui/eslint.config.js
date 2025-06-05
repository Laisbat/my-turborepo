import eslintPluginReact from "@repo/eslint-config/react.js";

/** @type {import("eslint").FlatConfig[]} */
export default [
  ...eslintPluginReact,
  {
    ignores: ["dist", "node_modules"],
  },
];