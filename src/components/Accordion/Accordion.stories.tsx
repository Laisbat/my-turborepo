import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';
import Accordion from './Accordion';
import { withMuiTheme } from '../../storybook/decorators/withMuiTheme';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Componentes/Accordion',
  component: Accordion,
  decorators: [withMuiTheme],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Accordion para exibir conteúdo colapsável.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultExpandedIndex: 0,
    items: [
      {
        title: 'Introdução',
        content: <Typography variant="body2">Conteúdo da introdução.</Typography>,
      },
      {
        title: 'Detalhes',
        content: (
          <Typography variant="body2">
            Aqui estão mais detalhes importantes sobre este tópico.
          </Typography>
        ),
      },
    ],
  },
};
