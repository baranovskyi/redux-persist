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
  // transform state on its way to being serialized and persisted.
  (state, key) => {
    console.log(state);
    console.log("key: ", key);

    function filterMembers(state: Members): Array<string> {
      let arrKeys: Array<string> = ["ids"];
      if (state.ids) {
        state.ids.filter((item: number) => {
          if (Object.keys(state[`member-${item}`])) {
            arrKeys.push(`member-${item}`);
          }
        });
      }
      return arrKeys;
    }
    let newState = pick(state, filterMembers(state));
    return { ...newState };
  },
  (state, key) => {
    return { ...state };
  }
);

const persistConfig: any = {
  key: "root",
  storage: storageSession,
  transform: [SetTransform],
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
