import React, { useContext, useState, useEffect } from "react";
import { AuthorizationContext } from "../../../App";
import NameTextField from "../Fields/NameTextField";
import StreetTextField from "../Fields/StreetTextField";
import CityTextField from "../Fields/CityTextField";
import StateSelect from "../Fields/StateSelect";
import ZipCodeTextField from "../Fields/ZipCodeTextField";
import UsStates from "../../../data/UsStates";
import { Button } from '@material-ui/core'

export const AddressForm = ({ variant="CREATE", onSuccess}) => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext);
  const blank = "";
  const [name, setName] = useState(blank);
  const [street1, setStreet1] = useState(blank);
  const [street2, setStreet2] = useState(blank);
  const [city, setCity] = useState("");
  const [state, setState] = useState(UsStates[0].abbreviation);
  const [zip, setZip] = useState(blank);
  const [submitText, setSubmitText] = useState('Submit')

  /**
   * Change the text of the submit button depending on the 
   * variant used. Defaults to creating a new address 
   */
  useEffect(() => {
   switch (variant) {
     case "CREATE":
       setSubmitText("Submit");
       break; 
     case "EDIT":
       setSubmitText("Save")
       break; 
     case "DELETE":
      setSubmitText("Delete")
      break; 
     default:
       setSubmitText("Submit");
       break; 
   }
  }, [])
  
  /*
   * Handles the submit event (CREATE/EDIT/DELETE) 
   */
  const handleSubmit = e => {
    e.preventDefault() 
    switch (variant) {
      case "CREATE":
         if (AuthState.token) {
           AuthActions.addresses.create(
             name,
             street1,
             street2,
             city,
             state,
             zip
           )
           if(typeof(onSuccess) === "function"){
             onSuccess()
           }
         } else {
           alert('You must be logged in to perform this action')
         }
        break; 
      case "EDIT":
        break; 
      case "DELETE":
        break; 
      default:
        break; 
    }
  }



  return (
    <div className="addressForm__container">
      <form>
        <div className="addressForm__textContainer">
          <NameTextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <StreetTextField
            value={street1}
            label="Street 1"
            onChange={(e) => setStreet1(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <StreetTextField
            value={street2}
            label="Street 2"
            onChange={(e) => setStreet2(e.target.value)}
            error={null}
          />
        </div>
        <div className="addressForm__textContainer">
          <CityTextField error={null} value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div className="addressForm__textContainer">
          <div className="addressForm__stateContainer">
            <StateSelect value={state} onChange={e => setState(e.target.value)}/>
          </div>
          <div className="addressForm__zipContainer">
            <ZipCodeTextField value={zip} onChange={e => setZip(e.target.value)} error={null} />
          </div>
        </div>
        <div className="addressForm__buttonContainer">
          <Button variant="contained" color="primary" onClick={handleSubmit} >
            { submitText }
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
