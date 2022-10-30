/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Item from "../Item/Item";

function List2({ income, setIncome}) {
  const [search, setSearch] = useState("");

  const [visible, setVisible] = useState(5);

  // Button "More Items"
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 1);
  };

  // Remove Item
  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  };

  
  // Add Archive
  const addArchive = (i) => {
    setIncome(
      income.map((item, index) => {
        if (index === i) return { ...item, isArchive: true };
        else return { ...item };
      })
    );
  };

  // Sort Date 
  const sortByDate = (a, b) => {
    return b.date - a.date;
  };

  // Search bar
  const filteredItems = income.filter((item)=>{ 
    return item.title?.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="income-list">
        <h2 style={{ textAlign: "center", color: "gray" }}>Search Items</h2>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      <br></br>
      <br></br>
      
      {filteredItems.slice(0,visible).sort(sortByDate).map(
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
