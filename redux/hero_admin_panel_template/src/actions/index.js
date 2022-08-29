export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const fetchingFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(dispatch(filtersFetchingError()));
};
export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

export const filtersFetched = (filters, active = "all") => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
    active,
  };
};

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};
export const filterHeroes = (name) => ({
  type: "HEROES_ELEMENT",
  payload: name,
});
export const heroCreated = (hero) => {
  return {
    type: "HERO_CREATED",
    payload: hero,
  };
};
export const heroDeleted = (id) => {
  return {
    type: "HERO_DELETED",
    payload: id,
  };
};
