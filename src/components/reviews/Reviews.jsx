import React from 'react';
import './reviews.css';

import stars from './../../img/stars.svg';
import user1 from './../../img/user1.png';
import user2 from './../../img/user2.png';
import user3 from './../../img/user3.png';

const Reviews = () => {
  return (
    <>
    <section className='reviews'>
            <div className='reviews__container'>
              <h3 className='reviews__title'>OUR HAPPY CUSTOMERS</h3>
              <div className='reviews__wrapper'>
                <div className='reviews__item'>
                  <img src={stars} alt="rating" />
                  <p className='reviews__text'>“ I really love mujo as a way to begin my day energized. ”</p>
                  <div className='reviews__user'>
                    <img src={user1} alt="user" />
                    <span>Joackim W.</span>
                  </div>
                </div>
                <div className='reviews__item'>
                  <img src={stars} alt="rating" />
                  <p className='reviews__text'>“ For a long time I was looking for a drink to replace my morning coffee and mujo is a not just marketing. ”</p>
                  <div className='reviews__user'>
                    <img src={user2} alt="user" />
                    <span>Brooke C.</span>
                  </div>
                </div>
                <div className='reviews__item'>
                  <img src={stars} alt="rating" />
                  <p className='reviews__text'>“ I love to drink my mujo with my vanilla protein powder, just the perfect mix to start my day ”</p>
                  <div className='reviews__user'>
                    <img src={user3} alt="user" />
                    <span>Nathan D.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Reviews