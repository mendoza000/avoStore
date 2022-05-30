const { types } = require("store/types");

const initialState = {
  products: [],
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_WRITE:
      return {
        ...state,
        products: action.payload.products,
      };

    case types.CART_CLEAR:
      return {
        products: [],
      };

    default:
      return state;
  }
};
