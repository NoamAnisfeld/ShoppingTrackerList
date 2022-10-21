/* eslint-disable no-undef */
import React, { useState } from "react";
import Item from "./Item";

function List2({ income, setIncome }) {
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  };

  const addArchive = (i) => {
    setIncome(
      income.map((item, index) => {
        if (index === i) return { ...item, isArchive: true };
        else return { ...item };
      })
    );
  };

  const sortByDate = (a, b) =>  { debugger
    return b.date - a.date;
  };

  return (
    <div className="income-list">
      {income
        .slice(0,visible)      
        .sort(sortByDate) 
        .map(
          (value, index) =>
            value.isArchive === false && (
              <Item
                key={index}
                income={value}
                index={index}
                removeIncome={removeIncome}
                addArchive={addArchive}
                showButton={true}
              />
            )
        )}
      <button className="btn btn-primary" onClick={showMoreItems}>
        More Orders
      </button>
    </div>
  );
}

export default List2;
