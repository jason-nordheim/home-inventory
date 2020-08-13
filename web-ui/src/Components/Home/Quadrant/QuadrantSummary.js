import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const QuadrantSummary = () => {
  return (
    <Paper elevation={4}>
      <Typography variant="h5">Summary</Typography>
      <hr />
      <div>
        <List>
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
        </List>
      </div>
    </Paper>
  );
};

export default QuadrantSummary;
