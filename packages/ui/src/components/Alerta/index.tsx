import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import type { AlertProps } from "@mui/material/Alert";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

export const Alerta = ({
  children,
  severity = "success",
  variant = "standard",
  ...props
}: AlertProps) => {
  const theme = useTheme();
  const iconColor = theme.palette[severity]?.main;

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        variant={variant}
        iconMapping={{
          success: <CheckCircleIcon htmlColor={iconColor} />,
          error: <ErrorIcon htmlColor={iconColor} />,
          warning: <WarningIcon htmlColor={iconColor} />,
          info: <InfoIcon htmlColor={iconColor} />,
        }}
        severity={severity}
        sx={(theme) => ({
          backgroundColor: {
            filled: iconColor,
            outlined: theme.palette?.grey?.[100],
            standard: theme.palette?.grey?.[50],
          }[variant || "filled"],
          borderLeft: `12px solid ${theme.palette[severity]?.main} !important`,
          boxShadow: "none",
          color: theme.palette?.grey?.[800],
          border: `2px solid ${theme.palette[severity]?.main}`,
          fontSize: theme.typography.body1.fontSize,
        })}
        {...props}
      >
        {children}
      </Alert>
    </Stack>
  );
};
