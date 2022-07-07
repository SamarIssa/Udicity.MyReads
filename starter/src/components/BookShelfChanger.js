import PropTypes from "prop-types";

const BookShelfChanger = ({book,updateShelf}) => {

    const handleChange = (event) => {
        updateShelf(book,event.target.value);
      };

    return <div className="book-shelf-changer">
        <select onChange={handleChange}>
            <option value="none" disabled>
                Move to...
            </option>
            <option value="none">None</option>
            <option value="currentlyReading">
                Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
           
        </select>
    </div>;
};

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;