import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/books';
import Progress from './Progress';

const Book = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((state) => state.bookStore.books);

  const remove = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="container-books">
      {bookStore.map((book) => (
        <div key={book.item_id} className="Lesson-Panel">
          <div className="card__content">
            <div>
              <p>{book.category}</p>
              <p>{book.title}</p>
            </div>
            <div className="card__actions">
              <ul className="card__links">
                <li>
                  <a href="/#"> Comments </a>
                </li>
                <li>
                  <a href="/#" onClick={() => remove(book.item_id)}>
                    Remove
                  </a>
                </li>
                <li>
                  <a href="/#"> Edit </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="set-size charts-container">
            <Progress />
          </div>
          <div> update progres </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
