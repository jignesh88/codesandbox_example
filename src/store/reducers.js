const initState = {
  counter: 0,
  records: []
};

const reducers = (state = initState, actions) => {
  switch (actions.type) {
    case "inc":
      return {
        ...state,
        counter: state.counter + actions.value
      };
    case "dec":
      return {
        ...state,
        counter: state.counter - actions.value
      };
    case "add":
      return {
        ...state,
        counter: state.counter + actions.value
      };
    case "del":
      return {
        ...state,
        counter: state.counter - actions.value
      };
    case "addcounter":
      return {
        ...state,
        records: state.records.concat(actions.value)
      };
    case "removecounter":
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

export default reducers;
