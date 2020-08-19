import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Checkbox,
} from "@material-ui/core";

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
            {`Phone ${vendor.phone} Email: (${vendor.email})`}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          checked={vendor.checked}
          onChange={() => handleChecked(vendor.id)}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default VendorListItem;
