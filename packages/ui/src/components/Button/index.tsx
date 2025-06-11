import type { ButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, color = "primary", variant }) => {
  const isOutlined = variant === "outlined";
  const colorToken = theme.custom?.colors?.[`bt-${color}`];
  const outlinedColor = theme.custom?.colors?.[`bt-outlined`];

  return {
    padding: "8px 16px",
    textTransform: "none",
    fontWeight: 600,
    backgroundColor: isOutlined ? theme.palette.common.white : colorToken,
    color: isOutlined ? outlinedColor : theme.palette.common.white,
    border: isOutlined ? `1px solid ${outlinedColor}` : "none",
    "&:hover:not(.Mui-disabled)": {
      filter: "brightness(0.8)",
    },
    "&.Mui-disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto",
      backgroundColor: isOutlined ? theme.palette.common.white : colorToken,
      color: isOutlined ? outlinedColor : theme.palette.grey[400],
      border: isOutlined ? `1px solid ${theme.palette.grey[300]}` : "none",
      opacity: 0.6,
    },
  };
});

export const Button = ({
  children,
  variant = "contained",
  ...props
}: ButtonProps) => {
  return (
    <CustomButton variant={variant} {...props}>
      {children}
    </CustomButton>
  );
};

export default Button;
