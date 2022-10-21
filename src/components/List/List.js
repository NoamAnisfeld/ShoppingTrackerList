import React from "react";

const List = ({ totalIncome }) => {
  return (
    <div>
      <div className="total-income">
        <h1 style={{ textAlign: "center" }}>Total Price {totalIncome}$</h1>
      </div>
    </div>
  );
};

export default List;
