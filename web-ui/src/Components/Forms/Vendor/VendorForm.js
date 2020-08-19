import React from 'react' 
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import NameTextField from '../Fields/NameTextField'
import PhoneTextField from '../Fields/PhoneTextField'
import EmailTextField from '../Fields/EmailTextField'
import MultilineTextField from "../Fields/MultilineTextField";


const VendorFrom = ({title="New Vendor", createVendor}) => {
  const [vendorName, setVendorName] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [vendorDescription, setVendorDescription] = useState('')

  return (
    <div className="vendorForm__container">
      <form>
        <div className="vendorForm__header">
          <Typography variant="h6">{title}</Typography>
        </div>
        <div className="vendorForm__textField">
          <NameTextField
            name={vendorName}
            error={null}
            onChange={(e) => setVendorName(e.target.value)}
          />
        </div>
        <div className="vendorForm__textField">
          <PhoneTextField
            size="small"
            phone={vendorPhone}
            phoneError={null}
            onChange={(e) => setVendorPhone(e.target.value)}
          />
        </div>
        <div className="vendorForm__textField">
          <EmailTextField
            email={vendorEmail}
            emailError={null}
            size="small"
            onChange={(e) => setVendorEmail(e.target.value)}
          />
        </div>
        <div className="vendorForm__textField">
          <MultilineTextField value={vendorDescription} error={null} onChange={e => setVendorDescription(e.target.value)} /> 
        </div>
        <div>
          
        </div>
      </form>
    </div>
  );
}

export default VendorFrom 