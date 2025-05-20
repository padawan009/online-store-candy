import React from "react";
import styles from "./Input.module.css";

function InputEmail({ register, error }) {
  return (
    <div className={styles.inputStyle}>
      <input
        type="email"
        placeholder="E-mail"
        {...register("email", {
          required: "Введите email",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Неверный формат email",
          },
        })}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}

export default InputEmail;
