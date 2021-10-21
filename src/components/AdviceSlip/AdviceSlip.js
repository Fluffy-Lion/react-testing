import './AdviceSlip.css'

const AdviceSlip = ({ slip }) => {
  return <p data-testid="advice-slip">{slip.advice}</p>;
};
export default AdviceSlip;
