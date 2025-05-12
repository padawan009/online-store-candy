import React from "react";
import styles from "./Sets.module.css";
import pageStyles from "../../components/ui/CardList/CardList.module.css"
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import CardList from "../../components/ui/CardList/CardList";
import Pagination from "../../components/ui/Pagination/Pagination";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import usePagination from "../../hooks/usePagination";
import { useSelector } from "react-redux";

function Sets() {
  const setsArray = useSelector(state => state.sets);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(setsArray, 8);

  return (
    <div className={styles.setsContainer}>
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

export default Sets;
