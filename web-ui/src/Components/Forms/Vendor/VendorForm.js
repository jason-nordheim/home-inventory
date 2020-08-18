import React from 'react' 
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import NameTextField from '../Fields/NameTextField'


const VendorFrom = ({title="New Vendor"}) => {
  const [vendorName, setVendorName] = useState('')

  return (
    <div className="vendorForm__container">
      <form>
        <div className="vendorForm__header">
          <Typography variant="h6">
            {title} 
          </Typography>
        </div>
        <div className="vendorForm__textField">
          <NameTextField name={vendorName} nameError={null} onChange={ e=> setVendorName(e.target.value)} /> 
        </div>
       
      </form>
    </div>
  )
}

export default VendorFrom 