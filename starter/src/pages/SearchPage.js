import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import useQuery from "../hooks/useQuery";

function SearchPage({ changeSelf }) {
  const [query, setQuery] = useState("");
  const [searchBooks] = useQuery(query);
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
