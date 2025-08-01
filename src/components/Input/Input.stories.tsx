import { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import FormattedInput from './Input';
import type { FormattedInputProps } from './Input.types';
import { withMuiTheme } from '../../storybook/decorators/withMuiTheme';

const meta: Meta<typeof FormattedInput> = {
    title: 'Design System/Componentes/Input',
    component: FormattedInput,
    tags: ['autodocs'],
    decorators: [withMuiTheme],
};

export default meta;

type Story = StoryObj<typeof FormattedInput>;

export const Default: Story = {
    render: (args: FormattedInputProps) => {
        const [value, setValue] = useState('');

        return (
            <Box width="100%" maxWidth={400}>
                <FormattedInput {...args} value={value} onChange={setValue} />
                <Typography variant="caption" mt={1}>
                    Valor atual: {value}
                </Typography>
            </Box>
        );
    },
    args: {
        placeholder: 'Digite algo',
        width: '100%',
    },
};

export const ComFormatoNumerico: Story = {
    render: () => {
        const [value, setValue] = useState('');

        const format = (input: string) => {
            const numbers = input.replace(/\D/g, '');
            return numbers;
        };

        return (
            <Box width="100%" maxWidth={300}>
                <FormattedInput
                    value={value}
                    onChange={setValue}
                    format={format}
                    placeholder="Somente números"
                />
                <Typography variant="caption" mt={1}>
                    Valor filtrado: {value}
                </Typography>
            </Box>
        );
    },
};
export const Tamanhos: Story = {
    render: () => {
        const [valS, setS] = useState('');
        const [valM, setM] = useState('');
        const [valL, setL] = useState('');

        return (
            <Box display="flex" flexDirection="column" gap={2} maxWidth={300}>
                <FormattedInput
                    value={valS}
                    onChange={setS}
                    placeholder="Pequeno"
                    size="small"
                />
                <FormattedInput
                    value={valM}
                    onChange={setM}
                    placeholder="Médio"
                    size="medium"
                />
                <FormattedInput
                    value={valL}
                    onChange={setL}
                    placeholder="Grande"
                    size="large"
                />
            </Box>
        );
    },
};

export const ComLarguraPersonalizada: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return (
            <Box>
                <FormattedInput
                    value={value}
                    onChange={setValue}
                    placeholder="Largura fixa"
                    width={200}
                />
            </Box>
        );
    },
};