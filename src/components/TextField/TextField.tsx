import { TextField as MuiTextField, type TextFieldProps } from '@mui/material';

const TextField = (props: TextFieldProps) => {
  return (
    <MuiTextField
      variant="outlined"
      color="primary"
      fullWidth
      {...props}
    />
  );
};

export default TextField;
