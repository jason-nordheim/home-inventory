import React, { useContext } from 'react' 
import { Grid, Typography } from '@material-ui/core'
import { AuthorizationContext } from '../App'


const LoggedInHomePage = () => {
  const AuthContext = useContext(AuthorizationContext)
	return (
    <Grid container>
      <Grid item container xs={12} md={6} justify="center">
        <Typography variant="h5">Locations</Typography>
      </Grid>
      <Grid item container xs={12} md={6} justify="center">
        <Typography variant="h5">Vendors</Typography>
      </Grid>
      <Grid item container xs={12} md={6} justify="center">
        <Typography variant="h5">Items</Typography>
      </Grid>
      <Grid item container xs={12} md={6} justify="center">
        <Typography variant="h5">Summary</Typography>
      </Grid>
    </Grid>
  );
};


export default LoggedInHomePage