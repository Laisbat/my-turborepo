import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import FileUploadPreview from './index';
import { Box, Typography } from '@mui/material';

const meta: Meta<typeof FileUploadPreview> = {
  title: 'Design System/Componentes/FileUploadPreview',
  component: FileUploadPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente para upload de arquivos com visualização de imagem ou PDF.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUploadPreview>;

export const Default: Story = {
  render: () => <FileUploadPreview />,
};

export const Controlled: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);

    return (
      <Box>
        <FileUploadPreview file={file} onFileChange={setFile} />
        {file && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            Arquivo selecionado: <strong>{file.name}</strong>
          </Typography>
        )}
      </Box>
    );
  },
};
