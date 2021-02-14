import * as actionsTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

/* LOGIC HERE */
const deleteResult = (state, action) => {
  const resultsArr = state.results.filter(
    (element) => element.key !== action.resultElKey
  );
  return updateObject(state, { results: resultsArr });
};

const storeResult = (state, action) => {
  const resultsArr = [...state.results];
  resultsArr.push({ result: action.counter, key: Date.now() });
  return updateObject(state, { results: resultsArr });
};

/* REDUCER HERE */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionsTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};
export default reducer;
