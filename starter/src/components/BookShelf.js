import React from "react";
import Book from "./Book";

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

export default BookShelf;
