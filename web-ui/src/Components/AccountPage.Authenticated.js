import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import { AuthorizationContext } from "../App";

const AuthenticatedAccountPage = () => {
  const AuthContext = useContext(AuthorizationContext);

  return (
    <Grid container justify="center">
      <Grid item xs={11} md={5}>Welcome</Grid>
    </Grid>
  );
};

export default AuthenticatedAccountPage;
