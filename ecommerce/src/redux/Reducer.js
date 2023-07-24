import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    isProductFetching: false,
    error: '' ,
    categoryData: [],
    isCategoryFetching: false,
    error: ''

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
        fetchCategroyStarted(state) {
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

    }

})

const { actions, reducer } = productSlice;

export const {
    fetchProductStarted,
    fetchProductSuccess,
    fetchProductFail,
    fetchCategroyStarted,
    fetchCategorySuccess,
    fetchCategoryFail
} = actions;
export default reducer;