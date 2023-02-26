import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Book from "../components/Book";
import useQuery from "../hooks/useQuery";

function SearchPage({ changeSelf, initBooks }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchBooks] = useQuery(query);
  const handleNavigate = () => {
    initBooks();
    navigate("/");
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={handleNavigate}>
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
        <Book books={searchBooks} changeSelf={changeSelf} />
      </div>
    </div>
  );
}

export default SearchPage;
