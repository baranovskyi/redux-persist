import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Members from "./components/Members";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./state/store/configureStore";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION__?<R>(
    f1: { name: string },
    ...funcs: Array<() => void>
  ): (...args: any[]) => R;
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Members />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
