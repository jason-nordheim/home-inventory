import React from 'react'
import { ListItem, ListItemText, Typography, ListItemSecondaryAction, Checkbox } from '@material-ui/core'

export const AddressListItem = ({id, name, street1, street2, city, state, zip, checked, handleChecked }) => {
  return (
    <ListItem>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            color="textSecondary"
          >
            {street1 + '\n'}
            {street2 + '\n'}
            {city + '\n'}
            {state + '\n'}
            {zip}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox 
          edge="end"
          color="primary"
          checked={checked}
          onChange={() => handleChecked(id)}
        /> 
      </ListItemSecondaryAction>
    </ListItem>
  );
}


export default AddressListItem