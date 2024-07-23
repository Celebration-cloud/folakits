import { useState } from 'react'
import styles from './Counter.module.css'
function Counter({amount}) {
    const [count, setCount] = useState(amount); // Initial count set to 2

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
