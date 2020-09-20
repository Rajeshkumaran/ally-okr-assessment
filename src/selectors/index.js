import { get } from "../utils/helpers";
const selectAppState = (state) => get(state, "appState", null) || {};
const selectHomePageState = (state) => get(state, "homePage", null) || {};
const selectDataLoadedState = (state) => {
  const isLoading = get(state, "homePage.isDataLoaded", true);
  return isLoading;
};
const isErrorLoadingData = (state) =>
  get(state, "homePage.isErrorLoadingData", false);
export {
  selectAppState,
  selectHomePageState,
  selectDataLoadedState,
  isErrorLoadingData,
};
