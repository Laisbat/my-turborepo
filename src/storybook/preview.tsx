import type { Preview } from '@storybook/react';
import { withMuiTheme } from './decorators/withMuiTheme';

const preview: Preview = {
  decorators: [withMuiTheme],
};

export default preview;
