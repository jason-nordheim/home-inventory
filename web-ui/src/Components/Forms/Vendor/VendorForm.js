import React from 'react' 
import { Typography } from '@material-ui/core'
import { useState } from 'react'
import NameTextField from '../Fields/NameTextField'
import PhoneTextField from '../Fields/PhoneTextField'


const VendorFrom = ({title="New Vendor"}) => {
  const [vendorName, setVendorName] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')

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
        <div className="vendorPhone__textField">
          <PhoneTextField
            size="small"
            phone={vendorPhone}
            phoneError={null}
            onChange={(e) => setVendorPhone(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default VendorFrom 