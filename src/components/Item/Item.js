import React from "react";

function Item({ income, index, removeIncome, addArchive, ...props }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  const archiveHandle = (i) => {
    addArchive(i);
  };


  return (
    <div className="income-item">
      {props.showButton &&
        <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>}
        <div className="itemName">{income.itemName}</div>
        <div className="store">{income.store}</div>
        <div className="price">{income.price}$</div>
        <div className="date">{day + "/" + month + "/" + year}</div>
        { props.showButton && 
        <button className="archive" onClick={()=> archiveHandle(index)}>Archive</button>}
    </div>
  );
}

export default Item;