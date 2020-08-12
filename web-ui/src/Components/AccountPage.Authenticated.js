import React from "react";
import { Grid, Typography, Paper, TextField } from "@material-ui/core";
import useFormStyles from '../style/useFormStyles'
import { useState } from 'react'


const AuthenticatedAccountPage = ({ user }) => {
  const classes = useFormStyles()
  return (
    <Grid container justify="center">
      <Grid item xs={11} md={8}>
        <Paper>
            <Grid item>
              <Typography variant="h4">Welcome {user.name}</Typography>
            </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AuthenticatedAccountPage;
