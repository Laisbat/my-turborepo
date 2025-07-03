import React, { useRef, useState } from 'react';
import {
    Box,
    Button,
    Typography,
} from '@mui/material';

const FileUploadPreview: React.FC = () => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        const url = URL.createObjectURL(file);
        setFileUrl(url);
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Box
            sx={{
                width: 254,
                height: 293,
                border: '1px solid #ccc',
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: fileUrl ? 'space-between' : 'center',
                bgcolor: '#f9f9f9',
                p: 1,
                cursor: 'pointer',
            }}
            onClick={handleBoxClick}>
            <input ref={fileInputRef} type="file" hidden onChange={handleFileChange} />

            <Box
                sx={{
                    flexGrow: 1, width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', pointerEvents: 'none',
                }}
            >
                {fileUrl ? (
                    fileUrl.endsWith('.pdf') ? (
                        <iframe
                            src={fileUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        />
                    ) : (
                        <img
                            src={fileUrl}
                            alt={fileName || 'Preview'}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                    )
                ) : (
                    <Button variant="contained" size="small" component="span">
                        Selecionar arquivo
                    </Button>
                )}
            </Box>

            {fileUrl && fileName && (
                <Typography
                    variant="caption"
                    sx={{
                        mt: 1,
                        wordBreak: 'break-word',
                        maxWidth: '100%',
                        textAlign: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    {fileName}
                </Typography>
            )}
        </Box>
    );
};

export default FileUploadPreview;
