import PropTypes from "prop-types";

const Title = ({title}) => {
    return <h2 className="bookshelf-title">{title}</h2>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;