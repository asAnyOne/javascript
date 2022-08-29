const initialState = {
  filtered: [],
  filtersLoadingStatus: "idle",
  activeClass: "all",
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERS_FETCHING":
      return {
        ...state,
        filtersLoadingStatus: "loading",
      };
    case "FILTERS_FETCHED":
      return {
        ...state,
        activeClass: action.active,
        filtered: action.payload,
        filtersLoadingStatus: "idle",
      };
    case "FILTERS_FETCHING_ERROR":
      return {
        ...state,
        filtersLoadingStatus: "error",
      };

    default:
      return state;
  }
};

export default filters;
