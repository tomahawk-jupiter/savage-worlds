import React, { useEffect } from "react";
import { connect } from "react-redux";

const EdgeList = ({
  edge,
  hindrance,
  setShowEdgeOrHindrance,
  addNewEdge,
  addNewHindrance,
}) => {
  const handleAddEdge = () => {
    if (edge) {
      addNewEdge(edge);
    }
    if (hindrance) {
      addNewHindrance(hindrance);
    }
    setShowEdgeOrHindrance(false);
  };

  // Hide element when click outside of it //
  useEffect(() => {
    const ignoreClickOnMeElement = document.querySelector(
      ".chooseEdgeContainer"
    );
    document.addEventListener(
      "click",
      (e) => {
        const isClickInsideElement = ignoreClickOnMeElement.contains(e.target);
        if (!isClickInsideElement) {
          setShowEdgeOrHindrance(false);
        }
      },
      { once: true }
    );
  }, []);

  if (edge) {
    return (
      <div onClick={handleAddEdge} className="chooseEdgeCard">
        <div className="chooseEdgeName">{edge.edge}</div>
        <div>{edge.description}</div>
        <div>
          <strong>Requirements: </strong>
          {edge.requirements}
        </div>
      </div>
    );
  }

  if (hindrance) {
    return (
      <div onClick={handleAddEdge} className="chooseEdgeCard">
        <div className="chooseEdgeName">{hindrance.hindrance}</div>
        <div>
          <strong>{hindrance.type}</strong>
        </div>
        <div>{hindrance.description}</div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewEdge: (edge) => dispatch({ type: "ADD_EDGE", edge }),
    addNewHindrance: (hindrance) =>
      dispatch({ type: "ADD_HINDRANCE", hindrance }),
  };
};

export default connect(null, mapDispatchToProps)(EdgeList);
