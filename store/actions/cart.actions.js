const { types } = require("store/types");

export const cartAddItem = (payload) => {
  return { type: types.CART_ADD_ITEM, payload };
};

export const cartRemoveItem = (payload) => {
  return { type: types.CART_REMOVE_ITEM, payload };
};
