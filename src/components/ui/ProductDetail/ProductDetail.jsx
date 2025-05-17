import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import pageStyles from "../../ui/CardList/CardList.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import BackBtn from "../BackBtn/BackBtn";
import HomeSegment from "../HomeSegment/HomeSegment";
import DetailSegment from "../DetailSegment/DetailSegment";
import { addToCart } from "../../../pages/Cart/cartSlice"; 

const weightMap = {
  "200гр": 1,
  "400гр": 2,
  "800гр": 4,
  "1кг": 5,
};

function ProductDetail() {
  const dispatch = useDispatch();

  const candiesArr = useSelector((state) => state.candies);
  const boxesArr = useSelector((state) => state.boxes);
  const mixesArr = useSelector((state) => state.mixes);
  const setsArr = useSelector((state) => state.sets);
  const otherArr = useSelector((state) => state.other);
  const holidaysArr = useSelector((state) => state.holidays);

  const allItems = [
    ...candiesArr,
    ...mixesArr,
    ...setsArr,
    ...boxesArr,
    ...otherArr,
    ...holidaysArr,
  ];

  const { itemUrl } = useParams();
  const navigate = useNavigate();
  const item = allItems.find((item) => item.itemUrl === itemUrl);

  const hasWeights = item?.weights?.length > 0;
  const [selectedWeight, setSelectedWeight] = useState(
    hasWeights ? item.weights[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
    setSelectedWeight(hasWeights ? item.weights[0] : null);
  }, [itemUrl, hasWeights, item.weights]);

  if (!item) return <div>Товар не найден</div>;

  const multiplier = hasWeights ? weightMap[selectedWeight] : 1;
  const unitPrice = item.basePrice * multiplier;
  const finalPrice = item.showPrice ? unitPrice * quantity : null;

  function handleAddToCart() {
    dispatch(
      addToCart({
        title: item.title,
        weight: selectedWeight,
        price: unitPrice,
        quantity,
        itemUrl: item.itemUrl,
        img: item.img,
      })
    );
  };

  function handleBuy() {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className={styles.productDetailContainer}>
      <div className={pageStyles.pageBlock}>
        <BreadCrumb />
        <BackBtn />
        <div className={styles.productDetailCard}>
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
                <div className={styles.cardPrice}>{finalPrice} руб.</div>
              )}
              <p>Количество:</p>
              <div className={styles.counterRow}>
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className={styles.counterBtn}
                >
                  −
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className={styles.counterBtn}
                >
                  +
                </button>
              </div>

              <div className={styles.actionBtns}>
                <button onClick={handleBuy} className={styles.buyBtn}>
                  Купить
                </button>
                <button onClick={handleAddToCart} className={styles.cartBtn}>
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.detailSegmentBlock}>
          <DetailSegment text="Праздники, для которых подойдет данный товар" arr={holidaysArr}/>
          <DetailSegment text="Праздники, для которых подойдет данный товар" arr={holidaysArr}/>
        </div>

        <HomeSegment arr={candiesArr} title="С этим товаром смотрят" />
        <HomeSegment arr={mixesArr} title="Также рекомендуем" />
      </div>
    </div>
  );
}

export default ProductDetail;
