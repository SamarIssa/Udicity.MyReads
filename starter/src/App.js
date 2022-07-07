import "./App.css";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"
import BookSearch from './components/BookSearch'
import ListShelf from "./components/ListShelf";
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      //console.log(res);
      setBooks(res);
    };
    getBooks();
    console.log(books);
  }, []);

  useEffect(() => {
    setBooks(books);
  }, [flag]);

  const updateShelf = (book, shelf) => {
    const bookIndex = books.findIndex(b => b.id === book.id);
    var _books = books;
    if (bookIndex > -1) {
      _books[bookIndex].shelf = shelf;
      setBooks(_books);
      BooksAPI.update(book, shelf);
      setFlag(!flag);
    }
  }

  return (
    <Routes>
      <Route exact path="/" element={<ListShelf books={books} updateShelf={updateShelf} />}
      />
      <Route path="/search" element={<BookSearch books={books} updateShelf={updateShelf} />}
      />
    </Routes>
  );
}

export default App;
