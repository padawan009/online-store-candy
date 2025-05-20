import React from "react";
import styles from "../PaymentModal.module.css";

function StepPayment({
  selected,
  setSelected,
  selectedPayment,
  setSelectedPayment,
}) {
  return (
    <div className={styles.paymentBlock}>
      <h5>Способ оплаты:</h5>
      <div className={styles.paymentChoice}>
        <button
          type="button"
          className={selectedPayment === "cash" ? styles.selected : ""}
          onClick={() => setSelectedPayment("cash")}
        >
          Наличными или картой
          <br />
          при получении
        </button>
        <button
          type="button"
          className={selectedPayment === "online" ? styles.selected : ""}
          onClick={() => setSelectedPayment("online")}
        >
          Оплата картой
          <br />
          на сайте
        </button>
      </div>
      <div className={styles.personalInfo}>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
          />
          <span className={styles.checkmark}></span>
        </label>

        <p>
          Оформляя заказ, я даю своё согласие на обработку персональных данных и
          подтверждаю ознакомление с договором-офертой.
        </p>
      </div>
    </div>
  );
}

export default StepPayment;
