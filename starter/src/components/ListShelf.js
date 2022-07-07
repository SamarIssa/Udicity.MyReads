import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import BooksShelf from "./BooksShelf";
import Title from "./Title";

const ListShelf = ({ books, updateShelf }) => {
    return <div className="app">
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div>
                <div className="bookshelf">
                    <Title title='Currently Reading' />
                    <BooksShelf books={books.filter((book) => book.shelf === 'currentlyReading')} updateShelf={updateShelf}></BooksShelf>

                </div>
                <div className="bookshelf">
                    <Title title='Want to Read' />
                    <BooksShelf books={books.filter((book) => book.shelf === 'wantToRead')} updateShelf={updateShelf}></BooksShelf>
                </div>
                <div className="bookshelf">
                    <Title title='Read' />
                    <BooksShelf books={books.filter((book) => book.shelf === 'read')} updateShelf={updateShelf}></BooksShelf>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>
        </div>
    </div>
};

ListShelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default ListShelf;