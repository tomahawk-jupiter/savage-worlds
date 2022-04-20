import React from "react";
import { connect } from "react-redux";

const MeleeTableRow = ({
  weapon,
  page,
  buyWeapon,
  equipWeapon,
  unequipWeapon,
}) => {
  const handleBuy = () => {
    const newWeapon = weapon;
    newWeapon.equipped = false;
    buyWeapon(newWeapon);
  };

  const handleEquip = () => {
    if (!weapon.equipped) {
      equipWeapon(weapon.item);
    }
    if (weapon.equipped) {
      unequipWeapon(weapon.item);
    }
  };

  return (
    <tr>
      <td>{weapon.item}</td>
      <td>{weapon.range}</td>
      <td>{weapon.damage}</td>
      <td>{weapon.ap}</td>
      <td>{weapon.notes}</td>
      {page === "shop" && <td>{weapon.price}</td>}
      <td>
        {page === "shop" ? (
          <button onClick={handleBuy} className="equipBtn">
            Buy
          </button>
        ) : (
          <button onClick={handleEquip} className="equipBtn">
            {weapon.equipped ? "Store" : "Carry"}
          </button>
        )}
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyWeapon: (weapon) => dispatch({ type: "ADD_NEW_WEAPON", weapon }),
    equipWeapon: (weapon) => dispatch({ type: "EQUIP_WEAPON", weapon }),
    unequipWeapon: (weapon) => dispatch({ type: "UNEQUIP_WEAPON", weapon }),
  };
};

export default connect(null, mapDispatchToProps)(MeleeTableRow);
