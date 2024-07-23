import { useCallback, useEffect, useRef, useState } from "react";
import StepIndicator from "./StepIndicator";
import ProductItem from "./ProductItem";
import CartTotals from "./CartTotals";
import { useNavigate } from "react-router-dom";
import styles from './CartComponent.module.css'
import { useDispatch, useSelector } from "react-redux";
import Billing from "../dashboard/Billing";
import Payment from "./Payment";
import { getItems } from "../../store/actions/quoteActions";
import { toaster } from "evergreen-ui";
import { serverTimestamp } from "firebase/firestore";
import {v6 as uuid} from 'uuid'
import { userOrders } from "../../store/actions/userActions";
const CartComponent = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()
    const dispatch = useDispatch()
        const { userData } = useSelector((state) => state.user);
        const cartListRef = useRef([]);
        cartListRef.current = userData ? userData[0]?.cart : [];
        const ordersRef = useRef([]);
        ordersRef.current = userData ? userData[0]?.orders : [];
         const subtotal = cartListRef.current?.map((item) => {
           return item.price * item.amount;
         });
         const overallSum = subtotal?.reduce((sum, item) => sum + item, 0);
        console.log(cartListRef.current)
        const cartTotalsData = {
          subtotal: overallSum, // Example subtotal
          shipping: 10, // Example shipping cost
        };

        // useEffect(() => {
        //   window.scrollTo(0, 0);
        // }, []);

    // Function to proceed to the next step
    const goToNextStep = () => {
      if(currentStep <3) {

        setCurrentStep(currentStep + 1);
      }
      if(currentStep === 3){
        const order = {
          orderId: uuid(),
          cart: cartListRef.current,
          user: userData[0]?.user_name,
          status: "pending",
          createdAt: serverTimestamp(),
          total: overallSum + cartTotalsData.shipping,
          address
        }
        ordersRef.current.push(order)
        console.log(ordersRef.current)
        // dispatch(userOrders(ordersRef.current, userData[0]?.user_name));
        navigate('/log')
        toaster.success("Order made")
      }
    };
   function handleQuantityChange(carts){
    console.log(carts)
   }
  
console.log(subtotal, overallSum)
    
  return (
    <div className={styles.container}>
      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} />

      <section className={styles.sections}>
        {/* Product Section */}
        <div className={styles.productSection}>
          {/* Product Item */}
          <div style={{ width: "100%" }}>
            {currentStep === 1 && (
              <ProductItem
                cart={cartListRef.current}
                handleQuantityChange={handleQuantityChange}
              />
            )}
            {currentStep === 2 && <Billing />}
            {currentStep === 3 && <Payment/>}

            {/* Add more product items here */}
          </div>
          {/* Add product details here */}
        </div>

        {/* Cart Totals Section */}
        {cartListRef.current.length > 0  && (
          
        <div className={styles.cartTotalsSection}>
          {/* Cart totals details here */}
          <h5 style={{ textAlign: "center" }}>Cart totals</h5>
          <CartTotals {...cartTotalsData} cart={cartListRef.current} step={currentStep}/>
          {currentStep < 4 && (
            <button
              onClick={goToNextStep}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              {currentStep === 1 && "Proceed to Checkout"}
              {currentStep === 2 && "Place Order"}
              {currentStep === 3 && "I have made payment"}
            </button>
          )}
          <button
            style={{
              width: "100%",
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "black",
            }}
            onClick={() => {navigate(`/${"Shop"}`),  dispatch(getItems());}}
          >
            Continue Shopping
          </button>
        </div>
        )}
      </section>
    </div>
  );
};

export default CartComponent;
