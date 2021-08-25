import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const state = useSelector((state) => state);
  const { bookStore } = state;
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <div>
      {bookStore.map((book) => (
        <li key={book.id}>
          <p>
            Title:
            {book.title}
          </p>
          <p>
            Author:
            {book.author}
          </p>
          <button
            type="button"
            id={book.id}
            onClick={(e) => {
              remove(e);
            }}
          >
            Remove Book
          </button>
        </li>
      ))}
    </div>
  );
};

export default Book;
