import React, { useContext, useState } from "react";
import { AuthorizationContext } from "../../../App";
import NameTextField from "../Fields/NameTextField";
import StreetTextField from "../Fields/StreetTextField";
import CityTextField from "../Fields/CityTextField";
import StateSelect from "../Fields/StateSelect";
import ZipCodeTextField from "../Fields/ZipCodeTextField";
import UsStates from "../../../data/UsStates";
import { Button } from "@material-ui/core";

export const AddressForm = ({
  address = null,
  submitText,
  onSubmit,
  createAddress,
  updateAddress,
}) => {
  /**
   * Setup default values
   *
   * In the event that this for is being used to edit an address, the form
   * will be prefilled with the existing information
   */
  const defaultValues = {
    name:
      address.name !== null || address.name !== undefined ? address.name : "",
    street1:
      address.street1 !== null || address.street1 !== undefined
        ? address.street1
        : "",
    street2:
      address.street2 !== null || address.street2 !== undefined
        ? address.street2
        : "",
    city:
      address.city !== null || address.city !== undefined ? address.city : "",
    state:
      address.state !== null || address.state !== undefined
        ? address.state
        : UsStates[0].abbreviation,
    zip: address.zip !== null || address.zip !== undefined ? address.zip : "",
  };

  /**
   * Context
   */
  const [AuthState, AuthActions] = useContext(AuthorizationContext);

  /*
   * State Variables
   */
  const [name, setName] = useState(defaultValues.name);
  const [street1, setStreet1] = useState(defaultValues.street1);
  const [street2, setStreet2] = useState(defaultValues.street2);
  const [city, setCity] = useState(defaultValues.city);
  const [state, setState] = useState(defaultValues.state);
  const [zip, setZip] = useState(defaultValues.zip);

  /*
   * Handles the click event for the address form
   *
   * If the address provided via props was null, we should be
   * creating a new address
   *
   * Otherwise we should be editing an existing address
   */
  function handleSubmit(e) {
    e.preventDefault();
    if (address === null) {
      createAddress(name, street1, street2, city, state, zip);
    } else {
      updateAddress(name, street1, street2, city, state, zip);
    }
    if (typeof onSubmit === "function") onSubmit();
  }

  return (
    <div className="addressForm__container">
      <form>
        <div className="addressForm__textContainer">
          <NameTextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <StreetTextField
            value={street1}
            label="Street 1"
            onChange={(e) => setStreet1(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <StreetTextField
            value={street2}
            label="Street 2"
            onChange={(e) => setStreet2(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <CityTextField
            error={null}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="addressForm__textContainer">
          <div className="addressForm__stateContainer">
            <StateSelect
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="addressForm__zipContainer">
            <ZipCodeTextField
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              error={null}
            />
          </div>
        </div>
        <div className="addressForm__buttonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {submitText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
