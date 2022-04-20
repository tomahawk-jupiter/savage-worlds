import React from "react";
import "./characterSheet.css";
import AttributesPanel from "../../../components/attributes/AttributesPanel";
import SkillPanel from "../../../components/skills/SkillPanel";
import DerivedStats from "../../../components/derivedStats/DerivedStats";
import CharacterInfo from "../../../components/characterInfo/CharacterInfo";
import ArmourPanel from "../../../components/armour/ArmourPanel";
import Weapons from "../../../components/weapons/Weapons";
import EquipmentPanel from "../../../components/equipment/EquipmentPanel";
import Edges from "../../../components/edges/Edges";
import Notes from "../../../components/notes/Notes";
import Condition from "../../../components/condition/Condition";
import CustomRollPanel from "../../../components/customRoll/CustomRollPanel";

const CharacterSheet = () => {
  return (
    <>
      <div className="infoAndDerivedContainer">
        <CharacterInfo />
        <DerivedStats />
      </div>
      <div className="middlePanelRow">
        <AttributesPanel />

        <div className="skillAndDiceRollWrapper">
          <SkillPanel />
          <CustomRollPanel />
        </div>

        <Edges />
      </div>
      <div className="bottomPanelRow">
        <div className="armourAndWoundsWrapper">
          <ArmourPanel />
          <Condition />
        </div>
        <Weapons />
        <div className="equipmentAndNotesWrapper">
          <EquipmentPanel />
          <Notes />
        </div>
      </div>
    </>
  );
};

export default CharacterSheet;
