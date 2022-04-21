import React, { useState } from "react";
import { connect } from "react-redux";

const StatField = ({
  statName,
  statScore,
  incStat,
  decStat,
  knownSkills,
  vigorScore,
  armourScore,
}) => {
  const [show, setShow] = useState(false);

  const calculateModifiers = () => {
    if (statName === "parry") {
      if (knownSkills.hasOwnProperty("fighting")) {
        const score = knownSkills.fighting.score;
        return score / 2 + 2;
      }
      return 2;
    }
    if (statName === "toughness") {
      return vigorScore / 2 + 2 + armourScore;
    }
    return 0;
  };

  const Input = () => {
    return (
      <span className="derivedScore">
        <span onClick={() => decStat(statName)}>-</span>
        <span onClick={() => setShow(false)}>
          {calculateModifiers() + statScore}
        </span>
        <span onClick={() => incStat(statName)}>+</span>
      </span>
    );
  };

  const Display = () => {
    return (
      <span onClick={() => setShow(true)} className="derivedScore">
        {calculateModifiers() + statScore}{" "}
        {armourScore ? `(${armourScore})` : ""}
      </span>
    );
  };

  return (
    <div className="derivedStatCard">
      {show ? <Input /> : <Display />}
      <span className="derivedName">{statName.toUpperCase()}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    incStat: (stat) => dispatch({ type: "INC_STAT", stat }),
    decStat: (stat) => dispatch({ type: "DEC_STAT", stat }),
  };
};

export default connect(null, mapDispatchToProps)(StatField);
