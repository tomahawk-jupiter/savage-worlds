import React, { useState } from "react";
import "./edges.css";
import { edgeList } from "../../gameData/edgeList";
import hindranceList from "../../gameData/hindranceList";
import EdgeList from "./edgeList/EdgeList";
import { connect } from "react-redux";

const Edges = ({ characterEdges, characterHindrances, availableEdges }) => {
  const [showEdgeList, setShowEdgeList] = useState(false);
  const [showHindranceList, setShowHindranceList] = useState(false);

  const handleChooseEdge = () => {
    setShowEdgeList(true);
  };

  const handleChooseHindrance = () => {
    setShowHindranceList(true);
  };

  return (
    <div className="edgesPanel">
      <div>
        <span className="componentTitle">
          Hindrances
          <sup onClick={handleChooseHindrance} className="editBtn">
            Add
          </sup>
        </span>
        {characterHindrances.map((hindrance, index) => {
          return (
            <div key={index} className="edgeCard">
              <span className="edgeName">
                {hindrance.hindrance} ({hindrance.type})
              </span>
              <span className="edgeDescription">{hindrance.description}</span>
            </div>
          );
        })}
        {showHindranceList && (
          <div className="chooseEdgeContainer">
            {hindranceList.map((hindrance, index) => {
              return (
                <EdgeList
                  key={index}
                  hindrance={hindrance}
                  setShowEdgeOrHindrance={setShowHindranceList}
                />
              );
            })}
          </div>
        )}
      </div>

      <div>
        <span className="componentTitle">Edges</span>

        <span className="available">
          {availableEdges > 0 ? `${availableEdges} available` : ""}
        </span>

        {characterEdges.map((edge, index) => {
          return (
            <div key={index} className="edgeCard">
              <span className="edgeName">{edge.edge}</span>
              <span className="edgeDescription">{edge.description}</span>
            </div>
          );
        })}
        {!showEdgeList && !!availableEdges && (
          <div onClick={handleChooseEdge} className={`button plus center`}>
            +
          </div>
        )}

        {showEdgeList && (
          <div className="chooseEdgeContainer">
            {edgeList.map((edge, index) => {
              return (
                <EdgeList
                  key={index}
                  edge={edge}
                  setShowEdgeOrHindrance={setShowEdgeList}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* <span className="italicNote">
        Remember to add or subtract any modifiers from this list.
      </span> */}
      <hr />
      <span className="italicNote">
        Remember, apply any modifiers from this panel.
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characterEdges: state.edges.array,
    availableEdges: state.edges.available,
    characterHindrances: state.hindrances,
  };
};

export default connect(mapStateToProps)(Edges);
