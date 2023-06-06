import React from 'react';
import './About.css';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <div className='section__container'>
        <div className='section__title'>
          <h2>about</h2>
        </div>
        <AboutContent />
    </div>
  )
}

export default About