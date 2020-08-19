import React, { useState } from "react";
import Quadrant from "./Quadrant";
import { LocationsFront } from "./LocationsFront";
import { LocationsBack } from "./LocationsBack";

const LocationsQuadrant = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      title="Locations"
      front={<LocationsFront />}
      back={<LocationsBack/> }
    />
  );
};

export default LocationsQuadrant;
