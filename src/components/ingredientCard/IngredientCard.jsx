import React from 'react';
import './ingredientCard.css'

const IngredientCard = ({ img, title, about, why, origin, id, science  }) => {
  return (
    <>
      <div className='ingredient__item'>
              <h3 className='ingredient__name'>{title}</h3>
              <img className='ingredient__icon' src={img} alt="mushroom" />
              <div className='ingredient__position'>
                <div className='ingredient__about-container'>
                  <p className='ingredient__about'>About the ingredient</p>
                </div>
                <p className='ingredient__answer'>{about}</p>
              </div>
              <div className='ingredient__position'>
                <div className='ingredient__about-container'>
                  <p className='ingredient__about'>Why we use it</p>
                </div> 
                <p className='ingredient__answer'>{why}</p>
              </div>
              <div className='ingredient__position'>
                <div className='ingredient__about-container'>
                  <p className='ingredient__about'>Origin</p>
                </div>
                <p className='ingredient__answer'>{origin}</p>
              </div>
              <div className='ingredient__position'>
                <div className='ingredient__about-container'>
                  <p className='ingredient__about'>Science</p>
                </div>
                <ul className='ingredient__list'>
                  <li className='ingredient__answer'>{science[0]}</li>
                  <li className='ingredient__answer'>{science[1]}</li>
                  <li className='ingredient__answer'>{science[2]}</li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default IngredientCard;