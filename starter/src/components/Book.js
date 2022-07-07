import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({book,updateShelf}) => {

    return <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
                       
                    }}
                ></div>
               <BookShelfChanger book={book} updateShelf={updateShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(',')}</div>
        </div>
    </li>;
};

Book.propTypes = {
    book:PropTypes.object.isRequired,
    updateShelf:PropTypes.func.isRequired
};

export default Book;