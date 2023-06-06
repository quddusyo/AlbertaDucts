import React from 'react';
import './FooterNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import whiteLogo from '../assets/logo_white.png';

const FooterNav = () => {
  return (
    <div className='footerNav__container'>
        <div className='col'>
            <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
                <div className='footerNav__logo'>
                    <img src={whiteLogo} alt='' />
                </div>
            </a>
            <div className='footerNav__address'>
                <p>Based in Calgary Alberta<br/><br/><strong>Contact Us</strong><br/><strong>Email: </strong><a className='link' href='mailTo: ysf.contractors@gmail.com'>ysf.contractors@gmail.com</a><br/><strong>Phone: </strong><a className='link' href='Tel: +14034972411'>+14034972411</a></p>
            </div>
        </div>
        <div className='col'>
            <div className='footerNav__links'>
                <h2 className='footerNav__h2'>useful links</h2>
                <ul>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/'>Home</a>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle ' href='/services'>our services</a>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/about'>about us</a>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/contact'>contact & book</a>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services/store'>online store</a>
                    </li>
                </ul>
             </div>
        </div>
        
        <div className='col'>
            <div className='footerNav__links'>
                <h2 className='footerNav__h2'>our services</h2>
                <ul>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>furnace cleaning</a>
                    </li>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>duct cleaning</a>
                    </li>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>dryer vent</a>
                    </li>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>sanitization & disinfection</a>
                    </li>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>brushing</a>
                    </li>
                    <li className='services__container'>
                        <span>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        <a className='a__nostyle' href='/services'>cold-air return</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterNav