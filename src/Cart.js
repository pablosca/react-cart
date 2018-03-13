import React from 'react';

import CartItem from './CartItem';
import './Cart.css';

const PRODUCTS_IN_CART = [
	{
		id: 0,
		image: 'http://via.placeholder.com/156x156',
		brand: 'GAP',
		name: 'Oversize Blazer',
		options: {
			color: 'black',
			size: 36
		},
		price: 1750
	},
	{
		id: 1,
		image: 'http://via.placeholder.com/156x156',
		brand: 'Zara',
		name: 'Classic Jeans',
		options: {
			color: 'green',
			size: 34
		},
		price: 2000
	}
];

const Cart = (props) => (
 <div className="cart">
 	<div className="cart-table">
 		<div className="cart-row cart-heading">
 			<div className="cart-cell cart-product">Product</div>
 			<div className="cart-cell cart-quantity">Quantity</div>
 			<div className="cart-cell cart-price">Price</div>
 		</div>
 		{PRODUCTS_IN_CART.map(item => <CartItem product={item} key={item.id} />)}
 	</div>
 </div>
);

export default Cart;