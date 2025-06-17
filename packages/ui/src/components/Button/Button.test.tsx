import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import { baseTheme } from "../../theme";
import { Button } from "./index";

describe("#Button com tema customizado", () => {
  it("usa custom.colors do tema para cor e borda", () => {
    render(
      <ThemeProvider theme={baseTheme}>
        <Button variant="outlined">Custom Outlined</Button>
      </ThemeProvider>,
    );
    const btn = screen.getByRole("button", { name: "Custom Outlined" });

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("MuiButton-outlined");
    expect(btn).toHaveStyle({
      backgroundColor: baseTheme.palette.common.white,
      color: baseTheme.custom?.colors?.["bt-outlined"],
      border: `1px solid ${baseTheme.custom?.colors?.["bt-outlined"]}`,
    });
  });
});

describe("#Button", () => {
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
