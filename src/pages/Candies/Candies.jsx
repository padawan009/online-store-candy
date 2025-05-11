import React from "react";
import styles from "./Candies.module.css";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import Card from "../../components/ui/Card/Card";
import candiesArray from "./dataCandies";
import Pagination from "../../components/ui/Pagination/Pagination";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import usePagination from "../../hooks/usePagination";

function Candies() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(candiesArray, 8);

  return (
    <div className={styles.candiesContainer}>
      <div className={styles.candiesBlock}>
        <BreadCrumb />
        <BackBtn />
        <div className={styles.candiesContent}>
          {currentItems.map((candy) => (
            <Card
              key={candy.id}
              image={candy.img}
              title={candy.title}
              description={candy.description}
              basePrice={candy.basePrice}
              weights={candy.weights}
              showPrice={candy.showPrice}
              showCartButton={candy.showCartButton}
              itemUrl={candy.itemUrl}
              category={candy.category}
            />
          ))}
        </div>
        <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={(page) => setCurrentPage(page)}/>
      </div>
    </div>
  );
}

export default Candies;
