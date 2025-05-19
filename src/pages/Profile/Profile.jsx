import React from "react";
import styles from "./Profile.module.css";
import LoginModal from "./ui/LoginModal/LoginModal";
import { useSelector } from "react-redux";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import UserModal from "./ui/UserModal/UserModal";

function Profile() {
  const { isOpen } = useSelector((state) => state.loginModal);
  const { isUserOpen} = useSelector(state => state.user);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <BackBtn />
        {isOpen && <LoginModal />}
        {isUserOpen && <UserModal />}
      </div>
    </div>
  );
}

export default Profile;
