import type { Preview } from "@storybook/react-vite";
import { UIProvider } from "../../../packages/ui/src/Provider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <UIProvider>
        <Story />
      </UIProvider>
    ),
  ],
};

export default preview;
