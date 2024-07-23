/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import Counter from '../reuseable/counter/Counter';
import { useState } from 'react';
const ProductItem = ({ cart, handleQuantityChange }) => {
  const [isAmountChanged, setIsAmountChanged] = useState(false);
   const updateQuantity = (itemId, newQuantity) => {
     // Find the item in the cart based on itemId
     const updatedCart = cart.map((item) =>
       item.id === itemId ? { ...item, amount: newQuantity } : item
     );
     // Call the callback function to update the cart state
     handleQuantityChange(updatedCart);
     setIsAmountChanged(true);
   };
   function handleUpdate(id){
    console.log(id)
    setIsAmountChanged(false);
   }
function handleRemoveItem(itemId) {
  // Find the item in the cart based on itemId
  const removedItem = cart.find((item) => item.id === itemId);

  // Remove the item from the cart (update your cart state accordingly)
  // ...

  // Now 'removedItem' contains the removed item data
  console.log("Removed item:", removedItem);
}
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
              updateQuantity(item.id, newQuantity)
            }
          />
          <span className={styles.price}>
            &#x20A6;{(item.price * item.amount).toFixed(2)}
          </span>
          <i onClick={() => handleRemoveItem(itme.id)} className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
          {isAmountChanged && (
            <button
              onClick={() => handleUpdate(item)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Update
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default ProductItem