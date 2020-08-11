import React, { useState, useContext } from "react";
import Layout from "../Components/Layout";
import SignInForm from "../Components/SignInForm";
import RegistrationForm from "../Components/RegistrationForm";
import { Grid, Typography } from "@material-ui/core";
import { AuthorizationContext } from "../App";
import { ApplicationName } from "../data/StaticContent";
import { useEffect } from 'react'

const AccountPage = ({ isLoggedIn }) => {
  const [register, setRegister] = useState(false);
  const AuthContext = useContext(AuthorizationContext);

  if (AuthContext.state.token !== null) {
    return (
      <Layout title="Account">
        <Typography>Welcome</Typography>
      </Layout>
    );
  } else {
    return (
      <Layout title="Account">
        {AuthContext.state.token == null && (
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
        )}

        {AuthContext.state.isLoggedIn && (
          <Typography paragraph>Welcome to {ApplicationName}</Typography>
        )}
      </Layout>
    );
  }
};

export default AccountPage;
