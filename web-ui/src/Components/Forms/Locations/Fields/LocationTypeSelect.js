import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { locationTypes } from '../../../../util/FormValidations'

const LocationTypeSelect = ({
  locationType,
  locationTypeError,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Location Type",
  id = "type",
}) => {
  return (
    <FormControl required={required} size="small" fullWidth>
      <InputLabel className="locationTypeSelect__inputLabel" size="small">{label}</InputLabel>
      <Select
        label={label}
        variant={variant}
        fullWidth
        id={id}
        required={required}
        value={locationType}
        onChange={onChange}
        disabled={disabled}
        error={locationTypeError != null}
      >
        {locationTypes.map((location) => (
          <MenuItem value={location}>{location}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocationTypeSelect;
