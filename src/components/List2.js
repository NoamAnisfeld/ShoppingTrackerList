import React from 'react';
import Item from './Item';

function List2({income,setIncome}) {
  const removeIncome = i =>{
    let temp = income.filter((v,index) => index !== i);
    setIncome(temp);
  }
  
  const addArchive = i =>{
    let temp = income.filter((v,index) => index === i);
    setIncome(temp);
  }

  const sortByDate = (a,b) =>{
    return a.date - b.date;
  }
  
  return (
    <div className="income-list">
        {
          income.sort(sortByDate).map((value,index)=>(
            <Item
              key={index}
              income={value}
              index={index}
              removeIncome={removeIncome}
              addArchive={addArchive}
            />
          ))}
    </div>
  )
}

export default List2;