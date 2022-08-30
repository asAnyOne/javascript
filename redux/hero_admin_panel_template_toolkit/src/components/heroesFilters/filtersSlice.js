import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../../hooks/http.hook";

export const fetchFilters = createAsyncThunk("filters/fetchFilters", () => {
  const { request } = useHttp();
  return request("http://localhost:3001/filters");
});

const initialState = {
  filtered: [],
  filtersLoadingStatus: "idle",
  activeClass: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersActive: (state, action) => {
      state.activeClass = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filtersLoadingStatus = "idle";
        state.filtered = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filtersLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
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
