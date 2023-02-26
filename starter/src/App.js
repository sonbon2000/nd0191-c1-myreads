import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import * as BooksApi from "./BooksAPI";
import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import useQuery from "./hooks/useQuery";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
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
  }, [searchBooks]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleChangeSelf = (book, shelf) => {
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return b;
    });
    if (!mapOfIdToBooks.has(book.id)) {
      book.shelf = shelf;
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
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
              books={mergedBooks}
              query={query}
              changeSelf={handleChangeSelf}
              handleChangeQuery={handleChangeQuery}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
