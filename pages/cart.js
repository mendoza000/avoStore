import CartAlertEmpty from "@components/CartAlertEmpty";
import CartListItem from "@components/CartListItem";
import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart__container animate__animated animate__fadeIn animate__faster">
      {cart.total === 0 ? <CartAlertEmpty /> : <CartListItem />}
      <div className="ui__divider"></div>

      <div className="cart__subtotal">
        <h4>Subtotal: {cart.total}$</h4>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default cart;
