import React from 'react';

import { Typography, Container } from '@material-ui/core'
import { useStyles } from './StickFooter.styles';
import { Copyright } from './Copyright';

const StickyFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">MyHome Inventory System.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default StickyFooter