import React from 'react';

const List = ({totalIncome}) => {
  return (
    <div>
        <h1>Shopping Tracker List</h1>
        <div className="total-income">{totalIncome}$</div>
    </div>
  )
}

export default List