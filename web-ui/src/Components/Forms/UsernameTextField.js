import React from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const UsernameTextField = ({ username, onChange, usernameError, required=true, disabled=false, variant="outlined"}) => {
  const classes = useFormStyles();
  return (
    <TextField
      variant={variant}
      className={classes.textField}
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
