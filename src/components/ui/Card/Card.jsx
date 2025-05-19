import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import cartIcon from "./images/cart.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../pages/Cart/cartSlice";

const weightMap = {
  "200гр": 1,
  "400гр": 2,
  "800гр": 4,
  "1кг": 5,
};

const Card = ({
  id,
  image,
  title,
  description,
  basePrice,
  showPrice = false,
  weights = [],
  showCartButton = false,
  itemUrl,
  category,
}) => {
  const hasWeights = weights.length > 0;
  const [selectedWeight, setSelectedWeight] = useState(
    hasWeights ? weights[0] : null
  );

  const multiplier = hasWeights ? weightMap[selectedWeight] : 1;
  const finalPrice = Math.round(basePrice * multiplier);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addToCart({
        id,
        title,
        weight: selectedWeight,
        price: finalPrice,
        img: image,
        itemUrl,
        quantity: 1,
      })
    );

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 4000);
  }

  return (
    <div className={styles.productCard}>
      {isAdded && (
        <p className={styles.cartModal}>Товар добавлен в корзину &#128151;</p>
      )}
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
          <button className={styles.cartBtn} onClick={handleAddToCart}>
            <img src={cartIcon} alt="cart icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
