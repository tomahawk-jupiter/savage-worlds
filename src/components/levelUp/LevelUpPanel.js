import React, { useState } from "react";
import "./levelUp.css";
import { connect } from "react-redux";

const LevelUpPanel = ({
  addAttributePoint,
  addSkillPoint,
  addEdgePoint,
  removeAttributePoint,
  removeSkillPoint,
  removeEdgePoint,
  availableAttributePoints,
  availableSkillPoints,
  availableEdges,
  addXp,
  minusXp,
  xp,
  rank,
}) => {
  const [showRules, setShowRules] = useState(false);

  const handleAttribute = () => {
    addAttributePoint();
  };
  const handleSkill = () => {
    addSkillPoint();
  };
  const handleEdge = () => {
    addEdgePoint();
  };

  const handleRemoveAttribute = () => {
    if (availableAttributePoints > 0) {
      removeAttributePoint();
    }
  };
  const handleRemoveSkill = () => {
    if (availableSkillPoints > 0) {
      removeSkillPoint();
    }
  };
  const handleRemoveEdge = () => {
    if (availableEdges > 0) {
      removeEdgePoint();
    }
  };

  const handleXpInc = () => {
    let newRank;
    switch (true) {
      case xp < 19:
        newRank = "Novice";
        break;
      case xp > 18 && xp < 39:
        newRank = "Seasoned";
        break;
      case xp > 38 && xp < 59:
        newRank = "Veteran";
        break;
      case xp > 58 && xp < 79:
        newRank = "Heroic";
        break;
      case xp > 78:
        newRank = "Legendary";
        break;
      default:
        newRank = rank;
    }
    addXp(newRank);
  };

  const handleXpDec = () => {
    let newRank;
    switch (true) {
      case xp < 21:
        newRank = "Novice";
        break;
      case xp > 21 && xp < 41:
        newRank = "Seasoned";
        break;
      case xp > 41 && xp < 61:
        newRank = "Veteran";
        break;
      case xp > 61 && xp < 81:
        newRank = "Heroic";
        break;
      case xp > 81:
        newRank = "Legendary";
        break;
      default:
        newRank = rank;
    }
    minusXp(newRank);
  };

  const handleToggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="levelUpPanel">
      <div className="componentTitle">
        Level Up
        <sup onClick={handleToggleRules} className="editBtn">
          {showRules ? "Hide Rules" : "Show Rules"}
        </sup>
      </div>

      <div className="pointBuyRow">
        <span onClick={handleXpInc} className="pointBuyBtn">
          XP
        </span>
        <span onClick={handleXpDec} className="pointBuyValue">
          {xp}
        </span>
        <span className="pointBuyValue">{rank}</span>
      </div>

      {showRules && (
        <div className="advanceRules">
          <span className="italicNote">
            <strong>ADVANCE RULES: </strong>
            Every 5 XP points grants an advance. Choose one of the following:
          </span>
          <ul>
            <li>Gain a new Edge.</li>
            <li>
              Increase a skill that is equal to or greater than its linked
              attribute.
            </li>
            <li>
              Increase two skills that are lower than their linked attribute.
            </li>
            <li>Gain a new skill at d4</li>
            <li>Increase one attribute by a dice type. Only once per rank.</li>
          </ul>
        </div>
      )}

      {showRules && (
        <div>
          <hr />
          <div className="italicNote">
            <strong>HINDRANCES: </strong>
            Gain additional points by taking Hindrances. A Major one gives 2
            points, a Minor 1 point.
          </div>
          <div className="italicNote">
            <strong>2 points: </strong>Gain an attribute point or one edge.
          </div>
          <div className="italicNote">
            <strong>1 point: </strong>Gain a skill point.
          </div>
        </div>
      )}

      <hr />
      <div className="italicNote">
        Click buttons to increase points or number values to decrease. Click
        above for rules.
      </div>
      <div className="pointBuyWrapper">
        <div className="pointBuyRow">
          <span onClick={handleAttribute} className="pointBuyBtn">
            Attribute Points
          </span>
          <span onClick={handleRemoveAttribute} className="pointBuyValue">
            {availableAttributePoints}
          </span>
        </div>
        <div className="pointBuyRow">
          <span onClick={handleSkill} className="pointBuyBtn">
            Skill Points
          </span>
          <span onClick={handleRemoveSkill} className="pointBuyValue">
            {availableSkillPoints}
          </span>
        </div>
        <div className="pointBuyRow">
          <span onClick={handleEdge} className="pointBuyBtn">
            Edges Points
          </span>
          <span onClick={handleRemoveEdge} className="pointBuyValue">
            {availableEdges}
          </span>
        </div>
      </div>

      {/* {showRules && (
        <div>
          <hr />
          <div className="italicNote">
            <strong>HINDRANCES: </strong>
            Gain additional points by taking Hindrances. A Major one gives 2
            points, a Minor 1 point.
          </div>
          <div className="italicNote">
            <strong>2 points: </strong>Gain an attribute point or one edge.
          </div>
          <div className="italicNote">
            <strong>1 point: </strong>Gain a skill point.
          </div>
        </div>
      )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    availableAttributePoints: state.attrState.availablePoints,
    availableSkillPoints: state.skillState.availablePoints,
    availableEdges: state.edges.available,
    xp: state.characterInfo.xp,
    rank: state.characterInfo.rank,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addEdgePoint: () => dispatch({ type: "ADD_EDGE_POINT" }),
    removeEdgePoint: () => dispatch({ type: "REMOVE_EDGE_POINT" }),
    addAttributePoint: () => dispatch({ type: "ADD_ATTRIBUTE_POINT" }),
    removeAttributePoint: () => dispatch({ type: "REMOVE_ATTRIBUTE_POINT" }),
    addSkillPoint: () => dispatch({ type: "ADD_SKILL_POINT" }),
    removeSkillPoint: () => dispatch({ type: "REMOVE_SKILL_POINT" }),
    addXp: (rank) => dispatch({ type: "ADD_XP", rank }),
    minusXp: (rank) => dispatch({ type: "MINUS_XP", rank }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelUpPanel);
