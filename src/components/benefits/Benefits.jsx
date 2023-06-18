import React from 'react';
import "./benefits.css"
import leaf from './../../img/leaf.svg';
import sugar from './../../img/sugar.svg';
import circle from './../../img/circle1.svg';
import { NavLink } from 'react-router-dom';

const Benefits = () => {
  return (
    <>
      <section className='benefits'>
            <div className='benefits__container'>
              <h2 className='benefits__title'>Science backed BENEFITS</h2>
              <p className='benefits__text'>Each ingredient serves a unique function in reviving your vitality at the cellular level. No fillers, no nonsense.</p>
              <div className='benefits__icons'>
                <div className='benefits__item'>
                  <img className='benefits__img' src={leaf} alt="leaf" />
                  <span className='benefits__tag'>Focus and cognition</span>
                </div>
                <div className='benefits__item'>
                  <img className='benefits__img'  src={sugar} alt="sugar" />
                  <span className='benefits__tag'>Stress management</span>
                </div>
                <div className='benefits__item'>
                  <img className='benefits__img' src={leaf} alt="leaf" />
                  <span className='benefits__tag'>Natural energy</span>
                </div>
                <div className='benefits__item'>
                  <img className='benefits__img' src={circle} alt="circle" />
                  <span className='benefits__tag'>Immunity support</span>
                </div>
              </div>
              <NavLink to="/about" className='benefits__learnMore'>Learn more</NavLink>
            </div>
          </section>
    </>
  )
}

export default Benefits