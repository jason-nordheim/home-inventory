import React, { useState, useContext, useEffect } from "react";
import Quadrant from "./Quadrant";
import AddressFront from "./AddressFront";
import AddressBack from "./AddressBack";
import UsStates from "../../../data/UsStates";
import { AuthorizationContext } from "../../../App";

function undefinedOrNull(str) {
  if (str === null || str === undefined || str === "") {
    return true;
  } else return false;
}
/**
 * Setup default values
 *
 * In the event that this for is being used to edit an address, the form
 * will be prefilled with the existing information
 */
const default_address = {
  id: null, 
  name:  "",
  street1: "",
  street2: "",
  city: "",
  state: UsStates[0].abbreviation,
  zip: "",
};

export const AddressQuadrant = () => {
  const [_, AuthActions] = useContext(AuthorizationContext);
  const [showFront, setShowFront] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [editAddress, setEditAddress] = useState(default_address);



  /**
   * Handles the action of "checking" the selected
   * address in the list, by recieving the props
   * of 'id' from the child component
   * @param {id} id
   */
  function handleChecked(id) {
    const updatedAddress = addresses.map((a) => {
      if (a.id === id) a.checked = !a.checked;
      return a;
    });
    setAddresses(updatedAddress);
  }

  /**
   * Setup all the address objects to be mapped onto
   * AddressListItem components
   */
  useEffect(() => {
    updateAddresses();
  }, [showFront]);

  /**
   * Makes API call retrieving all the address
   * records for the current user
   */
  function updateAddresses() {
    AuthActions.addresses.getAll().then((data) => {
      setAddresses(
        data.addresses.map((a) => {
          return {
            ...a,
            checked: shouldBeCheced(a),
          };
        })
      );
    });
  }

  /**
   * Determines if an address should be checked by comparing
   * the checked property of the associated adddress object
   * from current state with the ID of the address provided
   * @param {string} address
   */
  function shouldBeCheced(address) {
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
   * Function to handle the user-request to edit
   * the selected address display in the list
   *
   * updates the list upon completion
   */
  const editSelected = () => {
    const selected_address = addresses.find((addr) => addr.checked);
    setEditAddress(selected_address);
    selected_address && setShowFront(!showFront);
  };

  /**
   * function to handle the request to delete
   * one or more addresses from the list
   *
   * updates the list upon completion
   */
  const deleteSelected = () => {
    const selected_addresses = addresses.reduce(
      (acc, val) => (val.checked ? [...acc, val] : acc),
      []
    );
    selected_addresses.forEach((addr) => {
      AuthActions.addresses.delete(addr.id);
    });
    updateAddresses();
  };

  /**
   * Makes call to the database creating a new address to be associated
   * with the currently authenticated user
   *
   * updates the address list when complete
   * @param {string} name
   * @param {string} street1
   * @param {string} street2
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   */
  function createAddress(name, street1, street2, city, state, zip) {
    AuthActions.addresses.create(name, street1, street2, city, state, zip);
    updateAddresses();
  }

  /**
   * Makes update/patch request to API to update the values of the
   * edited addresss
   *
   * requests updated address list when complete
   * @param {string} name
   * @param {string} street1
   * @param {string} street2
   * @param {string} city
   * @param {string} state
   * @param {string} zip
   */
  function updateAddress(name, street1, street2, city, state, zip) {
    // todo
  }

  /*
   * Need to frequently reference the number checked to determine
   * which buttons should be enabled
   */
  const num_checked = addresses.reduce(
    (acc, val) => (val.checked ? acc + 1 : acc),
    0
  );

  /**
   * function to be called upon the submission of the form
   * child component
   *
   * removes any address from the 'edit' state
   */
  function onSubmit() {
    setShowFront(!showFront);
    setEditAddress(null);
  }

  /*
   * Child Components with props
   */
  const front = (
    <AddressFront addresses={addresses} handleChecked={handleChecked} />
  );
  const back = (
    <AddressBack
      onSubmit={onSubmit}
      address={editAddress}
      createAddress={createAddress}
      updateAddress={updateAddress}
      submitText={"Submit"}
    />
  );

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      deleteSelected={deleteSelected}
      deleteDisabled={num_checked === 0}
      editDisabled={num_checked !== 1}
      editSelected={editSelected}
      title="Addresses"
      front={front}
      back={back}
    />
  );
};

export default AddressQuadrant;
