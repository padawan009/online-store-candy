import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useProductDetailData() {
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

  const { itemUrl } = useParams(); // извлекает динамические параметры из url
  const item = allItems.find((item) => item.itemUrl === itemUrl);

  let detailArr1 = [];
  let detailArr2 = [];
  let detailText1 = "";
  let detailText2 = "";

  switch (item.category) {
    case "candies":
      detailArr1 = holidaysArr;
      detailText1 = "Праздники, для которых подойдет данный товар";
      detailArr2 = mixesArr;
      detailText2 = "Ассорти, в которых есть данный товар";
      break;
    case "holidays":
      detailArr1 = otherArr;
      detailText1 = "К этому празднику подойдут следующие товары";
      detailArr2 = setsArr;
      detailText2 = "Наборы, подходящие к празднику";
      break;
    default:
      detailArr1 = holidaysArr;
      detailText1 = "Праздники, для которых подойдет данный товар";
      detailArr2 = candiesArr;
      detailText2 = "К этому товару так же подойдет";
  }
  return {
    candiesArr,
    boxesArr,
    setsArr,
    mixesArr,
    otherArr,
    holidaysArr,
    item,
    detailArr1,
    detailArr2,
    detailText1,
    detailText2,
  }
}

export default useProductDetailData;
