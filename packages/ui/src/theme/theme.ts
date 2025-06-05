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

export const baseTheme = createTheme({
  typography: {
    fontFamily: "Caixa, sans-serif, Arial",
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
      main: "#197600",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
