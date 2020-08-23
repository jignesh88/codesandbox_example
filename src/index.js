import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./store/reducers";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] dispatching", action);
      const result = next(action);
      console.log("[Middleware]", store.getState());
      return result;
    };
  };
};

const store = createStore(reducers, applyMiddleware(logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
