import React from "react";
import styles from "./BackBtn.module.css";
import { useNavigate } from "react-router-dom";
import backArr from "./images/backArr.svg";

function BackBtn() {
  const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <button onClick={handleBack} className={styles.backBtn}>
      <img src={backArr} alt="back arrow" />
      Назад
    </button>
  );
}

export default BackBtn;
