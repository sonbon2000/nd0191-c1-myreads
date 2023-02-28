import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

function BookShelf({ books, title, changeSelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <Book books={books} changeSelf={changeSelf} />
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
