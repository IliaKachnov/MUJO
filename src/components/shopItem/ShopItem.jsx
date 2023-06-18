import { useState } from "react";
import coffee from "./../../img/coffee1.png";
import "./shopItem.css";
import { NavLink } from "react-router-dom";

const ShopItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="shop__item">
        <div
          className="shop__img-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={coffee} alt="coffee" />
          {isHovered && (
            <NavLink to="/product" className="btn__view-product">
              View product
            </NavLink>
          )}
        </div>
        <p className="shop__title">VITALITY BREW</p>
        <p className="shop__slogan">Functional coffee alternative</p>
        <div className="shop__prices">
          <div className="shop__subscription">
            <ul>
              <li className="shop__list-item">Monthly subscription</li>
              <li className="shop__list-item">One time purchase</li>
            </ul>
          </div>
          <div className="shop__subscription">
            <ul>
              <li className="shop__list-item">$ 59.00</li>
              <li className="shop__list-item">$ 59.00</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
