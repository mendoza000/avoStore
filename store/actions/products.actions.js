import { types } from "store/types";

export const productsWrite = (products) => {
  return {
    type: types.PRODUCTS_WRITE,
    payload: {
      products,
    },
  };
};
