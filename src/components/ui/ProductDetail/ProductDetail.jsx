import React from 'react'
import styles from "./ProductDetail.module.css"
import { useParams } from 'react-router-dom';
import candiesArray from '../../../pages/Candies/dataCandies';
import mixesArray from '../../../pages/Mixes/dataMixes';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

const allItems = [...candiesArray, ...mixesArray];

function ProductDetail() {
  const { itemUrl } = useParams();


  const candyItem = allItems.find(item => item.itemUrl === itemUrl);

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


export default ProductDetail