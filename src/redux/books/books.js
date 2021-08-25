/* eslint-disable */
import axios from 'axios';

const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const LOAD_SUCCESS = 'bookStore/books/LOAD_SUCCESS';
const LOAD_FAIL = 'bookStore/books/LOAD_FAIL';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = { books: [] };

const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload,
});

const loadFail = (payload) => ({
  type: LOAD_FAIL,
  payload,
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, books: action.payload.data };
    case LOAD_FAIL:
      return { ...state };
    case ADD_BOOK:
      return { ...state, books: action.payload };
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
};

/** **** API CALL** */
const endPoint = process.env.REACT_APP_API;
const key = process.env.REACT_APP_KEY;

const fetchBooks = () => (dispatch) => {
  dispatch(loadBooks());
  axios
    .get(`${endPoint}/${key}/books`)
    .then((response) => {
      console.log('response', response.data);
      if (response.data !== '') dispatch(loadSuccess(response.data));
    })
    .catch(() => {
      dispatch(loadFail());
    });
};

export { reducer as default, addBook, removeBook, fetchBooks };
/* eslint-enable */
