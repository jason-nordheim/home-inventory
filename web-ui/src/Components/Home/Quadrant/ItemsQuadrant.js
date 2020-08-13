import React from "react";
import { Typography } from "@material-ui/core";
import Quadrant from "./Quadrant";

const ItemsQuadrant = () => {
  return (
    <Quadrant title="Vendors" front={<ItemsFront />} back={<ItemsBack />} />
  );
};

const ItemsFront = () => {
  return <Typography>Vendors Front</Typography>;
};

const ItemsBack = () => {
  return <Typography>Vendors Back</Typography>;
};

export default ItemsQuadrant;
