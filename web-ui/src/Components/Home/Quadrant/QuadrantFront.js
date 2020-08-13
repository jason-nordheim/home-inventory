import React from 'react' 

const QuadrantFront = ({ children, visible }) => (
  <div className={!visible ? `quadrantFront hide` : `quadrantFront `}>
    {children}
  </div>
);
 export default QuadrantFront