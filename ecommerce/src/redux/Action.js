export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIS';
export const GET_CATEGORY_DETAILS = 'GET_CATEGORY_DETAILS';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
