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
  
  /**
   * Recieves location object and determines if 
   * the location object was already checked in 
   * a previous version of state (referencing id 
   * for identification of addresses)
   * 
   * If it location object was not in a previous 
   * version of state, it will be defaulted to false 
   * @param {object} location 
   */
  function setChecked(location){
    if(locations !== null && locations !== []) {
      locations.forEach(l => {
        if (l.id === location.id && l.checked) {
          return true
        }
      })
    }
    return false 
  }

  /**
   * Makes calls to the database to fetch all the 
   * addresses and locations related to the currently authenticated 
   * user. 
   * 
   * Once both are retrieved, the existing locations are mapped to 
   * their associated addresses so that full information can be available
   * in the list. 
   */
  function updateLocationList(){
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

  /**
   * Calls on AuthActions to create a location, passing in the 
   * required parameters 
   * 
   * When the request is completed, a call is made to refresh the
   * list of locations (and addreses)
   * @param {string} locationName 
   * @param {string} locationType 
   * @param {number} addressId 
   */
  function createNewLocation(locationName, locationType, addressId ){
    AuthActions.locations.create(locationName, locationType, addressId)
      .then(() => updateLocationList())
  }

  /**
   * Function to be passed to children, will recieve the 
   * ID from the click event of the checkbox (of the list item/location)
   * and toggle the checked property for the associated 
   * location 
   * @param {number} id 
   */
  function onChecked(id){
    const updatedLocations = locations.map(l => {
      if (l.id === id) {
        l.checked = !l.checked
      }
      return l 
    })
    setLocations(updatedLocations)
  }

  /**
   * Handles the request to delete the selected location(s)
   * 
   * calls the list to update when complete 
   */
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
