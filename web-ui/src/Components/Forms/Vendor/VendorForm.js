import React from 'react' 
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import NameTextField from './Fields/NameTextField'
import DollarAmountInput from './Fields/DollarAmountInput'


const VendorFrom = ({title="New Vendor"}) => {
  const [vendorName, setVendorName] = useState('')
  const [vendorNameError, setVendorNameError] = useState(null)
  const [estValue, setEstValue] = useState(0.00)
  const [estValueError, setEstValueError] = useState(null)

  return (
    <div className="vendorForm__container">
      <form>
        <div className="vendorForm__header">
          <Typography variant="h6">
            {title} 
          </Typography>
        </div>
        <div className="vendorForm__textField">
          <NameTextField name={vendorName} nameError={vendorNameError} onChange={ e=> setVendorName(e.target.value)} /> 
        </div>
        <div className="vendorForm__textField">
          <DollarAmountInput value={estValue} error={estValueError} label="Estimated Value" /> 
        </div>
      </form>
    </div>
  )
}

export default VendorFrom 