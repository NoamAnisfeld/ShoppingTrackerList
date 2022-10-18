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
import Items from "../components/items/Items";


const Home = () => {
  const items = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(setItems(response.data.items));

      console.log(response.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);



  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <List totalIncome={totalIncome} />
      <Form income={income} setIncome={setIncome} />
      <List2 income={income} setIncome={setIncome} />
      <div>
        <Items
          category={items?.category}
          title={items?.title}
          price={items?.price}
          description={items?.description}
        />
      </div>
    </div>
  );
};

export default Home;
