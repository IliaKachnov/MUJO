import { useState } from 'react';
import './../styles/product.css';
import Benefits from '../components/benefits/Benefits';
import Reviews from '../components/reviews/Reviews';
import Ingredient from '../components/ingredient/Ingredient';
import { ingredients, accordionData } from '../helpers/allData';
import coffeeBox from './../img/coffeeBox.png';
import coffee from './../img/coffee1.png';
import coffee2 from './../img/coffee2.png';
import Recipe from '../components/recipe/Recipe';
import Accordion from '../components/accordion/Accordion';
import { NavLink } from 'react-router-dom';




const Product = () => {
  const [notify, setNotify] = useState(false);
  const [select, setSelect] = useState(false);
  
  const [mainImg, setMainImg] = useState(coffeeBox);

  const changeImg = (src) => setMainImg(src);


  const selectOrder = () => { 
    setSelect(!select);
  };

  const showNotify = () => {
    setNotify(!notify);
  };
  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart</p>
      </div>
      <main className='main'>
          <div className='intro__container'>
            <div className='intro__images'>
              <div className='intro__big-img'>
                <img className='intro__img' src={mainImg} alt='coffee' />
              </div>
              <div className='intro__sm-img-container'>
                <div onMouseEnter={() => changeImg(coffeeBox)} className='intro__img-container'><img className='intro__small-img' src={coffeeBox} alt="coffee" /></div>
                <div onMouseEnter={() => changeImg(coffee)} className='intro__img-container'><img className='intro__small-img' src={coffee} alt="coffee" /></div>
                <div onMouseEnter={() => changeImg(coffee2)} className='intro__img-container'><img  className='intro__small-img' src={coffee2} alt="coffee" /></div>
              </div>
            </div>

            <div className='details__container'>
              <h1 className='intro__title'>Vitality brew</h1>
              <span className='intro__subtitle'>Functional coffee alternative</span>
              <p className='intro__text'>Vital Force by mujo™ is a coffee-like beverage packed with the most effective bioavailable forms of adaptogens and 1/20th of caffeine content of a cup of coffee.</p>
              <div>
                <p className='intro__select'>SELECT YOUR ORDER</p>
                <div onClick={() => {selectOrder()}} className={`subscription__container ${select ? "selected" : ""}`}>
                  <div className='subscription__wrapper'>
                    <p className='intro__subscription'>SUBSCRIPTION</p>
                    <p className='subscription__servings'>30 servings per mounth</p>
                  </div>
                  <div className='subscription__inner'>
                    <p className='intro__subscription'>$59.00</p>
                    <p className='subscription__servings'>1,90$/serving</p>
                  </div>
                </div>
                <div className='subscription__container'>
                  <div className='subscription__wrapper'>
                    <p className='intro__subscription'>One time purchase</p>
                    <p className='subscription__servings'>30 servings</p>
                  </div>
                  <div className='subscription__inner'>
                    <p className='intro__subscription'>$59.00</p>
                    <p className='subscription__servings'>1,90$/serving</p>
                  </div>
                </div>
              </div>
              <p className='subscription__shipping'>Free shipping in the US.  </p>
              <button onClick={showNotify} className='btn__add-to-cart'>Add to cart - $ 59.00</button>
              <div className='accordion__container'>
                <Accordion sections={accordionData}/>
              </div>
              <div>

              </div>
            </div>
          </div>

        <Benefits />
        <section className='scoop'>
            <div className='scoop__container'>
              <p className='scoop__text-first'>Premium quality</p>
              <p className='scoop__text-second'>ingredients only</p>
            </div>
          </section>

          <section className='ingredients'>
            <div className='ingredients__container'>
              {ingredients.map((ingredient) => {
                return (
                  <Ingredient key={ingredient.id} title={ingredient.title} dose={ingredient.dose} img={ingredient.img} />
                )
              })}
            </div>
            <div className='ingredients__btn-container'>
              <NavLink className='ingredients__btnAbout' to="/ingredients">More about our ingredients</NavLink>
              
            </div>
          </section>
          <Reviews />

          <section className='about'>
            <div className='about__container'>
              <div className='about__text-container'>
                <h2 className='about__title'>Sustainably sourced, packaged and delivered</h2>
                <p className='about__text'>A more mindful and cleaner world is the mission of our company, and we aim to align all of our decisions with our values. We use compostable packaging materials, including FSC paper, and water and soy based ink to minimize our impact on the planet.</p>
              </div>
              <div className='about__images-container'>
                <div className='about__image-container'>
                  <img className='about__image' src={coffeeBox} alt="coffeeBox" />
                  <span className='about__welcome'>Welcome package</span>
                  <span className='about__period'>MONTH 1</span>
                  <ul className='about__list'>
                    <li className='about__item'>Stainless steel tin</li>
                    <li className='about__item'>Rechargeable fother</li>
                    <li className='about__item'>30 servings of Brain force in pouch</li>
                  </ul>
                </div>
                <div className='about__image-container'>
                  <img className='about__image' src={coffee} alt="coffeeBox" />
                  <span className='about__welcome'>Refill</span>
                  <span className='about__period'>MONTH 2</span>
                  <ul className='about__list'>
                    <li className='about__item'>30 servings of Brain force in pouchn</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className='recipes'>
            <div className='recipes__container'>
              <h2 className='recipe__title'>Delicious recipe ideas</h2>
              <div className='recipe__container'>
                <Recipe />
                <Recipe />
                <Recipe />
              </div>
            </div>
          </section>
      </main>
    </>
  )
}

export default Product