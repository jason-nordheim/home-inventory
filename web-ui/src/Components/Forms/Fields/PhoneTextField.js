import React from "react";
import { TextField } from "@material-ui/core";

const PhoneTextField = ({ phone, onChange, phoneError, required=true, disabled=false, size="medium", variant="outlined"}) => {
  return (
    <TextField
      size={size}
      variant={variant}
      fullWidth
      error={phoneError !== null}
      id="phone"
      label="phone"
      defaultValue={phone}
      helperText={phoneError == null ? phoneError : null}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default PhoneTextField;
