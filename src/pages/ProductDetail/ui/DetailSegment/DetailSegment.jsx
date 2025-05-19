import React, { useState } from "react";
import styles from "./DetailSegment.module.css";

function DetailSegment({ text, arr, visibleCont = 4 }) {
    const [startIndex, setStartIndex] = useState(0);

    const visibleArr = arr.slice(startIndex, startIndex + visibleCont);

    function handleBack() {
        if (startIndex > 0) setStartIndex(prev => prev - 1);
    }

    function handleNext() {
        if (startIndex < arr.length - visibleCont) setStartIndex(prev => prev + 1);
    }

  return (
    <div className={styles.detailContainer}>
      <p className={styles.header}>{text}</p>
      <div className={styles.bottomBlock}>
        <button onClick={handleBack} disabled={startIndex === 0}>&lt;</button>
        <div className={styles.contentBlock}>
          {visibleArr.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={startIndex >= arr.length - visibleCont}>&gt;</button>
      </div>
    </div>
  );
}

export default DetailSegment;
