import React from "react";
import { connect } from "react-redux";
import "./derivedStats.css";
import StatField from "./StatField";

const DerivedStats = ({
  knownSkills,
  vigorScore,
  armourScore,
  charisma,
  pace,
  parry,
  toughness,
}) => {
  return (
    <div className="derivedStatsContainer">
      <StatField statName={"charisma"} statScore={charisma} />
      <StatField statName={"pace"} statScore={pace} />
      <StatField
        statName={"parry"}
        statScore={parry}
        knownSkills={knownSkills}
      />
      <StatField
        statName={"toughness"}
        statScore={toughness}
        vigorScore={vigorScore}
        armourScore={armourScore}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    knownSkills: state.skillState.skills,
    vigorScore: state.attrState.attributes.vigor,
    armourScore: state.equippedArmour.torso.score,
    charisma: state.derivedStatsBoost.charisma,
    pace: state.derivedStatsBoost.pace,
    parry: state.derivedStatsBoost.parry,
    toughness: state.derivedStatsBoost.toughness,
  };
};

export default connect(mapStateToProps)(DerivedStats);
