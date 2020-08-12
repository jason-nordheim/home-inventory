import React from "react";
import { TextField } from "@material-ui/core";
import useFormStyles from "../../style/useFormStyles";

const PhoneTextField = ({ phone, onChange, phoneError }) => {
  const classes = useFormStyles();
  return (
    <TextField
      className={classes.textField}
      fullWidth
      error={phoneError !== null}
      id="phone"
      label="phone"
      defaultValue={phone}
      helperText={phoneError == null}
      onChange={onChange}
      required
    />
  );
};

export default PhoneTextField;
