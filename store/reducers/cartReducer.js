const { types } = require("store/types");

const initialState = { total: 0, items: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_ITEM:
      let arr = [...state.items];
      arr.push(action.payload.avo);
      return {
        ...state,
        total: arr.length,
        items: arr,
      };

    case types.CART_REMOVE_ITEM:
      let arr2 = [...state.items];
      const newArr = arr2.filter((item) => item.id !== action.payload.avo.id);
      return {
        ...state,
        total: newArr.length,
        items: newArr,
      };

    case types.CART_CLEAR:
      return initialState;

    default:
      return state;
  }
};
