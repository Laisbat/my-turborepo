import type { Meta, StoryObj } from "@storybook/react";
import RadioButton  from "./index";
import { withMuiTheme } from "../../storybook/decorators/withMuiTheme";

const meta: Meta<typeof RadioButton> = {
  title: "Design System/Componentes/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  decorators: [withMuiTheme],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "gender",
    options: [
      { label: "Feminino", value: "female" },
      { label: "Masculino", value: "male" },
      { label: "Outro", value: "other" },
      { label: "Desabilitado", value: "disabled", disabled: true },
    ],
  },
};

export const Row: Story = {
  args: {
    name: "choice",
    row: true,
    options: [
      { label: "Opção A", value: "a" },
      { label: "Opção B", value: "b" },
    ],
  },
};
