import React, { useState, useEffect, useContext } from "react";
import Quadrant from "./Quadrant";
import { LocationsFront } from "./LocationsFront";
import { LocationsBack } from "./LocationsBack";
import { AuthorizationContext } from '../../../App'

const LocationsQuadrant = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)
  const [showFront, setShowFront] = useState(true);
  const [locations, setLocations] = useState([])

  useEffect(() => {
    updateLocationList()
  },[showFront])
  
  const setChecked = (location) => {
    if(locations !== null && locations !== []) {
      locations.forEach(l => {
        if (l.id === location.id && l.checked) {
          return true
        }
      })
    }
    return false 
  }

  const updateLocationList = () => {
    AuthActions.addresses.getAll().then(data => {
      AuthActions.locations.getAll().then(locations => {
        const mappedLocations = locations.map((loc) => {
          const addr = data.addresses.find(addr => addr.id === loc.address_id)
          return {...loc, checked: setChecked(loc), address: addr }
        }) 
        setLocations(mappedLocations)
      });
    })
  }

  const createNewLocation = (locationName, locationType, addressId ) => {
    AuthActions.locations.create(locationName, locationType, addressId)
      .then(() => updateLocationList())
  }

  const onChecked = (id) => {
    const updatedLocations = locations.map(l => {
      if (l.id === id) {
        l.checked = !l.checked
      }
      return l 
    })
    setLocations(updatedLocations)
  }

  const deleteSelected = () => {
    const selected_locations = locations.reduce((acc, val) => (val.checked ? [...acc, val]: acc),[])
    selected_locations.forEach(loc => {
      AuthActions.locations.delete(loc.id)
    })
    updateLocationList() 
  }

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      title="Locations"
      front={<LocationsFront locations={locations} setChecked={onChecked} />}
      back={<LocationsBack createNew={createNewLocation}/> }
      deleteSelected={deleteSelected}
      deleteDisabled={ (locations.reduce((acc, val) => val.checked ? acc + 1 : acc , 0) == 0) }
    />
  );
};

export default LocationsQuadrant;
