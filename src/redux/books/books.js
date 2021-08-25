/* eslint-disable */
import axios from 'axios';

const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const LOAD_SUCCESS = 'bookStore/books/LOAD_SUCCESS';
const LOAD_FAIL = 'bookStore/books/LOAD_FAIL';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_SUCCESS = 'bookStore/books/ADD_SUCCESS';
const ADD_FAIL = 'bookStore/books/ADD_SUCCESS';

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

const addSuccess = (payload) => ({
  type: ADD_SUCCESS,
  payload,
});

const addFail = (payload) => ({
  type: ADD_FAIL,
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
      return { ...state, books: action.payload };
    case LOAD_FAIL:
      return { ...state };
    case ADD_BOOK:
      return { ...state };
    case ADD_SUCCESS:
      let newState = state.books;
      newState[action.payload.item_id] = [{ title: 'new', category: 'cat' }];
      return {
        ...state,
        books: newState,
      };
    case ADD_FAIL:
      return { ...state };
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
      if (response.data !== '') dispatch(loadSuccess(response.data));
    })
    .catch(() => {
      dispatch(loadFail());
    });
};

const addNewBook = (book) => (dispatch) => {
  dispatch(addBook());
  axios
    .post(`${endPoint}/${key}/books`, book)
    .then(() => {
      dispatch(addSuccess(book));
      dispatch(fetchBooks());
    })
    .catch(() => {
      dispatch(addFail());
    });
};

export { reducer as default, addNewBook, removeBook, fetchBooks };
/* eslint-enable */
