import React from "react";
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
}) => {
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

  return (
    <div className="levelUpPanel">
      <div className="componentTitle">Level Up</div>
      <div className="italicNote">
        Add more points to improve character (Click the number to decrease).
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
      <hr />
      <div className="italicNote">
        <strong>HINDRANCES: </strong>
        Gain additional points by taking Hindrances. A Major one gives 2 points,
        a Minor 1 point.
      </div>
      <div className="italicNote">
        <strong>2 points: </strong>Gain an attribute point or one edge.
      </div>
      <div className="italicNote">
        <strong>1 point: </strong>Gain a skill point.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    availableAttributePoints: state.attrState.availablePoints,
    availableSkillPoints: state.skillState.availablePoints,
    availableEdges: state.edges.available,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelUpPanel);
