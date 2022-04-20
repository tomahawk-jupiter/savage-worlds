import React, { useState } from "react";
import { connect } from "react-redux";
import RangedTableRow from "./RangedTableRow";

const RangedTable = ({
  rangedWeapons,
  page,
  carriedWeapons,
  addWeaponToInventory,
}) => {
  const [showRanged, setShowRanged] = useState(true);
  const [showInputs, setShowInputs] = useState(false);
  const [weaponObj, setWeaponObj] = useState({
    item: "",
    range: "",
    damage: "",
    ap: "",
    rof: "",
    shots: "",
    notes: "",
    equipped: false,
  });

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  const handleChangeWeaponObj = (e) => {
    const key = e.target.id;
    const value =
      key === "rof" || key === "shots" || key === "ap"
        ? Number(e.target.value)
        : e.target.value;
    setWeaponObj({
      ...weaponObj,
      [key]: value,
    });
  };

  const handleAddWeapon = () => {
    console.log("add new weapons");
    console.log(weaponObj);
    addWeaponToInventory(weaponObj);
    setShowInputs(false);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              className="tableTitle"
              colSpan="9"
              onClick={() => setShowRanged(!showRanged)}
            >
              {page === "shop" ? "Ranged" : "Weapons"}
              <sup className="tableEditBtn">Show/hide</sup>
            </th>
          </tr>
          <tr>
            <th>Weapon</th>
            <th>Range</th>
            <th>Damage</th>
            <th>AP</th>
            <th>ROF</th>
            <th>Shots</th>
            <th>Notes</th>
            {page === "shop" && <th>Price</th>}
          </tr>
        </thead>
        {showRanged && (
          <tbody>
            {rangedWeapons.map((weapon, index) => {
              if (
                carriedWeapons &&
                carriedWeapons.some((e) => e.item === weapon.item)
              ) {
                return;
              }
              return (
                <RangedTableRow
                  key={index + page}
                  page={page}
                  weapon={weapon}
                />
              );
            })}

            {/* This will be the new item input */}
            {page !== "shop" && showInputs && (
              <tr>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="Weapon"
                    id="item"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.item}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="Range"
                    id="range"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.range}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="Damage"
                    id="damage"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.damage}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="AP"
                    id="ap"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.ap}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="RoF"
                    id="rof"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.rof}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="Shots"
                    id="shots"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.shots}
                  />
                </td>
                <td>
                  <input
                    className="newItemTableInput"
                    type="text"
                    placeholder="Notes"
                    id="notes"
                    onChange={handleChangeWeaponObj}
                    value={weaponObj.notes}
                  />
                </td>
                <td>
                  <button onClick={handleAddWeapon} className="equipBtn">
                    Add
                  </button>
                </td>
              </tr>
            )}
            {/* End of input row */}
          </tbody>
        )}
      </table>
      {!showInputs && page !== "shop" && (
        <div className="tableToggleInputsBtn" onClick={toggleInputs}>
          Add New Weapon
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWeaponToInventory: (weapon) =>
      dispatch({ type: "ADD_NEW_WEAPON", weapon }),
  };
};

export default connect(null, mapDispatchToProps)(RangedTable);
