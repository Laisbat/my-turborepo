import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ModalCaixaProps {
  open: boolean;
  closeIcon?: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  actions?: ReactNode;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius:
      typeof theme.shape.borderRadius === "number"
        ? theme.shape.borderRadius * 2
        : `calc(${theme.shape.borderRadius} * 2)`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[8],
  },
  "& .MuiDialogTitle-root": {
    color: theme.palette.grey[50],
    height: theme.spacing(12),
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.subtitle1.fontWeight,
    fontSize: theme.typography.h6.fontSize,
    alignContent: "center",
    paddingBottom: theme.spacing(1),
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2, 3),
    color: theme.palette.text.primary,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
  },
}));

const ModalCaixa = ({
  open,
  closeIcon = false,
  onClose,
  title,
  children,
  actions,
}: ModalCaixaProps) => {
  return (
    <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {title && <DialogTitle>{title}</DialogTitle>}
      {closeIcon && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 24,
            color: theme.palette.grey[50],
          })}
        >
          <CloseIcon />
        </IconButton>
      )}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </StyledDialog>
  );
};

export default ModalCaixa;
