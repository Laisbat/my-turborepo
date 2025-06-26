
import { Box, Typography, useTheme } from '@mui/material';
import type { ColorGroup } from './Colors.types';


const ColorBox = ({
  name,
  color,
  isGradient = false,
}: {
  name: string;
  color: string;
  isGradient?: boolean;
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      mb: 2,
    }}
  >
    <Box
      sx={{
        width: 60,
        height: 60,
        background: isGradient ? color : undefined,
        backgroundColor: isGradient ? undefined : color,
        borderRadius: 1,
        border: '1px solid #ccc',
        flexShrink: 0,
      }}
    />
    <Box>
      <Typography variant="body2" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="caption">{color}</Typography>
    </Box>
  </Box>
);

const renderColorGroup = (group: ColorGroup) => (
  <Box key={group.title} mb={6}>
    <Typography variant="h5" mb={2}>
      {group.title}
    </Typography>
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={4}
    >
      {Object.entries(group.colors).map(([name, color]) => (
        <ColorBox
          key={name}
          name={name}
          color={color}
          isGradient={group.isGradient || false}
        />
      ))}
    </Box>
  </Box>
);

const ColorPalette = () => {
  const theme = useTheme();

  const paletteColors: ColorGroup[] = [
    {
      title: 'Cores Primárias',
      colors: {
        primary: theme.palette.primary.main,
        'primary.light': theme.palette.primary.light,
        'primary.dark': theme.palette.primary.dark,
      },
    },
    {
      title: 'Cores Secundárias',
      colors: {
        secondary: theme.palette.secondary.main,
        'secondary.light': theme.palette.secondary.light,
        'secondary.dark': theme.palette.secondary.dark,
      },
    },
    {
      title: 'Sucesso / Erro / Aviso / Info',
      colors: {
        success: theme.palette.success.main,
        'success.light': theme.palette.success.light,
        'success.dark': theme.palette.success.dark,
        error: theme.palette.error.main,
        'error.light': theme.palette.error.light,
        'error.dark': theme.palette.error.dark,
        warning: theme.palette.warning.main,
        'warning.light': theme.palette.warning.light,
        'warning.dark': theme.palette.warning.dark,
        info: theme.palette.info.main,
        'info.light': theme.palette.info.light,
        'info.dark': theme.palette.info.dark,
      },
    },
    {
      title: 'Cinzas (Grey)',
      colors: Object.fromEntries(
        Object.entries(theme.palette.grey).filter(
          ([, value]) => typeof value === 'string'
        )
      ),
    },
    {
      title: 'Backgrounds',
      colors: {
        backgroundDefault: theme.palette.background.default,
        backgroundPaper: theme.palette.background.paper,
      },
    },
    {
      title: 'Cores Customizadas (custom.colors)',
      colors: theme.custom?.colors ?? {},
    },
    // {
    //   title: 'Gradientes',
    //   colors: theme.gradients ?? {},
    //   isGradient: true,
    // },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" mb={4}>
        Paleta de Cores do Tema
      </Typography>
      {paletteColors.map(renderColorGroup)}
    </Box>
  );
};

export default ColorPalette;
