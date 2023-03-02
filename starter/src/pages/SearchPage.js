import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../components/Book";
import useQuery from "../hooks/useQuery";
import PropTypes from "prop-types";

function SearchPage({ changeSelf, books, initBooks }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchBooks] = useQuery(query);
  const handleNavigate = () => {
    initBooks();
    navigate("/");
  };
  const currentSelfBook = (id) => {
    const book = books.find((book) => book.id === id);
    if (book) {
      return book.shelf;
    }

    return null;
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a href="" className="close-search" onClick={handleNavigate}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.map((book) => {
            return (
              <li key={book.id}>
                <Book
                  book={book}
                  changeSelf={changeSelf}
                  currentSelfBook={currentSelfBook(book.id)}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  changeSelf: PropTypes.func.isRequired,
  initBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

export default SearchPage;
