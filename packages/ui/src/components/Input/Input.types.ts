
import { type SxProps, type Theme } from '@mui/material';

export type InputSize = 'small' | 'medium' | 'large';
export interface FormattedInputProps {
    value: string;
    onChange: (value: string) => void;
    format?: (input: string) => string;
    placeholder?: string;
    disabled?: boolean;
    sx?: SxProps<Theme>;
    width?: number | string;
    size?: InputSize;
}