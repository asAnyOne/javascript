import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import filters from "../reducers/filters";
import heroes from "../reducers/heroes";

// const enhancer = //enhancer protects when we have written string in dispatch instead of object

//     (createStore) =>
//     (...arg) => {
//       const store = createStore(...arg);
//       const oldDispatch = store.dispatch;
//       store.dispatch = (actions) => {
//         if (typeof actions === "string") {
//           return oldDispatch({ type: actions });
//         } else {
//           return oldDispatch(actions);
//         }
//       };
//       return store;
//     };

const stringMiddleware = (store) => (dispatch) => (actions) => {
  if (typeof actions === "string") {
    return dispatch({ type: actions });
  } else {
    return dispatch(actions);
  }
};
const store = createStore(
  combineReducers({ filters, heroes }),
  compose(
    //   compose functions in redux
    // enhancer,
    applyMiddleware(ReduxThunk, stringMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
