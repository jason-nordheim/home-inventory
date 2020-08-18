import React, { useState, useContext, useEffect } from "react";
import LocationNameField from "../Fields/LocationNameField";
import StreetTextField from "../Fields/StreetTextField";
import StateSelect from "../Fields/StateSelect";
import {
  locationNameChanged,
  streetOneChanged,
  streetTwoChanged,
  zipCodeChanged,
  cityChanged, 
  locationTypes,
} from "../../../util/FormValidations";
import ZipCodeTextField from "../Fields/ZipCodeTextField";
import LocationTypeSelect from "../Fields/LocationTypeSelect";
import CityTextField from "../Fields/CityTextField";
import { Button } from '@material-ui/core'
import { AuthorizationContext } from '../../../App'
import UsStates from '../../../data/UsStates'

const blank = "";

const LocationForm = () => {
  const AuthContext = useContext(AuthorizationContext)
  const [name, setName] = useState(blank);
  const [nameError, setNameError] = useState(null);
  const [street1, setStreet1] = useState(blank);
  const [street1Error, setStreet1Error] = useState(null);
  const [street2, setStreet2] = useState(blank);
  const [street2Error, setStreet2Error] = useState(null);
  const [city, setCity] = useState('')
  const [cityError, setCityError] = useState(null)
  const [state, setState] = useState(UsStates[0].abbreviation);
  const [zip, setZip] = useState(blank);
  const [zipError, setZipError] = useState(null);
  const [locationType, setLocationType] = useState(locationTypes[0]);

  useEffect(() => {
    console.log(locationType)
  }, [locationType])

  const onFormSubmit = async (e) => {
    e.preventDefault() 
    if (AuthContext.state.token.length > 3) {
      console.log('auth', { auth: AuthContext.state.token, name, street1, street2, city, state, zip, type: locationType})
      //const result = createLocation(AuthContext.state.token, name, street1, street2, city, state, zip, locationType)
      //console.log(result)
    }
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
        <div className="newLocationForm__textContainer">
          <CityTextField 
            label="City"
            street={city}
            error={cityError}
            required={false}
            onChange={(e) => cityChanged(e, setCity, setCityError)}
          />
        </div>
        <div className="newLocationForm__stateZipContainer">
          <div className="newLocationForm__stateContainer">
            <StateSelect
              label="State"
              value={state}
              valueError={null}
              onChange={(e) => setState(e.target.value) }
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
            value={locationType}
            erorr={null}
            onChange={(e) => { 
              setLocationType(e.target.value)
             }}
          />
        </div>
        <div className="newLocationForm__submitContainer">
          <Button variant="contained" onClick={onFormSubmit} 
          
          disabled={
            nameError !== null || 
            street1Error !== null || 
            cityError !== null || 
            zipError !== null || 
            name === '' || 
            city === '' || 
            street1 === ''  || 
            zip === '' || 
            zip.length < 5 
          }>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LocationForm;
