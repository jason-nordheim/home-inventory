import React from "react";
import { Typography, Paper } from "@material-ui/core";
import QuadrantFront from './QuadrantFront'
import QuadrantBack from './QuadrantBack'

const QuadrantBody = ({ front, showFront, back }) => {
  return (
    <div className="quadrantBody__container">
      <QuadrantFront visible={showFront}>{front}</QuadrantFront>
      <QuadrantBack visible={!showFront}>{back}</QuadrantBack>
    </div>
  );
};

export default QuadrantBody;
