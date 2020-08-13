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
import QuadrantSummary from './Quadrant/QuadrantSummary'
import LocationQuadrant from './Quadrant/LocationQuadrant'
import VendorsQuadrant from './Quadrant/VendorsQuadrant'
import ItemsQuadrant from './Quadrant/ItemsQuadrant'

const HomeAuthenticated = () => {
  const AuthContext = useContext(AuthorizationContext);

  return (
    <div className="homeAuthenticated__container">
      <div className="homeAuthenticated__quadrantContainer">
       <LocationQuadrant /> 
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <VendorsQuadrant /> 
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <ItemsQuadrant /> 
      </div>
      <div className="homeAuthenticated__quadrantContainer">
        <QuadrantSummary /> 
      </div>
    </div>
  );
};

export default HomeAuthenticated;
