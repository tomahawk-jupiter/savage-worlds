import React from "react";
import CharacterSheet from "./characterSheet/CharacterSheet";
import Background from "./background/Background";
import Shop from "./shop/Shop";
import LoadSave from "./loadSave/LoadSave";

const Page = ({ activePage }) => {
  switch (activePage) {
    case "Character Sheet":
      return <CharacterSheet />;
    case "Background":
      return <Background />;
    case "Shop":
      return <Shop />;
    case "Load/Save":
      return <LoadSave />;
    default:
      return <CharacterSheet />;
  }
};

export default Page;
