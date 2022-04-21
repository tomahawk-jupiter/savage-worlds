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
    case "REMOVE_EQUIPMENT_ONE":
      const filteredList = state.map((i) => {
        if (i.item === action.item) {
          i.quantity -= 1;
          return i;
        }
        return i;
      });
      return filteredList[0] === undefined ? [] : filteredList;
    case "REMOVE_EQUIPMENT_LAST":
      return state.filter((i) => {
        return i.item !== action.item;
      });
    case "LOAD_EQUIPMENT":
      return action.equipment;
    default:
      return state;
  }
};

export default equipmentReducer;
