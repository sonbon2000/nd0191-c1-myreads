import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import * as BooksApi from "./BooksAPI";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    initBooks();
  }, []);

  const initBooks = () => {
    BooksApi.getAll().then((data) => {
      setBooks(data);
    });
  };

  const handleChangeSelf = (book, shelf) => {
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    });
    setBooks(newBooks);
    BooksApi.update(book, shelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} changeSelf={handleChangeSelf} />}
        ></Route>
        <Route
          path="/search"
          element={
            <SearchPage
              books={books}
              changeSelf={handleChangeSelf}
              initBooks={initBooks}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
