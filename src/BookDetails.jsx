import React from 'react';
import { useParams } from 'react-router-dom';
import BookStore from './BookStore';
import './style.css'; 

const BookDetails = () => {

  const { bookId } = useParams();
  const book = BookStore.books.find(book => book.id === parseInt(bookId, 10));

  if (!book) {
    return <div class='conteiner'>ספר לא נמצא.</div>;
  }

  return (
    <div class="container">
      <h2>{book.name}</h2>
      <p><strong>סופר:</strong> {book.writer}</p>
      <p><strong>תיאור:</strong> {book.about}</p>
      <p><strong>שנת הוצאה:</strong> {book.year}</p>
      <p><strong>מספר קטלוגי:</strong> {book.catalogNumber}</p>
    </div>
  );
};

export default BookDetails;
