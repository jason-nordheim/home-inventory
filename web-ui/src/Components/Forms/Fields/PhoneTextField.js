import React from "react";
import { TextField } from "@material-ui/core";

export const PhoneTextField = ({
  id = null,
  label = "Phone",
  phone,
  onChange,
  phoneError,
  required = true,
  disabled = false,
  size = "medium",
  variant = "outlined",
}) => {
  return (
    <TextField
      size={size}
      variant={variant}
      fullWidth
      error={phoneError != null}
      id={id}
      label={label}
      defaultValue={phone}
      helperText={phoneError == null ? phoneError : null}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default PhoneTextField;
