import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createTransform } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import reducer from "../reducers/reducer";
import { Members, AppState } from "../model/types";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import pick from "lodash-es/pick";
declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION__?<R>(
    f1: { name: string },
    ...funcs: Array<() => void>
  ): (...args: any[]) => R;
};

const SetTransform = createTransform<any, any>(
  state => {
    const arrKeys = ["ids"];
    state.ids.filter((item: number) => {
      if (Object.keys(state[`member-${item}`])) {
        arrKeys.push(`member-${item}`);
      }
    });
    return pick(state, arrKeys);
  },
  (outboundState, key) => {
    // convert mySet back to a Set.
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
