import React from "react";
import { connect } from "react-redux";

const EquipmentTableRow = ({ item, buyItem }) => {
  const handleBuyItem = () => {
    buyItem(item);
  };

  return (
    <tr>
      <td>{item.item}</td>
      <td>{item.price}</td>
      <td>
        <button onClick={handleBuyItem} className="equipBtn">
          Buy
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyItem: (item) => dispatch({ type: "ADD_EQUIPMENT", item }),
  };
};

export default connect(null, mapDispatchToProps)(EquipmentTableRow);
