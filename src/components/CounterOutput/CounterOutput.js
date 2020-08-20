import React from "react";
import classes from "./CounterOutput.module.css";
const CounterOutput = (props) => {
  return (
    <div className={classes.CounterOutput}>
      <h3>{props.counter}</h3>
    </div>
  );
};

export default CounterOutput;
