import React from "react"
import { Button } from "@material-ui/core"


const QuadrantFooter = ({ onCreateNew, text = "new", frontDisplayed }) => {
  return (
    <div className={`quadrantFooter`}>
      <Button variant="contained" onClick={onCreateNew}>
        { frontDisplayed ? text : `back`}
      </Button>
    </div>
  );
};

export default QuadrantFooter