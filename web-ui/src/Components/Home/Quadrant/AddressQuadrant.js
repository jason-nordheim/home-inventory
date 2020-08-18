import React from 'react'
import Quadrant from "./Quadrant";
import AddressFront from './AddressFront'
import AddressBack from './AddressBack'


export const AddressQuadrant = () => {
  return (
  <Quadrant title="Addresses" front={<AddressFront /> } back={ <AddressBack /> } />
  )
}

export default AddressQuadrant