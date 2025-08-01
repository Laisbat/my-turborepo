import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { withMuiTheme } from "../../storybook/decorators/withMuiTheme";

const meta: Meta<typeof Button> = {
  title: "Design System/Componentes/Botoes",
  component: Button,
   decorators: [withMuiTheme],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Um simples botao que pode ser usado em vários contextos.",
      },
    },
  },

  argTypes: {
    children: {
      control: { type: "text" },
      description: "Texto ou conteúdo do botão.",
    },
    type: {
      control: { type: "text" },
      options: ["button", "submit", "reset"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "info", "success"],
      description: "Define a cor do botão.",
    },
    variant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
      description: "Define o estilo visual do botão.",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Define o tamanho do botão.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

// Story for primary button
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      {props.children}
    </Button>
  ),
  name: "Primary",
  args: {
    children: "Avançar",
    color: "primary",
    size: "medium",
    disabled: false,
    type: "button",
  },
};

// Story for secondary button
export const Secondary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    />
  ),
  name: " Secondary",
  args: {
    children: "Prosseguir",
    color: "secondary",
    size: "medium",
    disabled: false,
    type: "button",
  },
};

export const Danger: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    />
  ),
  name: "Danger",
  args: {
    children: "Prosseguir",
    color: "error",
    size: "medium",
    disabled: false,
    type: "button",
  },
};

// Outlined Button Story
export const Outlined: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    />
  ),
  args: {
    children: "Voltar",
    size: "medium",
    disabled: false,
    type: "button",
    variant: "outlined",
  },
};
