import React from 'react' 
import { Typography } from '@material-ui/core'
import Quadrant from './Quadrant'
import LocationForm from '../../Forms/Locations/LocationForm'

const LocationsQuadrant = () => {

  const submitNewLocation = e => {
    e.preventDefault() 
  }

  return (
    <Quadrant title="Location" front={<LocationsFront /> } back={ <LocationsBack submitNewLocation={submitNewLocation} /> } />
  );
}

const LocationsFront = () => {
  return (
    <Typography>
      PLACEHOLDER Location Front 
    </Typography>
  )
}

const LocationsBack = ({submitNewLocation}) => {
  return (
    <LocationForm onSubmit={submitNewLocation} submitText="create"/> 
  )
}



export default LocationsQuadrant