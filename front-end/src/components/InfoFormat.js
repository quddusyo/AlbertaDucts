import React from 'react'
import './InfoFormat.css'

const InfoFormat = ({ data }) => {
  return (
    <li className='data__container'>
      <div className='data__info'>
        <div className='data__icon__container'>
          {data.img && (
            <img src={data.img} alt='data' />
          )}
        </div>
        <div className='data__info__container'>
          <h2>{data.title}</h2>
          {data.price && (
            <h3>{data.price}</h3>
          )}
          <div className='deco1'></div>
          <div className='deco2'></div>
          <p>{data.description}</p>
        </div>
      </div>
    </li>
  )
}

export default InfoFormat