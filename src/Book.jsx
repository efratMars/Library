import React from 'react';
import { observer } from 'mobx-react-lite';
import BookStore from './BookStore'; 
import { Link } from 'react-router-dom';
import './style.css';
import './responsive.css';

const BookList = observer(() => {

  const handleDelete = (bookId) => {
    const confirmed = window.confirm("האם אתה בטוח שברצונך למחוק ספר זה?");
    if (confirmed) {
      BookStore.deleteBook(bookId);
    }
  };

  return (
    <div class="container">
      <h2>רשימת ספרים</h2>
      <ul>
        {BookStore.books.map((book, index) => (
          <li key={index}>
            <span>{book.name} מאת {book.writer}</span>
            <div>
              <button onClick={() => handleDelete(book.id)}>מחק</button>
              <Link to={`/EditBook/${book.id}`}>
                <button>ערוך</button>
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

export default BookList;
