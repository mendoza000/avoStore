import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartListItem = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart__list">
      {cart.items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartListItem;
