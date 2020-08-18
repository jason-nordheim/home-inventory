import React from "react";
import Quadrant from "./Quadrant";
import { LocationsFront } from "./LocationsFront";
import { LocationsBack } from "./LocationsBack";

const LocationsQuadrant = () => {
  return (
    <Quadrant
      title="Location"
      front={<LocationsFront />}
      back={<LocationsBack/> }
    />
  );
};

export default LocationsQuadrant;
