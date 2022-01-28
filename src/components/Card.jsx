import React from "react";

const Card = ({ CPO, index, handleBasketSelection, array }) => {
  let selectedClass = array[index].selected ? "isSelected" : "notSelected";
  return (
    <div className={selectedClass + " catCard"} key={"catCard" + index}>
      <img
        className="catPhoto"
        src={CPO.url}
        alt={"picture of" + CPO.name}
      ></img>
      <div className="catName">{CPO.name}</div>
      <div className="catPrice">{CPO.price}</div>
      <button
        onClick={() => {
          handleBasketSelection(array, index);
        }}
      >
        Basket
      </button>
    </div>
  );
};

export default Card;
