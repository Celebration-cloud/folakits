/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import img1 from "/public/red dress.png";
import img2 from "/public/t-shirt.png";
import img3 from "/public/gown.png";
import { useState } from 'react';
const ProductItem = ({ name, color, size, price, quantity }) => {
  const [count, setCount] = useState(2); // Initial count set to 2

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      // Prevents the count from going below 0
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <>
      <div className={styles.cartItem}>
        <img
          src="product-image.jpg"
          alt={name}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <p className={styles.productName}>{name}</p>
          <p>Color: {color}</p>
          <p>HD Size: {size}</p>
          <p>Price: ${price.toFixed(2)}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${(price * quantity).toFixed(2)}</p>
        </div>
        <button className={styles.removeButton}>Remove</button>
      </div>
      <div>
        <div>
          <img src={img1} alt="" />
        </div>
        <h6>BeFlashed</h6>
        <span>$7.30</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span>$7.30</span>
        
      </div>
    </>
  );
};

export default ProductItem