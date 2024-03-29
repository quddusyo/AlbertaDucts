import React, { createContext, useState } from 'react';
import { getServiceData } from './serviceStore';


export const CartContext = createContext({
    items: [],
    getServiceQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});


export function CartProvider({children}) {
    const [cartServices, setCartServices] = useState([]);

    // {id: 1, quantity: 2} data we are working with
    const getServiceQuantity = (id) => {
        const quantity = cartServices.find(service => service.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }
    function addOneToCart(id) {
        /* 
            description: function thats adds one to quantity
            pseudocode:
            get service quantity by id.
            if service is not in cart, set quantity to 1
            else add 1 to the servicequantity.
        */
        const quantity = getServiceQuantity(id);
        if (quantity === 0) { // service is not in cart
            setCartServices(
                [
                    ...cartServices,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // service is in cart
            setCartServices(
                cartServices.map(
                    service =>
                     service.id === id // if condition
                     ? { ...service, quantity: service.quantity + 1} //if statement is true
                     : service  //if statement is false
                )
            )
        }
    }
    
    function removeOneFromCart(id) {
        /* 
        description: 
        removes 1 from quantity from matching id. if it has 1 item, and user removes, deletes full instance.
        pseudocode:
        if quantity equal to 1, remove it from array.
        set cartservices to all items in list except matching id.quantity -1.
        */
        const quantity = getServiceQuantity(id);
        if (quantity === 1) { // if there is 1 item in cart
            deleteFromCart(id);
        } else { // more than 1 item in cart
            setCartServices(
                cartServices.map(
                    service =>
                    service.id === id 
                    ? { ...service, quantity: service.quantity - 1}
                    : service       
                )
            );
        }
    }
    
    function deleteFromCart(id) {
        /* 
        description: 
        deletes entire object from cart.
        pseudocode:
        if object meets a condition, add it to array.
        */
        setCartServices(
            cartServices => cartServices.filter(currentService => {
                return currentService.id !== id;
            })
        )
    }

    function getTotalCost() {
    /*
        description: function that add up all items and multiplies it by their corresponding quanitity
        to return the sum.
        pseudocode: set totalCOst to 0. map through every item in cart services and equal it to its 
        price * quantity.
    */
        let totalCost = 0;
        cartServices.map((cartItem) => {
            const serviceData = getServiceData(cartItem.id);
            return totalCost += (serviceData.price * cartItem.quantity);
        })
        return totalCost;
    }

    const contextValue = {
        items: cartServices,
        getServiceQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// Context (cart, addToCard, removeCart)
// Provider -> gives your React app access to all the things in your context