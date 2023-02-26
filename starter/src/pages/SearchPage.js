import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

function SearchPage({ books, changeSelf, query, handleChangeQuery }) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
            onChange={handleChangeQuery}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Book books={books} changeSelf={changeSelf} />
      </div>
    </div>
  );
}

export default SearchPage;
