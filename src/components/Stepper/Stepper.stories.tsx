import type { Meta, StoryObj } from "@storybook/react";
import Stepper from "./";
import { withMuiTheme } from "../../storybook/decorators/withMuiTheme";

const meta: Meta<typeof Stepper> = {
  title: "Design System/Componentes/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  decorators: [withMuiTheme],
  parameters: {
    docs: {
      description: {
        component:
          "O componente Stepper é utilizado para guiar o usuário através de um processo sequencial, como formulários ou fluxos de trabalho. Ele permite a navegação entre etapas, com a opção de editar etapas anteriores.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Passo 1", editable: true },
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
