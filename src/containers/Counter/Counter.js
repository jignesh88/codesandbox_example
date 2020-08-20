import React, { useState } from "react";
import CounterHeader from "../../components/CounterHeader/CounterHeader";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

const Counter = (props) => {
  const [state, setState] = useState({
    counter: 0
  });

  const clickButtonHandler = (action, value) => {
    switch (action) {
      case "inc":
        props.incrementCounter(1);
        break;
      case "dec":
        props.decrementCounter(1);
        break;
      case "add":
        props.incrementCounter(10);
        break;
      case "del":
        props.decrementCounter(10);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <CounterHeader onClick={clickButtonHandler} />
      <CounterOutput counter={props.ctr} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
};

const mapsActionsToProps = (dispatch) => {
  return {
    incrementCounter: (val = 1) => dispatch({ type: "inc", value: val }),
    decrementCounter: (val = 1) => dispatch({ type: "dec", value: val })
  };
};

export default connect(mapStateToProps, mapsActionsToProps)(Counter);
