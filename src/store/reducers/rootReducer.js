import { combineReducers } from "redux";
import books from "./bookReducer";
import word from "./wordReducer";

const rootReducer = combineReducers({
  books,
  word
});

export default rootReducer;
