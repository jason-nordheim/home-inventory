import React from "react";
import LocationForm from "../../Forms/Locations/LocationForm";

export const LocationsBack = ({ createNew }) => {
  return <LocationForm submitText="create" createNewLocation={createNew} />;
};
