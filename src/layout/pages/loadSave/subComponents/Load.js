import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import preGenCharacters from "../../../../gameData/preGenCharacters";

const Load = ({
  saved,
  loadInfo,
  loadEquippedArmour,
  loadOwnedArmour,
  loadAttributes,
  loadSkills,
  loadBackground,
  loadCondition,
  loadEdge,
  loadHindrances,
  loadEquipment,
  loadNotes,
  loadWeapons,
}) => {
  const [characters, setCharacters] = useState([]);

  const loadSheet = (characterSheet) => {
    loadInfo(characterSheet.characterInfo);
    loadEquippedArmour(characterSheet.equippedArmour);
    loadOwnedArmour(characterSheet.ownedArmour);
    loadAttributes(characterSheet.attrState);
    loadSkills(characterSheet.skillState);
    loadBackground(characterSheet.background);
    loadCondition(characterSheet.condition);
    loadEdge(characterSheet.edges);
    loadHindrances(characterSheet.hindrances);
    loadEquipment(characterSheet.equipment);
    loadNotes(characterSheet.notes);
    loadWeapons(characterSheet.carriedWeapons);
  };

  const handleLoadPreGen = (characterSheet) => {
    loadSheet(characterSheet);
  };

  const handleLoad = (e) => {
    const character = e.target.innerText;

    const jsonSheet = localStorage.getItem(character);
    const characterSheet = JSON.parse(jsonSheet);

    console.log(characterSheet);

    loadSheet(characterSheet);
  };

  useEffect(() => {
    if (localStorage.getItem("characters")) {
      const storedCharacters = localStorage.getItem("characters");
      setCharacters(JSON.parse(storedCharacters));
    }
  }, [saved]);

  return (
    <>
      <div className="componentTitle">Load Template</div>
      <div className="italicNote">
        Load character templates that have some or all stats pre-generated.
      </div>
      <div className="characterBtnWrapper">
        {preGenCharacters.map((each, index) => {
          return (
            <div
              onClick={() => handleLoadPreGen(each)}
              key={index}
              className="loadCharacterBtn"
            >
              {each.characterInfo.name}
            </div>
          );
        })}
      </div>

      <hr />
      <div className="componentTitle">Load character</div>
      <div className="italicNote">
        Load characters that you previously saved in the browsers local storage.
      </div>
      <div className="characterBtnWrapper">
        {characters.map((each, index) => {
          return (
            <div onClick={handleLoad} key={index} className="loadCharacterBtn">
              {each}
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInfo: (info) => dispatch({ type: "LOAD_INFO", info }),
    loadEquippedArmour: (equippedArmour) =>
      dispatch({ type: "LOAD_EQUIPPED_ARMOUR", equippedArmour }),
    loadOwnedArmour: (ownedArmour) =>
      dispatch({ type: "LOAD_OWNED_ARMOUR", ownedArmour }),
    loadAttributes: (attributes) =>
      dispatch({ type: "LOAD_ATTRIBUTES", attributes }),
    loadSkills: (skills) => dispatch({ type: "LOAD_SKILLS", skills }),
    loadBackground: (background) =>
      dispatch({ type: "LOAD_BACKGROUND", background }),
    loadCondition: (condition) =>
      dispatch({ type: "LOAD_CONDITION", condition }),
    loadEdge: (edges) => dispatch({ type: "LOAD_EDGES", edges }),
    loadHindrances: (hindrances) =>
      dispatch({ type: "LOAD_HINDRANCES", hindrances }),
    loadEquipment: (equipment) =>
      dispatch({ type: "LOAD_EQUIPMENT", equipment }),
    loadNotes: (notes) => dispatch({ type: "LOAD_NOTES", notes }),
    loadWeapons: (weapons) => dispatch({ type: "LOAD_WEAPONS", weapons }),
  };
};

export default connect(null, mapDispatchToProps)(Load);
