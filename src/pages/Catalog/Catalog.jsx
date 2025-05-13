import React from "react";
import styles from "./Catalog.module.css";
import { Outlet } from "react-router-dom";

function Catalog() {
  return (
    <div className={styles.catalogContainer}>
      <Outlet />
    </div>
  );
}

export default Catalog;
