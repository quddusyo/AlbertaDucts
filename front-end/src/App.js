import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Nav from './components/Nav';
import FooterNav from './components/FooterNav';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Store from './components/Store/pages/Store';
import Success from './components/Store/pages/Success'
import Cancel from './components/Store/pages/Cancel'
import NavbarComponent from './components/Store/StoreComponents/Navbar';
import CartProvider from './components/Store/CartContext';

function App() {
  const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 40) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

  return (
    <CartProvider>
    <Router>
      {showButton && (
        <button className='footer__btn' onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      {/* <Nav /> */}
      <Routes>
        <Route path='/' index element={<><Nav /><Home /></>}/>
        <Route path='services' element={<><Nav /><Services /></>}/>
        <Route path='services/store' element={<><NavbarComponent /><Store /></>}/>
        <Route path='/success' element={<><Nav /><Success /></>}/>
        <Route path='/cancel' element={<><Nav/><Cancel /></>}/>
        <Route path='about' element={<><Nav /><About /></>}/>
        <Route path='contact' element={<><Nav /><Contact /></>}>
        </Route>
      </Routes>
      <FooterNav />
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
