import React, { useState } from 'react'
import './Nav.css'
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleBg, setToggleBg] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setToggleBg(true);
    } else {
      setToggleBg(false)
    }
  };

  window.addEventListener('scroll', changeBackground);
  

return (
  <nav className={toggleBg ? 'navbar active' : 'navbar'} style={toggleNav ? {height: "105vh"} : {height: "160px"}}>
      <div className='nav__innerContainer'>    
          <div className='nav__left'>
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
                <div className='nav__title'>
                    <img src={logo} alt='' />
                </div>
            </a>
          </div>
          <div className='nav__right'>
              <div className='nav__linkContainer'>
                  <div className='nav__item'>
                    <a href='/'>home</a>
                  </div>
                  <div className='nav__item'>
                    <a href='/about'>about</a>
                  </div>
                  <div className='nav__item'>
                    <a href='/services'>services</a>
                  </div>
                  <div className='nav__item'>
                    <a href='/contact'>contact</a>
                  </div>
                  <button className='nav__btn' onClick={() => (setToggleNav(!toggleNav))}>
                      {toggleNav ? <> &#10005; </> : <><FontAwesomeIcon icon={faBars}/></>}
                  </button>
              </div>
          </div>
      </div>
      { toggleNav && (
          <div className='nav__extendedContainer'>
              <div className='link__extended'>
                <a href='/' className='a__nostyle' onClick={() => (setToggleNav(false))}>home</a>
              </div>
              <div className='link__extended'>
                <a href='/about' className='a__nostyle' onClick={() => (setToggleNav(false))}>about</a>
              </div>
              <div className='link__extended'>
                <a href='/services' className='a__nostyle' onClick={() => (setToggleNav(false))}>services</a>
              </div>
              <div className='link__extended'>
                <a href='/contact' className='a__nostyle' onClick={() => (setToggleNav(false))}>contact</a>
              </div>
          </div>
      )}
  </nav>
)}

export default Nav