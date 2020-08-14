import React from 'react' 
import { Typography } from '@material-ui/core'
import Quadrant from './Quadrant'
import NewLocationForm from '../../Forms/Locations/NewLocationForm'

const LocationsQuadrant = () => {
  return (
    <Quadrant title="Location" front={<LocationsFront /> } back={ <LocationsBack /> } />
  );
}

const LocationsFront = () => {
  return (
    <Typography>
      Location Front 
    </Typography>
  )
}

const LocationsBack = () => {
  return (
    <NewLocationForm /> 
  )
}



export default LocationsQuadrant