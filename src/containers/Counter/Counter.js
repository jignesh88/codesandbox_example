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
      case "addcounter":
        props.addCounter({ id: new Date(), value: props.ctr });
        break;
      case "removecounter":
        props.removeCounter(value);
        break;
      default:
        break;
    }
  };

  const removeRecord = (item) => {
    props.removeCounter(item);
  };
  return (
    <div>
      <CounterHeader onClick={clickButtonHandler} />
      <CounterOutput counter={props.ctr} />
      <ul>
        {props.records.map((item) => (
          <li key={item.id} onClick={() => removeRecord(item)}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    records: state.records
  };
};

const mapsActionsToProps = (dispatch) => {
  return {
    incrementCounter: (val = 1) => dispatch({ type: "inc", value: val }),
    decrementCounter: (val = 1) => dispatch({ type: "dec", value: val }),
    addCounter: (val) => dispatch({ type: "addcounter", value: val }),
    removeCounter: (val) => dispatch({ type: "removecounter", value: val })
  };
};

export default connect(mapStateToProps, mapsActionsToProps)(Counter);
