import React from "react";
import { TextField } from "@material-ui/core";

const LocationNameTextField = ({
  locationName,
  setLocationName,
  error,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined", 
  label="Location Name",
  id="name"
}) => {
  return (
    <TextField
      variant={variant}
      fullWidth
      size="small"
      error={error !== null}
      id={id}
      label={label}
      defaultValue={locationName}
      helperText={error == null ? "" : error}
      onChange={onChange}
      required={required}
      disabled={disabled}
    />
  );
};

export default LocationNameTextField;
