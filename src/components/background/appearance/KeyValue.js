import React, { useState } from "react";
import { connect } from "react-redux";

const KeyValue = ({ fieldName, appearance, updateAppearance }) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    // const newValues = { ...values, [e.target.name]: e.target.value };
    // setValues(newValues);
    updateAppearance({ [e.target.name]: e.target.value });
  };

  return (
    <div className="appearanceCard" onClick={handleEdit}>
      <span className="backgroundSpanKey">{fieldName + ":"}</span>
      {!edit && (
        <span className="backgroundSpanValue">
          {appearance[fieldName.toLowerCase()]}
        </span>
      )}
      {edit && (
        <div className="backgroundInputRow">
          <input
            autoFocus
            name={fieldName.toLowerCase()}
            className="backgroundTextInput"
            type="text"
            onChange={handleChange}
            value={appearance[fieldName.toLowerCase()]}
          />
          <span className="backgroundOkBtn">Ok</span>
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
