import React from 'react';
import './footer.css';
import logo from './../../img/mujo-footer-logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
     <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
        <div className='footer__first'>
          <div className='footer__links-container'>
            <div className='footer__block'>
              <h2 className='footer__title'>FOLLOW US</h2>
              <ul>
                <li className='footer__item'>
                  <NavLink className='footer__item' to='/'>Instagram</NavLink>
                </li>
              </ul>
            </div>
            <div className='footer__block'>
              <h2 className='footer__title'>PRODUCTS</h2>
              <ul>
                <li className='footer__item'>
                  <NavLink className='footer__item' to="/about">Vital Force</NavLink>
                </li>
                <li className='footer__item'>
                  <NavLink className='footer__item' to='/about'>Balance</NavLink>
                </li>
              </ul>
            </div>
            <div className='footer__block'>
              <h2 className='footer__title'>WHY MUJO</h2>
              <ul>
                <li className='footer__item'>
                  <NavLink to="/ingredients" className='footer__item'>Ingredients</NavLink>
                </li>
                <li className='footer__item'>
                  <NavLink to="/about" className='footer__item'>Science</NavLink>
                </li>
                <li className='footer__item'>
                  <NavLink to='/about' className='footer__item'>Blog</NavLink>
                </li>
              </ul>
            </div>
            <div className='footer__block'>
              <h2 className='footer__title'>COMPANY</h2>
              <ul>
                <li className='footer__item'>
                  <NavLink className='footer__item' to="/about">About us</NavLink>
                </li>
                <li className='footer__item'>
                  <NavLink className='footer__item' to="/contact">Contact</NavLink>
                </li>
                <li className='footer__item'>
                  <NavLink className='footer__item' to="/about">FAQ</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__stay'>
            <h2 className='footer__title'>STAY IN TOUCH</h2>
            <input className='input__email' type="email" placeholder='Email adress'/>
            <div className='checkbox__container'>
              <input className='input__checkbox' type="checkbox" />
              <p className='subscribe'>Subscribe to receive communications from Mujo about our products. By subscribing, you confirm you have read and accept our privacy policy</p>
            </div>
          </div>
        </div>
        <div className='footer__second'>
          <img src={logo} alt="mujo logo footer" />
        </div>
        <div className='footer__third'>
          <span className='date'>© 2023 MUJO</span>
          <h3 className='slogan'>BREW A CHANGE FROM WITHIN</h3>
          <div className='terms__container'>
            <span className='terms'>Terms of service</span>
            <span className='terms'>Privacy policy</span>
          </div>
        </div>
        <div className='footer__fourth'>
          <span className='statements'>*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease</span>
          <p className='info'>Information on this site is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. Carefully read all product documentation. If you have or suspect that you have a medical problem, promptly contact your regular health care provider.</p>
        </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer;