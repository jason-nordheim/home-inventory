import React from "react";
import { Typography } from "@material-ui/core";


const QuadrantHeader = ({ title }) => {
  return (
    <div className="quadrant__title">
      <Typography variant="h5">{title}</Typography>
    </div>
  );
}

export default QuadrantHeader