import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Book from './Book.jsx';
import Books from './Books.jsx';
import AddBook from './AddBook.jsx';
import EditBook from './editBook.jsx';
import BookDetails from './BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Book",
    element: <Book />
  },
  {
    path: "/Books",
    element: <Books/>
  },
  {
    path: "/AddBook",
    element: <AddBook />
  },
  {
    path: "/EditBook/:id", 
    element: <EditBook/>
  },
  {
    path: "/BookDetails/:bookId", 
    element: <BookDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
