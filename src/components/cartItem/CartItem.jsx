import React from "react";
import './cartItem.css'
import coffeeBox from './../../img/coffeeBox.png'

const CartItem = () => {
  return (
    <>
      <div className="item__wrapper">
        <img className="item__img" src={coffeeBox} alt="" />
        <span className="item__title">VITALITY BREW</span>
        <button className="item__btn">Add to cart - $ 59.00</button>
      </div>
    </>
  );
};

export default CartItem;
