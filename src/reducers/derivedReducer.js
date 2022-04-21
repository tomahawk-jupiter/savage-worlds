import initialState from "./initialState";

const derivedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_STAT":
      return {
        ...state,
        [action.stat]: state[action.stat] + 1,
      };
    case "DEC_STAT":
      return {
        ...state,
        [action.stat]: state[action.stat] - 1,
      };
    default:
      return state;
  }
};

export { derivedReducer };
