import React, { useState } from "react";
import "./skillPanel.css";
import SkillCard from "./subComponents/SkillCard";
import SelectSkill from "./subComponents/SelectSkill";
import { connect } from "react-redux";

const SkillPanel = ({ skills, availablePoints, saved, saveSkills }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleEdit = () => {
    if (availablePoints) {
      saveSkills(!saved);
      return;
    }
    saveSkills(true);
  };

  return (
    <div className="skillPanel">
      <div className="titleRow">
        <span className="componentTitle">
          Skills
          <sup onClick={toggleEdit} className="editBtn">
            Edit
          </sup>
        </span>
        {availablePoints > 0 && (
          <span className="available">{`${availablePoints} Available`}</span>
        )}
      </div>
      <div className="cardWrapper">
        {(() => {
          const arr = [];
          // Sort skills into alphabetical order //
          const orderedSkills = Object.fromEntries(
            Object.entries(skills).sort()
          );
          for (const skill in orderedSkills) {
            arr.push(
              <SkillCard
                key={skill}
                skill={skill}
                skillObj={skills[skill]}
                availablePoints={availablePoints}
                saved={saved}
              />
            );
          }
          return arr;
        })()}
        {!saved && availablePoints > 0 && (
          <SelectSkill
            showOptions={showOptions}
            toggleOptions={toggleOptions}
          />
        )}
      </div>
      <hr />
      <div className="italicNote">
        Add skills. Click to roll, click again to reset.
      </div>
      <div className="italicNote">
        <strong>Rules: </strong>skills should not be increased higher than the
        associated attribute.
      </div>
      {!saved && !!availablePoints && (
        <div onClick={toggleEdit} className="saveBtn center">
          Apply
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    skills: state.skillState.skills,
    availablePoints: state.skillState.availablePoints,
    saved: state.skillState.saved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveSkills: (saved) => dispatch({ type: "SAVE_SKILLS", saved }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillPanel);
