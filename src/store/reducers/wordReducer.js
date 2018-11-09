import { FITLER_WORD } from "../actions/bookActions";

export default (state = "", action) => {
  switch (action.type) {
    case FILTER_WORD:
      return action.payload;
    default:
      return state;
  }
};
