import React from "react";
import { TextField } from "@material-ui/core";

const CityTextField = ({
  cityName,
  setLocationName,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Location Name",
  id = "name",
}) => {
  return (
    <TextField
      variant={variant}
      fullWidth
      size="small"
      error={error !== null}
      id={id}
      label={label}
      defaultValue={cityName}
      helperText={error == null ? "" : error}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default CityTextField;
