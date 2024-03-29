import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createTransform } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import reducer from "../reducers/reducer";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import pick from "lodash-es/pick";
declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION__?<R>(
    f1: { name: string },
    ...funcs: Array<() => void>
  ): (...args: any[]) => R;
};

const SetTransform = createTransform<string, any>(
  state => {
    const regPattert = /^member-\d+$/;
    const keys = Object.keys(state).filter((key: string) => {
      if (regPattert.test(key)) {
        return key;
      }
    });
    const arrKeys = ["ids", ...keys];
    return pick(state, arrKeys);
  },
  (outboundState, key) => {
    return { ...outboundState };
  },
  { whitelist: ["members"] }
);

const persistConfig: any = {
  key: "root",
  storage: storageSession,
  transforms: [SetTransform],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ name: "Members project" })
);
const persistor = persistStore(store);
export { store, persistor };
