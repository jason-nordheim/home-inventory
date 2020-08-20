import React, { useContext, useEffect, useState } from "react";
import { AuthorizationContext } from '../../../App'
import NameTextField from '../Fields/NameTextField'
import LocationTypeSelect from "../Fields/LocationTypeSelect";
import { locationTypes } from '../../../util/FormValidations'
import SelectAddress from '../Fields/SelectAddress'
import { Button } from '@material-ui/core'

const blank = "";

const LocationForm = ({ createNewLocation, onSubmit }) => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)
  const [name, setName] = useState('')
  const [locationType, setLocationType] = useState(locationTypes[0])
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState('')

  /**
   * Setup all the address objects to be mapped onto 
   * AddressListItem components
   */
  useEffect(() => {
    AuthActions.addresses.getAll().then((data) => {
      setAddresses(data.addresses)
    });
  }, [AuthActions.addresses]);

  const handleSubmit = e => {
    e.preventDefault() 
    createNewLocation(name, locationType, selectedAddress)
    if(typeof(onSubmit) === 'function') onSubmit() 
  }

  return (
    <div className="newLocationForm__container">
      <form>
        <div className="newLocationForm__textContainer">
          <NameTextField
            value={name}
            error={null}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="newLocationForm__textContainer">
          <SelectAddress
            menuItems={addresses}
            onChange={(e) => setSelectedAddress(e.target.value)}
            value={selectedAddress}
          />
        </div>
        <div className="newLocationForm__textContainer">
          <LocationTypeSelect
            value={locationType}
            error={null}
            onChange={(e) => setLocationType(e.target.value)}
          />
        </div>
        <div className="locationForm__buttonContainer">
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LocationForm;
