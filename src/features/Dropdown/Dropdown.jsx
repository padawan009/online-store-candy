import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import arrowIcon from "./images/arrow.svg";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.button}>
        Каталог
        <img
          src={arrowIcon}
          alt="arrow icon"
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <Link to="catalog/mixes" onClick={closeDropdown} className={styles.menuItem}>
            Ассорти
          </Link>
          <Link to="catalog/candies" onClick={closeDropdown} className={styles.menuItem}>
            Конфеты
          </Link>
          <Link to="catalog/gift-boxes" onClick={closeDropdown} className={styles.menuItem}>
            Подарочные коробки
          </Link>
          <Link to="catalog/candy-sets" onClick={closeDropdown} className={styles.menuItem}>
            Готовые наборы
          </Link>
          <Link onClick={closeDropdown} className={styles.menuItem}>
            Аксессуары и другое
          </Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
