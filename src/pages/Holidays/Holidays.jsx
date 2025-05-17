import React from "react";
import styles from "./Holidays.module.css";
import pageStyles from "../../components/ui/CardList/CardList.module.css";
import usePagination from "../../hooks/usePagination";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import CatalogSegment from "../../components/ui/CatalogSegment/CatalogSegment";
import Pagination from "../../components/ui/Pagination/Pagination";

function Holidays() {
  const holidaysArray = useSelector((state) => state.holidays);

  const { currentPage, setCurrentPage, totalPages, currentItems } =
    usePagination(holidaysArray, 8);

  return (
    <div className={styles.holidaysContainer}>
      <div className={pageStyles.pageBlock}>
        <BreadCrumb />
        <BackBtn />
        <div className={styles.holidaysContent__block}>
          {currentItems.map((item) => (
            <CatalogSegment
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              linkTo={item.itemUrl}
            />
          ))}
        </div>
        {/* <CardList currentItems={currentItems} /> */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Holidays;
