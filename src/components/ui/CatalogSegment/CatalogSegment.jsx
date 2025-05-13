import React from "react";
import styles from "./CatalogSegment.module.css";
import { Link } from "react-router-dom";

function CatalogSegment({ img, title, description, linkTo }) {
  return (
    <div className={styles.catalogCard}>
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
}

export default CatalogSegment;
