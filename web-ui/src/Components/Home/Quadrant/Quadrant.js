import React, { useState } from "react"
import { Paper} from "@material-ui/core"
import QuadrantFooter from './QuadrantFooter'
import QuadrantHeader from './QuadrantHeader'
import QuadrantBody from './QuadrantBody'

export const Quadrant = ( { title, front, back, hasNew=true, onNewClick } ) => {
  const [showFront, setShowFront ] = useState(true)

  const flip = e => {
    e.preventDefault() 
    setShowFront(!showFront)
    if (typeof(onNewClick) == "function") {
      onNewClick(e) 
    }
  }

  return (
    <Paper className="quadrant__paper" elevation={4}>
      <QuadrantHeader title={title} />
      <QuadrantBody front={front} back={back} showFront={showFront} />
      {hasNew && (
        <QuadrantFooter
          onNewButtonClick={flip}
          frontDisplayed={showFront}
        />
      )}
    </Paper>
  );
}

export default Quadrant