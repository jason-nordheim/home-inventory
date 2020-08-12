import React from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const UsernameTextField = ({ username, onChange, usernameError, required=true }) => {
  const classes = useFormStyles();
  return (
    <TextField
      className={classes.textField}
      fullWidth
      error={usernameError !== null}
      id="username"
      label="Username"
      defaultValue={username}
      helperText={usernameError == null}
      onChange={onChange}
      required={required}
    />
  );
};

export default UsernameTextField;
