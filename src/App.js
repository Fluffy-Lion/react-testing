import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import Button from "./components/Button/Button";
import axios from "axios";

const App = () => {
const collect = () => {
  // let response = axios.get("https://api.adviceslip.com/advice")
  // console.log(response)
}
  return (
    <div>
      <Header text="text"/>
      <AdviceSlip />
      <Button onClick={collect}>hit me</Button>
    </div>
  );
};
export default App;
