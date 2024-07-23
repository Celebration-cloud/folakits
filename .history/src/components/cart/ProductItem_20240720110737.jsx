/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import Counter from '../reuseable/counter/Counter';
const ProductItem = ({ cart, handleQuantityChange }) => {
   const updateQuantity = (itemId, newQuantity) => {
     // Find the item in the cart based on itemId
     const updatedCart = cart.map((item) =>
       item.id === itemId ? { ...item, amount: newQuantity } : item
     );

     // Call the callback function to update the cart state
     handleQuantityChange(updatedCart);
   };
  return (
    <>
      {cart?.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <div className={styles.img}>
            <img src={item.img[0]} style={{ width: "100%", height: "100%" }} />
          </div>
          <div>
            <h6 style={{ margin: "0px" }}>{item.product}</h6>
          </div>
          <span className={styles.price}>&#x20A6;{item.price.toFixed(2)}</span>
          <Counter
            amount={item.amount}
            onQuantityChange={(newQuantity) =>
              up(item.id, newQuantity)
            }
          />
          <span className={styles.price}>
            &#x20A6;{(item.price * item.amount).toFixed(2)}
          </span>
          <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
        </div>
      ))}
    </>
  );
};

export default ProductItem