import Header from "./components/Header/Header";
import AdviceSlip from "./components/AdviceSlip/AdviceSlip";
import Button from "./components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { motion } from "framer-motion";

const App = () => {
  const [data, setData] = useState("");

  const collect = async () => {
    let response = await axios.get("https://api.adviceslip.com/advice");
    setData(response.data);
  };
  useEffect(() => {
    collect();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      id="appCont"
    >
      {/* <motion.h2
        animate={{ fontSize: "100px", color: "#ff2944", x: 180, y: 100 }}
      >
        sight
      </motion.h2> */}
      <div id="card">
        {data && (
          <>
            <Header text={data.slip.id} />
            <AdviceSlip data-testid="advice-cont" slip={data.slip} />
          </>
        )}
        <Button handlerHit={collect}>hit me</Button>
      </div>
    </motion.div>
  );
};
export default App;
