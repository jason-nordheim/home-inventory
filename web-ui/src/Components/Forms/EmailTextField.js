import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const EmailTextField = ({ email, onChange, emailError, disabled=false, variant="outlined" }) => {
  const classes = useFormStyles();

  return (
      <TextField
        variant={variant}
        className={classes.textField}
        fullWidth
        error={emailError !== null}
        id="email"
        label="Email"
        defaultValue={email}
        helperText={emailError == null ? "" : emailError}
        onChange={onChange}
        required
        disabled={disabled}
      />
  );
};

export default EmailTextField;
