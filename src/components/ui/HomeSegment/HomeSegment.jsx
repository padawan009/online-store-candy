import React from "react";
import styles from "./HomeSegment.module.css";
import arrowIcon from "./images/arrow.svg";
import CardList from "../CardList/CardList";
import { Link } from "react-router-dom";

function HomeSegment({ title, arr, linkTo }) {
  const previewArr = arr.slice(0, 4);

  return (
    <section className={styles.segment}>
      <div className={styles.segmentHeader}>
        <p>{title}</p>
        {linkTo && (
          <Link to={linkTo}>
            Еще
            <img src={arrowIcon} alt="arrow icon" />
          </Link>
        )}
      </div>
      <CardList currentItems={previewArr} />
    </section>
  );
}

export default HomeSegment;
