import initialState from "./initialState";

const equipmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EQUIPMENT":
      let isNew = true;
      const equipmentList = state.map((item) => {
        if (item.item === action.item.item) {
          isNew = false;
          item.quantity += 1;
          return item;
        }
        return item;
      });
      return isNew ? [...state, action.item] : equipmentList;
    case "REMOVE_EQUIPMENT":
      const filteredList = state.map((i) => {
        if (i && i.item === action.item) {
          i.quantity = i.quantity - 1;
          if (i.quantity < 1) {
            return;
          }
          return i;
        }
        return i;
      });
      return filteredList[0] === undefined ? [] : filteredList;
    case "LOAD_EQUIPMENT":
      return action.equipment;
    default:
      return state;
  }
};

export default equipmentReducer;
