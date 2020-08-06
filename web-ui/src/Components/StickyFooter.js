import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Container, Link } from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Jason Nordheim
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed', 
    bottom: 0, 
    width: '100%', 
    zIndex: -1, 
  },
  footer: {
    padding: theme.spacing(2, 1),
    textAlign: 'center', 
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
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