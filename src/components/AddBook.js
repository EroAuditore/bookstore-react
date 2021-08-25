import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as generateId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const newBook = {
    id: generateId(),
    title,
    author,
  };
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'author') {
      setAuthor(event.target.value);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </form>
      <button
        type="button"
        onClick={() => {
          add();
        }}
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
