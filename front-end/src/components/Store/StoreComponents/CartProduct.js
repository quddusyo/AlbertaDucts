import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getServiceData } from '../serviceStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getServiceData(id);
    const notifyDelete = () => toast("Item has been removed from cart.");
    
    const deleteAll = () => {
        notifyDelete();
        cart.deleteFromCart(id);
    }

    return (
        <div className='cart_product'>
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
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2)}</p>
            <button className='btn btn--danger' onClick={deleteAll}>Remove</button>
            <hr></hr>
        </div>
    )
}

export default CartProduct;