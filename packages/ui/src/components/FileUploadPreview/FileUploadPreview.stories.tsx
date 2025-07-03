import type { Meta, StoryObj } from '@storybook/react';
import FileUploadPreview from './';

const meta: Meta<typeof FileUploadPreview> = {
    title: 'Design System/Componentes/FileUploadPreview',
    component: FileUploadPreview,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Um preview de um arquivo para upload.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof FileUploadPreview>;
export const Default: Story = {
    args: {},

    render: () => <FileUploadPreview />,
};
