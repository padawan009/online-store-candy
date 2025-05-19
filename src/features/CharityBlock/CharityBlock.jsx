import React, { useEffect, useState } from "react";
import styles from "./CharityBlock.module.css";
import pic from "./images/2151284579-removebg-preview.png";

function CharityBlock() {
  const [showText, setShowText] = useState(false);
  const [amount, setAmount] = useState("");

useEffect(() => {
  const showDuration = 1500;
  const cycleDuration = 7000;

  // 1. Первая пауза — в начале (0s, слева)
  setShowText(true);
  const initialLeftPause = setTimeout(() => setShowText(false), showDuration);

  // 2. Первая пауза — справа (5.6s после загрузки)
  const initialRightPause = setTimeout(() => {
    setShowText(true);
    setTimeout(() => setShowText(false), showDuration);
  }, cycleDuration - showDuration); // 5600ms

  // 3. Все остальные циклы
  const interval = setInterval(() => {
    // Пауза справа
    const rightPause = setTimeout(() => {
      setShowText(true);
      setTimeout(() => setShowText(false), showDuration);
    }, cycleDuration - showDuration);

    // Пауза слева — в начале следующего цикла
    const leftPause = setTimeout(() => {
      setShowText(true);
      setTimeout(() => setShowText(false), showDuration);
    }, cycleDuration);

    // очистка внутренних таймеров если нужно
    return () => {
      clearTimeout(rightPause);
      clearTimeout(leftPause);
    };
  }, cycleDuration);

  return () => {
    clearTimeout(initialLeftPause);
    clearTimeout(initialRightPause);
    clearInterval(interval);
  };
}, []);



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
        className={`${styles.picBlock} ${showText ? styles.showText : ""}`}
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
