import React from "react"
import { Button } from "@material-ui/core"


const QuadrantFooter = ( { onCreateNew, text="new" } ) => {
  return (
    <div className="quadrantFooter">
      <Button variant="contained" onClick={onCreateNew}>{text}</Button>
    </div>
  )
}

export default QuadrantFooter