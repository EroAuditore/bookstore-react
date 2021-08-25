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
      {Object.entries(bookStore).map((book) => (
        <li key={book[0]}>
          <p>
            Title:
            {book[1][0].title}
          </p>
          <p>
            Category:
            {book[1][0].category}
          </p>
          <button
            type="button"
            id={book[0]}
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
