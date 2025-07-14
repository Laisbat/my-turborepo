import { createTheme } from "@mui/material/styles";
import CaixaBoldWoff2 from "../assets/fonts/CAIXAStd-Bold.woff2";
import CaixaBoldItalicWoff2 from "../assets/fonts/CAIXAStd-BoldItalic.woff2";
import CaixaBookWoff2 from "../assets/fonts/CAIXAStd-Book.woff2";
import CaixaBookItalicWoff2 from "../assets/fonts/CAIXAStd-BookItalic.woff2";
import CaixaExtraBoldWoff2 from "../assets/fonts/CAIXAStd-ExtraBold.woff2";
import CaixaExtraBoldItalicWoff2 from "../assets/fonts/CAIXAStd-ExtraBoldItalic.woff2";
import CaixaItalicWoff2 from "../assets/fonts/CAIXAStd-Italic.woff2";
import CaixaLightWoff2 from "../assets/fonts/CAIXAStd-Light.woff2";
import CaixaLightItalicWoff2 from "../assets/fonts/CAIXAStd-LightItalic.woff2";
import CaixaRegularWoff2 from "../assets/fonts/CAIXAStd-Regular.woff2";
import CaixaSemiBoldWoff2 from "../assets/fonts/CAIXAStd-SemiBold.woff2";
import CaixaSemiBoldItalicWoff2 from "../assets/fonts/CAIXAStd-SemiBoldItalic.woff2";

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
      colors?: Record<string, string>;
    };
  }
}

