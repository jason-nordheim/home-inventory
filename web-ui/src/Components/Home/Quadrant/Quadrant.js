import React, { useState } from "react"
import { Paper} from "@material-ui/core"
import QuadrantFooter from './QuadrantFooter'
import QuadrantHeader from './QuadrantHeader'
import QuadrantBody from './QuadrantBody'

export const Quadrant = ( { title, front, back } ) => {
  const [displayFront, setDisplayFront ] = useState(true)

  const onCreateNew = (e) => {
    e.preventDefault() 
    setDisplayFront(!displayFront)
  } 

  return (
    <Paper className="quadrant__paper" elevation={4}>
      <QuadrantHeader title={title} /> 
      <QuadrantBody front={front} back={back} displayFront={displayFront} />
      <QuadrantFooter onCreateNew={onCreateNew} /> 
    </Paper>
  )
}

export default Quadrant