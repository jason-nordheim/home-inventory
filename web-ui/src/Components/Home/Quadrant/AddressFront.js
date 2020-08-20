import React, { useState, useContext, useEffect } from "react";
import { List } from "@material-ui/core";
import AddressListItem from "../../../Components/AddressListItem";
/**
 * Component to be placed in the main content section of the
 * Location Quadrant
 */
export const AddressFront = ({ addresses, handleChecked }) => {
 
  return (
    <List>
      {addresses !== [] &&
        addresses.map((a) => (
          <AddressListItem
            key={a.id}
            id={a.id}
            name={a.name}
            street1={a.street1}
            street2={a.street2}
            city={a.city}
            state={a.state}
            zip={a.zip}
            checked={a.checked}
            handleChecked={handleChecked}
          />
        ))}
    </List>
  );
};

export default AddressFront;
