import React from "react";
import { Paper } from "@material-ui/core";
import QuadrantFooter from "./QuadrantFooter";
import QuadrantHeader from "./QuadrantHeader";
import QuadrantBody from "./QuadrantBody";

export const Quadrant = ({
  title, 
  front, 
  back, 
  showFront, 
  onNewClick, 
  deleteDisabled, 
  deleteSelected, 
  editDisabled, 
  editSelected,
  hasNew=true, 
}) => {


  return (
    <Paper className="quadrant__paper" elevation={4}>
      <QuadrantHeader title={title} />
      <QuadrantBody front={front} back={back} showFront={showFront} />
      {hasNew && (
        <QuadrantFooter
          onNewButtonClick={onNewClick}
          frontDisplayed={showFront}
          deleteDisabled={deleteDisabled}
          deleteSelected={deleteSelected}
          editSelected={editSelected}
          editDisabled={editDisabled}
        />
      )}
    </Paper>
  );
};

export default Quadrant;
