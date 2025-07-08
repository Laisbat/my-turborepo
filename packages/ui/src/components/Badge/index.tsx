import React from 'react';
import {
    Badge as MuiBadge,
} from '@mui/material';
import type { CustomBadgeProps } from './Badge.types';



const Badge: React.FC<CustomBadgeProps> = ({
    content,
    color = 'primary',
    max = 0,
    invisible = false,
    showZero = false,
    children,
    ...props
}) => {
    return (
        <MuiBadge
            badgeContent={content}
            color={color}
            max={max}
            invisible={invisible}
            showZero={showZero}
            {...props}
        >
            {children}
        </MuiBadge>
    );
};

export default Badge;
