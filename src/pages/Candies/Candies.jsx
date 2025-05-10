import React from "react";
import styles from "./Candies.module.css";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import Card from "../../components/ui/Card/Card";
import candiesArray from "./dataCandies";

function Candies() {
  return (
    <div className={styles.candiesContainer}>
      <div className={styles.candiesBlock}>
        <BackBtn />
        <div className={styles.candiesContent}>
          {candiesArray.map((candy) => (
            <Card
              key={candy.id}
              image={candy.img}
              title={candy.title}
              description={candy.description}
              basePrice={candy.basePrice}
              weights={candy.weights}
              showPrice={candy.showPrice}
              showCartButton={candy.showCartButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Candies;
