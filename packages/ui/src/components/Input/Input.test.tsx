import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FormattedInput from '.';


describe('FormattedInput', () => {
  it('renderiza com valor inicial e placeholder', () => {
    render(
      <FormattedInput
        value="123"
        onChange={() => {}}
        placeholder="Digite algo"
      />
    );

    const input = screen.getByPlaceholderText('Digite algo') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('123');
  });

  it('chama onChange com valor formatado', () => {
    const mockOnChange = vi.fn();
    const format = (v: string) => v.toUpperCase();

    render(
      <FormattedInput
        value=""
        onChange={mockOnChange}
        format={format}
        placeholder="Digite algo"
      />
    );

    const input = screen.getByPlaceholderText('Digite algo');

    fireEvent.change(input, { target: { value: 'abc' } });

    expect(mockOnChange).toHaveBeenCalledWith('ABC');
  });

  it('usa o valor sem formatação se não tiver função format', () => {
    const mockOnChange = vi.fn();

    render(
      <FormattedInput
        value=""
        onChange={mockOnChange}
        placeholder="Sem formatador"
      />
    );

    const input = screen.getByPlaceholderText('Sem formatador');
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(mockOnChange).toHaveBeenCalledWith('xyz');
  });
});
