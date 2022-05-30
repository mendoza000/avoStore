import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";

const CartAlertEmpty = () => {
  return (
    <div className="cart__alert-empty">
      <h4>
        <FiAlertTriangle />
        Your cart is empty
      </h4>
      <p>
        You will need to add some items to the cart before you can checkout.
      </p>
    </div>
  )
}

export default CartAlertEmpty