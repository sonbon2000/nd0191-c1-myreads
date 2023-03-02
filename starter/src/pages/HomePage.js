import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import PropTypes from "prop-types";
function HomePage({ books, changeSelf }) {
  const currentlyReadingList = books.filter(
    (item) => item.shelf === "currentlyReading"
  );
  const wantToReadList = books.filter((item) => item.shelf === "wantToRead");
  const readList = books.filter((item) => item.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          books={currentlyReadingList}
          title="Currently Reading"
          changeSelf={changeSelf}
        />
        <BookShelf
          books={wantToReadList}
          title="Want to read"
          changeSelf={changeSelf}
        />
        <BookShelf books={readList} title="Read" changeSelf={changeSelf} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  changeSelf: PropTypes.func.isRequired,
};

export default HomePage;
