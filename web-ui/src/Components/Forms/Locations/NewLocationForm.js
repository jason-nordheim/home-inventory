import React from "react";
import LocationNameField from "./Fields/LocationNameField";
import StreetTextField from "./Fields/StreetTextField";
import StateSelect from "./Fields/StateSelect";
import { useState } from "react";
import { locationNameChanged } from "../../../util/FormValidations";

const NewLocationForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [street1, setStreet1] = useState("");
  const [street1Error, setStreet1Error] = useState(null);
  const [street2, setStreet2] = useState("");
  const [street2Error, setStreet2Error] = useState(null);
  const [state, setState] = useState(null);
  const [stateError, setStateError] = useState(null);

  return (
    <div className="newLocationForm__container">
      <LocationNameField
        label="Name of Location"
        locationName={name}
        error={nameError}
        onChange={(e) => locationNameChanged(e, setName, setNameError)}
      />
      <StreetTextField label="Street 1" street={street1} error={street1Error} />
      <StreetTextField label="Street 2" street={street2} error={street2Error} />
      <StateSelect label="State" state={state} error={stateError} onChange={e => setState(e.target.value)} />
    </div>
  );
};

export default NewLocationForm;
