import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getServiceData } from '../serviceStore';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getServiceData(id);

    return (
        <div className='cart_product'>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <button className='btn btn--danger' onClick={() => cart.deleteFromCart(id)}>Remove</button>
            <hr></hr>
        </div>
    )
}

export default CartProduct;