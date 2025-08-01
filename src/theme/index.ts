import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import spacingConfig from './spacing';

const theme = createTheme({
  palette,
  typography,
  spacing: spacingConfig.spacing,
  shape: {
    borderRadius: spacingConfig.borderRadius,
  },
});

export default theme;