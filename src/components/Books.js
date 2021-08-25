import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <div>
    <div>
      <h2>Books</h2>
      <ul>
        <Book />
      </ul>
    </div>
    <div>
      <AddBook />
    </div>
  </div>
);

export default Books;
