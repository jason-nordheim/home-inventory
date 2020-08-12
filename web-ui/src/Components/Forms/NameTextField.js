import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const NameTextField = ({ name, setName, nameError, onChange, required=true, disabled=false, variant="outlined" }) => {
  const classes = useFormStyles();
  return (
    <TextField
      variant={variant}
      className={classes.textField}
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
