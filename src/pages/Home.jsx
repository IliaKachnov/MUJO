import React from 'react';
import Benefits from '../components/benefits/Benefits';
import './../styles/home.css';
import logo from './../img/mujo-main-logo.png';
import background from './../img/background.png';
import coffee1 from './../img/coffee1.png';
import coffee2 from './../img/coffee2.png';
import coffee3 from './../img/coffee3.png';
import powder from './../img/coffee-powder.png';
import Reviews from '../components/reviews/Reviews';
import How from '../components/how/How';
import Preparation from '../components/preparation/Preparation';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className='main'>
        <div className='home__container'>
          <section>
            <div className='logo__wrapper'>
              <img src={logo} alt="mujo logo" />
            </div>
            <div className='logo__text'>
              <p className='text__stress'>Get more done and stress less</p>
              <p className='text__natural'>All-natural, functional coffee alternative</p>
            </div>
            <div className='background__wrapper'>
              <img className='background' src={background} alt="" />
            </div>
          </section>

          <section className='ritual'>
            <div className='ritual__container'>
              <h1 className='ritual__title'>Your new morning ritual</h1>
              <p className='ritual__text'>Our coffee-like beverages are packed with the most effective bioavailable forms of adaptogens and 1/20th of caffeine content of a cup of coffee.</p>
              <div className='ritual__wrapper'>
                <NavLink to="ingredients" className='ritual__about'>About our Ingredients</NavLink>
                <NavLink to="/shop" className='ritual__buy'>Buy now</NavLink>
              </div>
              <img className='coffee1' src={coffee1} alt="coffee" />
              <img className='coffee2' src={coffee2} alt="coffee" />
            </div>
          </section>

          <section className='ingredients'>
            <div className='ingredients__wrapper'>
              <div className='ingredient'>
                <h3 className='ingredients__title'>NO FUNNY STAFF</h3>
                <p className='ingredients__text'>Researched, tested, and traceable. No added sugars or sneaky sweeteners, “natural” or artificial flavors, and no mycelium biomasses.</p>
              </div>
              <div className='ingredient'>
                <h3 className='ingredients__title'>Premium ingredients only</h3>
                <p className='ingredients__text'>Standardized full-spectrum botanical extracts, potent adaptogens and medicinal mushrooms made 100% from fruiting bodies.</p>
              </div>
              <div className='ingredient'>
                <h3 className='ingredients__title'>Dosed for effectiveness</h3>
                <p className='ingredients__text'>Each of the key eleven ingredients has been dosed for effectiveness to deliver science-backed benefits. Drink consistency for a month to experience the full effects.</p>
              </div>
              <img className='coffee3' src={coffee3} alt="coffee" />
              <img className='powder' src={powder} alt="coffee" />
            </div>
          </section>

          <Benefits />

          <section className='scoop'>
            <div className='scoop__container'>
              <p className='scoop__text-first'>one scoop</p>
              <p className='scoop__text-second'>once a day</p>
            </div>
          </section>

          
          <How />
          <Reviews />
          <Preparation />

          
        </div>
      </main>
    </>
  )
} 

export default Home