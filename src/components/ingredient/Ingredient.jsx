import React from 'react';
import './ingredient.css'

const Ingredient = ({ img, title, dose, id  }) => {
  return (
    <>
      <div className='ingredient__container'>
        <img className='ingredient__img' src={img} alt="cacao" />
        <h3 className='ingredient__title'>{title}</h3>
        <span className='ingredient__dose'>{dose}</span>
      </div>
    </>
  )
}

export default Ingredient;