import { all, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES, GET_PRODUCTS } from "../redux/Action";
import { getProductSaga , getCategorySaga} from "../redux/Saga";


export default function* sagas() {

    yield all([takeLatest(GET_PRODUCTS, getProductSaga)]);
    yield all ([takeLatest( GET_CATEGORIES, getCategorySaga)]);


}

//getSingleProductDetailsSaga
//getCartProductSaga