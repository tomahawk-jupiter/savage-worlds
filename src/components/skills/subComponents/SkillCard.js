import React, { useState } from "react";
import { connect } from "react-redux";

const SkillCard = ({
  skill,
  skillObj,
  increaseSkill,
  decreaseSkill,
  availablePoints,
  saved,
}) => {
  const { score } = skillObj;
  const hidePlusBtn = saved || score >= 12 || availablePoints < 1;
  const hideMinusBtn = saved || score <= 4;
  /*************************** */
  const [diceRolled, setDiceRolled] = useState(false);
  const [diceValue, setDiceValue] = useState(score);

  const rollDice = () => {
    if (diceRolled) {
      setDiceRolled(!diceRolled);
      setDiceValue(score);
      return;
    }
    const rollResult = Math.ceil(Math.random() * score);
    const wildResult = Math.ceil(Math.random() * 6);

    if (rollResult === 1 && wildResult === 1) {
      setDiceRolled(!diceRolled);
      setDiceValue("!");
      return;
    }

    const bestDice =
      rollResult > wildResult
        ? { result: rollResult, max: score }
        : { result: wildResult, max: 6 };

    let eachRoll = bestDice.result;
    let total = bestDice.result;
    const max = bestDice.max;

    while (eachRoll === max) {
      eachRoll = Math.ceil(Math.random() * max);
      total += eachRoll;
    }
    setDiceRolled(!diceRolled);
    setDiceValue(total);
    return;
  };
  /*************************** */

  const handleIncreaseSkill = () => {
    if (score < 12 && availablePoints > 0) {
      increaseSkill(skill);
    }
  };
  const handleDecreaseSkill = () => {
    if (!saved && score > 4) {
      decreaseSkill(skill);
    }
  };

  return (
    <div className="traitCard">
      <div
        onClick={handleDecreaseSkill}
        className={`button minus center ${hideMinusBtn ? "hideBtn" : ""}`}
      >
        -
      </div>
      <div
        onClick={rollDice}
        className={`traitDice center ${
          diceRolled && diceValue === "!"
            ? "critFail"
            : diceRolled
            ? "diceResult"
            : ""
        }`}
      >
        {diceRolled ? diceValue : score}
      </div>
      <div className="attributeName">{`${skillObj.name} (${skillObj.attribute})`}</div>
      <div
        onClick={handleIncreaseSkill}
        className={`button plus center ${hidePlusBtn ? "hideBtn" : ""}`}
      >
        +
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseSkill: (skill) => dispatch({ type: "INCREASE_SKILL", skill }),
    decreaseSkill: (skill) => dispatch({ type: "DECREASE_SKILL", skill }),
  };
};

export default connect(null, mapDispatchToProps)(SkillCard);
