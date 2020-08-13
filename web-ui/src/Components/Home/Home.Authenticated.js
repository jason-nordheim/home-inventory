import React, { useContext } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button, 
} from "@material-ui/core";
import { AuthorizationContext } from "../../App";
import { Quadrant } from './Quadrant'

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   quad: {
//     width: "100%",
//     minHeight: "100px",
//     padding: "1rem",
//     margin: "1rem",
//     flex: 1, 
//   },
//   quadItemArea: {
//     height: '120px', 
//     overflow: 'hidden'
//   }, 
//   list: {
//     width: '100%'
//   }, 
//   listItem: {
//     width: '100%'
//   }
// }));

const HomeAuthenticated = () => {
  const AuthContext = useContext(AuthorizationContext);

  return (
    <div>
      <div>
        <Quadrant title="Location">

        </Quadrant> 
      </div>
      <div>
        <Paper elevation={4}>
          <Typography variant="h5">Vendors</Typography>
          <hr />
          <div></div>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </div>
      <div>
        <Paper elevation={4}>
          <Typography variant="h5">Items</Typography>
          <hr />
          <div></div>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </div>
      <div>
        <Paper elevation={4}>
          <Typography variant="h5">Summary</Typography>
          <hr />
          <Grid container>
            <List>
              <div>
                <div>
                  <ListItem>
                    <div>
                      <ListItemText>Items</ListItemText>
                    </div>
                    <div>
                      <ListItemText>0</ListItemText>
                    </div>
                  </ListItem>
                </div>
              </div>
              <div>
                <div>
                  <ListItem>
                    <div>
                      <ListItemText>Vendors</ListItemText>
                    </div>
                    <div>
                      <ListItemText>0</ListItemText>
                    </div>
                  </ListItem>
                </div>
              </div>
              <div>
                <div>
                  <ListItem>
                    <div>
                      <ListItemText>Locations</ListItemText>
                    </div>
                    <div>
                      <ListItemText>0</ListItemText>
                    </div>
                  </ListItem>
                </div>
              </div>
            </List>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default HomeAuthenticated;
