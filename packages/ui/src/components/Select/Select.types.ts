import type { SxProps } from "@mui/material";
import type { InputSize } from "../Input/Input.types";

export interface SelectOption {
    label: string;
    value: string | number;
}

export interface SelectProps {
    value: string | number;
    onChange: (value: string | number) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    sx?: SxProps;
    width?: number | string;
    size?: InputSize;
}