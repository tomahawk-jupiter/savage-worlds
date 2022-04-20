import React from "react";
import { connect } from "react-redux";
import "./armour.css";

const ArmourPanel = ({ headArmour, torsoArmour, armArmour, legArmour }) => {
  return (
    <div className="armourPanel">
      <span className="componentTitle">Armour</span>
      <div className="armourRow">
        <div className="armourCard">
          <span className="armourScore">{headArmour.score}</span>
          <span className="armourLocation">HEAD</span>
          <span className="armourType">{headArmour.type || "None"}</span>
        </div>
        <div className="armourCard">
          <span className="armourScore">{torsoArmour.score}</span>
          <span className="armourLocation">TORSO</span>
          <span className="armourType">{torsoArmour.type || "None"}</span>
        </div>
        <div className="armourCard">
          <span className="armourScore">{armArmour.score}</span>
          <span className="armourLocation">ARMS</span>
          <span className="armourType">{armArmour.type || "None"}</span>
        </div>
        <div className="armourCard">
          <span className="armourScore">{legArmour.score}</span>
          <span className="armourLocation">LEGS</span>
          <span className="armourType">{legArmour.type || "None"}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    headArmour: state.equippedArmour.head,
    torsoArmour: state.equippedArmour.torso,
    armArmour: state.equippedArmour.arms,
    legArmour: state.equippedArmour.legs,
  };
};

export default connect(mapStateToProps)(ArmourPanel);
