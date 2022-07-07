import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Book from "./Book";

const BookSearch = ({ books, updateShelf }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  const clearQuery = () => {
    updateQuery("");
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase())
      );
  return <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {showingBooks.map((book) => (
          <Book key={book.id} book={book} updateShelf={updateShelf}
          />
        ))}
      </ol>
    </div>
  </div>
};

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default BookSearch;