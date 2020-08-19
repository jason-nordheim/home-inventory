import React , { useState } from "react";
import { Typography } from "@material-ui/core";
import Quadrant from "./Quadrant";
import VendorForm from '../../Forms/Vendor/VendorForm'

const VendorsQuadrant = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <Quadrant
      title="Vendors"
      front={<VendorsFront />}
      back={<VendorsBack />}
      showFront={showFront}
      setShowFront={setShowFront}
    />
  );
};

const VendorsFront = () => {
  return <Typography>Vendors Front</Typography>;
};

const VendorsBack = () => {
  return <VendorForm /> 
};

export default VendorsQuadrant;
