import {
  filtersFetched,
  filtersFetching,
  filtersFetchingError,
} from "../components/heroesFilters/filtersSlice";
import {
  heroesFetched,
  heroesFetching,
  heroesFetchingError,
} from "../components/heroesList/heroesSlice";

export const fetchingHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching); // TEST on reduxthunk in react store ,to dispatch function given as an argument , instead heroesFetching()
  request("http://localhost:3001/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const fetchingFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(dispatch(filtersFetchingError()));
};
// export const filtersFetching = () => {
//   return {
//     type: "FILTERS_FETCHING",
//   };
// };

// export const filtersFetched = (filters, active = "all") => {
//   return {
//     type: "FILTERS_FETCHED",
//     payload: filters,
//     active,
//   };
// };

// export const filtersFetchingError = () => {
//   return {
//     type: "FILTERS_FETCHING_ERROR",
//   };
// };
