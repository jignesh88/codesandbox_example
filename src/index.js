import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import counter from "./store/reducers/counter";
import records from "./store/reducers/records";

const reducers = combineReducers({
  rec: records,
  count: counter
});
const store = createStore(reducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
