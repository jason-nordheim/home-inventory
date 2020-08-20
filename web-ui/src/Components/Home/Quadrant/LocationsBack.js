import React from "react";
import LocationForm from "../../Forms/Locations/LocationForm";

export const LocationsBack = ({ createNew, onSubmit}) => {
  return <LocationForm submitText="create" createNewLocation={createNew} onSubmit={onSubmit}/>;
};
