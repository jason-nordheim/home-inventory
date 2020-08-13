import React from "react";
import { TextField } from "@material-ui/core";

const EmailTextField = ({ email, onChange, emailError, required=false, disabled=false, variant="outlined" }) => {
  return (
      <TextField
        variant={variant}
        fullWidth
        error={emailError !== null}
        id="email"
        label="Email"
        defaultValue={email}
        helperText={emailError == null ? "" : emailError}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
  );
};

export default EmailTextField;
