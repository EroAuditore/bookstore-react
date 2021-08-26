import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div className="container-books">
    <Book />
    <div className="Line"> </div>
    <div className="form-Panel">
      <p className="title-2">ADD NEW BOOK</p>
      <AddBook />
    </div>
  </div>
);

export default Books;
