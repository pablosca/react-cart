import React from 'react';

import CartItem from './CartItem';
import './Cart.css';

const PRODUCTS_IN_CART = require('./data/items.json');

const Cart = (props) => (
 <div className="cart">
 	<div className="cart-table">
 		<div className="cart-row cart-heading">
 			<div className="cart-cell cart-product">Product</div>
 			<div className="cart-cell cart-quantity">Quantity</div>
 			<div className="cart-cell cart-price">Price</div>
 		</div>
 		{PRODUCTS_IN_CART.map(item => <CartItem product={item} key={item.id} />)}

 		<div className="promo">
 			<div className="promo-title">
 				<span>10% discount on your order</span>
 				<span>-500 SEK</span>
 			</div>
 			As a first time shopper you get discount on your first order
 		</div>

 		<div className="cart-summary">
 			<div className="cart-discount">Discount <strong>-500 SEK</strong></div>
 			<div className="cart-total">Total <strong>3250 SEK</strong></div>
 		</div>

 		<div className="cart-actions">
 			<a href="#shopping">Continue Shopping</a>
 			<button className="btn">Checkout</button>
 		</div>
 	</div>
 </div>
);

export default Cart;