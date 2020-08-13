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
import QuadrantSummary from './QuadrantSummary'

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
    <div className="homeAuthenticated__container">
      <div className="homeAuthenticated__quadrantContainer">
        <Quadrant title="Location"></Quadrant>
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <Paper elevation={4}>
          <Typography variant="h5">Vendors</Typography>
          <hr />
          <div></div>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <Paper elevation={4}>
          <Typography variant="h5">Items</Typography>
          <hr />  
          <div></div>
          <hr />
          <Button variant="contained">New</Button>
        </Paper>
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <QuadrantSummary>
          
        </QuadrantSummary>
      </div>
    </div>
  );
};

export default HomeAuthenticated;
