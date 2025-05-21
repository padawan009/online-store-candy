import React, { useState } from "react";
import styles from "./CharityBlock.module.css";
import pic from "./images/2151284579-removebg-preview.png";

function CharityBlock() {
  const [amount, setAmount] = useState("");

  const handleDonate = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Пожалуйста, введите сумму пожертвования.");
      return;
    }

    alert(`Спасибо за пожертвование на сумму ${amount} ₽!`);
  };

  return (
    <div className={styles.charityBlockContainer}>
      <div className={styles.textBlock}>
        <h2>Пожертвуйте для детского дома</h2>
        <div className={styles.checkboxBlock}>
          <label className={styles.customCheckbox}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
            Единоразовая выплата
          </label>
          <label className={styles.customCheckbox}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
            Ежемесячные выплаты
          </label>
        </div>
        <div className={styles.bottomBlock}>
          <input
            type="number"
            placeholder="Введите сумму"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button onClick={handleDonate}>Пожертвовать</button>
        </div>
      </div>

      <div
        className={styles.picBlock}
      >
        <img src={pic} alt="pic" />
        <div className={styles.textOverlay}>
          <span>10%</span> от продаж идут в детский дом!
        </div>
      </div>
    </div>
  );
}

export default CharityBlock;
