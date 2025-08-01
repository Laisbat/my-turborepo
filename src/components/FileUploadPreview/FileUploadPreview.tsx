import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import Button from '../Button';
import type { FileUploadPreviewProps } from './FileUploadPreview.types';

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({ onFileChange, disabled = false, file }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.files?.[0];
        if (!selected) return;
        onFileChange?.(selected);
    };

    const handleBoxClick = () => {
        if (!disabled) fileInputRef.current?.click();
    };

    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);

            return () => URL.revokeObjectURL(url); 
        } else {
            setPreviewUrl(null);
        }
    }, [file]);

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
                justifyContent: file ? 'space-between' : 'center',
                bgcolor: '#f9f9f9',
                p: 1,
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            onClick={handleBoxClick}
        >
            <input
                ref={fileInputRef}
                type="file"
                hidden
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                disabled={disabled}
            />

            <Box
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}
            >
                {previewUrl ? (
                    file?.type === 'application/pdf' ? (
                        <embed src={previewUrl} type="application/pdf" width="100%" height="100%" />
                    ) : (
                        <Box component="img" src={previewUrl} alt={file?.name} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    )
                ) : (
                    <Button variant="contained" size="small" component="span">
                        Selecionar arquivo
                    </Button>
                )}
            </Box>

            {file && (
                <Typography variant="caption" sx={{ mt: 1, wordBreak: 'break-word', maxWidth: '100%', textAlign: 'center', pointerEvents: 'none' }}>
                    {file.name}
                </Typography>
            )}
        </Box>
    );
};

export default FileUploadPreview;
