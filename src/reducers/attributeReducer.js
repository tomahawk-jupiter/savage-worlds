import initialState from "./initialState";

const attributeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_ATTRIBUTE":
      return {
        ...state,
        attributes: {
          ...state.attributes,
          [action.attribute]: state.attributes[action.attribute] + 2,
        },
        availablePoints: state.availablePoints - 1,
      };
    case "DECREASE_ATTRIBUTE":
      return {
        ...state,
        attributes: {
          ...state.attributes,
          [action.attribute]: state.attributes[action.attribute] - 2,
        },
        availablePoints: state.availablePoints + 1,
      };
    case "SAVE_ATTRIBUTES":
      return {
        ...state,
        saved: action.saved,
      };
    case "ADD_ATTRIBUTE_POINT":
      return {
        ...state,
        availablePoints: state.availablePoints + 1,
      };
    case "REMOVE_ATTRIBUTE_POINT":
      return {
        ...state,
        availablePoints: state.availablePoints - 1,
      };
    case "LOAD_ATTRIBUTES":
      return action.attributes;
    default:
      return state;
  }
};

export default attributeReducer;
