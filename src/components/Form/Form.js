import React, { useRef } from "react";

const Form = ({ income, setIncome }) => {
   
  const title = useRef(null);
  const store = useRef(null);
  const date  = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d);

    setIncome([
      ...income,
      {
        title: title.current.value,
        store: store.current.value,
        price: price.current.value,
        date: newD.getTime(),
        isArchive : false
      },
    ]);

    title.current.value = "";
    store.current.value = "";
    price.current.value = "null";
    date.current.value = "null";
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="title" className="itemName" placeholder="Item Name" ref={title} />
        <input type="text" name="store" className="store" placeholder="Store" ref={store}/>
        <input type="number" name="price" className="price" placeholder="Price" ref={price}/>
        <input type="date" name="date" className="date" placeholder="Date" ref={date}/>
        <input type="submit" className="submit" value="Add Item" />
      </div>
    </form>
  );
};

export default Form;
