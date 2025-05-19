import React from "react";
import styles from "./ProductDetail.module.css";
import pageStyles from "../../components/ui/CardList/CardList.module.css";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import HomeSegment from "../../components/ui/HomeSegment/HomeSegment";
import DetailSegment from "../../components/ui/DetailSegment/DetailSegment";
import ProductDetailCard from "../../components/ui/ProductDetailCard/ProductDetailCard";
import useProductDetailData from "../../hooks/useProductDetailData";

function ProductDetail() {
  const {
    detailArr1,
    detailArr2,
    detailText1,
    detailText2,
    candiesArr,
    mixesArr,
  } = useProductDetailData();

  return (
    <div className={styles.productDetailContainer}>
      <div className={pageStyles.pageBlock}>
        <BreadCrumb />
        <BackBtn />
        <ProductDetailCard />

        <div className={styles.detailSegmentBlock}>
          <DetailSegment text={detailText1} arr={detailArr1} />
          <DetailSegment text={detailText2} arr={detailArr2} />
        </div>

        <HomeSegment arr={candiesArr} title="С этим товаром смотрят" />
        <HomeSegment arr={mixesArr} title="Также рекомендуем" />
      </div>
    </div>
  );
}

export default ProductDetail;
