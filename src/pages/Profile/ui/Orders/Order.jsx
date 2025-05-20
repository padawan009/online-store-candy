import React from "react";
import styles from "./Order.module.css";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function Order() {
  const { cartItems } = useSelector((state) => state.user.currentUser);

  return (
    <div className={styles.orderContainer}>
      <h4>Все заказы:</h4>
      <div className={styles.orderContent}>
        {cartItems && cartItems.map((item) => (<OrderItem item={item}/>))}
      </div>
    </div>
  );
}

export default Order;
