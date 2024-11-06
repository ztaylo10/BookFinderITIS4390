import React from 'react';
import '../stylesheets/Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <img src="/left.png" height={15} width={15} alt="Left Arrow" onClick={() => onPageChange(currentPage - 1)} />
      <button className="page-link" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        Page 1
      </button>
      <div className="page-circles">
        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page + 1)}
            className={page + 1 === currentPage ? 'active' : ''}
          />
        ))}
      </div>
      <button className="page-link" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        Last Page
      </button>
      <img src="/right.png"  height={15} width={15} alt="Right Arrow" onClick={() => onPageChange(currentPage + 1)} />
    </div>
  );
}

export default Pagination;

