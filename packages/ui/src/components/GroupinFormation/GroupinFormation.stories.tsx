import type { Meta, StoryObj } from "@storybook/react";
import GroupinFormation from ".";
import type { GroupinFormationProps } from "./GroupinFormation.types";

const meta: Meta<typeof GroupinFormation> = {
  title: "Design System/Componentes/GroupinFormation",
  component: GroupinFormation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "[Group in Formation]",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof GroupinFormation>;

export const Default: Story = {
  args: {
    isClicked: false,
  },

  render: (args: GroupinFormationProps) => <GroupinFormation {...args} />,
};
