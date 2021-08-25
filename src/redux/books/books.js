const LOAD_BOOK = 'bookStore/books/LOAD_BOOK';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const loadBook = (payload) => ({
  type: ADD_BOOK,
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
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
};

const loadBooks = () => (dispatch) => {
  dispatch({ type: LOAD_BOOK });
  Api.getUsers()
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: LOAD_USERS_SUCCESS, data }),
      (error) =>
        dispatch({
          type: LOAD_USERS_ERROR,
          error: error.message || 'Unexpected Error!!!',
        })
    );
};

export { reducer as default, addBook, removeBook, loadBooks };
