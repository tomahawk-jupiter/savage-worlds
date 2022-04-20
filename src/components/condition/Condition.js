import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./condition.css";

const Condition = ({
  incapacitated,
  wounds,
  fatigue,
  setIncapacitated,
  setWounds,
  setFatigue,
}) => {
  const handleFatigue = (e) => {
    const newValue = e.target.classList.contains("circleValue")
      ? "0"
      : e.target.innerText;
    setFatigue(newValue);
  };

  const handleWounds = (e) => {
    const newValue = e.target.classList.contains("circleValue")
      ? "0"
      : e.target.innerText;
    setWounds(newValue);
  };

  const handleIncapacitated = (e) => {
    const newValue = e.target.classList.contains("circleValue") ? false : true;
    setIncapacitated(newValue);
  };

  return (
    <div className="conditionPanel">
      {/* <div className="componentTitle">Condition</div> */}
      <div className="conditionLabelRow">
        <span className="conditionLabel">Wounds</span>
        <span className="conditionLabel">Fatigue</span>
      </div>
      <div className="conditionValuesRow">
        <span
          onClick={handleWounds}
          className={`conditionValue ${wounds === "-1" ? "circleValue" : ""}`}
        >
          -1
        </span>
        <span
          onClick={handleWounds}
          className={`conditionValue ${wounds === "-2" ? "circleValue" : ""}`}
        >
          -2
        </span>
        <span
          onClick={handleWounds}
          className={`conditionValue ${wounds === "-3" ? "circleValue" : ""}`}
        >
          -3
        </span>
        <span
          onClick={handleIncapacitated}
          className={`conditionValue ${incapacitated ? "circleValue" : ""}`}
        >
          INC
        </span>
        <span
          onClick={handleFatigue}
          className={`conditionValue ${fatigue === "-2" ? "circleValue" : ""}`}
        >
          -2
        </span>
        <span
          onClick={handleFatigue}
          className={`conditionValue ${fatigue === "-1" ? "circleValue" : ""}`}
        >
          -1
        </span>
      </div>
      <span className="italicNote">
        Deduct any wounds or fatigue from dice rolls.
      </span>
    </div>
  );
};

const setStateToProps = (state) => {
  return {
    incapacitated: state.condition.incapacitated,
    wounds: state.condition.wounds,
    fatigue: state.condition.fatigue,
  };
};

const setDispatchToProps = (dispatch) => {
  return {
    setIncapacitated: (value) => dispatch({ type: "SET_INCAPACITATED", value }),
    setWounds: (value) => dispatch({ type: "SET_WOUNDS", value }),
    setFatigue: (value) => dispatch({ type: "SET_FATIGUE", value }),
  };
};

export default connect(setStateToProps, setDispatchToProps)(Condition);
