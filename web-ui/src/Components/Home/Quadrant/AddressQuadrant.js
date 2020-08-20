import React, { useState, useContext, useEffect } from "react";
import Quadrant from "./Quadrant";
import AddressFront from "./AddressFront";
import AddressBack from "./AddressBack";
import { AuthorizationContext } from "../../../App";

export const AddressQuadrant = () => {
  const [showFront, setShowFront] = useState(true);
  const [_, AuthActions] = useContext(AuthorizationContext);
  const [addresses, setAddresses] = useState([]);

  const handleChecked = (id) => {
    const updatedAddress = addresses.map((a) => {
      if (a.id === id) a.checked = !a.checked;
      return a;
    });
    setAddresses(updatedAddress);
  };

  /**
   * Setup all the address objects to be mapped onto
   * AddressListItem components
   */
  useEffect(() => {
    updateAddresses() 
  }, [showFront]);

  const updateAddresses = () => {
    AuthActions.addresses.getAll().then((data) => {
      setAddresses(
        data.addresses.map((a) => {
          return { ...a, checked: shouldBeCheced(a) };
        })
      );
    });
  }

  const shouldBeCheced = (address) => {
     if (addresses !== null && addresses !== []) {
       addresses.forEach((addr) => {
         if (addr.id === addr.id && addr.checked) {
           return true;
         }
       });
     }
     return false; 
  }


  const deleteSelected = () => {
    const selected_addresses = addresses.reduce((acc, val) => (val.checked ? [...acc, val]: acc), [])
    selected_addresses.forEach(addr => {
      AuthActions.addresses.delete(addr.id)
    })
    updateAddresses()
  };

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      deleteSelected={deleteSelected}
      deleteDisabled={
        addresses.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0) == 0
      }
      title="Addresses"
      front={
        <AddressFront addresses={addresses} handleChecked={handleChecked} />
      }
      back={<AddressBack onCreate={() => setShowFront(!showFront)} />}
    />
  );
};

export default AddressQuadrant;
