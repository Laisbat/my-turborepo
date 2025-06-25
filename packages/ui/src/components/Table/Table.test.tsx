
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import type { Column } from './Table.types';
import { Table } from '.';

const columns: Column[] = [
    { label: 'Nome', key: 'name' },
    {
        label: 'Idade',
        key: 'age',
        isBold: (value) => value >= 30,
    },
    {
        label: 'Cidade',
        key: 'city',
        isBold: (value) => value === 'Curitiba',
    },
];

const rows = [
    { name: 'Ana', age: 28, city: 'Curitiba' },
    { name: 'Carlos', age: 35, city: 'São Paulo' },
];

describe('SimpleTable', () => {
    it('renderiza cabeçalhos corretamente', () => {
        render(<Table columns={columns} rows={rows} />);

        expect(screen.getByText('Nome')).toBeInTheDocument();
        expect(screen.getByText('Idade')).toBeInTheDocument();
        expect(screen.getByText('Cidade')).toBeInTheDocument();
    });

    // it('renderiza os dados corretamente', () => {
    //     expect(screen.getByText('Ana')).toBeInTheDocument();
    //     expect(screen.getByText('28')).toBeInTheDocument();
    //     expect(screen.getByText('Curitiba')).toBeInTheDocument();
    // });

    it('aplica negrito nas células corretas', () => {
        render(<Table columns={columns} rows={rows} />);

        const boldAge = screen.getByText('35');
        expect(boldAge).toHaveStyle('font-weight: 700');

        const normalAge = screen.getByText('28');
        expect(normalAge).not.toHaveStyle('font-weight: 700');

        const boldCity = screen.getByText('Curitiba');
        expect(boldCity).toHaveStyle('font-weight: 700');
    });
});
