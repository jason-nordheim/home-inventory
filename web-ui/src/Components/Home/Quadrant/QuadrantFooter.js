import React from "react"
import { Button } from "@material-ui/core"


const QuadrantFooter = ({ onNewButtonClick, text = "new", frontDisplayed }) => {
  return (
    <div className={`quadrantFooter`}>
      <Button variant="contained" onClick={onNewButtonClick}>
        { frontDisplayed ? text : `back`}
      </Button>
    </div>
  );
};

export default QuadrantFooter