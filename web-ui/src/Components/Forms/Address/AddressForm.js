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
  address,
  submitText,
  onSubmit,
  createAddress,
  updateAddress,
}) => {
  /*
   * State Variables
   */
  const [name, setName] = useState(address ? address['name']: '');
  const [street1, setStreet1] = useState(address ? address['street1'] : '');
  const [street2, setStreet2] = useState(address ? address['street2'] : '');
  const [city, setCity] = useState(address ? address['city'] : '');
  const [state, setState] = useState(address ? address['state'] : '');
  const [zip, setZip] = useState(address ? address['zip'] : '');

  console.log({address, name, street1, street2, city, state, zip, })



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
    if (address.id) {
      updateAddress(name, street1, street2, city, state, zip);
    } else {
      createAddress(name, street1, street2, city, state, zip);
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
