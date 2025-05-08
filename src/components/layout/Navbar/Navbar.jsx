import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import candyLogo from "./images/candylogo.png";
import Dropdown from "../../../features/Dropdown/Dropdown";
import cartIcon from "./images/cart.svg";
import profileIcon from "./images/profile.svg";
import phoneIcon from "./images/phone.svg";
import loupeIcon from "./images/loupe.svg"

function Navbar() {
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
            <div className={styles.burgerMenu}>
              <span></span>
            </div>
            <div className={styles.phoneBlock}>
              <img src={phoneIcon} alt="phone icon" />
              <p>8 920 999 45 43</p>
            </div>
            <Link to="cart">
              <img src={cartIcon} alt="cart icon" />
            </Link>
            <Link to="profile">
              <img src={profileIcon} alt="profile icon" />
            </Link>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.secondRow__left}>
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
