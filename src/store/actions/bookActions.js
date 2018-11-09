import axios from "axios";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILED = "FETCH_BOOKS_FAILED";
export const ADD_TO_CART = "ADD_TO_CART";
export const FILTER_WORD = "FILTER_WORD";

export const fetchBooks = () => {
  return async dispatch => {
    try {
      let response = await axios.get("http://localhost:8082/api/books");
      let books = response.data;
      dispatch({
        type: FETCH_BOOKS_SUCCESS,
        payload: books
      });
    } catch (err) {
      dispatch({
        type: FETCH_BOOKS_FAILED,
        payload: err
      });
    }
  };
};

export const booksInCart = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/api/books")
      .then(res => {
        let books = res.data.filter(book => book.inCart);
        dispatch({
          type: FETCH_BOOKS_SUCCESS,
          payload: books
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_BOOKS_FAILED,
          payload: err
        })
      );
  };
};

export const addToCart = id => {
  return async dispatch => {
    let response = await axios.patch(
      `http://localhost:8082/api/books/cart/add/${id}`
    );
    console.log(response.data);
    let book = response;
    dispatch({
      type: ADD_TO_CART,
      payload: book
    });
  };
};

export const filterWord = word => {
  return dispatch => {
    dispatch({
      type: FILTER_WORD,
      payload: word
    });
  };
};
