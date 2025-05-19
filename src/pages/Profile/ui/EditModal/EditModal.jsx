import React from "react";
import styles from "./EditModal.module.css";
import { updateUser } from "../UserModal/userSlice";
import { useDispatch } from "react-redux";
import { closeEdit } from "./editSlice";

function EditModal() {
  const dispatch = useDispatch();

  return (
    <div className={styles.editContainer} onClick={() => dispatch(closeEdit())}>
      <div className={styles.editContent}>
        <div className={styles.editHeader}>
          <h4>Редактирование аккаунта</h4>
          <button onClick={() => dispatch(closeEdit())}>&times;</button>
        </div>
        <form action="">
          <input type="text" placeholder="ФИО" />
          <input type="tel" placeholder="Телефон" />
          <input type="password" placeholder="Пароль" />
          <input type="text" placeholder="Адрес" />
        </form>
        <button onClick={() => dispatch(updateUser())}>Сохранить</button>
      </div>
    </div>
  );
}

export default EditModal;
