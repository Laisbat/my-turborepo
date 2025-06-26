import React from 'react';
import {
  Box,
  MenuItem,
  Select as SelectMUI,
  type SelectChangeEvent,
} from '@mui/material';
import type { InputSize } from '../Input/Input.types';
import type { SelectProps } from './Select.types';



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

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  sx,
  width = 217,
  size = 'medium',
}) => {
  const style = getSizeStyle(size);

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ width, ...sx }}>
      <SelectMUI
        fullWidth
        value={value}
        onChange={handleChange}
        displayEmpty
        disabled={disabled}
        renderValue={(selected) => {
          if (!selected && placeholder) return <em>{placeholder}</em>;
          const selectedOption = options.find((opt) => opt.value === selected);
          return selectedOption?.label || '';
        }}
        sx={{
          ...style,
          border: '1px solid #9EB2B8',
          borderRadius: '4px',
          '& .MuiSelect-select': {
            padding: '10px 12px',
          },
        }}
      >
        {placeholder && (
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMUI>
    </Box>
  );
};

export default Select;
