import React from "react";

const QuadrantBack = ({ children, visible }) => (
  <div className={ !visible ? `quadrantBack hide` : `quadrantBack `}>{children}</div>
);

export default QuadrantBack