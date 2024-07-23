/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './Counter.module.css'
function Counter({amount}) {
    const [count, setCount] = useState(amount ? amount : 2); // Initial count set to 2

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
      if (amount ? count > 1 : count > 0/* eslint-disable react/prop-types */
import styles from './ProductItem.module.css'
import Counter from '../reuseable/counter/Counter';
const ProductItem = ({ cart }) => {
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
          <Counter amount={item.amount} />
          <span className={styles.price}>
            &#x20A6;{(item.price * item.amount).toFixed(2)}
          </span>
          <i className={`${styles.remove} fa-solid fa-xmark fa-1xl`}></i>
        </div>
      ))}
    </>
  );
};

export default ProductItem) {
        // Prevents the count from going below 0
        setCount((prevCount) => prevCount - 1);
      }
    };
  return (
    <div className={styles.counter}>
      <button onClick={handleDecrement} className={styles.button}>
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>
    </div>
  );
}

export default Counter
