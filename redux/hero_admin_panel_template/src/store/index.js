import { createStore, combineReducers, compose } from "redux";

import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

const enhancer = //enhancer protects when we have written string in dispatch instead of object

    (createStore) =>
    (...arg) => {
      const store = createStore(...arg);
      const oldDispatch = store.dispatch;
      store.dispatch = (actions) => {
        if (typeof actions === "string") {
          return oldDispatch({ type: actions });
        } else {
          return oldDispatch(actions);
        }
      };
      return store;
    };
const store = createStore(
  combineReducers({ filters, heroes }),
  compose(
    //   compose functions in redux
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
