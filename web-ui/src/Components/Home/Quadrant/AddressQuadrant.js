import React, { useState, useContext, useEffect } from "react";
import Quadrant from "./Quadrant";
import AddressFront from "./AddressFront";
import AddressBack from "./AddressBack";
import { AuthorizationContext } from "../../../App";

export const AddressQuadrant = () => {
  const [showFront, setShowFront] = useState(true);
  const [_, AuthActions] = useContext(AuthorizationContext);
  const [addresses, setAddresses] = useState([]);

  /**
   * Handles the action of "checking" the selected 
   * address in the list, by recieving the props
   * of 'id' from the child component
   * @param {id} id 
   */
  function handleChecked(id){
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

  /**
   * Makes API call retrieving all the address 
   * records for the current user 
   */
  function updateAddresses(){
    AuthActions.addresses.getAll().then((data) => {
      setAddresses(
        data.addresses.map((a) => {
          return { ...a, checked: shouldBeCheced(a) };
        })
      );
    });
  }

  /**
   * Determines if an address should be checked 
   * @param {string} address 
   */
  function shouldBeCheced(address){
     if (addresses !== null && addresses !== []) {
       addresses.forEach((addr) => {
         if (addr.id === addr.id && addr.checked) {
           return true;
         }
       });
     }
     return false; 
  }

  /**
   * Function to handle the request to edit 
   * the selected address display in the list 
   * 
   * updates the list upon completion 
   */
  const editSelected = () => {
    // TODO 
  }


  /**
   * function to handle the request to delete 
   * one or more addresses from the list 
   * 
   * updates the list upon completion 
   */
  const deleteSelected = () => {
    const selected_addresses = addresses.reduce((acc, val) => (val.checked ? [...acc, val]: acc), [])
    selected_addresses.forEach(addr => {
      AuthActions.addresses.delete(addr.id)
    })
    updateAddresses()
  };

  /*
   * Need to frequently reference the number checked to determine 
   * which buttons should be enabled  
   */
  const num_checked = addresses.reduce((acc, val) => (val.checked ? acc + 1 : acc), 0)

  /*
   * Child Components with props  
   */
  const front = <AddressFront addresses={addresses} handleChecked={handleChecked} />
  const back = <AddressBack onCreate={() => setShowFront(!showFront)} />;

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      deleteSelected={deleteSelected}
      deleteDisabled={num_checked === 0 }
      editDisabled={num_checked !== 1}
      editSelected={editSelected}
      title="Addresses"
      front={front}
      back={back}
    />
  );
};

export default AddressQuadrant;
