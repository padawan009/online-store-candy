import React from "react";
import styles from "./Profile.module.css";
import LoginModal from "./ui/LoginModal/LoginModal";
import { useSelector } from "react-redux";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import UserModal from "./ui/UserModal/UserModal";
import EditModal from "./ui/EditModal/EditModal";
import Order from "./ui/Orders/Order";

function Profile() {
  const { isOpen } = useSelector((state) => state.loginModal);
  const { isUserOpen } = useSelector((state) => state.user);
  const { isEditOpen } = useSelector((state) => state.edit);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <BackBtn />
        {isOpen && <LoginModal />}
        {isUserOpen && (
          <div className={styles.userOrderBlock}>
            <UserModal />
            <Order />
          </div>
        )}
        {isEditOpen && <EditModal />}
      </div>
    </div>
  );
}

export default Profile;
