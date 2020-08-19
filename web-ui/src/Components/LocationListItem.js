import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

export const LocationListItem = ({
  id,
  location,
  checked, 
  address, 
  handleChecked,
}) => {
  return (
    <ListItem>
      <ListItemText
        primary={location.name}
        secondary={
          <Typography component="span" variant="body2" color="textSecondary">
            { `${location.address.name} | (${location.type})`}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          checked={location.checked}
          onChange={() => handleChecked(location.id)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default LocationListItem;
