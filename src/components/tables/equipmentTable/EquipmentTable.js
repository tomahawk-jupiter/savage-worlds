import React, { useState } from "react";
import EquipmentTableRow from "./EquipmentTableRow";

const ItemTable = ({ adventurerGear }) => {
  const [showItems, setShowItems] = useState(true);

  return (
    <table>
      <thead>
        <tr>
          <th
            className="tableTitle"
            colSpan="7"
            onClick={() => setShowItems(!showItems)}
          >
            Gear
          </th>
        </tr>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      {showItems && (
        <tbody>
          {adventurerGear.map((item, index) => {
            return <EquipmentTableRow key={index} item={item} />;
          })}
        </tbody>
      )}
    </table>
  );
};

export default ItemTable;
