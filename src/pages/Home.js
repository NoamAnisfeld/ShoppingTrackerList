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
import Items from "../components/Items/Items";

const Home = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItem(response.data.item);

      console.log(response.data);
    });
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
          title={item?.title}
          price={item?.price}
          description={item?.description}
        />
      </div>
    </div>
  );
};

export default Home;
