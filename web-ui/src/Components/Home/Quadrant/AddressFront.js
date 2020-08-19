import React, { useState, useContext, useEffect } from "react";
import { List } from "@material-ui/core";
import { AuthorizationContext } from "../../../App";
import AddressListItem from "../../../Components/AddressListItem";
/**
 * Component to be placed in the main content section of the
 * Location Quadrant
 */
export const AddressFront = ({ oaddressAdded }) => {
  const [_, AuthActions] = useContext(AuthorizationContext);
  const [addresses, setAddresses] = useState([]);

  const handleChecked = id => {
    const updatedAddress = addresses.map(a => {
      if(a.id === id) a.checked = !a.checked 
      return a 
    })
    setAddresses(updatedAddress)
  }

  /**
   * Setup all the address objects to be mapped onto 
   * AddressListItem components
   */
  useEffect(() => {
    AuthActions.addresses.getAll().then((data) => {
      setAddresses(
        data.addresses.map((a) => {
          return { ...a, checked: false };
        })
      );
    });
  }, [AuthActions.addresses]);

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
