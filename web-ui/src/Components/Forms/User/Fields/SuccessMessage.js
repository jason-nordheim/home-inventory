import React from 'react' 
import { Grid, Typography } from '@material-ui/core'


const SuccessMessage = (successMessage) => {
  return (
    <Grid item xs={12} style={{ textAlign: "center", marginTop: "1rem" }}>
      <Typography paragraph style={{ color: "green" }}>
        {successMessage}
      </Typography>
    </Grid>
  );
};

export default SuccessMessage