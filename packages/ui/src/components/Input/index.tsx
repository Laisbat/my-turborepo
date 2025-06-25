import React from 'react';
import { Box, TextField } from '@mui/material';
import type { FormattedInputProps, InputSize } from './Input.types';

const getSizeStyle = (size: InputSize = 'medium') => {
    switch (size) {
        case 'small':
            return {
                fontSize: 14,
                height: 40,
                padding: '8px',
            };
        case 'large':
            return {
                fontSize: 18,
                height: 40,
                padding: '8px',
            };
        case 'medium':
        default:
            return {
                fontSize: 16,
                height: 40,
                padding: '8px',
            };
    }
};

const FormattedInput: React.FC<FormattedInputProps> = ({
    value,
    onChange,
    format,
    placeholder,
    disabled = false,
    sx,
    width = 217,
    size = 'medium',
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const formatted = format ? format(raw) : raw;
        onChange(formatted);
    };
    const style = getSizeStyle(size);

    return (
        <Box sx={{ width, ...sx }}>
            <TextField
                fullWidth
                variant="outlined"
                value={value}
                onChange={handleChange}
                placeholder={placeholder ? placeholder : ''}
                disabled={disabled}
                inputProps={{
                    style: {
                        ...style,
                        padding: '10px 12px',
                        borderRadius: '4px',
                        border: '1px solid #9EB2B8',
                    },
                }}

            />
        </Box>
    );
};
export default FormattedInput;