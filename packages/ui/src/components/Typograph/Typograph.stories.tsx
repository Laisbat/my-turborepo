import { Box, Typography, Divider } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
const TypographyPreview = () => {
    const sections = [
        {
            title: 'Headings',
            variants: [
                { name: 'h1', text: 'Heading 1' },
                { name: 'h2', text: 'Heading 2' },
                { name: 'h3', text: 'Heading 3' },
                { name: 'h4', text: 'Heading 4' },
                { name: 'h5', text: 'Heading 5' },
                { name: 'h6', text: 'Heading 6' },
            ],
        },
        {
            title: 'Body Text',
            variants: [
                {
                    name: 'body1',
                    text: 'Body 1 — Texto principal com tamanho padrão',
                },
                {
                    name: 'body2',
                    text: 'Body 2 — Texto secundário com tamanho menor',
                },
            ],
        },
        {
            title: 'Subtítulos e Complementares',
            variants: [
                { name: 'subtitle1', text: 'Subtitle 1 — Destaque intermediário' },
                { name: 'subtitle2', text: 'Subtitle 2 — Subtítulo menor' },
                { name: 'caption', text: 'Caption — Legenda ou explicação auxiliar' },
                {
                    name: 'overline',
                    text: 'OVERLINE — Texto pequeno em caixa alta e espaçado',
                },
            ],
        },
    ];

    return (
        <Box p={4} maxWidth={800} mx="auto">
            <Typography variant="h4" gutterBottom>
                Tipografia — Fonte "Caixa"
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Visualização de estilos tipográficos definidos no tema personalizado.
            </Typography>

            {sections.map(({ title, variants }) => (
                <Box key={title} mt={6}>
                    <Typography variant="h6" gutterBottom color="primary">
                        {title}
                    </Typography>
                    <Divider sx={{ mb: 3 }} />

                    {variants.map(({ name, text }) => (
                        <Box key={name} mb={3}>
                            <Typography variant="caption" color="text.secondary">
                                {name}
                            </Typography>
                            <Box mt={0.5}>

                                <Typography variant={name as any}>{text}</Typography>

                            </Box>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

const meta: Meta<typeof TypographyPreview> = {
    title: 'Design System/Typography',
    component: TypographyPreview,
    tags: ["autodocs"],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'Visualização dos estilos tipográficos utilizados no projeto, incluindo títulos, corpo de texto, subtítulos e botões.',
            },
        },
    },
};

export default meta;


type Story = StoryObj<typeof TypographyPreview>;

export const Default: Story = {
    render: () => <TypographyPreview />,
    parameters: {
        docs: {},
        layout: 'fullscreen',
    },
};

