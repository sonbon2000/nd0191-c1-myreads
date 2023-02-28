import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import * as BooksApi from "./BooksAPI";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import useQuery from "./hooks/useQuery";

function App() {
  const [books, setBooks] = useState([]);
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
  const [mergedBooks, setMergedBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks] = useQuery(query);
  useEffect(() => {
    BooksApi.getAll().then((data) => {
      setBooks(data);
      setMapOfIdToBooks(createMapOfBooks(data));
    });
  }, []);

  useEffect(() => {
    const combined = searchBooks.map((book) => {
      if (mapOfIdToBooks.has(book.id)) {
        return mapOfIdToBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combined);
  }, [searchBooks, mapOfIdToBooks]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const handleChangeSelf = (book, shelf) => {
    const newBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    });
    if (!mapOfIdToBooks.has(book.id)) {
      book.shelf = shelf;
      newBooks.push(book);
    }
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
              changeSelf={handleChangeSelf}
              initBooks={mergedBooks}
              query={query}
              handleInputChange={handleInputChange}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
