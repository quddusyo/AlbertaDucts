import React from 'react'
import { AboutData } from './AboutData'
import InfoFormat from '../InfoFormat'

const AboutContent = () => {
  return (
    <div className='service__format'>
        {AboutData.map((data, index) => (
            <InfoFormat 
                key={index}
                data = {data}
            />
        ))}
    </div>
  )
}

export default AboutContent