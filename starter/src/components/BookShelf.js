import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ books, title, changeSelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} changeSelf={changeSelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  changeSelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
