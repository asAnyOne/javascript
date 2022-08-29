import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filtered: [],
  filtersLoadingStatus: "idle",
  activeClass: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading";
    },
    filtersFetched: (state, action) => {
      state.filtersLoadingStatus = "idle";
      state.filtered = action.payload;
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error";
    },
    filtersActive: (state, action) => {
      state.activeClass = action.payload;
    },
  },
});

const { reducer, actions } = filtersSlice;

export default reducer;

export const {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
  filtersActive,
} = actions;
