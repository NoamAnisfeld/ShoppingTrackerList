import React from "react";
import './totalPrice.css';

const TotalPrice = ({ totalIncome }) => {
  return (
    <div>
      <div className="total-income">
        <p className="total-income-text">Total Price {totalIncome}$</p>
      </div>
    </div>
  );
};

export default TotalPrice;
