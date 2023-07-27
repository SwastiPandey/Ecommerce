import { all, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES, GET_CATEGORY_DETAILS, GET_PRODUCTS, GET_PRODUCT_DETAILS } from "../redux/Action";
import { getProductSaga, getCategorySaga, getCategoryDetailsSaga, getProductDetailsSaga } from "../redux/Saga";


export default function* sagas() {

    yield all([takeLatest(GET_PRODUCTS, getProductSaga)]);
    yield all([takeLatest(GET_CATEGORIES, getCategorySaga)]);
    yield all([takeLatest(GET_CATEGORY_DETAILS, getCategoryDetailsSaga)]);
    yield all([takeLatest(GET_PRODUCT_DETAILS, getProductDetailsSaga)]);


}

//getSingleProductDetailsSaga
//getCartProductSaga