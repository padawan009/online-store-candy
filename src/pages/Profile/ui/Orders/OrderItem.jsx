import React, { useState } from "react";
import styles from "./Order.module.css";

function OrderItem({ item }) {
  const finalPrice = item.price * item.quantity;
  const [send, setSend] = useState(true);

  function toggleSendBtn() {
    setSend((prev) => !prev);
  }

  return (
    <div className={styles.orderItemContent}>
      <div className={styles.leftBlock}>
        <div>
          <img src={item.img} alt="pic of item" />
        </div>

        <div className={styles.leftBlock__content}>
          <div>
            <h4>{item.title}</h4>
            {item.weight && <p>Вес: {item.weight}</p>}
            {item.quantity && (
              <p className={styles.itemQuantity}>{item.quantity} шт.</p>
            )}
          </div>
          <p className={styles.priceBlock}>
            Итого: <span>{finalPrice} руб.</span>
          </p>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <p>Статус</p>
        <button onClick={toggleSendBtn} className={send ? styles.send : styles.reject}>
          {send ? "Отправлено" : "Отменено"}
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
