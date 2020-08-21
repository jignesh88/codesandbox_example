import * as actionTypes from "../actions";

const initState = {
  counter: 0
};

const counter = (state = initState, actions) => {
  switch (actions.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + actions.value
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - actions.value
      };
    case actionTypes.ADDCOUNTER:
      return {
        ...state,
        counter: state.counter + actions.value
      };
    case actionTypes.DELCOUNTER:
      return {
        ...state,
        counter: state.counter - actions.value
      };
    default:
      return state;
  }
};

export default counter;
