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
       marginRight: "20px",
       cursor: "pointer",
     };
  return (
    <ul style={stepIndicatorStyle}>
      <li style={stepStyle} className={currentStep === 1 ? styles.active : ""}>
        Cart
      </li>
      <li style={stepStyle} className={currentStep === 2 ? styles.active : ""}>
        Checkout
      </li>
      <li style={stepStyle} className={currentStep === 2 ? styles.active : ""}>
        
      </li>
    </ul>
  );
}

export default StepIndicator
