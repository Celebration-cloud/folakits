import React from 'react'

function Counter() {
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
