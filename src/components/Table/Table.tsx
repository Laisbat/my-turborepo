import React from 'react';
import {
    Table as TableMUI,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import type { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({ columns, rows }) => {
    return (
        <TableContainer component={Paper}>
            <TableMUI>
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={col.key} align={col.align || 'left'}>
                                {col.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow
                            key={rowIndex}
                            sx={{
                                backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#f5f5f5',
                            }}
                        >
                            {columns.map((col, index) => {
                                const cellValue = row[col.key];
                                const bold = col.isBold?.(row[col.key], row, index) ?? false;
                                return (
                                    <TableCell
                                        key={col.key}
                                        align={col.align || 'left'}
                                        sx={{
                                            fontWeight: bold ? 'bold' : 'normal',
                                        }}
                                    >
                                        {cellValue}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </TableMUI>
        </TableContainer>
    );
};

export default Table