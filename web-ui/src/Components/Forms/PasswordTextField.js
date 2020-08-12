import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const PasswordTextField = ({ password, setPassword, variant="outlined", passwordError, onChange }) => {
  const classes = useFormStyles();
  return (
    <TextField
      className={classes.textField}
      fullWidth
      variant={variant}
      error={passwordError !== null}
      id="password"
      type="password"
      label="Password"
      defaultValue={password}
      helperText={passwordError == null ? passwordError : null}
      onChange={onChange}
      required
    />
  );
};

export default PasswordTextField;
