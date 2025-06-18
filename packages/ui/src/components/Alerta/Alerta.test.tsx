import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alerta } from "./index";

describe("#Alerta", () => {
  it("renderiza children", () => {
    render(<Alerta>Test Alert</Alerta>);
    expect(screen.getByText("Test Alert")).toBeInTheDocument();
  });

  it("renderiza ícone de sucesso por default", () => {
    render(<Alerta>Success</Alerta>);
    expect(screen.getByTestId("CheckCircleIcon")).toBeInTheDocument();
  });

  it("renderiza ícone de error  quando a severidade é erro", () => {
    render(<Alerta severity="error">Error</Alerta>);
    expect(screen.getByTestId("ErrorIcon")).toBeInTheDocument();
  });

  it("renderiza ícone de warning quando a severidade é warning", () => {
    render(<Alerta severity="warning">Warning</Alerta>);
    expect(screen.getByTestId("WarningIcon")).toBeInTheDocument();
  });

  it("renderiza ícone de info quando a severidade é info", () => {
    render(<Alerta severity="info">Info</Alerta>);
    expect(screen.getByTestId("InfoIcon")).toBeInTheDocument();
  });

  it("configura o filled", () => {
    render(<Alerta variant="filled">Filled Variant</Alerta>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("MuiAlert-filled");
  });

  it("passa custom-props para o componente", () => {
    render(<Alerta data-testid="custom-alert">Custom</Alerta>);
    expect(screen.getByTestId("custom-alert")).toBeInTheDocument();
  });
});
