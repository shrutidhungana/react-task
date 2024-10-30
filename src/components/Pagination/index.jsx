
import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-1">
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-4 py-2 border rounded ${
                currentPage === number ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

// PropTypes for the Pagination component
Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
