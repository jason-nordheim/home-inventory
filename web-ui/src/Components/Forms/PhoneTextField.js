import React from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const PhoneTextField = ({ phone, onChange, phoneError, disabled=false, variant="outlined"}) => {
  const classes = useFormStyles();
  return (
    <TextField
      variant={variant}
      className={classes.textField}
      fullWidth
      error={phoneError !== null}
      id="phone"
      label="phone"
      defaultValue={phone}
      helperText={phoneError == null ? phoneError : null}
      onChange={onChange}
      required
      disabled={disabled}
    />
  );
};

export default PhoneTextField;
