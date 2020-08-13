import React from "react"
import { Button } from "@material-ui/core"


const QuadrantFooter = ( { onCreateNew } ) => {
  return (
    <div className="quadrantFooter">
      <Button variant="contained" onClick={onCreateNew}>New</Button>
    </div>
  )
}

export default QuadrantFooter