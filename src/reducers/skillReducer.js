import initialState from "./initialState";

const skillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.skill]: action.skillObj,
        },
        availablePoints: state.availablePoints - 1,
      };
    case "INCREASE_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.skill]: {
            ...state.skills[action.skill],
            score: state.skills[action.skill].score + 2,
          },
        },
        availablePoints: state.availablePoints - 1,
      };
    case "DECREASE_SKILL":
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.skill]: {
            ...state.skills[action.skill],
            score: state.skills[action.skill].score - 2,
          },
        },
        availablePoints: state.availablePoints + 1,
      };
    case "SAVE_SKILLS":
      return {
        ...state,
        saved: action.saved,
      };
    case "ADD_SKILL_POINT":
      return {
        ...state,
        availablePoints: state.availablePoints + 1,
      };
    case "REMOVE_SKILL_POINT":
      return {
        ...state,
        availablePoints: state.availablePoints - 1,
      };
    case "LOAD_SKILLS":
      return action.skills;
    default:
      return state;
  }
};

export default skillReducer;
