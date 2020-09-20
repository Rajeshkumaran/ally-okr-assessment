import { get } from "../utils/helpers";
const selectAppState = (state) => get(state, "appState", null) || {};
const selectHomePageState = (state) => get(state, "homePage", null) || {};
const selectDataLoadedState = (state) => {
  const isLoading = get(state, "homePage.isDataLoaded", true);
  return isLoading;
};
const isErrorLoadingData = (state) =>
  get(state, "homePage.isErrorLoadingData", false);
const selectOkrsData = (state) => get(state, "homePage.okrData", []);
const selectCategories = (state) => get(state, "homePage.categories", []);
const selectFilteredOkrs = (category) => (state) => {
  const okrData = selectOkrsData(state);
  return okrData.filter((okr) => {
    const parentCategory = get(okr, "parent.category", "");
    return category === parentCategory;
  });
};
export {
  selectAppState,
  selectHomePageState,
  selectDataLoadedState,
  isErrorLoadingData,
  selectOkrsData,
  selectCategories,
  selectFilteredOkrs,
};
