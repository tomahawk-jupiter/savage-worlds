import React, { useState } from "react";
import { connect } from "react-redux";
import skillList from "../../../gameData/skillList";

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
  const [isKnowledge, setIsKnowledge] = useState(false);
  const [isCustom, setIsCustom] = useState(false);
  const [customSubject, setCustomSubject] = useState("");
  const [customAttribute, setCustomAttribute] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleToggle = () => {
    toggleOptions();
    setSelectOn(!selectOn);
  };

  const handleSelect = (e) => {
    const skill = e.target.value;
    console.log({ skill });
    setIsCustom(false);
    setIsKnowledge(false);
    setErrorMsg("");
    if (skill === "knowledge") {
      setIsKnowledge(true);
    }
    if (skill === "custom") {
      setIsCustom(true);
    }
    const skillObj = skillList[skill];
    setSelectedSkill(skill);
    setSelectedObj(skillObj);
  };

  const handleCustomSubject = (e) => {
    if (e.target.name === "subject") {
      setCustomSubject(e.target.value);
    }
    if (e.target.name === "attribute") {
      setCustomAttribute(e.target.value);
    }
  };

  const confirmChoice = () => {
    const clear = () => {
      setSelectedSkill("");
      setSelectedObj("");
      setCustomSubject("");
      setCustomAttribute("");
      setIsKnowledge(false);
      setIsCustom(false);
      toggleOptions();
      setSelectOn(false);
      setErrorMsg("");
    };
    if (selectedSkill === "knowledge") {
      // Add a custom field for knowledge skill //
      if (!customSubject) {
        setErrorMsg("Specify a subject for knowledge skill!");
        return;
      }
      const skillObj = { name: customSubject, attribute: "Smarts", score: 4 };
      const skillName = customSubject;
      addSkill(skillName, skillObj);
      clear();
      return;
    }
    if (selectedSkill === "custom") {
      if (!customSubject || !customAttribute) {
        setErrorMsg("Fill in both fields!");
        return;
      }
      const skillObj = {
        name: customSubject,
        attribute: customAttribute,
        score: 4,
      };
      const skillName = customSubject;
      addSkill(skillName, skillObj);
      clear();
      return;
    }
    addSkill(selectedSkill, selectedObj);
    clear();
    return;
  };

  return (
    <div className="traitCard">
      <div className="button minus center hideBtn">-</div>
      <div className="traitDice center hideBtn">0</div>
      {!showOptions && <div className="attributeName">Add Skill</div>}
      {showOptions && (
        <div className="skillSelectAndCustom">
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
          {isKnowledge && (
            <input
              onChange={handleCustomSubject}
              name="subject"
              className="customInput"
              type="text"
              placeholder="Subject, eg. History"
              value={customSubject}
            />
          )}
          {isCustom && (
            <>
              <input
                onChange={handleCustomSubject}
                name="subject"
                className="customInput"
                type="text"
                placeholder="Name of skill"
                value={customSubject}
              />
              <input
                onChange={handleCustomSubject}
                name="attribute"
                className="customInput"
                type="text"
                placeholder="Attribute, eg. Agility"
                value={customAttribute}
              />
            </>
          )}
          <span className="errorMsg">{errorMsg}</span>
        </div>
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
