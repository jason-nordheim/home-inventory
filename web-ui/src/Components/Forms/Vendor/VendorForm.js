import React, { useState }  from 'react' 
import { Typography, Button } from '@material-ui/core'
import NameTextField from '../Fields/NameTextField'
import PhoneTextField from '../Fields/PhoneTextField'
import EmailTextField from '../Fields/EmailTextField'
import MultilineTextField from "../Fields/MultilineTextField";


const VendorFrom = ({title="New Vendor", createVendor, onSubmit}) => {
  const [vendorName, setVendorName] = useState('')
  const [vendorPhone, setVendorPhone] = useState('')
  const [vendorEmail, setVendorEmail] = useState('')
  const [vendorDescription, setVendorDescription] = useState('')


  /**
   * Helper function to clear the form fields 
   */
  const clearForm = () => {
    setVendorName('')
    setVendorPhone('')
    setVendorEmail('')
    setVendorDescription('')
  }

  /**
   * Handles the submit event of a the vendor form 
   * @param {event} e 
   */
  const handleSubmit = e => {
    e.preventDefault()

    createVendor(vendorName, vendorPhone, vendorEmail, vendorDescription)
      .then((data) => {
              if (data.iid) return;
              else clearForm(); // only clear if success
            })

    // let parent know that submit was executed 
    if (typeof onSubmit === "function") {
      onSubmit(e);
    }
  }



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
          <MultilineTextField
            value={vendorDescription}
            error={null}
            onChange={(e) => setVendorDescription(e.target.value)}
          />
        </div>
        <div className="vendorForm__submitButton">
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VendorFrom 