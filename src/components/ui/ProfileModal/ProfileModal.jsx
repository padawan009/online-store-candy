import React, { useState } from "react";
import styles from "./ProfileModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./profileModalSlice";

function ProfileModal() {
  const { type } = useSelector((state) => state.profileModal);
  const dispatch = useDispatch();
  const isEnter = type === "enter";

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^(\+7|8)\d{10}$/.test(phone)) {
      newErrors.phone = "Неверный формат. Пример: +79281234567 или 89281234567";
    }

    if (!password.trim()) {
      newErrors.password = "Введите пароль";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен быть не короче 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <p>{isEnter ? "Вход в аккаунт" : "Регистрация"}</p>
        <button
          className={styles.closeBtn}
          onClick={() => dispatch(closeModal())}
        >
          &times;
        </button>
      </div>

      <form
        className={styles.modalForm}
        onSubmit={(e) => {
          e.preventDefault();
          validate();
        }}
      >
        <input
          type="tel"
          placeholder="Телефон"
          maxLength={12}
          minLength={11}
          // autoFocus
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^\d+]/g, ""))}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}

        <input
          type="password"
          placeholder="Пароль"
          maxLength={15}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <div className={styles.modalBtns}>
          <button type="submit" className={styles.firstBtn}>
            {isEnter ? "Зарегистрироваться" : "Вход в аккаунт"}
          </button>
          <button type="submit" className={styles.secondBtn}>
            {isEnter ? "Вход в аккаунт" : "Зарегистрироваться"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileModal;
