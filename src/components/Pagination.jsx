import React from "react";

export default function Pagination({
  pageNumber,
  setPageNumber,
  totalPage,
  handlePreviousClick,
  handleNextClick,
}) {
  const generatePageNumbers = () => {
    const pageCount = totalPage;
    const currentPage = pageNumber;
    const pageNumbers = [];
    const range = 2;

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(pageCount, currentPage + range);
      i++
    ) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  return (
    <div className="container mx-auto">
      <div className="join">
        <button
          className={`join-item btn ${
            pageNumber === 1 ? "btn-disabled" : "btn-active"
          }`}
          onClick={() => setPageNumber(1)}
          disabled={pageNumber === 1}
        >
          First
        </button>
        {generatePageNumbers().map((page) => (
          <button
            key={page}
            className={`join-item btn ${
              page === pageNumber ? "btn-active" : ""
            }`}
            onClick={() => setPageNumber(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`join-item btn ${
            pageNumber === totalPage ? "btn-disabled" : "btn-active"
          }`}
          onClick={() => setPageNumber(totalPage)}
          disabled={pageNumber === totalPage}
        >
          Last
        </button>
      </div>
    </div>
  );
}
