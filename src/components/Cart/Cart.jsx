import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart;
const {cart} = props;

let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;

for (const product of cart){
    // jodi prothom a product er quantity 0 hoy tahole product 1 dekhabe
    
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
}

const tax = totalPrice*7/100;

const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <hr />
            <p><strong>Selected Items:</strong> {quantity}</p>
            <p><strong>Total Price:</strong> {totalPrice}</p>
            <p><strong>Total Shipping:</strong> ${totalShipping}</p>
            <p><strong>Tax:</strong> ${tax.toFixed(2)}</p>
            <hr />
            <h4><strong>Grand Total:</strong> ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;