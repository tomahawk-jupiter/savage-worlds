import React from "react";
import { connect } from "react-redux";

const ArmourTableRow = ({
  item,
  page,
  setArmourItemTrue,
  setArmourItemFalse,
  removeArmour,
  buyArmour,
  equipArmour,
  removeArmourFromInventory,
}) => {
  const handleEquip = (item) => {
    if (item.equipped) {
      setArmourItemFalse(item.item);
      const arr = item.covers.split(", ");
      arr.map((bodyArea) => {
        removeArmour(bodyArea);
      });
    }
    if (!item.equipped) {
      setArmourItemTrue(item.item, item.covers);

      const arr = item.covers.split(", ");
      arr.map((bodyArea) => {
        const armour = {
          cover: bodyArea,
          score: item.armour,
          type: item.item,
        };
        equipArmour(armour);
      });
    }
  };

  const handleBuy = (item) => {
    const newArmourItem = item;
    newArmourItem.equipped = false;
    buyArmour(newArmourItem);
  };

  const handleRemove = (armourName) => {
    removeArmourFromInventory(armourName);
  };

  return (
    <tr>
      <td>
        {item.item}
        {page !== "shop" && (
          <sup onClick={() => handleRemove(item.item)} className="editBtn">
            Del
          </sup>
        )}
      </td>
      <td>{item.armour}</td>
      <td>{item.covers}</td>
      <td>{item.notes}</td>
      {page === "shop" && <td>{item.price}</td>}
      <td>
        {page === "inventory" ? (
          <button onClick={() => handleEquip(item)} className="equipBtn">
            {item.equipped ? "Remove" : "Equip"}
          </button>
        ) : (
          <button onClick={() => handleBuy(item)} className="equipBtn">
            Buy
          </button>
        )}
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setArmourItemTrue: (item, covers) =>
      dispatch({ type: "SET_ARMOUR_TO_EQUIPPED", item, covers }),
    setArmourItemFalse: (item) =>
      dispatch({ type: "SET_ARMOUR_TO_REMOVED", item }),
    removeArmour: (cover) => dispatch({ type: "REMOVE_ARMOUR", cover }),
    buyArmour: (newArmourItem) =>
      dispatch({ type: "BUY_ARMOUR", newArmourItem }),
    equipArmour: (armour) => dispatch({ type: "EQUIP_ARMOUR", armour }),
    removeArmourFromInventory: (armourName) =>
      dispatch({ type: "REMOVE_ARMOUR_FROM_INVENTORY", armourName }),
  };
};

export default connect(null, mapDispatchToProps)(ArmourTableRow);
