import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartRemoveItem } from "store/actions/cart.actions";

const CartItem = (avo) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(cartRemoveItem(avo));
  };

  return (
    <div className="cart__item">
      <Image
        src={require("../public" + avo?.image)}
        width={"120rem"}
        height={"120rem"}
      />
      <div>
        <h4>{avo.name}</h4>
        <p>
          {avo.count} x {avo.price}$
        </p>
        <button onClick={handleRemove}>
          <FaTimes />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
