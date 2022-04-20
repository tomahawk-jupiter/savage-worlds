import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Save = ({ saved, setSaved, characterName, characterSheet }) => {
  const [retrieved, setRetreived] = useState([]);

  const saveRefenceNamesForCharacterSheet = () => {
    localStorage.removeItem("characters");
    const filtered = retrieved.filter((e) => e !== characterName);
    const newArr = [...filtered, characterName];
    localStorage.setItem("characters", JSON.stringify(newArr));
    setSaved(saved + 1);
  };

  // Retrieve the local storage data so it can be updated //
  useEffect(() => {
    if (localStorage.getItem("characters")) {
      const characters = localStorage.getItem("characters");
      setRetreived(JSON.parse(characters));
    }
  }, [saved]);

  const handleSave = () => {
    saveRefenceNamesForCharacterSheet();

    const sheet = JSON.stringify(characterSheet);
    localStorage.setItem(characterName, sheet);
  };

  const handleClear = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className="componentTitle">Save character</div>
      <div className="italicNote">
        Save character in your browsers local storage.
      </div>
      <div className="saveStorageBtn" onClick={handleSave}>
        Save
      </div>
      <hr />
      <div className="componentTitle">Clear all characters</div>
      <div className="italicNote">
        BEWARE! Clearing storage will remove all of your saved characters!
      </div>
      <div className="clearStorageBtn" onClick={handleClear}>
        Clear storage
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    characterSheet: state,
    characterName: state.characterInfo.name,
  };
};

export default connect(mapStateToProps)(Save);
