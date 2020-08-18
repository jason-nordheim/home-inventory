import React from "react";
import { TextField } from "@material-ui/core";

const NameTextField = ({
  name,
  setName,
  nameError,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
}) => {
  return (
    <TextField
      variant={variant}
      size="small"
      fullWidth
      error={nameError !== null}
      id="name"
      label="Name"
      defaultValue={name}
      helperText={nameError == null ? "" : nameError}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default NameTextField;
