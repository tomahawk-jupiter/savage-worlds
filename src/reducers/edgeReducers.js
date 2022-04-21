import initialState from "./initialState";

const edgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EDGE":
      return {
        available: state.available - 1,
        array: [...state.array, action.edge],
      };
    case "ADD_EDGE_POINT":
      return {
        ...state,
        available: state.available + 1,
      };
    case "REMOVE_EDGE_POINT":
      return {
        ...state,
        available: state.available - 1,
      };
    case "LOAD_EDGES":
      return action.edges;
    default:
      return state;
  }
};

const hindranceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HINDRANCE":
      return {
        available: state.available - 1,
        array: [...state.array, action.hindrance],
      };
    case "ADD_HINDRANCE_POINT":
      return {
        ...state,
        available: state.available + 1,
      };
    case "REMOVE_HINDRANCE_POINT":
      return {
        ...state,
        available: state.available - 1,
      };
    case "LOAD_HINDRANCES":
      return action.hindrances;
    default:
      return state;
  }
};

export { edgeReducer, hindranceReducer };
