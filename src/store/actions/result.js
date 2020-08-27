import * as actionTypes from "./actionTypes";

export const add_record = (val) => {
  return (dispatch, getState) => {
    console.log("add_record", getState());
    setTimeout(() => {
      dispatch({
        type: actionTypes.ADD_COUNTER_RECORD,
        value: val
      });
    }, 2000);
  };
};

export const del_record = (val) => {
  return {
    type: actionTypes.DEL_COUNTER_RECORD,
    value: val
  };
};

export const async_funccall = (val) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(del_record(10));
    }, 2000);
  };
};
