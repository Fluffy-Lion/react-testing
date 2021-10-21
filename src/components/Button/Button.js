import './Button.css'
const Button = ({ handlerHit }) => {
  return <button id="mainButton" onClick={handlerHit}>hit me</button>;
};
export default Button;
