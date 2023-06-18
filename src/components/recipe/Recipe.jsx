import React from 'react';
import recipe from './../../img/recipe.png';
import './recipe.css'

const Recipe = () => {
  return (
    <>
      <div className='recipe__wrapper'>
        <img className='recipe__img' src={recipe} alt="recipe" />
        <h3 className='recipe__name'>Protein Power</h3>
        <div className='recipe__items'>
          <ul className='list__dose'>
            <li className='dose__item'>1 serv.</li>
            <li className='dose__item'>1 scoop</li>
            <li className='dose__item'>1/2</li>
            <li className='dose__item'>1 tsp</li>
            <li className='dose__item'>300 ml</li>
            <li className='dose__item'>1/2 tsp</li>
          </ul>
          <ul className='list__ingredient'>
            <li className='recipe__ingredient'>Whey vanilla protein</li>
            <li className='recipe__ingredient'>Vital Force</li>
            <li className='recipe__ingredient'>Banana</li>
            <li className='recipe__ingredient'>Almond butter</li>
            <li className='recipe__ingredient'>Water or milk</li>
            <li className='recipe__ingredient'>Cinnamon</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Recipe