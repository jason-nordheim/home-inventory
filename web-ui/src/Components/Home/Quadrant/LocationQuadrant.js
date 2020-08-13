import React from 'react' 
import { Typography } from '@material-ui/core'
import Quadrant from './Quadrant'

const LocationQuadrant = () => {
  return (
    <Quadrant title="Location" front={<LocationFront /> } back={ <LocationBack /> } />
  );
}

const LocationFront = () => {
  return (
    <Typography>
      Location Front 
    </Typography>
  )
}

const LocationBack = () => {
  return (
    <Typography>
      Location Back 
    </Typography>
  )
}

export default LocationQuadrant