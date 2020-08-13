import React from "react";
import { Typography, Paper } from "@material-ui/core";
import QuadrantFront from './QuadrantFront'
import QuadrantBack from './QuadrantBack'

const QuadrantBody = ({ front, displayFront, back }) => {
  return (
    <div className="quadrantBody__container">
      <QuadrantFront visible={displayFront}>{front}</QuadrantFront>
      <QuadrantBack visible={!displayFront}>{back}</QuadrantBack>
    </div>
  );
};

export default QuadrantBody;
