import InputAddress from "../../../../../components/ui/Inputs/InputAddress";
import InputDate from "../../../../../components/ui/Inputs/InputDate";
import InputComment from "../../../../../components/ui/Inputs/InputComment";
import styles from "../PaymentModal.module.css"

function StepAddress({ register, errors }) {
  return (
    <div className={styles.paymentForm}>
      <InputAddress register={register} error={errors.address} />
      <InputDate register={register} error={errors.date} />
      <InputComment register={register} error={errors.comment} />
    </div>
  );
}

export default StepAddress;
