import React, { useState } from "react";
import { connect } from "react-redux";
import { skillList } from "../../../gameData/stockData";

/** SelectSkill component ***********************
 *
 * This is similar to the other trait cards
 * but its for selecting new skills to add.
 * It toggles a select element and loops through
 * a skill list to render the options.
 *
 ************************************************ */

const Option = ({ skillObj, skill }) => {
  return (
    <>
      <option
        value={skill}
      >{`${skillObj.name} (${skillObj.attribute})`}</option>
    </>
  );
};

const SelectSkill = ({ showOptions, toggleOptions, addSkill, knownSkills }) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedObj, setSelectedObj] = useState("");
  const [selectOn, setSelectOn] = useState(false);

  const handleToggle = () => {
    toggleOptions();
    setSelectOn(!selectOn);
  };

  const handleSelect = (e) => {
    const skill = e.target.value;
    const skillObj = skillList[skill];
    setSelectedSkill(skill);
    setSelectedObj(skillObj);
  };

  const confirmChoice = () => {
    // Add skill to state //
    addSkill(selectedSkill, selectedObj);
    setSelectedSkill("");
    setSelectedObj("");
    toggleOptions();
    setSelectOn(false);
  };

  return (
    <div className="traitCard">
      <div className="button minus center hideBtn">-</div>
      <div className="traitDice center hideBtn">0</div>
      {!showOptions && <div className="attributeName">Add Skill</div>}
      {showOptions && (
        <select onChange={handleSelect} name="skills" id="skill-select">
          <option value="">--New Skill--</option>
          {(() => {
            const arr = [];
            for (const skill in skillList) {
              // if skill is not already stored in state //
              if (!knownSkills.hasOwnProperty(skill)) {
                arr.push(
                  <Option
                    skillObj={skillList[skill]}
                    skill={skill}
                    key={skill}
                    selectedSkill={selectedSkill}
                  />
                );
              }
            }
            return arr;
          })()}
        </select>
      )}
      {!selectedSkill && (
        <div
          onClick={handleToggle}
          className={`button ${selectOn ? "minus" : "plus"} center`}
        >
          {`${selectOn ? "-" : "+"}`}
        </div>
      )}
      {selectedSkill && (
        <div onClick={confirmChoice} className={`button plus center`}>
          +
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSkill: (skill, skillObj) =>
      dispatch({
        type: "ADD_SKILL",
        skill,
        skillObj,
      }),
  };
};

const mapStateToProps = (state) => {
  return {
    knownSkills: state.skillState.skills,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectSkill);
