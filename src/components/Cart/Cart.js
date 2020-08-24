import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    let tax = Number((total / 10).toFixed(2));
    const grandTotoal = total + shipping + tax;
    return (
        <div className="cart-area">
            <h2>Order Summary</h2>
            <h5>Items Ordered: {cart.length}</h5>
            <p><small>Price : {total}</small></p>
            <p> Shipping : {shipping}</p>
            <p>Estimated Tax: {tax}</p>
            <p>Total: {grandTotoal}</p>
        </div>
    );
};

export default Cart;