export const baseTheme = createTheme({
  typography: {
    subtitle1: {
      fontWeight: 600,
    },
    fontFamily: "Caixa, sans-serif, Arial",
    h1: { fontSize: "2.5rem" }, // 40px
    h2: { fontSize: "2rem" }, // 32px
    h3: { fontSize: "1.75rem" }, // 28px
    h4: { fontSize: "1.5rem" }, // 24px
    h5: { fontSize: "1.25rem" }, // 20px
    h6: { fontSize: "1rem" }, // 16px
    body1: { fontSize: "0.875rem" }, // 14px
    body2: { fontSize: "0.812rem" }, // 13px
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: ` 
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-Light'), url(${CaixaLightWoff2}) format("woff2");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-LightItalic'), url(${CaixaLightItalicWoff2}) format("woff2");
          font-weight: 300;
          font-style: italic;
          font-display: swap; 
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-Book'), url(${CaixaBookWoff2}) format("woff2");
          font-weight: 350;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-BookItalic'), url(${CaixaBookItalicWoff2}) format("woff2");
          font-weight: 350;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-Regular'), url(${CaixaRegularWoff2}) format("woff2");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-Italic'), url(${CaixaItalicWoff2}) format("woff2");
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-SemiBold'), url(${CaixaSemiBoldWoff2}) format("woff2");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-SemiBoldItalic'), url(${CaixaSemiBoldItalicWoff2}) format("woff2");
          font-weight: 600;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-Bold'), url(${CaixaBoldWoff2}) format("woff2");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-BoldItalic'), url(${CaixaBoldItalicWoff2}) format("woff2");
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-ExtraBold'), url(${CaixaExtraBoldWoff2}) format("woff2");
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Caixa";
          src: local('Caixa'), local('Caixa-ExtraBoldItalic'), url(${CaixaExtraBoldItalicWoff2}) format("woff2");
          font-weight: 800;
          font-style: italic;
          font-display: swap;
        }

      `,
    },
  },
  palette: {
    primary: {
      main: "#005CA9", 
      light: "#0077DB",
      dark: "#004075",
    },
    secondary: {
      main: "#D87B00",
      light: "#FFA829",
      dark: "#C27300",
    },
    success: {
      main: "#0D581C",
      light: "#00B273",
      dark: "#004D31",
    },
    error: {
      main: "#B22C2C",
      light: "#C20000",
      dark: "#5C0000",
    },
    warning: {
      main: "#FFD000",
      light: "#FFD933",
      dark: "#CCA600",
    },
    info: {
      main: "#038299",
      light: "#194DD1",
      dark: "#0E2B76",
    },
    background: {
      default: "#F9FBFB",
      paper: "#F6F9F9",
    },
    grey: {
      50: "#FFFFFF",
      100: "#EFF4F5",
      200: "#D0E0E3",
      300: "#AFCACF",
      400: "#8FB5BC",
      500: "#3A4859",
      600: "#4E6178",
      700: "#637A97",
      800: "#22292E",
      900: "#12161C",
    },
  },
  custom: {
    colors: {
      "bt-primary": "#D87B00", 
      "bt-secondary": "#005CA9",
      "bt-error": "#B22C2C",
      "bt-outlined": "#005CA9",
      neutral: "#FFFFFF",
      "primary-lighter": "#0F92FF",
      "primary-highlight": "#005CA9",
      "primary-darker": "#002442",
      "secondary-lighter": "#FFBD5C",
      "secondary-darker": "#8F5500",
      turquesa: "#54BBAB",
      "turquesa-light": "#78C9BD",
      "turquesa-lighter": "#9CD8CF",
      "turquesa-dark": "#3E9D8E",
      "turquesa-darker": "#30786D",
      "success-lighter": "#00E594",
      "success-darker": "#001A10",
      "error-lighter": "#F50000",
      "error-darker": "#290000",
      "info-lighter": "#3768E7",
      "info-darker": "#091B49",
      "warning-lighter": "#FFE366",
      "warning-darker": "#997D00",
      limao: "#B2CB0B",
      "limao-light": "#D6F217",
      "limao-lighter": "#DEF547",
      "limao-dark": "#889B08",
      "limao-darker": "#5D6A06",
      goiaba: "#EF755D",
      "goiaba-light": "#F49C8B",
      "goiaba-lighter": "#F8C4B9",
      "goiaba-dark": "#EA4D2E",
      "goiaba-darker": "#D13415",
      ceu: "#00B4E6",
      "ceu-light": "#1ACDFF",
      "ceu-lighter": "#4DD8FF",
      "ceu-dark": "#008CB2",
      "ceu-darker": "#006480",
      tangerina: "#FAAF00",
      "tangerina-light": "#FFC02E",
      "tangerina-lighter": "#FFD061",
      "tangerina-dark": "#C78B00",
      "tangerina-darker": "#946800",
      uva: "#B2709B",
      "uva-light": "#C492B3",
      "uva-lighter": "#D6B3CA",
      "uva-dark": "#9C5483",
      "uva-darker": "#7B4267",
      porcelana: "#F9FBFB",
      polar: "#F6F9F9",
      placeholder: "#999999",
    },
  },
  gradients: {
    oceano: "linear-gradient(90deg, #005CA9 70%, #54BBAB 100%)",
    gelo: "linear-gradient(90deg, #FFFFFF 70%, #D0E0E3 100%)",
    tangerina: "linear-gradient(90deg, #005CA9 40%, #54BBAB 70%, #FAAF00 100%)",
    limao: "linear-gradient(90deg, #005CA9 40%, #54BBAB 70%, #B2CB0B 100%)",
    ceu: "linear-gradient(90deg, #005CA9 40%, #54BBAB 70%, #00B4E6 100%)",
    uva: "linear-gradient(90deg, #005CA9 40%, #54BBAB 70%, #B2709B 100%)",
    goiaba: "linear-gradient(90deg, #005CA9 40%, #54BBAB 70%, #EF755D 100%)",
    verao: "linear-gradient(90deg, #54BBAB 70%, #FAAF00 100%)",
    outono: "linear-gradient(90deg, #54BBAB 70%, #EF755D 100%)",
    agua: "linear-gradient(90deg, #54BBAB 70%, #00B4E6 100%)",
    primavera: "linear-gradient(90deg, #54BBAB 70%, #B2709B 100%)",
    inverno: "linear-gradient(90deg, #54BBAB 70%, #B2CB0B 100%)",
  },
  opacities: {
    bg: {
      "1": 0.64,
      "2": 0.4,
      "3": 0.24,
    },
    text: {
      "1": 0.72,
      "2": 0.56,
      "3": 0.32,
    },
  },
  shape: {
    borderRadius: 4,
  },
});
