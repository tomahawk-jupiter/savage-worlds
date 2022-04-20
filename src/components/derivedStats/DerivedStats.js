import React from "react";
import { connect } from "react-redux";
import "./derivedStats.css";

const DerivedStats = ({ knownSkills, vigorScore, armourScore }) => {
  const wearingArmour = armourScore > 0 ? true : false;

  const calculateParray = (knownSkills) => {
    if (knownSkills.hasOwnProperty("fighting")) {
      const score = knownSkills.fighting.score;
      return score / 2 + 2;
    }
    return 2;
  };

  const calculateToughness = (vigorScore, armourScore) => {
    return vigorScore / 2 + 2 + armourScore;
  };

  return (
    <div className="derivedStatsContainer">
      <div className="derivedStatCard">
        <span className="derivedScore">0</span>
        <span className="derivedName">CHARISMA</span>
      </div>
      <div className="derivedStatCard">
        <span className="derivedScore">6</span>
        <span className="derivedName">PACE</span>
      </div>
      <div className="derivedStatCard">
        <span className="derivedScore">{calculateParray(knownSkills)}</span>
        <span className="derivedName">PARRY</span>
      </div>
      <div className="derivedStatCard">
        <span className="derivedScore">
          {`${calculateToughness(vigorScore, armourScore)} (${armourScore})`}
        </span>
        <span className="derivedName">TOUGHNESS</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // fightingScore: state.skillState.skills.fighting.score,
    knownSkills: state.skillState.skills,
    vigorScore: state.attrState.attributes.vigor,
    armourScore: state.equippedArmour.torso.score,
  };
};

export default connect(mapStateToProps)(DerivedStats);
