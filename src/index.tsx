import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Members from "./components/Members";
import { createStore } from "redux";
import reducer from "./state/reducers/reducer";
import { Provider } from "react-redux";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION__?<R>(
    f1: { name: string },
    ...funcs: Array<() => void>
  ): (...args: any[]) => R;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ name: "Members project" })
);

const App = () => (
  <Provider store={store}>
    <Members />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
