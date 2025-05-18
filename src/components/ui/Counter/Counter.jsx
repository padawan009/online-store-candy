import React from "react";
import styles from "./Counter.module.css";

function Counter({ quantity, increment, decrement }) {
  return (
    <div className={styles.counterRow}>
      <button onClick={decrement} className={styles.counterBtn}>−</button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={increment} className={styles.counterBtn}>+</button>
    </div>
  );
}

export default Counter;


