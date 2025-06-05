import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { Button } from "./index";

describe("Button", () => {
  test("renders with children", () => {
    render(<Button>Test</Button>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
