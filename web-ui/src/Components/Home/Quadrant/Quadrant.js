import React, { useState } from "react"
import { Paper} from "@material-ui/core"
import QuadrantFooter from './QuadrantFooter'
import QuadrantHeader from './QuadrantHeader'
import QuadrantBody from './QuadrantBody'

export const Quadrant = ( { title, front, back, hasNew=true, onCreateNew } ) => {
  const [showFront, setShowFront ] = useState(true)

  const onCreateNewClickEvent = (e) => {
    e.preventDefault() 
    onCreateNew(e)
    setShowFront(!showFront)
  } 

  return (
    <Paper className="quadrant__paper" elevation={4}>
      <QuadrantHeader title={title} />
      <QuadrantBody front={front} back={back} showFront={showFront} />
      {hasNew && <QuadrantFooter frontDisplayed={showFront} onNewButtonClick={onCreateNewClick} />}
    </Paper>
  );
}

export default Quadrant