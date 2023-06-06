import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import logo from '../../../assets/logo.png';

const NavbarComponent = () => {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const handleShow = () => {
      if (show === false) {
        handleOpen();
      } else {
        handleClose();
      }
    }

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((res) => {
            return res.json();
        }).then((res) => {
            if(res.url) {
                window.location.assign(res.url); // Forwarding user to Stripe
            }
        });
    }
    const serviceCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return (
        <>
          <div align='center'>
            <a href="/">
              <img src={logo} style={{ padding: '3px' }} alt="logo" />
            </a>
            <button className='btn btn--primary' onClick={handleShow}>Cart ({serviceCount} Items)</button>
          </div>
          {show && (
            <div>
              <div>
                <h3>Online Checkout</h3>
              </div>
              <hr/>
              <div>
                {serviceCount > 0 ? (
                  <>
                    <p>Items in your cart:</p>
                    {cart.items.map((currentService, idx) => (
                      <CartProduct key={idx} id={currentService.id} quantity={currentService.quantity} />
                    ))}
                    <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                    <button className='btn btn--success' onClick={checkout}>
                      Checkout!
                    </button>
                  </>
                ) : (
                  <h1>There are no items in your cart.</h1>
                )}
              </div>
            </div>
          )}
        </>
      );
    };
export default NavbarComponent;