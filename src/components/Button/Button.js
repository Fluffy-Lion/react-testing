import "./Button.css";
import { motion } from "framer-motion";
const Button = ({ handlerHit }) => {
  return (
    <motion.button 
    
    id="mainButton" onClick={handlerHit}>
      hit me
    </motion.button>
  );
};
export default Button;
