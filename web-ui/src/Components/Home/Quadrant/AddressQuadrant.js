import React, { useState } from "react";
import Quadrant from "./Quadrant";
import AddressFront from "./AddressFront";
import AddressBack from "./AddressBack";

export const AddressQuadrant = () => {
  const [showFront, setShowFront] = useState(true);

  return (
    <Quadrant
      showFront={showFront}
      setShowFront={setShowFront}
      title="Addresses"
      front={<AddressFront />}
      back={<AddressBack onCreate={() => setShowFront(!showFront) } />}
    />
  );
};

export default AddressQuadrant;
