import React from "react";
import styles from "./UserModal.module.css";
import editIcon from "./images/Edit.svg";
import profilePic from "./images/blank-user-circles66.png";
import { useDispatch, useSelector } from "react-redux";
import { exitUser } from "./userSlice";
import { Link } from "react-router-dom";
import { openEdit } from "../EditModal/editSlice";

function UserModal() {
    const dispatch = useDispatch();
    const { phone, fullname, email, address } = useSelector(state => state.user.currentUser || {})

  return (
    <div className={styles.userContainer}>
      <h4>Аккаунт</h4>
      <div className={styles.userContent}>
        <button className={styles.editBtn} onClick={() => dispatch(openEdit())}>
          <img src={editIcon} alt="edit icon" />
        </button>
        <div className={styles.userInfo}>
          <img src={profilePic} alt="profile pic" />
          <div>
            <h5>{fullname ? fullname : "Николаев Николай Николаевич"}</h5>
            <p className={styles.phoneNumber}>{phone}</p>
            {email ? <p className={styles.email}>{email}</p> : <Link onClick={() => dispatch(openEdit())}>Добавить e-mail</Link> }
          </div>
        </div>
        <div className={styles.userAddress}>
          <p>Адрес:</p>
          <div>{address || "Россия, г. Москва, ул. Ленина, д. 50, кв. 2, Индекс: 398290"}</div>
          <button onClick={() => dispatch(exitUser())}>Выйти из аккаунта</button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;    
