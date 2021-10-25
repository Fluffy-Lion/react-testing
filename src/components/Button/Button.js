import "./Button.css";
import { motion } from "framer-motion";
const Button = ({ handlerHit }) => {
  return (
    <motion.button
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      // transition={{ delay: 0.5, type: 'spring', stiffness: 160 }}
      whileHover={{
        scale: 1.1,
        textShadow: "0px 0px 8px rgba(0, 48, 96, 1)",
        borderRadius: "10px",
        boxShadow: "0px 0px 8px rgba(0, 48, 96, 1)",
      }}
      id="mainButton"
      onClick={handlerHit}
    >
      get some advice
    </motion.button>
  );
};
export default Button;
