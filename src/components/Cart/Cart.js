import React from 'react';

const Cart = (props) => {
    const {cartItems} = props;
    // console.log(cartItems);
    let totalQuantity = 0;
    let totalPrice = 0;
    for(const cartItem of cartItems){
        if (!cartItem.quantity) {
            cartItem.quantity = 1;
        }
        totalQuantity = totalQuantity + cartItem.quantity;
        totalPrice = (totalPrice + (cartItem.price*cartItem.quantity));
        // totalPrice = totalPrice.toFixed(2); //why not working? 
    }
    const deliveryCost = totalPrice > 100 ? 25 : (totalPrice > 0 ? 15 : 0);
    const tax = ((totalPrice + deliveryCost) * 0.15).toFixed(2);
    const totalCost = parseInt(totalPrice + deliveryCost + tax).toFixed(2);
    // console.log(totalCost);

    // console.log(typeof totalCost);
    return (
        <div>
            <h4>Total Item: {totalQuantity}</h4>
            <p>Price: {totalPrice.toFixed(2)}</p>
            <p>Delivery: {deliveryCost}</p>
            <p>Tax: {tax}</p>
            <p>Total Cost: <strong>$ {totalCost}</strong></p>
        </div>
    );
};

export default Cart;