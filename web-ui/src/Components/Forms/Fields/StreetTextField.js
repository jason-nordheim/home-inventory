import React from "react";
import { TextField } from "@material-ui/core";

const StreetTextField = ({
  street,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label="Street", 
  id="street"
}) => {
  return (
    <TextField
      size="small"
      variant={variant}
      fullWidth
      error={error !== null}
      id={id}
      label={label}
      defaultValue={street}
      helperText={error == null ? "" : error}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default StreetTextField;
