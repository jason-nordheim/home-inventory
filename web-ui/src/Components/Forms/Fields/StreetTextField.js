import React from "react";
import { TextField } from "@material-ui/core";

const StreetTextField = ({
  value,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label="Street", 
  id=null
}) => {
  return (
    <TextField
      size="small"
      variant={variant}
      fullWidth
      error={error !== null}
      id={id}
      label={label}
      defaultValue={value}
      helperText={error == null ? "" : error}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default StreetTextField;
