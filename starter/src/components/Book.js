import React from "react";
import PropTypes from "prop-types";

function Book({ book, changeSelf, currentSelfBook }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks?.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={
              book.shelf
                ? book.shelf
                : currentSelfBook
                ? currentSelfBook
                : "none"
            }
            onChange={(e) => changeSelf(book, e.target.value)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.toString() : ""}
      </div>
    </div>
  );
}

Book.propTypes = {
  changeSelf: PropTypes.func.isRequired,
  books: PropTypes.array,
  currentSelfBook: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Book;
