import React from 'react';
import './skeleton.css'

const Skeleton = () => {
  return (
    <>
      <div className='skeleton__container'>
        <div className='skeleton__image skeleton'></div>
        <div className='text__container'>
          <div className='skeleton__text skeleton'></div>
          <div className='skeleton__text skeleton'></div>
          <div className='skeleton__text skeleton'></div>
          <div className='skeleton__text skeleton'></div>
        </div>
      </div>
    </>
  )
}

export default Skeleton