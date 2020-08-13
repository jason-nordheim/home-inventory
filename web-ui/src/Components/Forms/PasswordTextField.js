import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const PasswordTextField = ({ password, setPassword, variant="outlined", passwordError, onChange }) => {
  return (
    <TextField
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
