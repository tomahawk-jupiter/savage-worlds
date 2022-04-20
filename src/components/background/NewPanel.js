import React, { useState } from "react";
import { connect } from "react-redux";

const NewPanel = ({
  personality,
  backstory,
  addPersonality,
  addBackstory,
  panel,
}) => {
  const [edit, setEdit] = useState(false);

  const handlePersonalityEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    if (panel === "Personality") {
      addPersonality(e.target.value);
    }
    if (panel === "Backstory") {
      addBackstory(e.target.value);
    }
  };

  return (
    <div className="personalityPanel">
      <span className="componentTitle">
        {panel}
        <sup onClick={handlePersonalityEdit} className="editBtn">
          {edit ? "Done" : "Edit"}
        </sup>
      </span>
      {!edit && (
        <span className="backgroundSpanValue">
          {panel === "Personality" ? personality : backstory}
        </span>
      )}
      {edit && (
        <textarea
          autoFocus
          onFocus={(e) => {
            e.target.selectionStart = e.target.selectionEnd =
              e.target.value.length;
          }}
          onChange={handleChange}
          value={panel === "Personality" ? personality : backstory}
        ></textarea>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    personality: state.background.personality,
    backstory: state.background.backstory,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPersonality: (personality) =>
      dispatch({ type: "ADD_PERSONALITY", personality }),
    addBackstory: (backstory) => dispatch({ type: "ADD_BACKSTORY", backstory }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPanel);
