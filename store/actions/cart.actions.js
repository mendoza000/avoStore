const { types } = require("store/types");

export const cartAddItem = (payload) => {
  return { type: types.CART_ADD_ITEM, payload };
};
