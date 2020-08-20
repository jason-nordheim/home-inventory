import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { AuthorizationContext } from '../../../App'

const SelectLocation = ({
  value="",
  valueError,
  onChange,
  menuItems = [], 
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Location",
  id = null,
}) => {

  return (
    <FormControl required={required} size="small" fullWidth>
      <InputLabel className="selectAddress__inputLabel" size="small">
        {label}
      </InputLabel>
      <Select
        label={label}
        variant={variant}
        fullWidth
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {menuItems.map((location) => (
          <MenuItem key={location.id} value={location.id}>
            {location.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectLocation;
