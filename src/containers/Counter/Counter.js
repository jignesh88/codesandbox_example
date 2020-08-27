import React from "react";
import CounterHeader from "../../components/CounterHeader/CounterHeader";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actions";
import {
  increment,
  decrement,
  add_record,
  del_record
} from "../../store/actions/actions";

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
        props.onStoreResult({ id: new Date(), value: props.ctr });
        break;
      default:
        break;
    }
  };

  const removeRecord = (item) => {
    props.onDeleteResult(item);
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
  console.log("mapped state", state);
  return {
    ctr: state.counter,
    records: state.records
  };
};

const mapsActionsToProps = (dispatch) => {
  return {
    incrementCounter: (val = 1) => dispatch(increment(val)),
    decrementCounter: (val = 1) => dispatch(decrement(val)),
    addCounter: (val) => dispatch(increment(val)),
    removeCounter: (val) => dispatch(decrement(val)),
    onStoreResult: (val) => dispatch(add_record(val)),
    onDeleteResult: (val) => dispatch(del_record(val))
  };
};

export default connect(mapStateToProps, mapsActionsToProps)(Counter);
