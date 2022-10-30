/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import "../index.css";
import TotalPrice from "../components/totalPrice/TotalPrice";
import Form from "../components/form/Form";
import { useEffect, useState } from "react";
import List2 from "../components/list/List";
import axios from "axios";
import { setItems } from "../redux/itemsRedux/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import { CryptoState } from '../CryptoContext';

function Home() {
  const items = useSelector((state) => state.items.value);
  const dispatch = useDispatch();
  const { setAlert } = CryptoState();

  useEffect(() => {
    if (items.length === 0) {
      axios
        .get("https://fakestoreapi.com/products?limit=5")
        .then((response) => {
          const arr = response.data.map((item) => {
            return {
              ...item,
              isArchive: false,
              date: "10/10/2020",
              store: "store",
            };
          });
          dispatch(setItems(arr));
          console.log(arr);
        })
        .catch((err) => {
          setAlert({
            open: true,
            message: "Api Failed",
            type: "error",
          });
        });
      }
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
      <h1 style={{ textAlign: "center" }}>Shopping Tracker List</h1>
      <TotalPrice totalIncome={totalIncome} />
      <Form income={items} setIncome={(data) => dispatch(setItems(data))} />
      <List2 income={items} setIncome={(data) => dispatch(setItems(data))} />
    </div>
  );
}

export default Home;
