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
          <p className={styles.productName}></p>
          <p>Color: {color}</p>
          <p>HD Size: {size}</p>
          <p>Price: </p>
          <p>Quantity: {quantity}</p>
          <p>Total: </p>
        </div>
        <button className={styles.removeButton}>Remove</button>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={img1} style={{width: "100%", height: "100%"}} />
        </div>
        <div>

        <h6>{name}</h6>
        </div>
        <span className={styles.price}>${price.toFixed(2)}</span>
        <div className={styles.counter}>
          <button onClick={handleDecrement} className={styles.button}>
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button onClick={handleIncrement} className={styles.button}>
            +
          </button>
        </div>
        <span className={styles.price}>${(price * quantity).toFixed(2)}</span>
        <i className={`${cla} fa-solid fa-xmark fa-2xl`}></i>
      </div>
    </>
  );
};

export default ProductItem