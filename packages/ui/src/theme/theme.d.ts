import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    gradients: Record<string, string>;
    opacities: {
      bg: Record<string, number>;
      text: Record<string, number>;
    };
    custom: {
      colors: Record<string, string>;
    };
  }

  interface ThemeOptions {
    gradients?: Record<string, string>;
    opacities?: {
      bg: Record<string, number>;
      text: Record<string, number>;
    };
    custom?: {
      colors: Record<string, string>;
    };
  }
}
