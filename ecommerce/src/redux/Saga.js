import { call, put } from "redux-saga/effects";
import { fetchCategoryFail, fetchCategorySuccess, fetchCategoryStarted, fetchJeweleryFail, fetchJeweleryStarted, fetchJewelerySuccess, fetchProductFail, fetchProductStarted, fetchProductSuccess, fetchProductDetailsStarted, fetchProductDetailsSuccess, fetchProductDetailsFail } from "./Reducer";

import { PRODUCTDETAILS, PRODUCTS } from "../services/webConstant";
import { CATEGORIES } from "../services/webConstant";
import { JEWELERY } from "../services/webConstant";
import apiClient from "../services/httpServices";

export function* getProductSaga(action) {
  const payload = action.payload;

  try {
    yield put(fetchProductStarted());


    const { data } = yield call(apiClient.get, PRODUCTS);

    yield put(fetchProductSuccess(data));

  } catch (err) {

    yield put(fetchProductFail());

  }
}
export function* getCategorySaga(action) {
  //const payload = action.payload;
  //console.log('payload' , payload );
  try {
    yield put(fetchCategoryStarted());


    const { data } = yield call(apiClient.get, CATEGORIES);

    yield put(fetchCategorySuccess(data));
  } catch (err) {

    yield put(fetchCategoryFail());
  }
}
export function* getCategoryDetailsSaga(action) {
  //const payload = action.payload;
  //console.log('payload' , payload);
  try {
    const payload = action.payload
    yield put(fetchJeweleryStarted());
    console.log('started')

    const { data } = yield call(apiClient.get, `${JEWELERY}/${payload.category}`);
    console.log('Sucess categoryyyyy', data)
    yield put(fetchJewelerySuccess(data));
  } catch (err) {
    console.log('Fail')
    yield put(fetchJeweleryFail());
  }
}
export function* getProductDetailsSaga(action) {
  try {
    const payload = action.payload
    yield put(fetchProductDetailsStarted());
    console.log('started', payload)

    const { data } = yield call(apiClient.get,`${PRODUCTDETAILS}${payload.itemId}`);
    console.log('Sucess', apiClient.get,`${PRODUCTDETAILS}${payload.itemId}`)
    yield put(fetchProductDetailsSuccess(data));
  } catch (err) {
    console.log('Fail')
    yield put(fetchProductDetailsFail());
  }
}