import * as actionTypes from "./actions/actionTypes";
import { updatdObject } from "./utility";

const initState = {
  counter: 0,
  records: []
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      console.log("action", action.value);
      return updatdObject(state, { counter: state.counter + action.value });
    case actionTypes.DECREMENT:
      return updatdObject(state, { counter: state.counter - action.value });
    case actionTypes.ADDCOUNTER:
      return updatdObject(state, { counter: state.counter + action.value });
    case actionTypes.DELCOUNTER:
      return updatdObject(state, { counter: state.counter - action.value });
    case actionTypes.ADD_COUNTER_RECORD:
      return updatdObject(state, {
        records: state.records.concat(action.value)
      });
    case actionTypes.DEL_COUNTER_RECORD:
      return updatdObject(state, {
        records: state.records.filter((item) => item.id !== action.value.id)
      });
    default:
      return state;
  }
};

export default counter;
