import React from "react";
import styles from "../PaymentModal.module.css";
import { closePayment } from "../paymentSlice";
import { useDispatch } from "react-redux";

function StepFinal() {
    const dispatch = useDispatch();

  return (
    <div className={styles.paymentModalContent} style={{padding: "0px"}}>
      <div className={styles.paymentHeader} style={{padding: "40px"}}>
        <h4>Заказ успешно оформлен</h4>
        <button onClick={() => dispatch(closePayment())}>&times;</button>
      </div>
      <p className={styles.thanks}>Спасибо!</p>
    </div>
  );
}

export default StepFinal;
