import React from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { useSelector } from "react-redux";

function ProductDetail() {
  const candiesArr = useSelector(state => state.candies);
  const boxesArr = useSelector(state => state.boxes);
  const mixesArr = useSelector(state => state.mixes);
  const setsArr = useSelector(state => state.sets);
  const otherArr = useSelector(state => state.other);
  
  const allItems = [...candiesArr, ...mixesArr, ...setsArr, ...boxesArr, ...otherArr];
  const { itemUrl } = useParams();

  const candyItem = allItems.find((item) => item.itemUrl === itemUrl);

  if (!candyItem) return <div>Товар не найден</div>;

  return (
    <div>
      <BreadCrumb />
      <h2>{candyItem.title}</h2>
      <img src={candyItem.img} alt={candyItem.title} />
      <p>{candyItem.description}</p>
      <p>{candyItem.basePrice} руб.</p>
    </div>
  );
}

export default ProductDetail;
