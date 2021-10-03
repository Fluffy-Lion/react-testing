import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import Button from "./components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

const App = () => {
  const [data, setData] = useState("");
  const [colors, setColors] = useState(["#ccdbfd", "#e2e2e2 ", "#ffc09f", "#ffee93", "#fcf5c7", "#a0ced9", "#adf7b6"])
  const [color, setColor] = useState("#ccdbfd")

   const colorSelector = () => {
     let prev = colors.findIndex((color, index) => {
       
     })
     let update = [...colors]
     update.splice(prev, 1)
     setColors(update)
     const num = Math.floor(Math.random() * colors.length)
     setColor(colors[num])

   }
  const collect = async () => {
    let response = await axios.get("https://api.adviceslip.com/advice");
    setData(response.data);
  };
  useEffect(() => {
    collect();
    colorSelector()
  }, []);
  return (
    <div style={{"background-color": `${color}`}}id="appCont">
      <Header text="text" />
      <AdviceSlip />
      <Button onClick={collect}>hit me</Button>
    </div>
  );
};
export default App;
