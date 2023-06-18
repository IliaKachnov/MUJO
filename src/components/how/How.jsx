import './how.css';
import backgroundHow from './../../img/backgroundHow.png';
import { NavLink } from 'react-router-dom';

const How = () => {
  return (
    <>
      <section className='how'>
            <div className='how__container'>
              <div className='how__img-container'>
                <img className='how__img' src={backgroundHow} alt="background coffee" />
              </div>
              <div className='how__item'>
                <h3 className='how__title'>Convenient and easy prep at home or on-the-go</h3>
                <p className='how__text'>Your perfect earthy latte is waiting for you. Mix one scoop with hot water and add your choice of milk. Consume consistently for at least a month to feel the full benefits.</p>
                <NavLink to='/shop' className='how__buy'>Buy now</NavLink>
              </div>
            </div>
          </section>
    </>
  )
}

export default How;