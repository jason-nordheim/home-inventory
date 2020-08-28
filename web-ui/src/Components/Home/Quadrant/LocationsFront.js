import React from "react";
import { List } from "@material-ui/core";
import LocationListItem from "../../../Components/LocationListItem";
/**
 * Component to be placed in the main content section of the
 * Location Quadrant
 */
export const LocationsFront = ({
  locations = [],
  setChecked,
}) => {
  return <List>{locations.map(loc => {
    return <LocationListItem key={loc.id} location={loc} handleChecked={setChecked} /> 
  })}</List>;
};

export default LocationsFront;
