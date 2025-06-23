import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Stepper from './';

const steps = [
  { label: "Passo 1", editable: true },
  { label: "Passo 2", editable: false },
  { label: "Passo 3", },
  { label: "Passo 4" },
];

describe('#Stepper', () => {
  test('renderiza os labels dos passos', () => {
    render(<Stepper steps={steps} initialStep={0} />);

    steps.forEach((step) => {
      expect(screen.getByText(step.label)).toBeInTheDocument();
    });
  });

  test('navega para o próximo passo ao clicar no botão "Próximo"', () => {
    render(<Stepper steps={steps} initialStep={0} />);
    const nextButton = screen.getByRole('button', { name: /próximo/i });

    fireEvent.click(nextButton);

    expect(screen.getByText('Etapa 2 de 4')).toBeInTheDocument();
  });

  test('chama a função onFinish ao clicar em "Finalizar"', () => {
    const onFinish = vi.fn();

    render(<Stepper steps={steps} initialStep={3} onFinish={onFinish} />);
    const finishButton = screen.getByRole('button', { name: /finalizar/i });

    fireEvent.click(finishButton);

    expect(onFinish).toHaveBeenCalledTimes(1);
  });

  test("handleBack decrementa activeStep ", () => {
    render(<Stepper steps={steps} />);
    fireEvent.click(screen.getByText("Próximo"));
    const backButton = screen.getByText("Voltar");
    expect(backButton).not.toBeDisabled();
    fireEvent.click(backButton);
    expect(screen.getByText(/Etapa 1 de 4/)).toBeInTheDocument();
  });

  test("clica em step editável já concluído volta para o step", () => {
    render(<Stepper steps={steps} />);
    fireEvent.click(screen.getByText("Próximo"));
    const step1 = screen.getByText("Passo 1");
    fireEvent.click(step1);
    expect(screen.getByText(/Etapa 1 de 4/)).toBeInTheDocument();
  });
});
