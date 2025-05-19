import React, { useState, useEffect } from "react";
import styles from "./ProductDetailCard.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../pages/Cart/cartSlice";
import Counter from "../Counter/Counter";
import useProductDetailData from "../../../hooks/useProductDetailData";

const weightMap = {
  "200гр": 1,
  "400гр": 2,
  "800гр": 4,
  "1кг": 5,
};

function ProductDetailCard() {
  const { item } = useProductDetailData();
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const hasWeights = item.weights.length > 0;
  const [selectedWeight, setSelectedWeight] = useState(
    hasWeights ? item.weights[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  const multiplier = hasWeights ? weightMap[selectedWeight] : 1;
  const unitPrice = item.basePrice * multiplier;
  const finalPrice = unitPrice * quantity;

  useEffect(() => {  // чтобы при смене позиции сбрасывать кол-во и вес
    setQuantity(1);
    setSelectedWeight(hasWeights ? item.weights[0] : null);
  }, [item.itemUrl, hasWeights, item.weights]);

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        weight: selectedWeight,
        price: unitPrice,
        quantity,
        itemUrl: item.itemUrl,
        img: item.img,
      })
    );

    setIsAdded(true); // для появления модалки на 4 секунды
    setTimeout(() => {
      setIsAdded(false);
    }, 4000);
  }

  function handleBuy() {
    handleAddToCart();
    navigate("/cart");
  }

  if (!item) return <div>Товар не найден</div>;

  return (
    <div className={styles.productDetailCard}>
      {isAdded && (
        <p className={styles.cartModal}>Товар добавлен в корзину &#128151;</p>
      )}
      <img src={item.img} alt={item.title} />
      <div className={styles.productDetailContent}>
        <div className={styles.topBlock}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className={styles.bottomBlock}>
          {hasWeights && (
            <div className={styles.cardWeights}>
              {item.weights.map((weight) => (
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
          {item.showPrice && (
            <>
              <div className={styles.cardPrice}>{finalPrice} руб.</div>
              <p>Количество:</p>
              <Counter
                quantity={quantity}
                increment={() => setQuantity((q) => q + 1)}
                decrement={() => setQuantity((q) => Math.max(1, q - 1))}
              />
              <div className={styles.actionBtns}>
                <button onClick={handleBuy} className={styles.buyBtn}>
                  Купить
                </button>
                <button onClick={handleAddToCart} className={styles.cartBtn}>
                  Добавить в корзину
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
