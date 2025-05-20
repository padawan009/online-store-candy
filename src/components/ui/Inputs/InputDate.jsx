import React from "react";
import styles from "./Input.module.css";

function InputDate({ register }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.inputStyle} >
      <p>Желаемая дата доставки</p>
      <input
        type="date"
        defaultValue={today}
        min={today}
        {...register("date")}
      />
    </div>
  );
}

export default InputDate;
