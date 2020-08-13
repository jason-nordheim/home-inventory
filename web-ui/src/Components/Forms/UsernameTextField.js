import React from "react";
import { TextField } from "@material-ui/core";

const UsernameTextField = ({ username, onChange, usernameError, required=true, disabled=false, variant="outlined"}) => {
  return (
    <TextField
      variant={variant}
      fullWidth
      error={usernameError !== null}
      id="username"
      label="Username"
      defaultValue={username}
      helperText={usernameError == null ? usernameError : null}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default UsernameTextField;
