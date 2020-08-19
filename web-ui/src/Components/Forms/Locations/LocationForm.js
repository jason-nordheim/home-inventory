import React, { useContext } from "react";
import { AuthorizationContext } from '../../../App'

const blank = "";

const LocationForm = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)

  const onFormSubmit = async (e) => {
    e.preventDefault() 
  }

  return (
    <div className="newLocationForm__container">
      <form>
       {/* to do  */}
      </form>
    </div>
  );
};

export default LocationForm;
