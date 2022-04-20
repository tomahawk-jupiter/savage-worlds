import initialState from "./initialState";

const equipArmourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EQUIP_ARMOUR":
      return {
        ...state,
        [action.armour.cover]: {
          score: action.armour.score,
          type: action.armour.type,
        },
      };
    case "REMOVE_ARMOUR":
      return {
        ...state,
        [action.cover]: { score: 0, type: "" },
      };
    case "LOAD_EQUIPPED_ARMOUR":
      return action.equippedArmour;
    default:
      return state;
  }
};

// Armour in inventory //
const ownedArmourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARMOUR_TO_EQUIPPED":
      const newArr = state.map((item) => {
        if (item.item === action.item) {
          return { ...item, equipped: true };
        } else if (
          item.item !== action.item &&
          action.covers.includes(item.covers)
        ) {
          return { ...item, equipped: false };
        } else {
          return { ...item };
        }
      });
      return newArr;
    case "SET_ARMOUR_TO_REMOVED":
      const newArr2 = state.map((item) => {
        if (item.item === action.item) {
          return { ...item, equipped: false };
        } else {
          return item;
        }
      });
      return newArr2;
    case "BUY_ARMOUR":
      return [...state, action.newArmourItem];
    case "REMOVE_ARMOUR_FROM_INVENTORY":
      const filtered = state.filter(
        (armObj) => armObj.item != action.armourName
      );
      return filtered;
    case "LOAD_OWNED_ARMOUR":
      return action.ownedArmour;
    default:
      return state;
  }
};

export { equipArmourReducer, ownedArmourReducer };
