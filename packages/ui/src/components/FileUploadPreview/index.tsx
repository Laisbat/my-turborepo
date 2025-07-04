import React, { useRef, useState } from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import Button from '../Button';

const FileUploadPreview: React.FC = () => {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileType, setFileType] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setFileType(file.type);

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
            onClick={handleBoxClick}
        >
            <input
                ref={fileInputRef}
                type="file"
                hidden
                accept="image/*,application/pdf"
                onChange={handleFileChange}
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
                {fileUrl ? (
                    fileType === 'application/pdf' ? (
                        <embed
                            src={fileUrl}
                            type="application/pdf"
                            width="100%"
                            height="100%"
                            style={{
                                border: 'none',
                                overflow: 'hidden',
                            }}
                        />
                    ) : (
                        <Box
                            component="img"
                            src={fileUrl}
                            alt={fileName || 'Preview'}
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
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
