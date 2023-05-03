import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const id = Math.round(Math.random() * 9999)

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {id, title }
        ];
        setBooks(updatedBooks);

    };

    return (
    <div className="app">
        <BookList books={books} />
        <BookCreate onCreate={createBook} />
    </div>
    );
}

export default App;