import Book from "./Book";
const Bookshelf = ({ title, books, updateBookShelf }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => <Book updateBookShelf={updateBookShelf} key={book.id} book={book} />)}


                </ol>
            </div>
        </div>
    )
}
export default Bookshelf;