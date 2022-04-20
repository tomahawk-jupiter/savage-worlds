import initialState from "./initialState";

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "LOAD_NOTES":
      return action.notes;
    default:
      return state;
  }
};

export default notesReducer;
