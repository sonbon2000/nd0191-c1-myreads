import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import PropTypes from "prop-types";

function SearchPage({ changeSelf, initBooks, query, handleInputChange }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Book books={initBooks} changeSelf={changeSelf} />
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  changeSelf: PropTypes.func.isRequired,
  initBooks: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SearchPage;
