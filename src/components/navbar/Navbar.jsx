import { useState } from 'react';
import './navbar.css';
import logo from './../../img/mujo-logo.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../redux/slices/auth';


const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState('open');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const toggleBurgerMenu = () => {
    setBurgerMenu((currentValue) => currentValue === 'open' ? 'closed' : 'open')
  };
  const burgerNormal = 'header__container';
  const burgerActive = 'header__container menu-open';


  return (
    <>
      <header className="header navbar" id="navbar">
      <div className={burgerMenu === 'closed' ? burgerActive : burgerNormal} >
        <nav className="header__menu menu ">
          <div className="menu__body ">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink className="menu__link" to="/">WHY MOOJO</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to='/about' className="menu__link">ABOUT</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/ingredients" className="menu__link">INGREDIENTS</NavLink>
              </li>
            </ul>
          </div>
          <button onClick={toggleBurgerMenu} className="menu__icon icon-menu" type="button">
            <span className="icon-menu__line"></span>
          </button>
        </nav>
        <div className='logo__container'>
          <NavLink className="header__logo" id='logo' to="/">
            <img className='logo' src={logo} alt='Logo'/>
          </NavLink>
          <ul className='links__container'>
            {isAuth ? (
              <li>
                <NavLink onClick={onClickLogout} className='link' to='/'>LOG OUT</NavLink>
              </li>
            ) : (
              <li>
                <NavLink className='link' to='/login'>LOG IN</NavLink>
              </li>
            )
            }
            <li>
              <NavLink className='link' to="/cart">CART</NavLink>
            </li>
            <li className='shopBtn'>
              <NavLink className='shopBtn' to="/shop">Shop now</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
    </>
  )
};

export default Navbar;
