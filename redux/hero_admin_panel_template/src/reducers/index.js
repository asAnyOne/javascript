const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filtered: [],
  // water: [],
  // wind: [],
  // earth: [],
  // fire: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "HERO_CREATED":
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        filtered: [...state.filtered, state.filtered[0].element === action.payload.element ? action.payload : ""],
      };
    case "HERO_DELETED":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
        filtered: state.filtered.filter((hero) => hero.id !== action.payload),
      };
    case "ELEMENT_WATER":
      return {
        ...state,
        filtered: state.heroes.filter((hero) => hero.element === "water"),
      };
    case "ELEMENT_WIND":
      return {
        ...state,
        filtered: state.heroes.filter((hero) => hero.element === "wind"),
      };
    case "ELEMENT_EARTH":
      return {
        ...state,
        filtered: state.heroes.filter((hero) => hero.element === "earth"),
      };
    case "ELEMENT_FIRE":
      return {
        ...state,
        filtered: state.heroes.filter((hero) => hero.element === "fire"),
      };
    case "ELEMENT_ALL":
      return {
        ...state,
        filtered: [],
      };
    default:
      return state;
  }
};

export default reducer;
