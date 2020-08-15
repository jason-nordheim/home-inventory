import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import UsStates from "../../../../data/UsStates";

const StateSelect = ({
  state=UsStates[0].abbreviation,
  stateError,
  onChange,
  required = true,
  disabled = false,
  variant = "outlined",
  label = "State",
  id = "state",
}) => {
  return (
    <FormControl required={required} size="small" fullWidth>
      <InputLabel className="stateSelect__inputLabel" size="small">
        {label}
      </InputLabel>

      <Select
        label={label}
        variant={variant}
        fullWidth
        id={id}
        required={required}
        value={UsStates[0].abbreviation}
        onChange={onChange}
        disabled={disabled}
      >
        {UsStates.map((state) => (
          <MenuItem key={state.abbreviation} value={state.abbreviation}>
            {" "}
            {state.name}{" "}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StateSelect;
