import React, { useState } from "react";
import SignInForm from "../Forms/User/SignInForm"
import RegistrationForm from "../Forms/User/RegistrationForm";

const UnAuthenticatedAccountPage = () => {
  const [register, setRegister] = useState(false);
  /**
   * If not logged in, provide options to sign into an account 
   * or create a new one 
   */
  return (
    <div className="unAuthenticatedAccountPage__container">
        <SignInForm
          display={!register}
          toggleDisplay={(e) => setRegister(!register)}
        />
        <RegistrationForm
          display={!!register}
          toggleDisplay={(e) => setRegister(!register)}
        />
    </div>
  );
};

export default UnAuthenticatedAccountPage;
