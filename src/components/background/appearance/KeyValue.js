import React, { useState } from "react";
import { connect } from "react-redux";

const KeyValue = ({ fieldName, appearance, updateAppearance }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleHide = () => {
    setEdit(false);
  };

  const handleChange = (e) => {
    updateAppearance({ [e.target.name]: e.target.value });
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
    }
  };

  return (
    <div className="appearanceCard">
      <span onClick={handleEdit} className="backgroundSpanKey">
        {fieldName + ":"}
      </span>
      {!edit && (
        <span onClick={handleEdit} className="backgroundSpanValue">
          {appearance[fieldName.toLowerCase()]}
        </span>
      )}
      {edit && (
        <div className="backgroundInputRow">
          <input
            autoFocus
            onFocus={(e) => e.target.select()}
            name={fieldName.toLowerCase()}
            className="backgroundTextInput"
            type="text"
            onChange={handleChange}
            value={appearance[fieldName.toLowerCase()]}
            onKeyPress={handleEnterKey}
          />
          <span onClick={handleHide} className="backgroundOkBtn">
            Ok
          </span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appearance: state.background.appearance,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateAppearance: (appearance) =>
      dispatch({ type: "ADD_APPEARANCE", appearance }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyValue);
