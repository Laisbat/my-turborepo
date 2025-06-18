import { Stack } from "@mui/material";
import type { AlertProps } from "@mui/material/Alert";
import type { Meta, StoryObj } from "@storybook/react";
import { Alerta } from "./index";

const meta: Meta<typeof Alerta> = {
  title: "Componentes/Alerta",
  component: Alerta,
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Este  é um componente de alerta simples  que pode ser usado para exibir mensagens para o usuário. Ele suporta níveis de severidade como sucesso, erro, aviso e informação.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alerta>;

export const Default: Story = {
  args: {
    children: "Este é um alerta de sucesso",
    severity: "success",
  },
  render: (args: AlertProps) => (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alerta {...args} />
    </Stack>
  ),
};

export const Error: Story = {
  args: {
    children: "This is an error alert",
    severity: "error",
    variant: "filled",
  },
  render: (args: AlertProps) => (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alerta {...args} variant="filled" />
    </Stack>
  ),
};

export const Warning: Story = {
  args: {
    children: "This is a warning alert",
    severity: "warning",
  },
  render: (args: AlertProps) => (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alerta {...args} variant="outlined" />
    </Stack>
  ),
};

export const Info: Story = {
  args: {
    children: "This is an info alert",
    severity: "info",
  },
  render: (args: AlertProps) => (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alerta {...args} variant="standard" />
    </Stack>
  ),
};
