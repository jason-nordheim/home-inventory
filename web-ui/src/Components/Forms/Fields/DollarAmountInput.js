import React from "react";
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from "@material-ui/core";

const DollarAmountInput = ({
  value,
  setValue,
  error,
  onChange,
  required = true,
  disabled = false,
  id="amount", 
  label="Amount", 
  variant = "outlined",
}) => {
  return (
    <FormControl variant={variant} size="small">
      <InputLabel className="dollarAmountInput__label" variant={variant} htmlFor={id} >
        {label}
      </InputLabel>
      <OutlinedInput
        fullWidth
        variant={variant}
        error={error !== null}
        defaultValue={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      ></OutlinedInput>
    </FormControl>
  );
};

export default DollarAmountInput;
