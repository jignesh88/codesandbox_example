import React from "react";
import classes from "./CounterHeader.module.css";
import Button from "@material-ui/core/Button";
import * as actionTypes from "../../store/actions/actions";

const CounterHeader = (props) => {
  return (
    <div className={classes.CounterHeader}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick(actionTypes.ADDCOUNTER, 1)}
      >
        Increment 1
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick(actionTypes.DELCOUNTER, 1)}
      >
        Decrement 1
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick(actionTypes.ADDCOUNTER, 5)}
      >
        Add 10
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick(actionTypes.DELCOUNTER, 5)}
      >
        Remove 10
      </Button>

      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick(actionTypes.ADD_COUNTER_RECORD, 5)}
      >
        Add Record to list
      </Button>
    </div>
  );
};

export default CounterHeader;
