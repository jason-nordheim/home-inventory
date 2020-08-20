import React from "react";
import { TextField } from "@material-ui/core";

const UsernameTextField = ({ value, onChange, error, required=true, disabled=false, variant="outlined"}) => {
  return (
    <TextField
      variant={variant}
      fullWidth
      error={error !== null}
      id="username"
      label="Username"
      value={value}
      helperText={error == null ? error : null}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default UsernameTextField;
