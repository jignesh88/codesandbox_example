import React from "react";
import CounterHeader from "../../components/CounterHeader/CounterHeader";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const Counter = (props) => {
  const clickButtonHandler = (action, value) => {
    switch (action) {
      case actionTypes.INCREMENT:
        props.incrementCounter(1);
        break;
      case actionTypes.DESCREMENT:
        props.decrementCounter(1);
        break;
      case actionTypes.ADDCOUNTER:
        props.incrementCounter(10);
        break;
      case actionTypes.DELCOUNTER:
        props.decrementCounter(10);
        break;
      case actionTypes.ADD_COUNTER_RECORD:
        props.addCounter({ id: new Date(), value: props.ctr });
        break;
      case actionTypes.DEL_COUNTER_RECORD:
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
  console.log(state);
  return {
    ctr: state.count.counter,
    records: state.rec.records
  };
};

const mapsActionsToProps = (dispatch) => {
  return {
    incrementCounter: (val = 1) =>
      dispatch({ type: actionTypes.INCREMENT, value: val }),
    decrementCounter: (val = 1) =>
      dispatch({ type: actionTypes.DECREMENT, value: val }),
    addCounter: (val) =>
      dispatch({ type: actionTypes.ADD_COUNTER_RECORD, value: val }),
    removeCounter: (val) =>
      dispatch({ type: actionTypes.DEL_COUNTER_RECORD, value: val })
  };
};

export default connect(mapStateToProps, mapsActionsToProps)(Counter);
