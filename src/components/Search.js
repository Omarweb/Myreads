import { useState, useEffect } from "react";
import Results from "./search/Results";
import Searchbar from "./search/Searchbar";
import * as API from '../BooksAPI';

const Search = ({ showSearchPage, setShowSearchpage }) => {
    const [query, setQuery] = useState('');
    const [searchBooks, setSearcBooks] = useState([]);

    const updatQuery = (e) => {
        if (e.target.value.length === 0 || e.target.value.trim() === '') {
            setQuery('');
            setSearcBooks([]);
            return;
        };
        // console.log(e.target.value);
        setQuery(e.target.value);

    }

    useEffect(() => {
        const search = async (query) => {
            if (query.trim() === '') return;
            const res = await API.search(query, 20);
            if (res.error) {
                setSearcBooks([]);
                return;
            }
            const books = await Promise.all(res.map(async (book) => {
                const data = await API.get(book.id);

                return data;
            }));
            setSearcBooks(books);

        }
        search(query);

    }, [query])




    const updateBookShelf = (e, book) => {
        const shelf = e.target.value;
        let books = [...searchBooks];
        const currentbookIndex = books.findIndex((element) => element.id === book.id);
        // console.log(currentbookIndex);
        books[currentbookIndex].shelf = e.target.value
        setSearcBooks(books);

        const updateApi = async (book, shelf) => {
            await API.update(book, shelf);

        }
        updateApi(book, shelf)

    }


    return (
        <div className="search-books">

            <Searchbar query={query} updateQuery={updatQuery} />
            <Results query={query} searchBooks={searchBooks} updateBookShelf={updateBookShelf} />
        </div>
    )
}
export default Search;