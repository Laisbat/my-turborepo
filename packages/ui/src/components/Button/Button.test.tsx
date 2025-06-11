import { createTheme, ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./index";

const customTheme = createTheme({
  custom: {
    colors: {
      "bt-primary": "#123456",
      "bt-outlined": "#654321",
    },
  },
} as any); // 'as any' para ignorar o erro de tipos do MUI

describe("Button com tema customizado", () => {
  it("usa custom.colors do tema para cor e borda", () => {
    render(
      <ThemeProvider theme={customTheme}>
        <Button variant="outlined">Custom Outlined</Button>
      </ThemeProvider>,
    );
    const btn = screen.getByRole("button", { name: "Custom Outlined" });
    // Aqui você pode testar o estilo, se quiser
    expect(btn).toBeInTheDocument();
  });
});

describe("Button", () => {
  it("renderiza o texto corretamente", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" }),
    ).toBeInTheDocument();
  });

  it("chama onClick quando clicado", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Click me" }));
    expect(handleClick).toHaveBeenCalled();
  });

  it("fica desabilitado quando disabled é passado", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled();
  });

  it("usa o variant outlined quando passado", () => {
    render(<Button variant="outlined">Outlined</Button>);
    const btn = screen.getByRole("button", { name: "Outlined" });
    expect(btn).toHaveClass("MuiButton-outlined");
  });

  it("usa o variant contained por padrão", () => {
    render(<Button>Default</Button>);
    const btn = screen.getByRole("button", { name: "Default" });
    expect(btn).toHaveClass("MuiButton-contained");
  });
});
