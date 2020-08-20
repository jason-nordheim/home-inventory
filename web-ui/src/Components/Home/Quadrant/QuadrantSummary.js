import React, { useContext } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Quadrant from "./Quadrant";
import { AuthorizationContext } from '../../../App'

const SummaryQuadrant = () => {
  const [AuthState, AuthActions] = useContext(AuthorizationContext)


  return (
    <Quadrant
      title="Summary"
      showFront={true}
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
