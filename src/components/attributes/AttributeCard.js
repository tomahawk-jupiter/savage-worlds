import React, { useState } from "react";
import { connect } from "react-redux";

const Attribute = ({
  attribute,
  score,
  saved,
  availablePoints,
  incAttribute,
  decAttribute,
}) => {
  const hidePlusBtn = saved || score >= 12 || availablePoints < 1;
  const hideMinusBtn = saved || score <= 4;
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

  const incrementScore = () => {
    if (score < 12 && availablePoints > 0) {
      incAttribute(attribute.toLowerCase());
    }
  };

  const decrementScore = () => {
    if (!saved && score > 4) {
      decAttribute(attribute.toLowerCase());
    }
  };

  return (
    <div className="traitCard">
      <div
        onClick={decrementScore}
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
      <div className="attributeName">{attribute}</div>
      <div
        onClick={incrementScore}
        className={`button plus center ${hidePlusBtn ? "hideBtn" : ""}`}
      >
        +
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    incAttribute: (attribute) =>
      dispatch({ type: "INCREASE_ATTRIBUTE", attribute }),
    decAttribute: (attribute) =>
      dispatch({ type: "DECREASE_ATTRIBUTE", attribute }),
  };
};

export default connect(null, mapDispatchToProps)(Attribute);
