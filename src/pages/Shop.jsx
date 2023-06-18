import { useState, useEffect } from 'react';
import './../styles/shop.css';
import ShopItem from '../components/shopItem/ShopItem';
import Skeleton from '../components/skeleton/Skeleton';


const Shop = () => {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className='shop'>
        <div className='shop__container'>
          <h1 className='shop__shop'>Shop</h1>
          {showComponent ? (
            <div className='shop__items'>
              <ShopItem/>
              <ShopItem/>
              <ShopItem/>
              <ShopItem/>
            </div>
            ) : (
            <div className='shop__items'>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </div> 
            )}
        </div>
      </section>
      
    </>
  )
}

export default Shop