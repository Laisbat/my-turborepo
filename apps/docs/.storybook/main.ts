// import { createRequire } from "node:module";
// import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join, resolve } from "path";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: getAbsolutePath("@storybook/react-vite"),

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
};

export default config;

// import type { StorybookConfig } from "@storybook/react-vite";

// const require = createRequire(import.meta.url);

// const config: StorybookConfig = {
//   stories: ["../stories*/*.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     getAbsolutePath("@storybook/addon-links"),
//     getAbsolutePath("@storybook/addon-docs"),
//   ],
//   framework: {
//     name: getAbsolutePath("@storybook/react-vite"),
//     options: {},
//   },
// };

// export default config;

// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, "package.json")));
// }
