import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import Button from "./components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("");
  const [colors, setColors] = useState([
    "#ccdbfd",
    "#e2e2e2 ",
    "#ffc09f",
    "#ffee93",
    "#fcf5c7",
    "#a0ced9",
    "#adf7b6",
  ]);
  const [color, setColor] = useState(colors[count]);

  const colorSelector = () => {
    if(count === colors.length){
      setCount(0)
    }else{
      setCount(count + 1)
      setColor(colors[count])  
    }
  };
  const handlerHit = () => {
    collect();
    colorSelector();
  };
  const collect = async () => {
    let response = await axios.get("https://api.adviceslip.com/advice");
    setData(response.data);
  };
  useEffect(() => {
    handlerHit();
  }, []);
  return (
    <div style={{ backgroundColor: `${color}` }} id="appCont">
      <Header text="text" />
      <AdviceSlip />
      <Button handlerHit={handlerHit}>hit me</Button>
    <h1>{count}</h1>
    </div>
  );
};
export default App;
