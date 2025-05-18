import React from "react";
import styles from "./Cart.module.css";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import cartPic from "./images/1527-removebg-preview.png";
import CartItem from "../../components/ui/CartItem/CartItem";
import { clearCart } from "./cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>
        <BackBtn />
        <div className={styles.headerBlock}>
          <p className={styles.header}>Корзина</p>
          <button onClick={() => dispatch(clearCart())}>Очистить</button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.picBlock}>
            <h2>Корзина пуста ...&#128532;</h2>
            <img src={cartPic} alt="cart pic" className={styles.emptyCart} />
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
            <div className={styles.totalBlock}>
              <p>Всего: {totalPrice} руб.</p>
              <button>Оплатить</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
