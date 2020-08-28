import React from "react";
import { TextField } from "@material-ui/core";

const NameTextField = ({
  value,
  setValue,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  size="small",
  label="Name", 
  id=null
}) => {
  return (
    <TextField
      variant={variant}
      size={size}
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

export default NameTextField;
