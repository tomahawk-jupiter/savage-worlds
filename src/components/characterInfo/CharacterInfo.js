import React, { useState } from "react";
import { connect } from "react-redux";
import "./characterInfo.css";

const CharacterInfo = ({
  name,
  profession,
  updateName,
  updateProfession,
  rank,
}) => {
  const [editName, setEditName] = useState(false);
  const [editProfession, setEditProfession] = useState(false);

  const handleEditField = (e) => {
    const id = e.target.id;
    if (id === "name" || id === "nameLabel") {
      setEditName(true);
    }
    if (id === "profession" || id === "professionLabel") {
      setEditProfession(true);
    }
  };

  const changeValue = (e) => {
    if (e.target.name === "name") {
      updateName(e.target.value);
    }
    if (e.target.name === "profession") {
      updateProfession(e.target.value);
    }
  };

  const confirmChange = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.target.name === "name" ? setEditName(false) : setEditProfession(false);
    }
  };

  return (
    <div className="characterInfoContainer">
      <div className="characterInfoCard">
        {!editName && (
          <span
            id="name"
            onClick={handleEditField}
            className="characterInfoValue"
          >
            {name}
          </span>
        )}
        {editName && (
          <div className="inputRow">
            <input
              name="name"
              onKeyPress={confirmChange}
              onChange={changeValue}
              type="text"
              value={name}
              autoFocus
              onFocus={(e) => e.target.select()}
            />
            <button name="name" onClick={confirmChange}>
              Ok
            </button>
          </div>
        )}
        <span
          id="nameLabel"
          onClick={handleEditField}
          className="characterInfoKey"
        >
          Name
        </span>
      </div>

      <div className="characterInfoCard">
        {!editProfession && (
          <span
            id="profession"
            onClick={handleEditField}
            className="characterInfoValue"
          >
            {profession}
          </span>
        )}
        {editProfession && (
          <div className="inputRow">
            <input
              name="profession"
              onKeyPress={confirmChange}
              onChange={changeValue}
              type="text"
              value={profession}
              autoFocus
              onFocus={(e) => e.target.select()}
            />
            <button onClick={confirmChange}>Ok</button>
          </div>
        )}
        <span
          id="professionLabel"
          onClick={handleEditField}
          className="characterInfoKey"
        >
          Profession
        </span>
      </div>

      <div className="characterInfoCard">
        <span className="characterInfoValue">{rank}</span>
        <span className="characterInfoKey">Rank</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.characterInfo.name,
    profession: state.characterInfo.profession,
    rank: state.characterInfo.rank,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch({ type: "ADD_CHARACTER_NAME", name }),
    updateProfession: (profession) =>
      dispatch({ type: "ADD_CHARACTER_PROFESSION", profession }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfo);
