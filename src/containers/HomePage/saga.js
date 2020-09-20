import { put, takeEvery, call } from "redux-saga/effects";
import { API_URL } from "../../constants";
import requestWrapper from "../../utils/requestWrapper";
import { toggleErrorState } from "./actions";
import { GET_OKRS } from "./constants";

export function* getOkrsSaga(params = {}) {
  try {
    const response = yield call(requestWrapper, {
      url: `${API_URL}`,
      method: "GET",
    });
    const { status, data = [] } = response;
    console.log("response", response);
  } catch (err) {
    yield put(toggleErrorState(true));
    console.error("Caught in homeSaga", err);
  }
}

function* watchHomeSaga() {
  yield takeEvery(GET_OKRS, getOkrsSaga);
}

export const homeSagas = [watchHomeSaga()];
