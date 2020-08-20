import React from "react"
import { Button } from "@material-ui/core"


const QuadrantFooter = ({ onNewButtonClick, text = "new", frontDisplayed, deleteSelected, deleteDisabled}) => {
  return (
    <div className={`quadrantFooter`}>
      <Button variant="contained" onClick={onNewButtonClick}>
        { frontDisplayed ? text : `back`}
      </Button>
      { frontDisplayed ? (
        <Button variant="contained" onClick={() => deleteSelected()} disabled={deleteDisabled} >
          Delete
        </Button>
      ) : null }
      
    </div>
  );
};

export default QuadrantFooter