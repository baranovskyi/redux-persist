import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import reducer from "../reducers/reducer";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION__?<R>(
    f1: { name: string },
    ...funcs: Array<() => void>
  ): (...args: any[]) => R;
};

const persistConfig: any = {
  key: "root",
  storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ name: "Members project" })
);
const persistor = persistStore(store);
export { store, persistor };
