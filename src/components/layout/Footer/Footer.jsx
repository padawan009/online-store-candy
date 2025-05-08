import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import instIcon from "./images/insta.svg";
import vkIcon from "./images/vk.svg";
import phoneIcon from "./images/phone.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footer__left}>
          <Link to="delivery-and-payment">Оплата</Link>
          <Link to="delivery-and-payment">Доставка</Link>
        </div>
        <div className={styles.footer__center}>
          <img src={vkIcon} alt="vk icon" />
          <img src={instIcon} alt="instagram icon" />
        </div>
        <div className={styles.footer__right}>
          <img src={phoneIcon} alt="phone icon" />
          <p>8 920 999 45 43</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
