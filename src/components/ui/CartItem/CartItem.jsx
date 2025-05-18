import React from "react";
import styles from "./CartItem.module.css";
import Counter from "../Counter/Counter";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../../pages/Cart/cartSlice";

function CartItem({ item }) {
  const finalPrice = item.price * item.quantity;
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItemContent}>
      <div className={styles.leftBlock}>
        <div>
          <img src={item.img} alt="pic of item" />
        </div>

        <div className={styles.leftBlock__content}>
          <div>
            <h4>{item.title}</h4>
            {item.weight && <p>Вес: {item.weight}</p>}
          </div>
          <p className={styles.priceBlock}>
            Цена за 1 шт: <span>{item.price} руб.</span>
          </p>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div>
          <p>Количество:</p>
          <Counter
            quantity={item.quantity}
            increment={() =>
              dispatch(
                incrementQuantity({ title: item.title, weight: item.weight })
              )
            }
            decrement={() =>
              dispatch(
                decrementQuantity({ title: item.title, weight: item.weight })
              )
            }
          />
        </div>
        <p className={styles.priceBlock}>
          Итого: <span>{finalPrice} руб.</span>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
