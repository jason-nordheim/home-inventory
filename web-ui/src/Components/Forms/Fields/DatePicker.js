import React from 'react'
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
export const DatePicker = ({ value, onChange, error, label }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        format="MM/dd/yyyy"
        value={value}
        label={label}
        onChange={onChange}
        error={error}
      />
    </MuiPickersUtilsProvider>
  );
}


export default DatePicker