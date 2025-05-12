import React from "react";
import styles from "./Boxes.module.css";
import pageStyles from "../../components/ui/CardList/CardList.module.css"
import BackBtn from "../../components/ui/BackBtn/BackBtn";
import CardList from "../../components/ui/CardList/CardList";
import Pagination from "../../components/ui/Pagination/Pagination";
import BreadCrumb from "../../components/ui/BreadCrumb/BreadCrumb";
import usePagination from "../../hooks/usePagination";
import { useSelector } from "react-redux";

function Boxes() {
  const boxesArray = useSelector(state => state.boxes);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(boxesArray, 8);

  return (
    <div className={styles.boxesContainer}>
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

export default Boxes;
