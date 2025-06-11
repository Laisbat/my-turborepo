import type { FormControlLabelProps, RadioGroupProps } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface GenericRadioGroupProps extends RadioGroupProps {
  options: Option[];
  name: string;
  controlProps?: Partial<FormControlLabelProps>;
}

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
  },
  "& .Mui-disabled": {
    color: theme.palette.grey[400],
  },
}));

export const RadioButton = ({
  options,
  name,
  controlProps,
  ...props
}: GenericRadioGroupProps) => {
  return (
    <StyledRadioGroup name={name} {...props}>
      {options.map(({ label, value, disabled = false }) => (
        <FormControlLabel
          key={value}
          value={value}
          control={<Radio />}
          label={label}
          disabled={!!disabled}
          data-testid="radio-label"
          {...controlProps}
        />
      ))}
    </StyledRadioGroup>
  );
};

export default RadioButton;
