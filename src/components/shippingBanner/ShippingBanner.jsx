import { useState } from 'react';
import './shippingBanner.css';

const ShippingBanner = () => {
  const [shippingBanner, setShippingBanner] = useState('shipping__container');

  const closeShippingBanner = () => {
    setShippingBanner('hide')
  };
  
  return (
    <>
      <div className={shippingBanner}>
        <p className='shipping__text'>Free shipping on orders over 60$</p>
        <div onClick={closeShippingBanner} className='shipping__cross'></div>
      </div>
    </>
  )
}

export default ShippingBanner