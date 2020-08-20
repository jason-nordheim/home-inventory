import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

/**
 * Component to display vendor information 
 * @param {function} handleChecked function to be executed upon the 
 * 'onChange' event of the checkbox for a specific vendor 
 * @param {object} vendor mapped vendor object with the additional 
 * property of 'checked' that will indicate if that vendor should show
 * up as 'checked' 
 */
export const VendorListItem = ({
  vendor,
  handleChecked,
}) => {
  return (
    <ListItem>
      <ListItemText
        primary={vendor.name}
        secondary={
          <Typography component="span" variant="body2" color="textSecondary">
            {`Phone ${vendor.phone}\n\nEmail ${vendor.email}\n\nNotes ${vendor.notes}`}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          color="primary"
          checked={vendor.checked}
          onChange={() => handleChecked(vendor.id)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default VendorListItem;
