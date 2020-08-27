export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const ADDCOUNTER = "addcounter";
export const DELCOUNTER = "delcounter";
export const ADD_COUNTER_RECORD = "addcounterrecord";
export const DEL_COUNTER_RECORD = "delcounterrecord";

export const increment = (val) => {
  return {
    type: INCREMENT,
    value: val
  };
};

export const decrement = (val) => {
  return {
    type: DECREMENT,
    value: val
  };
};

export const add_record = (val) => {
  return {
    type: ADD_COUNTER_RECORD,
    value: val
  };
};

export const del_record = (val) => {
  return {
    type: DEL_COUNTER_RECORD,
    value: val
  };
};
