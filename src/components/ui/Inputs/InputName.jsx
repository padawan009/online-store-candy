import React from "react";
import styles from "./Input.module.css";

function InputName({ register, error }) {
  return (
    <div className={styles.inputStyle}>
      <input
        type="text"
        placeholder="ФИО"
        {...register("fullname", {
          required: "Введите ФИО",
          validate: (value) =>
            value.trim().split(" ").length >= 2 ||
            "ФИО должно содержать минимум два слова",
        })}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default InputName;
