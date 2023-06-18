import './preparation.css';
import woman from './../../img/woman.png';
import { NavLink } from 'react-router-dom';

const Preparation = () => {
  return (
    <>
      <section className='prep'>
            <div className='prep__container'>
              <div className='how__item'>
                <h3 className='how__title'>Convenient and easy prep at home or on-the-go</h3>
                <p className='how__text'>Your perfect earthy latte is waiting for you. Mix one scoop with hot water and add your choice of milk. Consume consistently for at least a month to feel the full benefits.</p>
                <NavLink to='/about' className='prep__learnMore'>Learn more</NavLink>
              </div>
              <div className='how__img-container'>
                <img className='how__img' src={woman} alt="background coffee" />
              </div>
            </div>
          </section>
    </>
  )
}

export default Preparation;