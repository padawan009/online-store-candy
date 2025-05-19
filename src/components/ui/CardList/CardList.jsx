import React from "react";
import styles from "./CardList.module.css"
import Card from "../Card/Card";

function CardList({ currentItems }) {
  return (
    <div className={styles.pageContent}>
      {currentItems.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          image={item.img}
          title={item.title}
          description={item.description}
          basePrice={item.basePrice}
          weights={item.weights}
          showPrice={item.showPrice}
          showCartButton={item.showCartButton}
          itemUrl={item.itemUrl}
          category={item.category}
        />
      ))}
    </div>
  );
}

export default CardList;
