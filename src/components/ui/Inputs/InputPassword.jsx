import React from "react";
import styles from "./Input.module.css";

function InputPassword({ register, error }) {
  return (
    <div className={styles.inputStyle}>
      <input
        type="password"
        placeholder="Пароль"
        {...register("password", {
          required: "Введите пароль",
          minLength: {
            value: 6,
            message: "Пароль должен быть не короче 6 символов",
          },
          maxLength: {
            value: 15,
            message: "Максимум 15 символов",
          },
        })}
      />
      {error && (<p className={styles.error}>{error.message}</p>
      )}
    </div>
  );
}

export default InputPassword;
