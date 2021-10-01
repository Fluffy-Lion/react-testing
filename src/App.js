import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import axios from "axios";

const App = () => {

  return (
    <div>
      <Header />
      <AdviceSlip />
      <button>hit me</button>
    </div>
  );
};
export default App;
