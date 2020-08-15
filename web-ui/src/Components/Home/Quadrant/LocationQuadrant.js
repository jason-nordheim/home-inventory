import React from "react";
import Quadrant from "./Quadrant";
import { LocationsFront } from "./LocationsFront";
import { LocationsBack } from "./LocationsBack";
import { useContext } from "react";
import { AuthorizationContext } from "../../../App";
import { postNewLocation } from "../../../util/Authentication";
import { useState } from 'react'

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
