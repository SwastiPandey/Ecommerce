import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    isProductFetching: false,
    error: '' ,
    categoryData: [],
    isCategoryFetching: false,
    error: '' ,
    categoryDetailsData: [],
    isJeweleryFetching: false,
    error: '',
    ProductDetails: {},
    isProductDetailsFetching: false,
    error: '',
    cart: []

}


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        fetchProductStarted(state) {
            state.isProductFetching = true;
            
        },
        fetchProductSuccess(state, { payload }) {
            state.isProductFetching = false;
            state.productData = payload;
        },
        fetchProductFail(state) {
            state.isProductFetching = false;
            state.error = 'Something went wrong!'
        },
        fetchCategoryStarted(state) {
            state.isCategoryFetching = true;
            
        },
        fetchCategorySuccess(state, { payload }) {
            state.isCategoryFetching = false;
            state.categoryData = payload;
        },
        fetchCategoryFail(state) {
            state.isCategoryFetching = false;
            state.error = 'Something went wrong!'
        },
        fetchJeweleryStarted(state) {
            state.isJeweleryFetching = true;

        },
        fetchJewelerySuccess(state, { payload }) {
            state.isJeweleryFetching = false;
            state.categoryDetailsData = payload;
        },
        fetchJeweleryFail(state) {
            state.isJeweleryFetching = false;
            state.error = 'Something went wrong!'
        },
        fetchProductDetailsStarted(state) {
            state.isProductDetailsFetching = true;

        },
        fetchProductDetailsSuccess(state, { payload }) {
            state.isProductDetailsFetching = false;
            state.ProductDetails =payload;
        },
        fetchProductDetailsFail(state){
            state.isProductDetailsFetching = false;
            state.error = 'Something went wrong!'
        },
        addToCart(state,{payload}){
            console.log('action.payload', payload)
            state.cart = [...state.cart, payload.cartItems];
            console.log('state.cart', state.cart)
        },
        
        removeFromCart(state, { payload }) {
                state.cart = state.cart.filter(item => item.id !== payload.itemId);
      }
 
    }

})

const { actions, reducer } = productSlice;

export const {
    fetchProductStarted,
    fetchProductSuccess,
    fetchProductFail,
    fetchCategoryStarted,
    fetchCategorySuccess,
    fetchCategoryFail,
    fetchJeweleryStarted,
    fetchJewelerySuccess,
    fetchJeweleryFail,
    fetchProductDetailsStarted,
    fetchProductDetailsSuccess,
    fetchProductDetailsFail,
    addToCart,
    removeFromCart

} = actions;


export default reducer;