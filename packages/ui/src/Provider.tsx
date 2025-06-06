import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { baseTheme } from "./theme";

type UIProviderProps = {
  children: React.ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps) => (
  <ThemeProvider theme={baseTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
