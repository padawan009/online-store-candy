import React from "react";
import styles from "./OtherItems.module.css";
import pageStyles from "../../components/ui/CardList/CardList.module.css"
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import Pagination from "../../components/ui/Pagination/Pagination";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import usePagination from "../../hooks/usePagination";
import { useSelector } from "react-redux";
import CardList from "../../components/ui/CardList/CardList";

function OtherItems() {
  const otherArray = useSelector(state => state.other);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(otherArray, 8);

  return (
    <div className={styles.otherContainer}>
      <div className={pageStyles.pageBlock}>
        <BreadCrumb />
        <BackBtn />
        <CardList currentItems={currentItems}/>
        <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={(page) => setCurrentPage(page)}/>
      </div>
    </div>
  );
}

export default OtherItems;
