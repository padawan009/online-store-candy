import React from "react";
import styles from "./Cart.module.css";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import cartPic from "./images/1527-removebg-preview1.png";
import CartItem from "./ui/CartItem/CartItem";
import { clearCart } from "./cartSlice";
import { openModal } from "../Profile/ui/LoginModal/loginModalSlice";
import { useNavigate } from "react-router-dom";
import { openPayment } from "../Delivery/ui/PaymentModal/paymentSlice";
import { updateUser } from "../Profile/ui/UserModal/userSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  function makeOrder() {
    if (!currentUser) {
      navigate("/profile");
      dispatch(openModal());
    } else {
      navigate("/delivery-and-payment");
      dispatch(updateUser({ cartItems }));
      dispatch(openPayment());
    }
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartContent}>
        <BackBtn />
        <div className={styles.headerBlock}>
          <p className={styles.header}>Корзина</p>
          {cartItems.length > 0 && (
            <button onClick={() => dispatch(clearCart())}>Очистить</button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.picBlock}>
            <h2>Корзина пуста ...&#128532;</h2>
            <div>
              <img src={cartPic} alt="cart pic" className={styles.emptyCart} />
            </div>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem item={item} key={`${item.title}${item.weight}`} />
            ))}
            <div className={styles.totalBlock}>
              <p>Всего: {totalPrice} руб.</p>
              <button onClick={makeOrder}>Оплатить</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
