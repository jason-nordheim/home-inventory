import React from "react";
import { Typography } from "@material-ui/core";
import Quadrant from "./Quadrant";

const ItemsQuadrant = () => {
  return (
    <Quadrant title="Items" front={<ItemsFront />} back={<ItemsBack />} />
  );
};

const ItemsFront = () => {
  return <Typography>Items Front</Typography>;
};

const ItemsBack = () => {
  return <Typography>Items Back</Typography>;
};

export default ItemsQuadrant;
