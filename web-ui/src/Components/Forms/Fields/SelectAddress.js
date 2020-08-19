import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectAddress = ({
  value="",
  valueError,
  onChange,
  menuItems = [], 
  required = true,
  disabled = false,
  variant = "outlined",
  label = "Address",
  id = "address",
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
        {menuItems.map((address) => (
          <MenuItem key={address.id} value={address.id}>
            {address.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectAddress;
