import initialState from "./initialState";

const characterInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHARACTER_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "ADD_CHARACTER_PROFESSION":
      return {
        ...state,
        profession: action.profession,
      };
    case "ADD_XP":
      return {
        ...state,
        xp: state.xp + 1,
        rank: action.rank,
      };
    case "MINUS_XP":
      return {
        ...state,
        xp: state.xp > 0 ? state.xp - 1 : 0,
        rank: action.rank,
      };
    case "LOAD_INFO":
      return action.info;
    default:
      return state;
  }
};

export default characterInfoReducer;
