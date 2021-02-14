import * as actionTypes from "./actionTypes";

export const saveResult = (ctr) => {
  const updatedResult = ctr;
  return {
    type: actionTypes.STORE_RESULT,
    counter: updatedResult,
  };
};

export const storeResult = (ctr) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(ctr));
    }, 2000);
  };
};

export const deleteResult = (key) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElKey: key,
  };
};
