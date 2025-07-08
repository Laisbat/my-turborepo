import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import CurrencySlider from './';

const meta: Meta<typeof CurrencySlider> = {
  title: 'Design System/Componentes/CurrencySlider',
  component: CurrencySlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider com valor em reais formatado.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CurrencySlider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(3000);
    return (
      <CurrencySlider
        value={value}
        valueFormat='money'
        onChange={setValue}
        min={0}
        max={10000}
        step={100}
      />
    );
  },
};
