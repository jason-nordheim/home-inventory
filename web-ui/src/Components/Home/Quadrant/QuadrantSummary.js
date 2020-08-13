import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Quadrant from "./Quadrant";

const SummaryQuadrant = () => {
  return (
    <Quadrant
      title="Summary"
      front={<SummaryFront /> }
      back={null}
      hasNew={false}
    />
  ); 
};

const SummaryFront = () => {
  return (
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
  );
};

export default SummaryQuadrant;
