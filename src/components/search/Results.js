import Book from "../books/Book";

const Results = ({ query, searchBooks, updateBookShelf }) => {

    return (
        <div className="search-books-results">
            <ol className="books-grid">


                {searchBooks.length > 0 && searchBooks?.map(el => <Book key={el.id} book={el} updateBookShelf={updateBookShelf} />)}
                {/* searchBooks?.map(book => <Book key={book.id} book={book} /> */}
            </ol>
        </div>
    )
}

export default Results;