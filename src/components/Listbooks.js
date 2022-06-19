import Bookshelf from "./books/Bookshelf";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from '../BooksAPI';
const Listbooks = ({ showSearchPage, setShowSearchpage }) => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const res = await API.getAll();

                setAllBooks(res);

            } catch (error) {
                console.error(error);
            }

        }
        getAllBooks();

    }, []);

    function compare(a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    }


    const updateBookShelf = (e, book) => {
        const shelf = e.target.value;

        let books = [...allBooks];
        const currentbookIndex = allBooks?.findIndex((element) => element.id === book.id);

        if (shelf === 'none') books.splice(currentbookIndex, 1);;
        if (shelf !== 'none') books[currentbookIndex].shelf = e.target.value;
        setAllBooks(books);
        const updateApi = async (book, shelf) => {
            const res = await API.update(book, shelf);

        }
        updateApi(book, shelf)

    }




    const shelfs = (allBooks) => {

        if (allBooks.length === 0) return;

        const sherlfsArray = allBooks.reduce((acc, book) => {


            const shelfIndex = acc.findIndex(item => item.name === book.shelf);
            if (shelfIndex === -1) return;
            acc[shelfIndex].books.push(book);
            acc[shelfIndex].books.sort(compare);
            return acc;
        }, [{ name: 'read', title: "Read", books: [] }, { name: 'wantToRead', title: "Want to read", books: [] }, { name: 'currentlyReading', title: "Currently Reading", books: [] }]);


        return sherlfsArray;
    }



    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfs(allBooks)?.map((shelf) => <Bookshelf updateBookShelf={updateBookShelf} books={shelf.books} key={shelf.name} title={shelf.title} id={shelf.name} />)}


                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default Listbooks;