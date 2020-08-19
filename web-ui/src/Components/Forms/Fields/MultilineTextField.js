import React from "react";
import { TextField } from "@material-ui/core";

const MultilineTextField = ({
  value,
  setValue,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Name",
  id = null,
  size = "small"
  maxRows = 4, 
}) => {
  return (
    <TextField
      variant={variant}
      size={size}
      fullWidth
      multiline
      maxRows={maxRows}
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

export default MultilineTextField;
