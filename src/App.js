import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const id = Math.round(Math.random() * 9999)

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {id, title }
        ];
        setBooks(updatedBooks);

    };

    return <div>
        {books.length}
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;