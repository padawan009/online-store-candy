import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, handlePageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        className={currentPage === i ? styles.active : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span>&lt;</span>
      </button>
      {pages}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>&gt;</span>
      </button>
    </div>
  );
}

export default Pagination;
