import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.bookStore.books);

  const remove = (e) => {
    dispatch(deleteBook(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      {bookStore.map((book) => (
        <li key={book.item_id}>
          <p>
            Title:
            {book.title}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <button
            type="button"
            id={book.item_id}
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
