import React from "react";
import Children from "./Children";
import classes from "./Parent.module.css";

const Parent = (props) => {
  return (
    <div className={classes.sentence}>
      <p>Parent sentence</p>
      <Children />
    </div>
  );
};

export default Parent;
