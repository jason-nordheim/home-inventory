import React from "react";
import { Typography } from "@material-ui/core";
import Quadrant from "./Quadrant";
import VendorForm from '../../Forms/Vendor/VendorForm'

const VendorsQuadrant = () => {
  return (
    <Quadrant
      title="Vendors"
      front={<VendorsFront />}
      back={<VendorsBack />}
      onCreateNew={null} 
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
