import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const BASE_URL = 'http://localhost:3001/books';

    const fetchBooks = async () => {
        const response = await axios.get(BASE_URL);
        
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);


    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`${BASE_URL}/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        
        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post(BASE_URL, {
            title,
        });

        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);


    };

    return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>
    );
}

export default App;