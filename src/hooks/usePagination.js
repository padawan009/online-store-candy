import { useState } from "react";

function usePagination(data = [], itemsOnPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsOnPage);
  const startIndex = (currentPage - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  const currentItems = data.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
}

export default usePagination;
