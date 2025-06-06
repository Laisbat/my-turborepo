import { useTheme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { UIProvider } from "./Provider";

describe("UIProvider", () => {
  test("renders children", () => {
    render(
      <UIProvider>
        <div data-testid="child">Hello</div>
      </UIProvider>,
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Hello");
  });

  // test("renders CssBaseline", () => {
  //   // CssBaseline injects global styles, but we can check if it's in the tree
  //   const { container } = render(
  //     <UIProvider>
  //       <span>Test</span>
  //     </UIProvider>,
  //   );
  //   // CssBaseline renders a <style> tag, but we can check for its presence by component
  //   expect(container.querySelector("style")).toBeTruthy();
  // });

  test("provides theme context", () => {
    function ThemeConsumer() {
      const theme = useTheme();
      return <div data-testid="theme">{theme ? "has-theme" : "no-theme"}</div>;
    }
    render(
      <UIProvider>
        <ThemeConsumer />
      </UIProvider>,
    );
    expect(screen.getByTestId("theme")).toHaveTextContent("has-theme");
  });
});

// We recommend installing an extension to run vitest tests.
