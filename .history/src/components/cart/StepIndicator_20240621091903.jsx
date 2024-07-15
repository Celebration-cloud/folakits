/* eslint-disable react/prop-types */
import styles from './StepIndicator.module.css'
function StepIndicator({currentStep}) {
     const stepIndicatorStyle = {
       listStyleType: "none",
       display: "flex",
       justifyContent: 'center',
       alignItems: 'center',
       width: "100%",
       paddingBottom: "20px",
     };

     const stepStyle = {
       fontSize: "18px",
       fontWeight: "bold",
       color: "#333",
       marginRight: "20px",
       cursor: "pointer",
     };
  return (
    <ul style={stepIndicatorStyle}>
      <li style={stepStyle} className={currentStep === 1 ?  : ""}>
        1 Cart
      </li>
      <li style={stepStyle} className={currentStep === 2 ?  : ""}>
        2 Checkout
      </li>
      <li style={stepStyle} className={currentStep === 3 ?  : ""}>
        3 Order
      </li>
    </ul>
  );
}

export default StepIndicator
