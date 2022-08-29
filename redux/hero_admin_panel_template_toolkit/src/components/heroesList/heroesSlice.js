import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  heroesFetchingStatus: "idle",
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroesFetching: (state) => {
      state.heroesFetchingStatus = "loading";
    },
    heroesFetched: (state, action) => {
      state.heroesFetchingStatus = "idle";
      state.heroes = action.payload;
    },
    heroesFetchingError: (state) => {
      state.heroesFetchingStatus = "error";
    },
    heroCreated: (state, action) => {
      state.heroes.push(action.payload);
    },
    heroDeleted: (state, action) => {
      state.heroes = state.heroes.filter((hero) => hero.id !== action.payload);
    },
  },
});

const { reducer, actions } = heroesSlice;

export default reducer;

export const {
  heroCreated,
  heroDeleted,
  heroesFetched,
  heroesFetching,
  heroesFetchingError,
} = actions;
