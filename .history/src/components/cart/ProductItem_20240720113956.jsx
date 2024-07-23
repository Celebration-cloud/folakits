/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import Counter from '../reuseable/counter/Counter';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userCartList } from '../../store/actions/userActions';
const ProductItem = ({ cart}) => {
   const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
   const updateQuantity = (itemId, newQuantity) => {
     // Find the item in the cart based on itemId
     const updatedCart = cart.map((item) =>
       item.id === itemId ? { ...item, amount: newQuantity } : item
     );
     // Call the callback function to update the cart state
    dispatch(userCartList(up, userData[0].user_name));

   };
function handleRemoveItem(itemId) {
  // Find the item in the cart based on itemId
  const removedItem = cart.find((item) => item.id === itemId);

  // Remove the item from the cart (update your cart state accordingly)
  // ...
  dispatch(userCartList(removedItem, userData[0].user_name));

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
          <i onClick={() => handleRemoveItem(item.id)} className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
       
        </div>
      ))}
    </>
  );
};

export default ProductItem