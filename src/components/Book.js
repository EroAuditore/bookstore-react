import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.bookStore.books);

  const remove = (e) => {
    dispatch(removeBook(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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
