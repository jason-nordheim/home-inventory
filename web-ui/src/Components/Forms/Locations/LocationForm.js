import React from "react";
import LocationNameField from "./Fields/LocationNameField";
import StreetTextField from "./Fields/StreetTextField";
import StateSelect from "./Fields/StateSelect";
import { useState } from "react";
import {
  locationNameChanged,
  streetOneChanged,
  streetTwoChanged,
  zipCodeChanged,
  locationTypeChanged,
} from "../../../util/FormValidations";
import ZipCodeTextField from "./Fields/ZipCodeTextField";
import LocationTypeSelect from "./Fields/LocationTypeSelect";
import { Button } from '@material-ui/core'

const blank = "";

const LocationForm = ({ onSubmit, submitText="Submit" }) => {
  const [name, setName] = useState(blank);
  const [nameError, setNameError] = useState(null);
  const [street1, setStreet1] = useState(blank);
  const [street1Error, setStreet1Error] = useState(null);
  const [street2, setStreet2] = useState(blank);
  const [street2Error, setStreet2Error] = useState(null);
  const [state, setState] = useState(null);
  const [stateError, setStateError] = useState(null);
  const [zip, setZip] = useState(blank);
  const [zipError, setZipError] = useState(null);
  const [type, setType] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const onFormSubmit = e => {
    e.preventDefault() 
    onSubmit(e) 
  }

  return (
    <div className="newLocationForm__container">
      <form>
        <div className="newLocationForm__textContainer">
          <LocationNameField
            label="Name of Location"
            locationName={name}
            error={nameError}
            onChange={(e) => locationNameChanged(e, setName, setNameError)}
          />
        </div>
        <div className="newLocationForm__textContainer">
          <StreetTextField
            label="Street 1"
            street={street1}
            error={street1Error}
            onChange={(e) => streetOneChanged(e, setStreet1, setStreet1Error)}
          />
        </div>
        <div className="newLocationForm__textContainer">
          <StreetTextField
            label="Street 2"
            street={street2}
            error={street2Error}
            required={false}
            onChange={(e) => streetTwoChanged(e, setStreet2, setStreet2Error)}
          />
        </div>
        <div className="newLocationForm__stateZipContainer">
          <div className="newLocationForm__stateContainer">
            <StateSelect
              label="State"
              state={state}
              error={stateError}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="newLocationForm__zipContainer">
            <ZipCodeTextField
              label="Zip Code"
              value={zip}
              error={zipError}
              onChange={(e) => zipCodeChanged(e, setZip, setZipError)}
            />
          </div>
        </div>
        <div className="newLocationForm__typeContainer">
          <LocationTypeSelect
            value={type}
            erorr={typeError}
            onChange={(e) => locationTypeChanged(e, setType, setTypeError)}
          />
        </div>
        <div className="newLocationForm__submitContainer">
          <Button variant="contained" onClick={onFormSubmit}>{submitText} </Button>
        </div>
      </form>
    </div>
  );
};

export default LocationForm;
