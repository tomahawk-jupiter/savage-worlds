import initialState from "./initialState";

const conditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INCAPACITATED":
      return {
        ...state,
        incapacitated: action.value,
      };
    case "SET_WOUNDS":
      return {
        ...state,
        wounds: action.value,
      };
    case "SET_FATIGUE":
      return {
        ...state,
        fatigue: action.value,
      };
    case "LOAD_CONDITION":
      return action.condition;
    default:
      return state;
  }
};

export default conditionReducer;
