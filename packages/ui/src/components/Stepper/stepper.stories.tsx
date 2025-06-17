import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './';

// import type { CustomStepperProps } from './stepper.types';

const meta: Meta<typeof Stepper> = {
    title: 'Components/Stepper',
    component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const steps = [
    { label: 'Passo 1' },
    { label: 'Passo 2' },
    { label: 'Passo 3' },
    { label: 'Passo 4' },
];

export const Default: Story = {
    args: {
        steps,
        initialStep: 0,
        onFinish: () => alert('submit com opção de sucesso'),
    },
};
