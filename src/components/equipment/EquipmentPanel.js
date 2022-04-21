import React, { useState } from "react";
import "./equipment.css";
import { connect } from "react-redux";

const EquipmentPanel = ({
  equipmentList,
  removeOne,
  removeLast,
  addEquipment,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");

  const handleToggleInput = () => {
    setShowInput(!showInput);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddEquipment = () => {
    const item = {
      item: text,
      price: 0,
      weight: 0,
      quantity: 1,
    };
    addEquipment(item);
    setText("");
    setShowInput(false);
  };

  const removeEquipment = (item) => {
    if (item.quantity > 1) {
      removeOne(item.item);
      return;
    }
    removeLast(item.item);
  };

  return (
    <div className="equipmentPanel">
      <div className="componentTitle">
        Equipment
        <sup onClick={handleToggleInput} className="editBtn">
          {showInput ? "Cancel" : "Add"}
        </sup>
      </div>
      {showInput && (
        <div className="newNoteInputGroup">
          <textarea
            autoFocus
            onFocus={(e) => {
              e.target.selectionStart = e.target.selectionEnd =
                e.target.value.length;
            }}
            onChange={handleChange}
            value={text}
          ></textarea>
          <button onClick={handleAddEquipment} className="newNoteBtn">
            Ok
          </button>
        </div>
      )}

      <ul className="equipmentList">
        {equipmentList.map((item, index) => {
          return (
            <li key={index} onClick={() => removeEquipment(item)}>
              <span className="equipmentName">{item.item}</span>
              <span className="equipmentQty">{"Qty " + item.quantity}</span>
            </li>
          );
        })}
      </ul>
      <div className="italicNote">Click item to remove.</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    equipmentList: state.equipment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeOne: (item) => dispatch({ type: "REMOVE_EQUIPMENT_ONE", item }),
    removeLast: (item) => dispatch({ type: "REMOVE_EQUIPMENT_LAST", item }),
    addEquipment: (item) => dispatch({ type: "ADD_EQUIPMENT", item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentPanel);
