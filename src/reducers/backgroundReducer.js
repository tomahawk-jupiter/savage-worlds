import initialState from "./initialState";

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPEARANCE":
      return {
        ...state,
        appearance: { ...state.appearance, ...action.appearance },
      };
    case "ADD_PERSONALITY":
      return {
        ...state,
        personality: action.personality,
      };
    case "ADD_BACKSTORY":
      return {
        ...state,
        backstory: action.backstory,
      };
    case "LOAD_BACKGROUND":
      return action.background;
    default:
      return state;
  }
};

export default backgroundReducer;
