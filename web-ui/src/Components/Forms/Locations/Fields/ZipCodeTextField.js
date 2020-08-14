import React from "react";
import { TextField } from "@material-ui/core";

const ZipCodeTextField = ({
  zipCode,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Zip Code",
  id = "zip",
}) => {
  return (
    <TextField
      variant={variant}
      fullWidth
      size="small"
      error={error !== null}
      id={id}
      label={label}
      defaultValue={zipCode}
      helperText={error == null ? "" : error}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default ZipCodeTextField;
