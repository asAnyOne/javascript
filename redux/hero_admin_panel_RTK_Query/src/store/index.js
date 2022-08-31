import { configureStore } from "@reduxjs/toolkit";

import filters from "../components/heroesFilters/filtersSlice";
import { apiSlice } from "../components/api/apiSlice";

const stringMiddleware = (store) => (dispatch) => (actions) => {
  if (typeof actions === "string") {
    return dispatch({ type: actions });
  } else {
    return dispatch(actions);
  }
};

const store = configureStore({
  reducer: { filters, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
