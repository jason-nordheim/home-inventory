import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

/**
 * Component to display user-defined locations
 * retrieved from sorted API
 * @param {object} location location object with mapped properties of 'checked' and 'address'
 * supplying the necessary information to display correctly.
 */
export const LocationListItem = ({ location, handleChecked }) => {
  return (
    <ListItem>
      <ListItemText
        primary={location.name}
        secondary={
          <Typography component="span" variant="body2" color="textSecondary">
            {`${location.address.name} | (${location.type})`}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          color="primary"
          checked={location.checked}
          onChange={() => handleChecked(location.id)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default LocationListItem;
