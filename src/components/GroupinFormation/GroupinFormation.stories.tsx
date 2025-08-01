import type { Meta, StoryObj } from "@storybook/react";
import GroupinFormation from "./GroupinFormation";
import type { GroupinFormationProps } from "./GroupinFormation.types";
import IconeContrato from "../../assets/icons/IconeContrato";
import { withMuiTheme } from "../../storybook/decorators/withMuiTheme";

const meta: Meta<typeof GroupinFormation> = {
  title: "Design System/Componentes/GroupinFormation",
  component: GroupinFormation,
  tags: ["autodocs"],
  decorators: [withMuiTheme],
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
    parcelValues: 387.2,
    iconPromo: <IconeContrato/>
  },

  render: (args: GroupinFormationProps) => <GroupinFormation {...args} />,
};
