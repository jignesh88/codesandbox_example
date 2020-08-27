import * as actionTypes from "./actions/actions";

const initState = {
  counter: 0,
  records: []
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.DESCREMENT:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.ADDCOUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.DELCOUNTER:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.ADD_COUNTER_RECORD:
      return {
        ...state,
        records: state.records.concat(action.value)
      };
    case actionTypes.DEL_COUNTER_RECORD:
      return {
        ...state,
        records: state.records.fill((item) => item.id !== action.value)
      };
    default:
      return state;
  }
};

export default counter;
