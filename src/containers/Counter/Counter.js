import React, { useState } from "react";
import CounterHeader from "../../components/CounterHeader/CounterHeader";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = (props) => {
  const [state, setState] = useState({
    counter: 0
  });

  const clickButtonHandler = (action, value) => {
    switch (action) {
      case "inc":
        setState({ counter: state.counter + value });
        break;
      case "dec":
        setState({ counter: state.counter - value });
        break;
      case "add":
        setState({ counter: state.counter + value });
        break;
      case "del":
        setState({ counter: state.counter - value });
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <CounterHeader onClick={clickButtonHandler} />
      <CounterOutput counter={state.counter} />
    </div>
  );
};

export default Counter;
