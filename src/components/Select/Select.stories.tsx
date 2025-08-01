import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { withMuiTheme } from '../../storybook/decorators/withMuiTheme';

const options = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' },
  { label: 'Opção 3', value: '3' },
];

const Template = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <Box width={300}>
      <Typography variant="body2" mb={1}>
        Valor selecionado: {value || 'nenhum'}
      </Typography>
      <Select {...args} value={value} onChange={setValue} />
    </Box>
  );
};

const meta : Meta<typeof Select> = {
  title: 'Design System/Componentes/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [withMuiTheme],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Template
      placeholder=".: Selecione :. "
      options={options}
      size="medium"
    />
  ),
};

export const Small: Story = {
  render: () => (
    <Template
      placeholder="Pequeno"
      options={options}
      size="small"
    />
  ),
};

export const Large: Story = {
  render: () => (
    <Template
      placeholder="Grande"
      options={options}
      size="large"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Template
      placeholder="Desativado"
      options={options}
      size="medium"
      disabled
    />
  ),
};
