import React from "react";
import { connect } from "react-redux";
import Attribute from "./AttributeCard";
import "./attributes.css";

const AttributesPanel = ({
  saveAttributes,
  saved,
  attributes,
  availablePoints,
}) => {
  const toggleSaved = () => {
    if (availablePoints) {
      saveAttributes(!saved);
      return;
    }
    saveAttributes(true);
  };
  return (
    <div className="attributesPanel">
      <div className="titleRow">
        <span className="componentTitle">
          Attributes
          <sup onClick={toggleSaved} className="editBtn">
            Edit
          </sup>
        </span>
        {availablePoints > 0 && (
          <span className="available">{`${availablePoints} Available`}</span>
        )}
      </div>
      {(() => {
        const arr = [];
        for (const attr in attributes) {
          const uppercaseWord = attr.toUpperCase();
          arr.push(
            <Attribute
              key={attr}
              attribute={uppercaseWord}
              score={attributes[attr]}
              saved={saved}
              availablePoints={availablePoints}
            />
          );
        }
        return arr;
      })()}
      <hr />
      <span className="italicNote">
        Wild dice and aced rolls are already included.
      </span>
      {!saved && (
        <div onClick={toggleSaved} className="saveBtn center">
          Apply
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saved: state.attrState.saved,
    attributes: state.attrState.attributes,
    availablePoints: state.attrState.availablePoints,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAttributes: (saved) => dispatch({ type: "SAVE_ATTRIBUTES", saved }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributesPanel);
