import { call, put } from "redux-saga/effects";
import { fetchCategoryFail, fetchCategorySuccess, fetchCategroyStarted, fetchProductFail, fetchProductStarted, fetchProductSuccess } from "./Reducer";

import { PRODUCTS } from "../services/webConstant";
import { CATEGORIES } from "../services/webConstant";
import apiClient from "../services/httpServices";

export function* getProductSaga(action) {
  const payload = action.payload;
  console.log('payload', payload)
  try {
    yield put(fetchProductStarted());


    const { data } = yield call(apiClient.get, PRODUCTS);

    yield put(fetchProductSuccess(data));

  } catch (err) {

    yield put(fetchProductFail());

  }
}
export function* getCategorySaga(action) {
  try {
    yield put(fetchCategroyStarted());
    console.log('started')

    const { data } = yield call(apiClient.get, CATEGORIES);
    console.log('Sucess', data)
    yield put(fetchCategorySuccess(data));
  } catch (err) {
    console.log('Fail')
    yield put(fetchCategoryFail());
  }
}