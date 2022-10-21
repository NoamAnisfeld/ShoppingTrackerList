/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import "../index.css";
import List from "../components/List";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import List2 from "../components/List2";
import axios from "axios";
import { setItems } from "../redux/itemsRedux/itemSlice";
import { useSelector, useDispatch } from "react-redux";

function Home (){

  const items = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if(items.length === 0){
      axios.get("https://fakestoreapi.com/products").then((response) => {
      const arr = response.data.map((item) => {
        return {
          ...item,
          isArchive: false,
          date: (new Date("10/10/2020")).getTime(),
          store: "store",
          itemName: "Item Name",
        };
      });
      dispatch(setItems(arr));
      console.log(arr);
    }).catch(err => { console.log("The Api is failed , Please fix it",err) })
    }
},[]);

  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < items.length; i++) {
      temp += parseInt(items[i].price);
    }
    setTotalIncome(temp);
    console.log(items);
  }, [items]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Shopping Tracker List</h1>
      <List totalIncome={totalIncome} />
      <Form income={items} setIncome={(data) => dispatch(setItems(data))} />
      <List2
        className="list2"
        income={items}
        setIncome={(data) => dispatch(setItems(data))}
      />
    </div>
  );
};

export default Home;
