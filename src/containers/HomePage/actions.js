import {
  GET_OKRS,
  LOAD_OKRS,
  TOGGLE_ERROR_STATE,
  TOGGLE_LOADED_DATA_STATE,
} from "./constants";
export const getOkrs = () => {
  return {
    type: GET_OKRS,
  };
};
export const loadOkrs = (payload) => {
  return {
    type: LOAD_OKRS,
    payload,
  };
};
export const toggleErrorState = (payload) => {
  return {
    type: TOGGLE_ERROR_STATE,
    payload,
  };
};

export const toggleDataLoadedState = (payload) => {
  return {
    type: TOGGLE_LOADED_DATA_STATE,
    payload,
  };
};
