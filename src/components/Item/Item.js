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
          <motion.h3 layout="position">{income.itemName}</motion.h3>
          {isOpen === true && (
            <motion.div className="expand">
              <p className="store">{income.store}</p>
              <p className="price">{income.price}$</p>
              <p className="date">{day + "/" + month + "/" + year}</p>
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
        <p className="store">{income.store}</p>
        <p className="price">{income.price}$</p>
        <p className="date">{day + "/" + month + "/" + year}</p>
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
