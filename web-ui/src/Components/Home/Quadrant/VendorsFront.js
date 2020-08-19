import React from "react";
import { List } from "@material-ui/core";
import VendorListItem from '../../../Components/VendorListItem'
/**
 * Component to be placed in the main content section of the
 * Location Quadrant
 */
export const VendorsFront = ({ vendors = [], setChecked }) => {
  return (
    <List>
      {vendors.map((vendor) => {
        return (
          <VendorListItem
            key={vendor.id}
            vendor={vendor}
            handleChecked={setChecked}
          />
        );
      })}
    </List>
  );
};

export default VendorsFront;
