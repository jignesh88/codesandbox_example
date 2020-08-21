import * as actionTypes from "../actions";

const initState = {
  records: []
};

const records = (state = initState, actions) => {
  switch (actions.type) {
    case actionTypes.ADD_COUNTER_RECORD:
      return {
        ...state,
        records: state.records.concat(actions.value)
      };
    case actionTypes.DEL_COUNTER_RECORD:
      const filteredRecords = state.records.filter(
        (f) => f.id !== actions.value.id
      );
      return {
        ...state,
        records: filteredRecords
      };
    default:
      return state;
  }
};

export default records;
