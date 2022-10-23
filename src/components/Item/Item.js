import React, { useState } from "react";
import { motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="income-item1">
      <div className="income-item2">
      {props.showButton && (
          <button className="remove-item2" onClick={() => removeHandle(index)}>
            x
          </button>
        )}
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card"
          style={{
            borderRadius: "1rem",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <motion.h5 className="item-name" layout="position">{income.itemName}</motion.h5>
          {isOpen === true && (
            <motion.div className="expand">
              <small>{income.store}</small>
              <br></br>
              <small>{income.price}$</small>
              <br></br>
              <small>{day + "/" + month + "/" + year}</small>
              <br></br>
              {props.showButton && (
                <button
                  className="archive"
                  onClick={() => archiveHandle(index)}
                >
                  Archive
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="income-item">
        {props.showButton && (
          <button className="remove-item" onClick={() => removeHandle(index)}>
            x
          </button>
        )}
        <button className="itemName">{income.itemName}</button>
        <div className="store">{income.store}</div>
        <div className="price">{income.price}$</div>
        <div className="date">{day + "/" + month + "/" + year}</div>
        {props.showButton && (
          <button className="archive" onClick={() => archiveHandle(index)}>
            Archive
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
