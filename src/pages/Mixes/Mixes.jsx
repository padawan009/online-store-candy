import React from 'react'
import styles from "./Mixes.module.css"
import pageStyles from "../../components/ui/CardList/CardList.module.css"
import Pagination from '../../components/ui/Pagination/Pagination';
import BackBtn from '../../components/ui/BackBtn/BackBtn';
import BreadCrumb from '../../components/ui/BreadCrumb/BreadCrumb';
import CardList from '../../components/ui/CardList/CardList';
import usePagination from '../../hooks/usePagination';
import { useSelector } from 'react-redux';

function Mixes() {
  const mixesArray = useSelector(state => state.mixes);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(mixesArray, 8);

  return (
    <div className={styles.mixesContainer}>
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

export default Mixes