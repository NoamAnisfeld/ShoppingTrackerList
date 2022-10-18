import React, { useRef } from "react";

const Form = ({ income, setIncome }) => {
   
  const itemName = useRef(null);
  const store = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        itemName: itemName.current.value,
        store: store.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    itemName.current.value = "";
    store.current.value = "";
    price.current.value = "null";
    date.current.value = "null";
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="itemName" className="itemName" placeholder="Item Name" ref={itemName} />
        <input type="text" name="store" className="store" placeholder="Store" ref={store}/>
        <input type="number" name="price" className="price" placeholder="Price" ref={price}/>
        <input type="date" name="date" className="date" placeholder="Date" ref={date}/>
        <input type="submit" value="Add Item" />
      </div>
    </form>
  );
};

export default Form;
