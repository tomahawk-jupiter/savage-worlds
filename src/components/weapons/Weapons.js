import React from "react";
import "./weapons.css";
import { connect } from "react-redux";

const Weapons = ({ carriedWeapons }) => {
  return (
    <div className="weaponPanel">
      <span className="componentTitle">Weapons</span>
      <table style={{ border: "none" }}>
        <thead>
          {/* <tr>
            <th
              className="tableTitle"
              colSpan="8"
              onClick={() => setShowRanged(!showRanged)}
            >
              Weapons
            </th>
          </tr> */}
          <tr>
            <th>Weapon</th>
            <th>Range</th>
            <th>Damage</th>
            <th>AP</th>
            <th>RoF</th>
            <th>Shots</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {carriedWeapons.map((wpn) => {
            if (wpn.equipped) {
              return (
                <tr key={wpn.item}>
                  <td>{wpn.item}</td>
                  <td>{wpn.range}</td>
                  <td>{wpn.damage}</td>
                  <td>{wpn.ap}</td>
                  <td>{wpn.rof}</td>
                  <td>{wpn.shots}</td>
                  <td>{wpn.notes}</td>
                  <td></td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carriedWeapons: state.carriedWeapons,
  };
};

export default connect(mapStateToProps)(Weapons);
