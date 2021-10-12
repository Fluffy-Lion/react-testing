import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import Button from "./components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
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
  const [color, setColor] = useState("#ccdbfd");

  const colorSelector = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
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
      {data ? <Header text={data.slip.id} /> : null}
      {data ? <AdviceSlip data-testid="advice-cont" slip={data.slip} /> : null}
      <Button handlerHit={handlerHit}>hit me</Button>
      <h2>{count}</h2>
    </div>
  );
};
export default App;
