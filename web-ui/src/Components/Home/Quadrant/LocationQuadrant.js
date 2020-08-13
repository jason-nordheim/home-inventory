import React from 'react' 
import { Typography } from '@material-ui/core'
import Quadrant from './Quadrant'

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
    <Typography>
      Location Back 
    </Typography>
  )
}

export default LocationsQuadrant