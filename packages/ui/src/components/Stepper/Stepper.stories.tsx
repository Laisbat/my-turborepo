import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./";

const meta: Meta<typeof Stepper> = {
  title: "Componentes/Stepper",
  component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Passo 1" , editable: true},
  { label: "Passo 2", editable: true },
  { label: "Passo 3", },
  { label: "Passo 4" },
];

export const Default: Story = {
  args: {
    steps,
    initialStep: 0,
    onFinish: () => alert("submit com opção de sucesso"),
  },
};
