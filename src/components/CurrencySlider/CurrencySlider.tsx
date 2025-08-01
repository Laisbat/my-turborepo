import React from 'react';
import { Box, Slider, Typography } from '@mui/material';
import type { CurrencySliderProps } from './CurrencySliderProps.types';
import { numberFormater, numberForMoney } from '../../utils/formatter';

const CurrencySlider: React.FC<CurrencySliderProps> = ({
    value = 0,
    onChange,
    valueFormat = 'money',
    min = 0,
    max = 10000,
    step = 100,
    disabled = false,
}) => {
    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            onChange(newValue);
        } else if (Array.isArray(newValue) && newValue.length > 0) {
            onChange(Number(newValue[0]));
        }
    };

    return (

        <Box width={300} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap:2 }}>
            <Slider
                value={value}
                onChange={handleSliderChange}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
            />
            <Typography sx={{ color: '#005CA9', textAlign: 'right', fontWeight: 'bold', fontSize: 20 }} variant="body2">
                {valueFormat == 'money' ? numberForMoney(value) : numberFormater(value)}
            </Typography>
        </Box>
    );
};

export default CurrencySlider;
