import { fireEvent, render, screen } from "@testing-library/react";
import RadioButton from "./index";

describe("RadioButton", () => {
  const options = [
    { label: "Opção 1", value: "1" },
    { label: "Opção 2", value: "2", disabled: true },
    { label: "Opção 3", value: "3" },
  ];

  it("renderiza todas as opções", () => {
    render(<RadioButton options={options} name="test-radio" />);
    expect(screen.getByLabelText("Opção 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Opção 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Opção 3")).toBeInTheDocument();
  });

  it("marca a opção correta quando value é passado", () => {
    render(<RadioButton options={options} name="test-radio" value="3" />);
    const radio = screen.getByLabelText("Opção 3") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("chama onChange quando uma opção é selecionada", () => {
    const handleChange = vi.fn();
    render(
      <RadioButton
        options={options}
        name="test-radio"
        onChange={handleChange}
      />,
    );
    fireEvent.click(screen.getByLabelText("Opção 1"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("desabilita opções corretamente", () => {
    render(<RadioButton options={options} name="test-radio" />);
    const disabledRadio = screen.getByLabelText("Opção 2") as HTMLInputElement;
    expect(disabledRadio.disabled).toBe(true);
  });

  it("passa controlProps para FormControlLabel", () => {
    render(<RadioButton options={options} name="test-radio" />);
    expect(screen.getAllByTestId("radio-label").length).toBe(options.length);
  });
});
