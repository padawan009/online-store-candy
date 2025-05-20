import React from "react";
import styles from "./EditModal.module.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../UserModal/userSlice";
import { closeEdit } from "./editSlice";
import InputPhone from "../../../../components/ui/Inputs/InputPhone.jsx";
import InputEmail from "../../../../components/ui/Inputs/InputEmail.jsx";
import InputPassword from "../../../../components/ui/Inputs/InputPassword.jsx";
import InputName from "../../../../components/ui/Inputs/InputName.jsx";
import InputAddress from "../../../../components/ui/Inputs/InputAddress.jsx";

function EditModal() {
  const dispatch = useDispatch();
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

  function onSubmit(data) {
    dispatch(updateUser(data));
    dispatch(closeEdit());
  }

  return (
    <div className={styles.editContainer} onClick={() => dispatch(closeEdit())}>
      <div className={styles.editContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.editHeader}>
          <h4>Редактирование аккаунта</h4>
          <button onClick={() => dispatch(closeEdit())}>&times;</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.editForm}>
          <InputName register={register} error={errors.fullname} />
          <InputPhone register={register} error={errors.phone} />
          <InputPassword register={register} error={errors.password} />
          <InputEmail register={register} error={errors.email} />
          <InputAddress register={register} error={errors.address} />
          
          <button type="submit" className={styles.saveBtn}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
