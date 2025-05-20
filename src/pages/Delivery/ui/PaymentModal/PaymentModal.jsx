import React, { useState } from "react";
import styles from "./PaymentModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import StepUserInfo from "./PaymentSteps/StepUserInfo";
import StepAddress from "./PaymentSteps/StepAddress";
import StepPayment from "./PaymentSteps/StepPayment";
import StepFinal from "./PaymentSteps/StepFinal";
import { closePayment } from "./paymentSlice";

function PaymentModal() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const { fullname, email, password, phone, address } = useSelector(
    (state) => state.user.currentUser
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname,
      phone,
      password,
      email,
      address,
    },
  });

  const [modal, setModal] = useState(0);
  const [selected, setSelected] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const dispatch = useDispatch();

  function onSubmit() {
  if (modal === 2) {
    if (!selectedPayment) {
      alert("Пожалуйста, выберите способ оплаты");
      return;
    }
    if (!selected) {
      alert("Необходимо согласие на обработку данных");
      return;
    }
  }
    if (modal < 3) setModal((prev) => prev + 1);
  }

  return (
    <div className={styles.paymentModalContainer}>
      {modal !== 3 ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.paymentModalContent}
        >
          <div>
            <div className={styles.paymentHeader}>
              <h4>Оплата и доставка</h4>
              <button onClick={() => dispatch(closePayment())} >&times;</button>
            </div>
            <p className={styles.charity}>
              10% от стоимости Вашего заказа идут в фонд
            </p>
          </div>

          <div className={styles.paymentMain}>
            {modal === 0 && <StepUserInfo register={register} errors={errors} />}
            {modal === 1 && <StepAddress register={register} errors={errors} />}
            {modal === 2 && <StepPayment selected={selected} setSelected={setSelected} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />}
          </div>
          <div className={styles.paymentFooter}>
            <p>
              Итого: <span>{totalPrice} руб.</span>
            </p>
            <button type="submit">{modal < 2 ? "Дальше" : "Оплатить"}</button>
          </div>
        </form>
      ) : <StepFinal />}
    </div>
  );
}

export default PaymentModal;
