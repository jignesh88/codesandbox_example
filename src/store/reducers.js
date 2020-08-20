const initState = {
  counter: 0
};

const reducers = (state = initState, actions) => {
  switch (actions.type) {
    case "inc":
      return {
        counter: state.counter + actions.value
      };
    case "dec":
      return {
        counter: state.counter - actions.value
      };
    case "add":
      return {
        counter: state.counter + actions.value
      };
    case "del":
      return {
        counter: state.counter - actions.value
      };
    default:
      return state;
  }
};

export default reducers;
