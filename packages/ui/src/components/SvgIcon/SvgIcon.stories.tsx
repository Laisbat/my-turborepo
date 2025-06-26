import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon from ".";
import IconeAeronaveLado from "../../assets/icons/IconeAeronaveLado";
import IconeEmbarcacaoLado from "../../assets/icons/IconeEmbarcacaoLado";

const meta: Meta<typeof SvgIcon> = {
  title: "Design System/Componentes/SvgIcon",
  component: SvgIcon,
  args: {
    icon: <IconeEmbarcacaoLado />,
    color: "currentColor",
    size: 30,
  },
  argTypes: {
    color: { control: "color" },
    size: { control: "number" },
  },
};
export default meta;

type Story = StoryObj<typeof SvgIcon>;

export const Default: Story = {
  args: {
    icon: <IconeEmbarcacaoLado />,
    color: "#d737d0",
  },
};

export const CustomColor: Story = {
  args: {
    icon: <IconeEmbarcacaoLado />,
    color: "#005ca9",
  },
};

export const CustomSize: Story = {
  args: {
    icon: <IconeAeronaveLado />,
    size: 80,
  },
};
