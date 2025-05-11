import React from 'react'
import styles from "./Mixes.module.css"
import mixesArray from './dataMixes';
import Pagination from '../../components/ui/Pagination/Pagination';
import BackBtn from '../../components/ui/BackBtn/BackBtn';
import BreadCrumb from '../../components/ui/BreadCrumb/BreadCrumb';
import Card from '../../components/ui/Card/Card';
import usePagination from '../../hooks/usePagination';

function Mixes() {
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems
  } = usePagination(mixesArray, 8);

  return (
    <div className={styles.mixesContainer}>
      <div className={styles.mixesBlock}>
        <BreadCrumb />
        <BackBtn />
        <div className={styles.mixesContent}>
          {currentItems.map((mix) => (
            <Card
              key={mix.id}
              image={mix.img}
              title={mix.title}
              description={mix.description}
              basePrice={mix.basePrice}
              weights={mix.weights}
              showPrice={mix.showPrice}
              showCartButton={mix.showCartButton}
              itemUrl={mix.itemUrl}
              category={mix.category}
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

export default Mixes