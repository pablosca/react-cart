import React from 'react';

import './Cart.css';

const Cart = (props) => (
 <div className="cart">
 	<h2 className="cart-title">Your Shopping Cart</h2>
 	<div className="cart-table">
 		<div className="cart-row cart-heading">
 			<div className="cart-cell cart-product">Product</div>
 			<div className="cart-cell cart-quantity">Quantity</div>
 			<div className="cart-cell cart-price">Price</div>
 		</div>
 		<div className="cart-row cart-item">
 			<div className="cart-cell cart-product">
 				<img className="cart-product-image" src="http://via.placeholder.com/156x156" alt="" />
 				<div className="cart-product-info">
 					<span className="cart-product-brand">GAP</span>
 					<h3 className="cart-product-title">Oversize Blazer</h3>
 					<div className="cart-product-options">
 						<span className="swatch"></span>
 						<strong>Black</strong>
 						<span className="cart-product-options-separator"></span>
 						size: <strong>36</strong>
 					</div>
 					<div className="cart-product-actions">
 						<a href="#change">Change</a>
 						<a href="#delete">Delete</a>
 					</div>
 				</div>
 			</div>
 			<div className="cart-cell cart-quantity">
 				<button className="cart-quantity-btn">&minus;</button>
 				<input className="cart-quantity-field" type="number" defaultValue="1" />
 				<button className="cart-quantity-btn">+</button>
 			</div>
 			<div className="cart-cell cart-price"><strong>1750 SEK</strong></div>
 		</div>
 	</div>
 </div>
);

export default Cart;