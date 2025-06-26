import type { Meta, StoryObj } from '@storybook/react';
import ColorPalette from '.';

const meta: Meta<typeof ColorPalette> = {
    title: 'Design System/Cores',
    component: ColorPalette,
    tags: ["autodocs"],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Uma visualização da paleta de cores do sistema, incluindo todas as cores e seus respectivos valores hexadecimais.',
            },
        },
    },
};
export default meta;

export const Default: StoryObj<typeof ColorPalette> = {
    render: () => <ColorPalette />,
};
