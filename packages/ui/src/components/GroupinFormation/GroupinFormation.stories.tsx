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
    isDisabledButton: false,
    numberMaxQtd: 3,
    creditValue: 49900.33,
    parcelValues: 387.2
  },

  render: (args: GroupinFormationProps) => <GroupinFormation {...args} />,
};
