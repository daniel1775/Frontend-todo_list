/* Import of the React module */
import React from "react";

/* Function children  passes components through properties */
const Section = ({ children }) => {
  return <div style={{ margin: "50px" }}>{children}</div>;
};

export default Section;
