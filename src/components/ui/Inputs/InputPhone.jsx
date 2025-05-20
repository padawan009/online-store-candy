import React from "react";
import styles from "./Input.module.css";

function InputPhone({ register, error }) {
  return (
    <div className={styles.inputStyle}>
      <input
        type="tel"
        placeholder="Телефон"
        {...register("phone", {
          required: "Введите номер телефона",
          pattern: {
            value: /^(\+7|8)\d{10}$/,
            message: "Неверный формат. Пример: +79281234567 или 89281234567",
          },
        })}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^\d+]/g, "");
        }}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default InputPhone;
