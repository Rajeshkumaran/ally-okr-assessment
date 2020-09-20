import { findCategories, formatOkrData } from "../../utils/helpers";
import {
  TOGGLE_LOADED_DATA_STATE,
  TOGGLE_ERROR_STATE,
  LOAD_OKRS,
} from "./constants";

export const initialState = {
  isDataLoaded: false,
  isErrorLoadingData: false,
  okrData: [],
};
const reducer = (preloadedState = null) => (
  state = preloadedState || initialState,
  action,
) => {
  switch (action.type) {
    case LOAD_OKRS: {
      const payload = action.payload;
      const formattedOkrs = formatOkrData(payload);
      const categories = findCategories(payload);
      return {
        ...state,
        okrData: formattedOkrs,
        categories,
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
