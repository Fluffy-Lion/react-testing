import './Button.css'
import { motion } from 'framer-motion';
const Button = ({ handlerHit }) => {
  return ( 
    <motion.button
      initial={{ x: '-100vw'}}
      animate={{ x: 0 }} 
      id="mainButton" onClick={handlerHit}>hit me
    </motion.button>
  
  );
};
export default Button;
