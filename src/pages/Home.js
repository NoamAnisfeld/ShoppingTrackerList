/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import { useState } from "react";
import "../App.css";
import List from "../components/List";
import Form from "../components/Form";
import { useEffect } from "react";
import List2 from "../components/List2";
import axios from "axios";
import { setItems } from "../redux/itemsRedux/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import Items from "../components/Items";

const Home = () => {
  const [visible,setVisible] = useState(5);
  const showMoreItems = () =>{
    setVisible((prevValue) => prevValue + 3);
  };

  const items = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {

      const arr = response.data.map(item =>{
        return{
          ...item,
          isArchive : false
        }
      })
      dispatch(setItems(arr));
      console.log(arr);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <List totalIncome={totalIncome} />
      <Form income={items} setIncome={(data)=> dispatch(setItems(data))} />
      <List2 income={items} setIncome={(data)=> dispatch(setItems(data))} />
      <div>
        {items.slice(0,visible).map((item, i) => (
          <Items
            key={i}
          />
        ))}
      </div>
      <button onClick={showMoreItems}>
          All Items
        </button>
      
    </div>
  );
};

export default Home;
