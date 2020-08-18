import React from "react";
// import { AuthorizationContext } from "../../App";
import QuadrantSummary from './Quadrant/QuadrantSummary'
import LocationsQuadrant from './Quadrant/LocationQuadrant'
import VendorsQuadrant from './Quadrant/VendorsQuadrant'
import ItemsQuadrant from './Quadrant/ItemsQuadrant'

const HomeAuthenticated = () => {
  //const AuthContext = useContext(AuthorizationContext);

  return (
    <div className="homeAuthenticated__container">
      <div className="homeAuthenticated__quadrantContainer">
       <LocationsQuadrant /> 
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
