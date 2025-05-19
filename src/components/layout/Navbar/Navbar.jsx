import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import candyLogo from "./images/candylogo.png";
import Dropdown from "../../../features/Dropdown/Dropdown";
import cartIcon from "./images/cart.svg";
import profileIcon from "./images/profile.svg";
import phoneIcon from "./images/phone.svg";
import loupeIcon from "./images/loupe.svg";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../pages/Profile/ui/LoginModal/loginModalSlice";
import { openUserModal } from "../../../pages/Profile/ui/UserModal/userSlice";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  // const [isLogInEnter, setIsLogInEnter] = useState(false);
  // const [modalType, setModalType] = useState("");

  const quantity = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();

  function toggleBurger() {
    setIsActive((prev) => !prev);
  }

  function toggleProfile() {
    if (currentUser) {
      dispatch(openUserModal());
      navigate("/profile");
    } 
    else setIsLoginOpen((prev) => !prev);
  }

  // function handleModal(type) {
  //   setModalType(type);
  //   setIsOpen(false);
  //   setIsLogInEnter(true);
  // }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navbarBackground}></div>
      <div className={styles.navbarContent}>
        <div className={styles.firstRow}>
          <Link to="/">
            <img
              className={styles.candyLogo}
              src={candyLogo}
              alt="candy logo"
            />
          </Link>
          <div className={styles.firstRow__right}>
            <div className={styles.phoneBlock}>
              <img src={phoneIcon} alt="phone icon" />
              <p>8 920 999 45 43</p>
            </div>
            <Link to="cart" className={styles.cart}>
              <img src={cartIcon} alt="cart icon" />
              {quantity > 0 && <p>{quantity}</p>}
            </Link>
            <button className={styles.profile} onClick={toggleProfile}>
              <img src={profileIcon} alt="profile icon" />
            </button>
            {isLoginOpen && !currentUser && (
              <div className={styles.profileModal}>
                <Link
                  to="profile"
                  className={styles.enterBtn}
                  onClick={() => (
                    dispatch(openModal("enter")), setIsLoginOpen(false)
                  )}
                >
                  Войти в аккаунт
                </Link>
                <Link
                  to="profile"
                  className={styles.logInBtn}
                  onClick={() => (
                    dispatch(openModal("register")), setIsLoginOpen(false)
                  )}
                >
                  Зарегистрироваться
                </Link>
              </div>
            )}
            <div
              className={`${styles.burgerMenu} ${
                isActive ? styles.active : ""
              }`}
              onClick={toggleBurger}
            >
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div
            className={`${styles.secondRow__left} ${
              isActive ? styles.active : ""
            }`}
          >
            <Dropdown />
            <Link to="about-project">
              О проекте<span></span>
            </Link>
            <Link to="holidays">
              Праздники <span></span>
            </Link>
            <Link to="charity">
              Благотворительность <span></span>
            </Link>
          </div>
          <div className={styles.secondRow__right}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Поиск" />
              <img src={loupeIcon} alt="loupe icon" />
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
