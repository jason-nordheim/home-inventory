import React from "react";
import { Typography } from "@material-ui/core";
import Quadrant from "./Quadrant";

const VendorsQuadrant = () => {
  return (
    <Quadrant
      title="Vendors"
      front={<VendorsFront />}
      back={<VendorsBack />}
    />
  );
};

const VendorsFront = () => {
  return <Typography>Vendors Front</Typography>;
};

const VendorsBack = () => {
  return <Typography>Vendors Back</Typography>;
};

export default VendorsQuadrant;
