const { types } = require("store/types");

const initialState = { total: 0, items: [] };

const getTotal = (arr) => {
  let total = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach((item) => {
    total += item.count * item.price;
  });

  return total;
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      let arr = [...state.items];
      action.payload.avo.count = action.payload.count;
      arr.push(action.payload.avo);
      let total = getTotal(arr);

      return {
        ...state,
        total,
        items: arr,
      };

    case types.CART_REMOVE_ITEM:
      arr = [...state.items];
      arr = arr.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        items: arr,
        total: getTotal(arr),
      };

    case types.CART_CLEAR:
      return initialState;

    default:
      return state;
  }
};
