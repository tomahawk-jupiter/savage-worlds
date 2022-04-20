import initialState from "./initialState";

const ownedWeaponsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_WEAPON":
      return [...state, action.weapon];
    case "REMOVE_WEAPON_FROM_INVENTORY":
      const filtered = state.filter(
        (wpnObj) => wpnObj.item != action.weaponName
      );
      return filtered;
    case "EQUIP_WEAPON":
      const newArr = state.map((item) => {
        if (item.item === action.weapon) {
          return { ...item, equipped: true };
        } else {
          return { ...item };
        }
      });
      return newArr;
    case "UNEQUIP_WEAPON":
      const newArr2 = state.map((item) => {
        if (item.item === action.weapon) {
          return { ...item, equipped: false };
        } else {
          return item;
        }
      });
      return newArr2;
    case "LOAD_WEAPONS":
      return action.weapons;
    default:
      return state;
  }
};

export { ownedWeaponsReducer };
