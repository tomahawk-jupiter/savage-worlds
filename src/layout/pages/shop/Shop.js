import React from "react";
import "./shop.css";
import "../../../components/tables/table.css";
import ArmourTable from "../../../components/tables/armourTable/ArmourTable";
import MeleeTable from "../../../components/tables/meleeTable/MeleeTable";
import RangedTable from "../../../components/tables/rangedTable/RangedTable";

// Hardcoded item info //
import { armourStock } from "../../../gameData/stockData";
import { adventurerGear } from "../../../gameData/stockData";
import { meleeWeapons } from "../../../gameData/stockData";
import { rangedWeapons } from "../../../gameData/stockData";
import ItemTable from "../../../components/tables/equipmentTable/EquipmentTable";
import { connect } from "react-redux";

const Shop = ({ ownedArmour, carriedWeapons }) => {
  return (
    <>
      <h1>Shop</h1>
      <div className="cContainer">
        <div className="cContainerLeftCol">
          <div className="leftTables">
            <ArmourTable
              page={"shop"}
              armourStock={armourStock}
              ownedArmour={ownedArmour}
            />
          </div>
          <div className="leftTables">
            <MeleeTable
              meleeWeapons={meleeWeapons}
              carriedWeapons={carriedWeapons}
              page="shop"
            />
          </div>
          <div className="leftTables">
            <RangedTable
              rangedWeapons={rangedWeapons}
              carriedWeapons={carriedWeapons}
              page={"shop"}
            />
          </div>
        </div>
        <div className="cContainerRightCol">
          <ItemTable adventurerGear={adventurerGear} />
        </div>
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

export default connect(mapStateToProps)(Shop);
