import { makeObservable, observable, action } from 'mobx';

class BookStore {
  books = [
    {
      id: 1,
      name: "hello",
      about: "itersting story about..",
      writer: "efrat",
      year: 2020,
      catalogNumber: "123456"
    },
    {
      id: 2,
      name: "efrat",
      about: "efrat's life",
      writer: "efrat meiri",
      year: 2021,
      catalogNumber: "570970"
    }
  ];

  constructor() {
    makeObservable(this, {
      books: observable,
      setBook: action,
      editBook: action,
      deleteBook: action,
      loadBooks: action,
    });
    this.loadBooks();
  }

  loadBooks() {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    if (storedBooks.length === 0) {
      localStorage.setItem('books', JSON.stringify(this.books));
      console.log('Books loaded:', this.books);
    } else {
      this.books = storedBooks;
    }
    console.log('Books loaded:', this.books);
  }

  setBook = (newBook) => {
    this.books = [...this.books, { ...newBook, id: this.books.length + 1 }];
    localStorage.setItem('books', JSON.stringify(this.books));
    alert("הספר נוסף בהצלחה");
  }

  editBook = (updatedBook) => {
    this.books = this.books.map(book => book.id === updatedBook.id ? updatedBook : book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  deleteBook = (bookId) => {
    this.books = this.books.filter(book => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(this.books));
    console.log("הספר נמחק בהצלחה");//מעקב למפתח..
  }
}

export default new BookStore();
