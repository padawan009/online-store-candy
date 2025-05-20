import React from "react";
import InputName from "../../../../../components/ui/Inputs/InputName";
import InputEmail from "../../../../../components/ui/Inputs/InputEmail";
import InputPhone from "../../../../../components/ui/Inputs/InputPhone";
import styles from "../PaymentModal.module.css"

function StepUserInfo({ register, errors}) {
  return (
    <div className={styles.paymentForm}>
      <InputName register={register} error={errors.fullname} />
      <InputPhone register={register} error={errors.phone} />
      <InputEmail register={register} error={errors.email} />
    </div>
  );
}

export default StepUserInfo;
