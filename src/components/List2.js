import React from "react";
import Item from "./Item";

function List2({ income, setIncome }) {
  const removeIncome = (i) => {
    let temp = income.filter((v, index) => index !== i);
    setIncome(temp);
  };

  const addArchive = (i) => {
    setIncome(income.map((item, index) => { debugger
       if(index === i) return {...item,isArchive: true} 
      return {...item} 
    }));
  };

  return (
    <div className="income-list">
      {income.map((value, index) => (
        <Item
          key={index}
          income={value}
          index={index}
          removeIncome={removeIncome}
          addArchive={addArchive}
        />
      ))}
    </div>
  );
}

export default List2;
