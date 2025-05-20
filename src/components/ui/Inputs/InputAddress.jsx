import React from "react";
import styles from "./Input.module.css";

function InputAddress({ register, error }) {
  return (
    <div className={styles.inputStyle}>
      <input
        type="text"
        placeholder="Адрес"
        {...register("address", {
          required: "Введите адрес",
        })}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default InputAddress;
