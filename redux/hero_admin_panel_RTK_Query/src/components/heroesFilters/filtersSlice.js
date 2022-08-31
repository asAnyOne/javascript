import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
});

const { reducer, actions } = filtersSlice;

export default reducer;

export const { filtersActive } = actions;
