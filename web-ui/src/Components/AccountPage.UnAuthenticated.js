import React, { useState, useContext } from "react";
import SignInForm from "./SignInForm";
import RegistrationForm from "./RegistrationForm";
import { Grid } from "@material-ui/core";
import { AuthorizationContext } from "../App";

const UnAuthenticatedAccountPage = () => {
  const [register, setRegister] = useState(false);
  /**
   * If not logged in, provide options to sign into an account 
   * or create a new one 
   */
  return (
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item>
        <SignInForm
          display={!register}
          toggleDisplay={(e) => setRegister(!register)}
        />
      </Grid>
      <Grid item>
        <RegistrationForm
          display={!!register}
          toggleDisplay={(e) => setRegister(!register)}
        />
      </Grid>
    </Grid>
  );
};

export default UnAuthenticatedAccountPage;
