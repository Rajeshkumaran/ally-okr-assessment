import { get } from "../../utils/helpers";
import {
  TOGGLE_LOADED_DATA_STATE,
  TOGGLE_ERROR_STATE,
  LOAD_OKRS,
} from "./constants";

export const initialState = {
  isDataLoaded: false,
  isErrorLoadingData: false,
  okrsData: [],
};
const reducer = (preloadedState = null) => (
  state = preloadedState || initialState,
  action,
) => {
  switch (action.type) {
    case LOAD_OKRS: {
      return {
        ...state,
        okrsData: [],
      };
    }
    case TOGGLE_LOADED_DATA_STATE: {
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    }
    case TOGGLE_ERROR_STATE: {
      return {
        ...state,
        isErrorLoadingData: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default reducer;
