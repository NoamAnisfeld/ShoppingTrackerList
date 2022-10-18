import React from "react";

function Items({ price, description, title, category }) {
  return (
    <div>
      <form className="income-list">
        <p>{price}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{category}</p>
      </form>
    </div>
  );
}

export default Items;
