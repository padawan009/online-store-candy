import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import cartIcon from "./images/cart.svg";

const weightMap = {
  "200гр": 1,
  "400гр": 2,
  "800гр": 4,
  "1кг": 5,
};

const Card = ({
  image,
  title,
  description,
  basePrice,
  showPrice = false,
  weights = [],
  showCartButton = false,
  addToCart = () => {},
  itemUrl,
  category,
}) => {
  const hasWeights = weights.length > 0;
  const [selectedWeight, setSelectedWeight] = useState(
    hasWeights ? weights[0] : null
  );

  const multiplier = hasWeights ? weightMap[selectedWeight] : 1;
  const finalPrice = showPrice ? parseInt(basePrice * multiplier) : null;

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productPic} />
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {showPrice && <div className={styles.cardPrice}>{finalPrice} руб.</div>}

      {hasWeights && (
        <div className={styles.cardWeights}>
          {weights.map((weight) => (
            <button
              key={weight}
              className={`${styles.weightBtn} ${
                selectedWeight === weight ? styles.selected : ""
              }`}
              onClick={() => setSelectedWeight(weight)}
            >
              {weight}
            </button>
          ))}
        </div>
      )}

      <div className={styles.btnsBlock}>
        <Link to={`/catalog/${category}/${itemUrl}`}>
          <button className={styles.detailBtn}>Подробнее</button>
        </Link>

        {showCartButton && (
          <button
            className={styles.cartBtn}
            onClick={() =>
              addToCart({
                title,
                weight: selectedWeight,
                price: finalPrice,
              })
            }
          >
            <img src={cartIcon} alt="cart icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
