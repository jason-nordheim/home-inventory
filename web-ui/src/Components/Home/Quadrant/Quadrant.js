import React, { useState } from "react"
import { Paper} from "@material-ui/core"
import QuadrantFooter from './QuadrantFooter'
import QuadrantHeader from './QuadrantHeader'
import QuadrantBody from './QuadrantBody'

export const Quadrant = ( { title, front, back, hasNew=true, onCreateNew=null } ) => {
  const [showFront, setShowFront ] = useState(true)

  const onCreateNewClickEvent = (e) => {
    e.preventDefault() 

    /*  Only Execute if function is provided */
    if (typeof(onCreateNew) === "function") {
      onCreateNew(e);
    }
    setShowFront(!showFront)
  } 

  return (
    <Paper className="quadrant__paper" elevation={4}>
      <QuadrantHeader title={title} />
      <QuadrantBody front={front} back={back} showFront={showFront} />
      {hasNew && (
        <QuadrantFooter
          frontDisplayed={showFront}
          onNewButtonClick={onCreateNewClickEvent}
        />
      )}
    </Paper>
  );
}

export default Quadrant