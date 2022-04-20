import React, { useState } from "react";
import { connect } from "react-redux";
import ArmourTableRow from "./ArmourTableRow";

const ArmourTable = ({
  armourStock,
  ownedArmour,
  page,
  addArmourToInventory,
}) => {
  const [showArmour, setShowArmour] = useState(true);
  const [showInputs, setShowInputs] = useState(false);
  const [armourObj, setArmourObj] = useState({
    item: "",
    armour: "",
    covers: "",
    notes: "",
    equipped: false,
  });
  const [checkBoxData, setCheckBoxData] = useState({
    head: false,
    torso: false,
    arms: false,
    legs: false,
  });

  const handleCheckBox = (e) => {
    const newData = {
      ...checkBoxData,
      [e.target.name]: !checkBoxData[e.target.name],
    };
    setCheckBoxData(newData);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = name === "armour" ? Number(e.target.value) : e.target.value;
    setArmourObj({ ...armourObj, [name]: value });
  };

  const handleAddArmour = () => {
    let coversArray = [];
    for (const cover in checkBoxData) {
      if (checkBoxData[cover]) {
        coversArray.push(cover);
      }
    }
    const covers = coversArray.join(", ");
    addArmourToInventory({ ...armourObj, covers: covers });
    setArmourObj({
      item: "",
      armour: "",
      covers: "",
      notes: "",
      equipped: false,
    });
    setCheckBoxData({
      head: false,
      torso: false,
      arms: false,
      legs: false,
    });
    setShowInputs(false);
  };

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              className="tableTitle"
              colSpan="6"
              onClick={() => setShowArmour(!showArmour)}
            >
              Armour<sup className="tableEditBtn">Show/hide</sup>
            </th>
          </tr>
          <tr>
            <th>Type</th>
            <th>Armour</th>
            <th>Covers</th>
            <th>Notes</th>
            {page === "shop" && <th>Cost</th>}
          </tr>
        </thead>
        {showArmour && (
          <tbody>
            {armourStock.map((item, index) => {
              if (
                ownedArmour &&
                ownedArmour.some((e) => e.item === item.item)
              ) {
                return;
              }
              return (
                <ArmourTableRow key={index + page} item={item} page={page} />
              );
            })}

            {/* This will be the new item input */}
            {page !== "shop" && showInputs && (
              <tr>
                <td>
                  <input
                    onChange={handleInputChange}
                    name="item"
                    className="newItemTableInput"
                    type="text"
                    placeholder="Armour name"
                    value={armourObj.item}
                  />
                </td>
                <td>
                  <input
                    onChange={handleInputChange}
                    name="armour"
                    className="newItemTableInput"
                    type="text"
                    placeholder="Armour score"
                    value={armourObj.armour}
                  />
                </td>

                <td>
                  <div className="checkboxGroup">
                    <div>
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        id="head"
                        name="head"
                        checked={checkBoxData.head}
                      />
                      <label htmlFor="head">Head</label>
                    </div>
                    <div>
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        id="torso"
                        name="torso"
                        checked={checkBoxData.torso}
                      />
                      <label htmlFor="torso">Torso</label>
                    </div>
                    <div>
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        id="arms"
                        name="arms"
                        checked={checkBoxData.arms}
                      />
                      <label htmlFor="arms">Arms</label>
                    </div>
                    <div>
                      <input
                        onChange={handleCheckBox}
                        type="checkbox"
                        id="legs"
                        name="legs"
                        checked={checkBoxData.legs}
                      />
                      <label htmlFor="legs">Legs</label>
                    </div>
                  </div>
                </td>

                <td>
                  <input
                    onChange={handleInputChange}
                    name="notes"
                    className="newItemTableInput"
                    type="text"
                    placeholder="Notes"
                    value={armourObj.notes}
                  />
                </td>
                <td>
                  <button onClick={handleAddArmour} className="equipBtn">
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
          Add New Armour
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addArmourToInventory: (newArmourItem) =>
      dispatch({ type: "BUY_ARMOUR", newArmourItem }),
  };
};

export default connect(null, mapDispatchToProps)(ArmourTable);
