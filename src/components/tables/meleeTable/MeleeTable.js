import React, { useState } from "react";
import MeleeTableRow from "./MeleeTableRow";

const MeleeTable = ({ meleeWeapons, page, carriedWeapons }) => {
  const [showMelee, setShowMelee] = useState(true);
  return (
    <table>
      <thead>
        <tr>
          <th
            className="tableTitle"
            colSpan="9"
            onClick={() => setShowMelee(!showMelee)}
          >
            Melee<sup className="tableEditBtn">Show/hide</sup>
          </th>
        </tr>
        <tr>
          <th>Weapon</th>
          <th>Range</th>
          <th>Damage</th>
          <th>AP</th>
          <th>Notes</th>
          {page === "shop" && <th>Price</th>}
        </tr>
      </thead>
      {showMelee && (
        <tbody>
          {meleeWeapons.map((weapon, index) => {
            if (
              carriedWeapons &&
              carriedWeapons.some((e) => e.item === weapon.item)
            ) {
              return;
            }
            return (
              <MeleeTableRow key={index + page} page={page} weapon={weapon} />
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default MeleeTable;
