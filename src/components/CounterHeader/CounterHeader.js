import React from "react";
import classes from "./CounterHeader.module.css";
const CounterHeader = (props) => {
  return (
    <div className={classes.CounterHeader}>
      <button onClick={() => props.onClick("inc", 1)}>Increment 1</button>
      <button onClick={() => props.onClick("dec", 1)}>Decrement 1</button>
      <button onClick={() => props.onClick("add", 5)}>Add 1</button>
      <button onClick={() => props.onClick("del", 5)}>Remove 1</button>
    </div>
  );
};

export default CounterHeader;