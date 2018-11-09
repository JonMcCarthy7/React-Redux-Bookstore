import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
  ADD_TO_CART,
  FILTER_WORD
} from "../actions/bookActions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;

    case FETCH_BOOKS_FAILED:
      return action.payload;

    case ADD_TO_CART:
      console.log("this is the action.payload", action.payload);
      let theOthers = state.filter(book => book.id !== action.payload.data.id);
      return [...theOthers, action.payload.data];

    case FILTER_WORD:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
