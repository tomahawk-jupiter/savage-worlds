import initialState from "./initialState";

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter((i, index) => index != action.index);
    case "LOAD_NOTES":
      return action.notes;
    default:
      return state;
  }
};

export default notesReducer;
