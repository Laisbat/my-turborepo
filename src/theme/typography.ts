import type { Theme } from '@mui/material/styles';

const typography: Partial<Theme['typography']> = {
    fontFamily: "Caixa, sans-serif, Arial",
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.75rem" },
    h4: { fontSize: "1.5rem" },
    h5: { fontSize: "1.25rem" },
    h6: { fontSize: "1rem" },
    body1: { fontSize: "0.875rem" },
    body2: { fontSize: "0.812rem" },
    button: { textTransform: 'none', fontWeight: 500 },
    subtitle1: {fontWeight: 600},
};

export default typography;
