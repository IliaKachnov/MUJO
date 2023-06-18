import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/cart.css";
import CartItem from "../components/cartItem/CartItem";

const Cart = () => {
  return (
    <>
      <div className="cart__container">
        <h1 className="cart__empty">Your cart is empty!</h1>
        <NavLink className="continue__shopping" to="/shop">
          Continue shopping
        </NavLink>
        <h2 className="cart__recommend">Recommendations</h2>
        <div className="recommend__container">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
