import type { Meta, StoryObj } from '@storybook/react';
import Table  from './Table';
import type { Column } from './Table.types';
import { withMuiTheme } from '../../storybook/decorators/withMuiTheme';

const meta: Meta<typeof Table> = {
  title: 'Design System/Componentes/Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [withMuiTheme],
  parameters: {
    docs: {
      description: {
        component:
          'O componente Table é utilizado para exibir dados tabulares de forma organizada. Ele suporta colunas com alinhamento personalizado, células com conteúdo dinâmico e a possibilidade de destacar células com base em condições específicas.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns: Column[] = [
  { label: 'Nome', key: 'name' },
  {
    label: 'Idade',
    key: 'age',
    align: 'center',
    isBold: (value: string) => value >= '30',
  },
  {
    label: 'Cidade',
    key: 'city',
    isBold: (value: string) => value === 'Curitiba',
  },
];

const rows = [
  { name: 'João', age: 30, city: 'São Paulo' },
  { name: 'Maria', age: 25, city: 'Rio de Janeiro' },
  { name: 'Carlos', age: 35, city: 'Belo Horizonte' },
  { name: 'Ana', age: 28, city: 'Curitiba' },
];

export const Default: Story = {
  args: {
    columns: columns.map((a) => ({...a, isBold: () => false})),
    rows: rows,
  },
};

export const CelulasNegritoCondicional: Story = {
  args: {
    columns,
    rows,
  },
};
