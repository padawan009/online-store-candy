import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./loginModalSlice";
import { addUser, checkUser, clearError } from "../UserModal/userSlice";
import { openUserModal } from "../UserModal/userSlice";

function LoginModal() {
  const { type } = useSelector((state) => state.loginModal);
  const dispatch = useDispatch();
  const isEnter = type === "enter";

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { error: loginErr, currentUser } = useSelector((state) => state.user);

  function submitForm(e, actiontype) {
    e.preventDefault();
    if (validate()) {
      if (actiontype === "register") dispatch(addUser({ phone, password }));
      else if (actiontype === "login") dispatch(checkUser({ phone, password }));
    }
  }

  useEffect(() => {
    if (loginErr) alert(loginErr); // для вывода ошибок входа/регистрации
    dispatch(clearError());
  }, [ loginErr, dispatch ])

  useEffect(() => {
    if (currentUser && !loginErr) {
      dispatch(closeModal());
      dispatch(openUserModal());
    }
  }, [currentUser, loginErr, dispatch])

  function validate() {
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
  }

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

      <form className={styles.modalForm}>
        <input
          type="tel"
          placeholder="Телефон"
          maxLength={12}
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
          <button
            type="submit"
            className={styles.firstBtn}
            onClick={(e) => {
              submitForm(e, isEnter ? "register" : "login");
            }}
          >
            {isEnter ? "Зарегистрироваться" : "Вход в аккаунт"}
          </button>
          <button
            type="submit"
            className={styles.secondBtn}
            onClick={(e) => {
              submitForm(e, isEnter ? "login" : "register");
            }}
          >
            {isEnter ? "Вход в аккаунт" : "Зарегистрироваться"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginModal; 
