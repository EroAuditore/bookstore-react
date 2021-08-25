import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as generateId } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const newBook = {
    item_id: generateId(),
    title,
    category,
  };
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addNewBook(newBook));
    setTitle('');
    setCategory('');
  };

  const handleChange = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value);
    } else if (event.target.id === 'category') {
      setCategory(event.target.value);
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
        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            value={category}
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
