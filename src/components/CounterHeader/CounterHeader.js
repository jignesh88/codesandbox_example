import React from "react";
import classes from "./CounterHeader.module.css";
import * as actionTypes from "../../store/actions";

const CounterHeader = (props) => {
  return (
    <div className={classes.CounterHeader}>
      <button onClick={() => props.onClick(actionTypes.INCREMENT, 1)}>
        Increment 1
      </button>
      <button onClick={() => props.onClick(actionTypes.DECREMENT, 1)}>
        Decrement 1
      </button>
      <button onClick={() => props.onClick(actionTypes.ADDCOUNTER, 5)}>
        Add 5
      </button>
      <button onClick={() => props.onClick(actionTypes.DELCOUNTER, 5)}>
        Remove 5
      </button>

      <button onClick={() => props.onClick(actionTypes.ADD_COUNTER_RECORD)}>
        Add Counter
      </button>
    </div>
  );
};

export default CounterHeader;
