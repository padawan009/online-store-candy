import React from "react";
import styles from "./Profile.module.css";
import ProfileModal from "../../components/ui/ProfileModal/ProfileModal";
import { useSelector } from "react-redux";
import BackBtn from "../../components/ui/BackBtn/BackBtn";

function Profile() {
  const { isOpen } = useSelector((state) => state.profileModal);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <BackBtn />
        {isOpen && <ProfileModal />}
      </div>
    </div>
  );
}

export default Profile;
