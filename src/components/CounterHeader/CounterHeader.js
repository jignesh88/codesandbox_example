import React from "react";
import classes from "./CounterHeader.module.css";
import Button from "@material-ui/core/Button";

const CounterHeader = (props) => {
  return (
    <div className={classes.CounterHeader}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick("inc", 1)}
      >
        Increment 1
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick("dec", 1)}
      >
        Decrement 1
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick("add", 5)}
      >
        Add 10
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => props.onClick("del", 5)}
      >
        Remove 10
      </Button>
    </div>
  );
};

export default CounterHeader;
