import React from "react";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import HomeSegment from "../../components/ui/HomeSegment/HomeSegment";
import CatalogSegment from "../../components/ui/CatalogSegment/CatalogSegment";
import CharityBlock from "../../features/Dropdown/CharityBlock/CharityBlock";

function Home() {
  const mixArr = useSelector((state) => state.mixes);
  const candiesArr = useSelector((state) => state.candies);
  const boxesArr = useSelector((state) => state.boxes);
  const homeArr = useSelector((state) => state.home);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <div className={styles.catalogBlock}>
            <p className={styles.catalogText}>Каталог</p>
            <div className={styles.homeContent__block}>
              {homeArr.map((item) => (
                <CatalogSegment
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  linkTo={item.itemUrl}
                />
              ))}
            </div>
          </div>
          <HomeSegment title="Ассорти" arr={mixArr} linkTo="/catalog/mixes" />
          <HomeSegment
            title="Конфеты"
            arr={candiesArr}
            linkTo="/catalog/candies"
          />
          <HomeSegment
            title="Подарочные коробки"
            arr={boxesArr}
            linkTo="/catalog/gift-boxes"
          />
        </div>
      </div>
      <CharityBlock />
    </>
  );
}

export default Home;
