import React, { useState } from "react";
import "./customRoll.css";

const CustomRollPanel = () => {
  const [resultArray, setResultArray] = useState([]);

  const rollDice = (diceSides) => {
    return Math.ceil(Math.random() * diceSides);
  };

  const handleRoll = (e) => {
    const diceSides = e.target.innerText;
    const result = rollDice(diceSides);
    if (resultArray.length < 5) {
      const aced = result == diceSides;
      setResultArray([...resultArray, { result, aced }]);
    }
    return;
  };

  const handleRemoveDice = (e) => {
    const index = e.target.id;
    setResultArray(resultArray.filter((a, i) => index != i));
    return;
  };

  const handleClear = () => {
    setResultArray([]);
  };

  return (
    <div className="customRollPanel">
      <div className="componentTitle">
        Custom Roll
        <sup onClick={handleClear} className="editBtn">
          Reset
        </sup>
      </div>

      <div className="customDiceRow">
        <div className="customDiceWrapper">
          <div onClick={handleRoll} className="customDice">
            2
          </div>
          <div onClick={handleRoll} className="customDice">
            4
          </div>
          <div onClick={handleRoll} className="customDice">
            6
          </div>
          <div onClick={handleRoll} className="customDice">
            8
          </div>
          <div onClick={handleRoll} className="customDice">
            10
          </div>
          <div onClick={handleRoll} className="customDice">
            12
          </div>
        </div>
        <div className="customResultWrapper">
          {resultArray.map((dice, index) => {
            return (
              <div
                id={index}
                key={index}
                className={`customResult ${dice.aced ? "didAce" : "notAce"}`}
                onClick={handleRemoveDice}
              >
                {dice.result}
              </div>
            );
          })}
          <div className={`customResult customTotal`}>
            {resultArray.reduce((a, b) => a + Number(b.result), 0)}
          </div>
        </div>
      </div>

      <div className="italicNote">
        Click the type of dice you want to roll. Click an individual result to
        remove (white dice). Green dice are aces. Wild cards and re-rolls not
        included in result.
      </div>
    </div>
  );
};

export default CustomRollPanel;
