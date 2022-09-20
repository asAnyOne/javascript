import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"; //createEntityAdapter uses for manupulate data as CRUD
import { useHttp } from "../../hooks/http.hook";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchHeroes",

  () => {
    const { request } = useHttp();
    return request("http://localhost:3001/heroes");
  }
);
const heroesAdapter = createEntityAdapter();
const initialState = heroesAdapter.getInitialState({
  heroesLoadingStatus: "idle",
});
const { selectAll } = heroesAdapter.getSelectors((state) => state.heroes);

export const filteredHeroesSelector = createSelector(
  (state) => state.filters.activeClass,
  selectAll,
  (activeClass, heroes) => {
    return activeClass === "all"
      ? heroes
      : heroes.filter((hero) => hero.element === activeClass);
  }
);

// const initialState = {
//   heroes: [],
//   heroesLoadingStatus: "idle",
// };

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroCreated: (state, action) => {
      heroesAdapter.addOne(state, action.payload);
      // state.heroes.push(action.payload);
    },
    heroDeleted: (state, action) => {
      heroesAdapter.removeOne(state, action.payload);
      // state.heroes = state.heroes.filter((hero) => hero.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.heroesLoadingStatus = "loading";
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        heroesAdapter.setAll(state, action.payload);
        // state.heroes = action.payload;
        state.heroesLoadingStatus = "idle";
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.heroesLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
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
