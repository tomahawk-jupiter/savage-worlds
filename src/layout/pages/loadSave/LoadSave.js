import React, { useState } from "react";
import "./saveCharacter.css";
import Load from "./subComponents/Load";
import Save from "./subComponents/Save";

const SaveCharacter = () => {
  const [saved, setSaved] = useState(0);
  return (
    <div className="savePanel">
      <h1 className="componentTitle">Load/Save</h1>
      <Load saved={saved} />
      <hr />
      <Save setSaved={setSaved} saved={saved} />
    </div>
  );
};

export default SaveCharacter;
