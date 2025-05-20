import React from "react";
import styles from "./Input.module.css";

function InputComment({ register }) {

  return (
    <div className={styles.inputStyle}>
      <p>Комментарий к заказу</p>
      <input
        type="text"
        placeholder="Комментарий"
        {...register("comment")}
      />
    </div>
  );
}

export default InputComment;
