import PropTypes from "prop-types";
import Book from "./Book";

const BooksShelf = ({ books,updateShelf}) => {
    return <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map((book) => (
                <Book key={book.id} book={book} updateShelf={updateShelf}
                />
            ))}
        </ol>
    </div>;
};

BooksShelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf:PropTypes.func.isRequired
};

export default BooksShelf;