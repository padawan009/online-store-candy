import React from "react";
import styles from "./Home.module.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className={styles.catalogContainer}>
      <Outlet />
    </div>
  );
}

export default Home;
