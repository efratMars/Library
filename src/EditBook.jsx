import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddBook from './AddBook';
import BookStore from './BookStore'; 
import './style.css'; 
import './responsive.css';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const bookToEdit = BookStore.books.find(book => book.id === parseInt(id));
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [id]);

  const handleSubmit = (inputs) => {
    BookStore.editBook(inputs);
    navigate('/Books');
  };

  return (
    <div>
      <h1>ערוך ספר</h1>
      {book && <AddBook bookToEdit={book} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditBook;
