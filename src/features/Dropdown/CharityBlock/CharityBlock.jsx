import React, { useEffect, useRef, useState } from "react";
import styles from "./CharityBlock.module.css";
import pic from "./images/2151284579-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";

function CharityBlock() {
  const picRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(true);
      setTimeout(() => setShowText(false), 2500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.charityBlockContainer}>
      <div className={styles.textBlock}>
        <h2>Пожертвуйте для детского дома</h2>
        <div className={styles.checkboxBlock}>
          <div>
            <input type="checkbox" />
            <p>Единоразовая выплата</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Ежемесячные выплаты</p>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <input type="number" placeholder="Введите сумму" required />
          <button>Пожертвовать</button>
        </div>
      </div>

      <div
        ref={picRef}
        className={`${styles.picBlock} ${showText ? styles["show-text"] : ""}`}
      >
        <img src={pic} alt="pic" />
        <div className={styles.textOverlay}>
          10% от продаж идут в детский дом!
        </div>
      </div>
    </div>
  );
}

export default CharityBlock;
