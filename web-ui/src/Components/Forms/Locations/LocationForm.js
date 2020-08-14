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

const LocationForm = () => {
  const blank = "";
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

  return (
    <div className="newLocationForm__container">
      <form>
        <LocationNameField
          label="Name of Location"
          locationName={name}
          error={nameError}
          onChange={(e) => locationNameChanged(e, setName, setNameError)}
        />
        <StreetTextField
          label="Street 1"
          street={street1}
          error={street1Error}
          onChange={(e) => streetOneChanged(e, setStreet1, setStreet1Error)}
        />
        <StreetTextField
          label="Street 2"
          street={street2}
          error={street2Error}
          required={false}
          onChange={(e) => streetTwoChanged(e, setStreet2, setStreet2Error)}
        />
        <StateSelect
          label="State"
          state={state}
          error={stateError}
          onChange={(e) => setState(e.target.value)}
        />
        <ZipCodeTextField
          label="Zip Code"
          value={zip}
          error={zipError}
          onChange={(e) => zipCodeChanged(e, setZip, setZipError)}
        />
        <LocationTypeSelect
          value={type}
          erorr={typeError}
          onChange={(e) => locationTypeChanged(e, setType, setTypeError)}
        />
      </form>
    </div>
  );
};

export default LocationForm;
