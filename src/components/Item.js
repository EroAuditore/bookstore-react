import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Item = () => {
  const state = useSelector((state) => state);
  const { books } = state;
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div>
      {books.map((book) => (
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

export default Item;
