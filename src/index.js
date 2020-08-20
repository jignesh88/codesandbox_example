import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./store/reducers";

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
