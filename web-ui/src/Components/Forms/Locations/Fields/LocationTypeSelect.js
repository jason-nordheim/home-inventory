import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { locationTypes } from '../../../../util/FormValidations'

const LocationTypeSelect = ({
  locationType=locationTypes[0],
  locationTypeError,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Location Type",
  id = "type",
}) => {
  const radioButtons = locationTypes.map(loc => <FormControlLabel key={loc} value={loc} label={loc} control={<Radio />} /> )

  return (
    <FormControl required={required} size="small" fullWidth>
      <FormLabel className="locationTypeSelect__inputLabel" size="small">{label}</FormLabel>
      <RadioGroup className="locationTypeSelect__radioGroup" aria-label="Location Type" name="type" onChange={onChange} row>
        {radioButtons } 
      </RadioGroup>
    </FormControl>
  );
};

export default LocationTypeSelect;
