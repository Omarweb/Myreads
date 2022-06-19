import { Link } from 'react-router-dom';
const Searchbar = ({ query, updateQuery }) => {
    return (
        <div className="search-books-bar">
            <Link
                className="close-search"
                to="/"            >
                Close
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    value={query}
                    onChange={(e) => updateQuery(e)}
                />
            </div>
        </div>
    )
}

export default Searchbar;