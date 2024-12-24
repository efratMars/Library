import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import BookStore from './BookStore'; 
import { Link } from 'react-router-dom';
import './style.css';
import './responsive.css';

const Books = observer(() => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(BookStore.books); // בדיקה האם הנתונים נטענים
  }, []);

  const handleDelete = (bookId) => {
    const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק ספר זה?");
    if (confirmed) {
      BookStore.deleteBook(bookId);
    }
  };

  const filteredBooks = BookStore.books.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>רשימת ספרים</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="חפש ספר..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <Link to={`/BookDetails/${book.id}`}>
              <span>{book.name} מאת {book.writer}</span>
            </Link>
            <div className="book-actions">
              <button className="editDel" onClick={() => handleDelete(book.id)}>מחק</button>
              <Link to={`/EditBook/${book.id}`}>
                <button className="editDel">ערוך</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/AddBook">
          <button>הוסף ספר חדש</button>
        </Link>
      </div>
    </div>
  );
});

export default Books;
