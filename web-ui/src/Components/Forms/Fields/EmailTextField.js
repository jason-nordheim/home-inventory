import React from "react";
import { TextField } from "@material-ui/core";

export const EmailTextField = ({id=null, size="medium", label="email",  email, onChange, emailError, required=false, disabled=false, variant="outlined" }) => {
  return (
      <TextField
        size={size}
        variant={variant}
        fullWidth
        error={emailError !== null}
        id={id}
        label={label}
        defaultValue={email}
        helperText={emailError == null ? "" : emailError}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
  );
};

export default EmailTextField;
