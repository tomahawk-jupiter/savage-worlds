import React from "react";
import { connect } from "react-redux";
import Appearance from "../../../components/background/appearance/Appearance";
import NewPanel from "../../../components/background/NewPanel";
import LevelUpPanel from "../../../components/levelUp/LevelUpPanel";
import ArmourTable from "../../../components/tables/armourTable/ArmourTable";
import RangedTable from "../../../components/tables/rangedTable/RangedTable";
import "./background.css";

const Background = ({ ownedArmour, carriedWeapons }) => {
  return (
    <>
      <h1>Background</h1>
      <div className="backgroundColumn">
        <Appearance />
        <NewPanel panel={"Personality"} />
        <NewPanel panel={"Backstory"} />
      </div>

      <div className="backgroundBottomRow">
        <div className="storagePanel">
          <div className="componentTitle">Storage</div>

          <span className="italicNote">
            This is gear owned by your character but not carried on them.
          </span>
          <ArmourTable page={"inventory"} armourStock={ownedArmour} />
          <RangedTable page={"inventory"} rangedWeapons={carriedWeapons} />
        </div>

        <LevelUpPanel />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ownedArmour: state.ownedArmour,
    carriedWeapons: state.carriedWeapons,
  };
};

export default connect(mapStateToProps)(Background);
