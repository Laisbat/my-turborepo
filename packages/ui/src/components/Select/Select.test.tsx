import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Select from '.';

describe('Select', () => {
  const options = [
    { label: 'Primeiro', value: '1' },
    { label: 'Segundo', value: '2' },
  ];

  it('exibe o placeholder', () => {
    render(
      <Select
        value=""
        onChange={() => {}}
        options={options}
        placeholder="Escolha uma opção"
      />
    );
    expect(screen.getByText(/Escolha uma opção/i)).toBeInTheDocument();
  });

  it('chama onChange ao selecionar uma opção', () => {
    const handleChange = vi.fn();
    render(
      <Select
        value=""
        onChange={handleChange}
        options={options}
        placeholder="Selecione"
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    
    console.log(screen);
    const item = screen.getByText('Primeiro');
    fireEvent.click(item);

    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('exibe valor selecionado corretamente', () => {
    render(
      <Select
        value="2"
        onChange={() => {}}
        options={options}
        placeholder="Selecione"
      />
    );

    expect(screen.getByText('Segundo')).toBeInTheDocument();
  });
});
