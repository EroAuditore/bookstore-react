import axios from 'axios';

const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const LOAD_SUCCESS = 'bookStore/books/LOAD_SUCCESS';
const LOAD_FAIL = 'bookStore/books/LOAD_FAIL';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_SUCCESS = 'bookStore/books/ADD_SUCCESS';
const ADD_FAIL = 'bookStore/books/ADD_SUCCESS';

const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const REMOVE_SUCCESS = 'bookStore/books/REMOVE_SUCCESS';
const REMOVE_FAIL = 'bookStore/books/REMOVE_FAIL';

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

const removeSuccess = (payload) => ({
  type: REMOVE_SUCCESS,
  payload,
});

const removeFail = (payload) => ({
  type: REMOVE_FAIL,
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
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case ADD_FAIL:
      return { ...state };

    case REMOVE_BOOK: {
      return { ...state };
    }
    case REMOVE_SUCCESS: {
      return {
        ...state,
        books: [
          ...state.books.filter((book) => book.item_id !== action.payload),
        ],
      };
    }
    case REMOVE_FAIL: {
      return { state };
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
      if (response.data !== '') {
        let bookstore = [];
        bookstore = Object.entries(response.data).map((book) => ({
          item_id: book[0],
          title: book[1][0].title,
          category: book[1][0].category,
        }));

        dispatch(loadSuccess(bookstore));
      }
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
    })
    .catch(() => {
      dispatch(addFail());
    });
};

const deleteBook = (book) => (dispatch) => {
  dispatch(removeBook());
  axios
    .delete(`${endPoint}/${key}/books/${book}`)
    .then(() => {
      dispatch(removeSuccess(book));
    })
    .catch(() => {
      dispatch(removeFail());
    });
};

export {
  reducer as default, addNewBook, deleteBook, fetchBooks,
};
