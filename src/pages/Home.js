/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import "../App.css";
import List from "../components/List";
import Form from "../components/Form";
import { useEffect,useState } from "react";
import List2 from "../components/List2";
import axios from "axios";
import { setItems } from "../redux/itemsRedux/itemSlice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [visible,setVisible] = useState(5);
  
  const showMoreItems = () =>{
    setVisible((prevValue) => prevValue + 3);
  };

  const items = useSelector((state) => state.items.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {

      const arr = response.data.slice(0,visible).map(item =>{
        return{
          ...item,
          isArchive : false,
          date : "10/10/2022",
          store:"store",
          itemName : 'Item Name'
        }
      })
      dispatch(setItems(arr));
      console.log(arr);
    });
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
      <Form income={items} setIncome={(data)=> dispatch(setItems(data))}/>
      <List2 className="list2" income={items} setIncome={(data)=> dispatch(setItems(data))}/>
      {/* {items.slice(0,visible).map((item, i) => (
          <Products
            key={i}
            category={item?.category}
          />
        ))} */}
      <button onClick={showMoreItems}>
          More Items
        </button>
      
    </div>
  );
};

export default Home;
