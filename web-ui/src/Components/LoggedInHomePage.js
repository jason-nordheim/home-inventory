import React, { useContext } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Button, 
  Container
} from "@material-ui/core";
import { AuthorizationContext } from "../App";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  quad: {
    width: "100%",
    minHeight: "100px",
    padding: "1rem",
    margin: "1rem",
    flex: 1, 
  },
  quadItemArea: {
    height: '120px', 
    overflow: 'hidden'
  }, 
  list: {
    width: '100%'
  }, 
  listItem: {
    width: '100%'
  }
}));

const LoggedInHomePage = () => {
  const AuthContext = useContext(AuthorizationContext);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item container xs={12} sm={6} justify="center">
        <Paper className={classes.quad} elevation={4}>
          <Typography variant="h5">Locations</Typography>
          <hr />
          <Container className={classes.quadItemArea}></Container>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={6} justify="center">
        <Paper className={classes.quad} elevation={4}>
          <Typography variant="h5">Vendors</Typography>
          <hr />
          <Container className={classes.quadItemArea}></Container>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={6} justify="center">
        <Paper className={classes.quad} elevation={4}>
          <Typography variant="h5">Items</Typography>
          <hr />
          <Container className={classes.quadItemArea}></Container>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </Grid>
      <Grid item container xs={12} sm={6} justify="center">
        <Paper className={classes.quad} elevation={4}>
          <Typography variant="h5">Summary</Typography>
          <hr />
          <Grid container>
            <List className={classes.list}>
              <Grid item xs={12}>
                <Grid
                  item
                  container
                  justify="space-evenly"
                  alignContent="space-between"
                >
                  <ListItem>
                    <Grid item xs={12}>
                      <ListItemText>Items</ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText>0</ListItemText>
                    </Grid>
                  </ListItem>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-evenly"
                  alignContent="space-between"
                >
                  <ListItem className={classes.listItem}>
                    <Grid item xs={12}>
                      <ListItemText>Vendors</ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText>0</ListItemText>
                    </Grid>
                  </ListItem>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="space-evenly"
                  alignContent="space-between"
                >
                  <ListItem className={classes.listItem}>
                    <Grid item xs={12}>
                      <ListItemText>Locations</ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText>0</ListItemText>
                    </Grid>
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoggedInHomePage;
