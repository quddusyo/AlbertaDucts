import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ServiceCard.css';


const ServiceCard = (props) => { // props.service is the service we are selling
  const service = props.service; // prop drilling services to ServiceCard component 
  const cart = useContext(CartContext);
  const serviceQuantity = cart.getServiceQuantity(service.id);
  const notifyAdd = () => toast("Item has been added to cart.");
  const notifyDelete = () => toast("Item has been removed from cart.");
  const deleteAll = () => {
    cart.deleteFromCart(service.id)
    notifyDelete();
  }
  const addOne = () => {
    cart.addOneToCart(service.id);
    notifyAdd();
  }

  return (
    <div className='service-card-container'>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <h2>{service.title}</h2>
      <p>${service.price} + GST</p>
      <div className='service-card-img-container'>
        <img src={service.img_url} alt={service.title} />
      </div>
      {serviceQuantity > 0 ? (
        <div>
          <label>In Cart: {serviceQuantity}</label>
          <div>
            <button className='btn' onClick={addOne}>+</button>
            <button className='btn' onClick={() => cart.removeOneFromCart(service.id)}>-</button>
            {serviceQuantity > 0 && (
              <button className='btn btn--danger' onClick={deleteAll}>
                Remove
              </button>
            )}
          </div>
        </div>
      ) : (
        <button className='btn btn--secondary' onClick={addOne}>
          Add To Cart
        </button>
      )}
    </div>
)};

export default ServiceCard;